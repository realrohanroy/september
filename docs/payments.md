# payments.md

The definitive Razorpay integration spec. Read this in full before touching `app/give/**`, `app/api/webhooks/**`, or anything in `lib/payments/**`. `docs/brief.md` sections 5.3 and 7 give the product framing; this file gives the implementation contract, and where the two disagree, this file wins.

---

## 1. The one decision that fixes your compliance burden

**All card and UPI entry happens inside Razorpay's own hosted Checkout (`checkout.js`) or a Razorpay-hosted Payment Page. Never build a custom card number, expiry, or CVV field.**

Card data then never touches September's server at any point. That keeps PCI DSS scope at **SAQ A**, the lightest self-assessment tier, because you never handle, transmit, or store cardholder data yourself. Building even a nicely designed custom card form moves the whole site into SAQ D, which requires a compliance program neither of us is set up to run. This is not a UX preference, it is the load-bearing decision that makes this project safe for a solo developer to ship. It is a non-negotiable in `AGENTS.md` 3.2 for exactly this reason.

UPI intent (deep link into GPay, PhonePe, Paytm) on mobile and UPI QR on desktop both come free inside the same hosted Checkout, so there is no separate UPI integration to build.

---

## 2. Order flow — server decides the amount, always

The client never gets to determine what actually gets charged.

```
donor picks cause + amount (+ frequency, sankalp, contact)
        │
        ▼
POST /api/donations/create-order
{ cause_id, amount_paise, frequency, sankalp?, name, contact, idempotency_key }
        │
        ▼  server:
1. validate amount_paise (bounds check; if a preset unit was
   selected, must match a value from cause_units — "Other" custom
   amounts are allowed within a min/max range, not unlimited)
2. look up or create the donor record
3. insert a `donations` row, status = 'created'
4. call Razorpay Orders API with that exact amount_paise
5. store the returned razorpay order_id on the donation row
        │
        ▼
return { order_id, key_id, amount_paise } to the client
        │
        ▼
client opens Checkout.js with order_id — this is the only
place RAZORPAY_KEY_ID is used, and it is the only Razorpay
value that may exist in client-reachable code
```

`idempotency_key` is a UUID the client generates once per checkout attempt (held in memory / `sessionStorage` for that attempt only, never `localStorage` across sessions) and sends with the create-order call. If the same key arrives twice — a doubled request before the button's `pending` state disables it — the server returns the existing order rather than creating a second one.

The donation is **never** marked `captured` by anything that happens in this flow. Everything above only gets you to `status = 'created'`. Capture happens in section 3, and only there.

---

## 3. Webhook events — the full list, not just the two in the original brief

`docs/brief.md` named `payment.captured` and `subscription.charged`. That is not the complete set a production integration needs to subscribe to and handle:

| Event | Handler does |
|---|---|
| `payment.captured` | Mark the donation `captured`. Trigger receipt generation and the WhatsApp/email send. This is the only path that produces a receipt. |
| `payment.failed` | Mark the donation `failed`. No receipt. Log for the admin, no donor-facing follow-up needed. |
| `order.paid` | Redundant confirmation of the above. Safe to ignore if `payment.captured` is already handled; do not build separate logic that could disagree with it. |
| `subscription.charged` | Creates a **new** `donations` row for that cycle, through the same receipt pipeline as a one-time gift. A subscription charge is not a balance increment on an existing row. |
| `subscription.cancelled` | Update subscription status. **This can be triggered by the donor cancelling from inside their UPI app directly**, with no interaction on your site at all. The webhook is the source of truth for mandate status, never your app's own cancel button state. |
| `subscription.halted` | UPI Autopay mandates halt after repeated charge failures. Surface this to the admin dashboard and, ideally, notify the donor — a silently halted mandate that nobody notices is a slow leak in recurring revenue. |
| `refund.processed` | Update the donation's status. If the donation falls in a week that is already published in the Khata, this requires a `correction` ledger entry per `AGENTS.md` 3.1 — never a silent edit to a published number. |

**Signature verification, exactly:**

- Verify using `RAZORPAY_WEBHOOK_SECRET` — a value distinct from the API key secret, generated separately in the Razorpay dashboard's webhook settings.
- HMAC-SHA256 over the **raw** request body. In the Next.js App Router, read the body with `await req.text()` and verify against that raw string before any JSON parsing happens. If a body-parsing middleware runs ahead of this route and re-serializes the payload, the signature check will fail against a body that no longer byte-for-byte matches what Razorpay signed. This is the single most common webhook bug in this kind of integration.
- Store every verified payload, raw, in a `payment_events` table (`id, razorpay_event_id, event_type, payload_json, received_at, processed_at, error`) before running any business logic on it. If processing fails partway, you can replay from your own data instead of only from Razorpay's dashboard, which does not keep events forever.
- Every handler is idempotent on Razorpay's event id or payment id. Razorpay retries a webhook on any non-2xx response, so duplicate delivery is expected behaviour, not an edge case.

---

## 4. Refunds

A refund is issued through an admin action that calls Razorpay's Refunds API. Per `AGENTS.md` section 9, anything that moves money requires the human approval gate — a refund button is not an exception, and it does not mark the donation refunded optimistically on click. The `refund.processed` webhook is what actually flips the status, same as capture.

The refund *policy* itself (what qualifies — duplicate charge, proven error, and how far back) is a decision for September and their CA, not an engineering one. `/legal/refund` states whatever that policy turns out to be; do not invent a policy to fill the page.

---

## 5. Subscriptions and UPI Autopay

- Created through Razorpay's Subscriptions API with UPI Autopay e-mandate registration, backing the `/your-date` feature in `docs/brief.md` 5.6.
- AFA (additional factor of authentication) thresholds and pre-debit notification timing for UPI Autopay are set by NPCI/RBI circulars that have changed more than once. Check the current rules at build time — do not implement against what is written here or in the brief, both may be stale by the time this is built.
- Cancellation must be reachable in one tap from the WhatsApp reminder sent ahead of each charge. The mandate's real status is only ever trusted from a Razorpay webhook, never from local application state, per the `subscription.cancelled` row above.

---

## 6. Keys, secrets, and environments

| Variable | Where it lives | Notes |
|---|---|---|
| `RAZORPAY_KEY_ID` | Client-reachable | The only Razorpay value permitted in client bundle code. Used only to open Checkout.js. |
| `RAZORPAY_KEY_SECRET` | Server-only | Orders and Refunds API calls. Never logged, never in a walkthrough screenshot, never in an error message shown to a user. |
| `RAZORPAY_WEBHOOK_SECRET` | Server-only | Distinct secret, webhook signature verification only. Do not reuse `KEY_SECRET` for this. |

Test-mode and live-mode key sets are separate per environment (local, staging, production). Never point a staging deploy at live keys "just to check something", and never commit a real value of any of the three — `.env.example` lists the variable names with placeholder text only, and is the only env file that goes into version control.

---

## 7. The API surface

The complete list of custom routes this integration needs. If an agent is about to add a route not on this list, that's a sign to check this file again before proceeding, not to just add it.

- `POST /api/donations/create-order` — public, rate-limited (`docs/production-scaffold.md` A.3), section 2 above.
- `POST /api/webhooks/razorpay` — public in the sense that Razorpay calls it with no session; protected entirely by signature verification, not by auth. Section 3 above.
- `GET /api/receipts/[id]` — public, rate-limited, unguessable 22-character id per `docs/brief.md` section 7.
- `POST /api/admin/ledger/publish`, `POST /api/admin/ledger/correct` — authenticated admin only, gated per `AGENTS.md` section 9. See `docs/brief.md` section 6.2 for the workflow these back.
- `POST /api/admin/refunds/[donationId]` — authenticated admin only, human-approved, section 4 above.

---

## 8. Explicitly out of scope for v1

- **Razorpay Route** (split settlements across multiple accounts) — not needed, September is the sole beneficiary of every donation.
- **Smart Collect / virtual accounts** — this donation model doesn't need per-donor virtual bank accounts.
- **Magic Checkout / saved payment methods** — could genuinely help conversion for repeat donors. Worth evaluating once the core flow is live, but verify current availability and fit at that time; adding it changes the checkout route's client JS budget and needs its own review against `docs/tokens.md` and the 60KB limit in `AGENTS.md` 7.2.