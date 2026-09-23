# September — Design & Build Brief

A single source of truth for the donation site. Drop this at `docs/brief.md` in the repo and point your agents at it.

---

## 0. How to use this file

This brief is written so an agent can read it and make decisions without asking you. Three rules for the repo:

1. This file is the **why**. `docs/tokens.md` is the **what** (exact values). `AGENTS.md` is the **how** (constraints agents must never break).
2. Anything an agent invents that is not traceable to one of those three files gets rejected in review.
3. When you disagree with something here, edit this file first, then re-run the agent. Never argue with the agent in chat and leave the file stale.

---

## 1. Strategic frame

### 1.1 The real problem

September collects money for two worlds that almost never share a website:

- **Welfare seva**: food, education, old age homes, disaster relief. Donors here are mostly urban, English-first, want impact metrics, want 80G, compare you against Goonj and Akshaya Patra.
- **Dharmic seva**: gau seva, temple repair, ghat cleaning. Donors here give on specific days, give in the name of a person (living or departed), give amounts ending in 1, and care about sankalp and continuity more than about metrics.

Most Indian NGO sites pick a lane. The dharmic ones go saffron, ornate, cluttered, and look untrustworthy to a corporate donor. The welfare ones go corporate-teal with stock photos of smiling children and feel hollow to a temple donor.

**The resolution, and the single idea the whole design hangs on:** September is not a charity brand, it is an *account keeper*. Both donor types are giving money to a stranger and hoping it lands. What both actually want is proof. So the site's visual identity, its hero, its structure, and its differentiator are all built on the metaphor of a **khata**, the bound book of accounts an Indian household or shop has kept forever.

This is why the transparency section is not a widget buried under the fold. It *is* the site. Everything else hangs off it.

### 1.2 Positioning line (use as the actual hero copy, not as a tagline)

> We publish our book. Every rupee that comes in, every rupee that goes out, updated every Sunday.

### 1.3 Audiences, in priority order

| # | Segment | Trigger | What closes them |
|---|---|---|---|
| 1 | Repeat small donors, ₹101 to ₹1,100 | WhatsApp forward, festival day, a death anniversary | Speed, UPI, a name field, a receipt on WhatsApp in 30 seconds |
| 2 | Mid donors, ₹2,100 to ₹25,000 | Searched a cause, or referred | Proof of last quarter's spend, 80G, named unit costs |
| 3 | Monthly givers | Converted from #1 or #2 after first gift | A date they choose, easy cancellation shown upfront |
| 4 | CSR and institutional | Compliance team is screening you | CSR-1, audited statements, registration numbers, a real address, a named person |
| 5 | NRI donors | Family or festival | Honest FCRA status. Do not accept foreign funds without FCRA, say so plainly |

### 1.4 What we are explicitly not building

- No infinite scroll of stock photography
- No "Our Impact" section with three animated counters and no source
- No hero carousel
- No newsletter popup on load
- No chatbot
- No testimonial carousel of beneficiaries thanking donors. It reads as extraction. Use dated field notes instead
- No gradient anything

---

## 2. Brand

### 2.1 Name

"September" is a month. Lean into that instead of apologising for it. It gives you a recurring-giving device that no other Indian NGO has: giving tied to a **date**, not an amount. Indian donors already do this (ekadashi, amavasya, a punya tithi, a birthday). The product feature that falls out of the name is in section 5.6.

Wordmark: set in the display serif, lowercase, no icon, no leaf, no hands, no heart. If you need a mark, use a single ruled line under the word, the same hairline that runs through the whole site. That is the identity.

### 2.2 Voice

- Plain verbs, sentence case, short sentences.
- Never plead. Never guilt. State the need with a number and a place.
- Name dates and districts. "Kitchen at Sabarmati, 412 plates, week of 14 Sep" beats "transforming lives".
- Admit gaps. "We are short ₹38,000 for this month's kitchen" converts better than "Donate now" because it is specific and falsifiable.
- Bilingual where it matters: donation flow, receipts, ledger labels in English + Hindi. Not the whole site. Half-translated sites feel worse than English-only ones.

### 2.3 Rename the generic sections

Generic labels are half the slop. Use these:

| Generic | Use instead |
|---|---|
| Transparency / Impact | **The Khata** |
| How it works | **Follow the rupee** |
| Urgent needs | **The gap** |
| Gallery | **Field notes** |
| Monthly giving | **Your date** |
| Testimonials | Delete |
| About us | **Who is accountable** |

---

## 3. Visual system

### 3.1 Colour

Anchor: a ledger page. Not cream, not warm clay. Real Indian ruled account paper is a cool, slightly green-grey white, printed with blue rules and red column lines, stamped in violet ink.

```css
--paper:    #F4F5F0;  /* page. cool green-grey, not cream */
--card:     #FBFBF8;  /* raised surface, barely lighter */
--ink:      #1B2440;  /* indigo-black. all text. chromatic, never #111 */
--rule:     #C7CBBE;  /* hairlines, table rules, dividers */
--sindoor:  #AE3327;  /* primary action + the "deployed" column only */
--haldi:    #C8930E;  /* "received, not yet deployed" state only */
```

Reasoning, in case an agent asks:

- **Paper over white** because the ledger metaphor needs a surface, and because pure `#FFF` on a low-end Android at full brightness in daylight is fatiguing.
- **Indigo-black over neutral black** because near-blacks like `#111` are the tell of a template. This one has a hue and reads as ink.
- **Sindoor as the action colour** is a deliberate risk. Red is normally an error colour in western systems, but in the Indian donation context (vermilion, auspicious, the red-cloth khata binding) it is the most native possible CTA, and red CTAs convert well here. Hard rule: sindoor is used for the donate button, the deployed column, and nothing else. If it appears in an illustration or a border, it stops meaning anything.
- **Haldi** exists for one job: the amount that has arrived but has not yet reached the ground. Giving that state its own colour is the honesty of the whole site made visible.
- **No success green, no info blue.** Confirmation is carried by ink weight and a check glyph, not by a green chip. Six values total. Do not add a seventh.

Dark mode: skip it for v1. The brief says light. A ledger has no dark mode. Respect `prefers-color-scheme` only to the extent of not breaking.

### 3.2 Type

Three faces, each with a non-negotiable job.

| Role | Face | Why |
|---|---|---|
| Display / headings | **Martel** (700, 800) | Serif designed for Devanagari first, by an Indian foundry, with a matching Latin. It gives headings the authority of a printed account heading instead of the look of a startup landing page. Handles `सितंबर` natively when you add Hindi. |
| Text / UI | **Hind** (400, 500, 600) | Ek Type, built for screen UI across Devanagari and Latin, holds up at 14px on cheap Android. Not Inter, which is the default everyone reaches for. |
| Ledger numerals only | **IBM Plex Mono** (400, 500), tabular figures | Monospace as decoration is a template tell. Monospace in an actual column of rupee figures that must align across rows is the correct engineering choice. Confine it to `.khata table td.num` and receipt numbers. Never use it for labels or eyebrows. |

Scale (1.25 minor third, 16px base, clamp for fluid):

```
display   clamp(2.6rem, 6vw, 4.25rem)  Martel 800, -0.02em, lh 1.05
h1        2.25rem  Martel 700, lh 1.15
h2        1.75rem  Martel 700, lh 1.2
h3        1.25rem  Hind 600, lh 1.3
body      1rem     Hind 400, lh 1.6, max 68ch
small     0.875rem Hind 400, lh 1.5
num       1rem     Plex Mono 500, tnum, lh 1.4
```

Typographic bans for this project:
- No ALL CAPS labels anywhere, including nav and buttons.
- No accenting one word of a headline in a different colour or italic.
- No eyebrow labels above headings.
- No `→` glyph appended to link or button text.
- No `·` separated meta strings.

### 3.3 Layout: the ruled page

The signature structural device, and the one thing that makes this site recognisable:

A **24px baseline rule**. A repeating `repeating-linear-gradient` hairline in `--rule` at 24px intervals, running edge to edge behind the page content at about 35% opacity, visible on the home page, the Khata, and cause pages. All type sits *on* those rules. All section padding is a multiple of 24.

This is not decoration. It encodes the accounting idea structurally, it forces vertical rhythm discipline on every agent that touches the layout, and it makes any misaligned element visually obvious during review. It is also nearly impossible to produce by accident, so it cannot read as generated.

Rules for it:
- Behind content, never above. `z-index` 0, content at 1.
- Fades out inside cards, forms, and the checkout. Forms are "loose sheets", they sit above the ruled page on `--card` with a 1px `--rule` border and no shadow.
- Disabled entirely under `prefers-reduced-transparency` and on print.

Grid: 12 column, 1200px max, 24px gutters, 20px side padding on mobile. Everything left-aligned. Nothing centred except the checkout column and the footer registration block. Centred text is the default pose of a generic NGO site and we are not using it.

Radius and elevation:
- Radius: `2px` on inputs and buttons, `0` on cards and tables, `50%` on avatars. That is the whole scale. A single 12px radius on everything is the SaaS-kit tell.
- Shadow: exactly one, `0 1px 0 var(--rule)`, which is a rule, not a shadow. Modals and the sticky mobile donate bar get `0 -1px 0 var(--rule)`. No `rgba(0,0,0,.1)` blur anywhere in the codebase. Put this in the lint.

### 3.4 Motion

One orchestrated moment on the site, and it belongs to the Khata: when the ledger table first enters the viewport, the rupee figures count up from zero to their real value over 700ms, once, with `prefers-reduced-motion` honoured. That is it.

Everything else is response-only: focus rings, input states, the donate button's pressed state, accordion open, the amount chip selecting. No fade-and-slide-up on every section. No hover lift on every card.

### 3.5 Icons and illustration

- Icons: one set, line, 1.5px stroke, 20px grid. Lucide is fine because you will restyle stroke and size. Maximum eight icons across the entire site. If you need a ninth, you are decorating.
- No illustration system. No 3D blobs, no flat-vector people, no hand-drawn doodles. The visual richness comes from real photographs and from type.
- Cause icons: do not use a cow emoji or a generic temple glyph. Use a single letterform badge or nothing. A poor icon is worse than no icon.

### 3.6 Photography rules (this is where slop actually enters)

- Zero stock photography. Not one image. If September does not have a photo of a thing, that thing gets a text block, not a purchased image.
- Every published photo carries a caption in this exact form: `Place, district. DD Mon YYYY.` No caption, no publish.
- Shoot rules for the NGO team: daylight, no flash, phone is fine, landscape, hands and work in frame, faces only with consent, never a photo whose subject is someone's poverty.
- No filters, no duotone overlay, no colour grading toward the brand palette. The rawness is the credibility.
- Treatment: full-bleed or column-width, square-cornered, 1px `--rule` border, caption directly below in `small`.
- One hero photograph on the home page, changed weekly along with the ledger. If there is no new photo this week, the slot shows last week's with its real date. Do not backfill.

### 3.7 Anti-slop checklist (put this verbatim in `AGENTS.md`)

Reject any build that contains:

- [ ] A gradient of any kind, including subtle background washes
- [ ] Glassmorphism, blur backdrops, or translucent cards
- [ ] More than one border-radius value on rectangular surfaces
- [ ] Any `box-shadow` with a blur radius
- [ ] A hero that is centred text + two buttons + a floating device mockup
- [ ] Animated counters outside the Khata
- [ ] A "Trusted by" logo strip
- [ ] Emoji used as UI icons
- [ ] Bento grid layout
- [ ] Any hex value not in `tokens.css`
- [ ] Inter, Poppins, Montserrat, or Roboto anywhere
- [ ] Copy containing: transforming lives, making a difference, together we can, join us in our mission, empowering communities, be the change
- [ ] Any beneficiary photo without a place and date caption
- [ ] A testimonial carousel
- [ ] Lorem ipsum in a committed file

---

## 4. Information architecture

```
/                           Home
/causes                     All causes, filterable
/causes/[slug]              Single cause
/khata                      The ledger (the transparency core)
/khata/[week]               A single week's entry, permalinked and shareable
/give                       Checkout (also reachable as /give?cause=gau-seva&amount=501)
/give/thanks/[id]           Confirmation + receipt + monthly upgrade
/receipt/[id]               Public receipt, no login, unguessable id
/your-date                  Monthly giving, date-based
/field-notes                Dated updates, filterable by cause
/field-notes/[slug]         Single note
/who                        Who is accountable: people, trust deed, registrations
/reports                    Annual reports, audited statements, 10BD filings
/csr                        Corporate and CSR giving
/in-kind                    Non-cash donation (grain, books, medicines)
/volunteer
/faq
/contact
/legal/refund               Mandatory for the payment gateway
/legal/privacy
/legal/terms
/legal/grievance            Named grievance officer, required
```

Nav (max six items, no dropdowns): Causes · The Khata · Field notes · Who · Give (button)

Footer carries the compliance block: registered name, trust registration number, 12A, 80G, CSR-1, Darpan ID, PAN of the trust, registered address, landline or mobile, grievance officer name and email. This block is not small print. Set it at `small`, full contrast, in the footer's first column. It is a conversion asset.

---

## 5. Page specs, with the sections that are actually unique

### 5.1 Home, section by section

**1. Hero = this week's ledger line**

Not a photo with overlaid text. The hero is a typeset ledger entry, the single most characteristic object in September's world:

```
┌────────────────────────────────────────────────────────────┐
│  We publish our book.                                      │
│  Every rupee in, every rupee out, updated every Sunday.    │
│                                                            │
│  Week 38  ·  14–20 Sep 2026            [ Give ]            │
│  ─────────────────────────────────────────────────────     │
│  Received          ₹  4,18,210                             │
│  Deployed          ₹  3,86,000                             │
│  Not yet deployed  ₹    32,210                             │
│  ─────────────────────────────────────────────────────     │
│  Full book →  (link, no arrow glyph: "Open the full book") │
└────────────────────────────────────────────────────────────┘
```

Left column: the statement + the ledger block. Right column: this week's single photograph with its caption. On mobile the ledger comes first, photo second.

Why this works as a hero: it is the proof and the offer in the same frame, it is impossible to fake, and it makes the donate button an answer to something the visitor just read rather than a demand.

**2. The gap** *(unique section)*

Three to five live shortfall lines, ordered by urgency. Each is one row:

`Kitchen, Sabarmati · needs ₹38,000 this month · ₹22,400 in · [ Cover part of this ]`

With a thin progress rule in `--rule` filled `--ink`. Honest, specific, falsifiable, and it converts because the ask is bounded. When a gap closes, the row stays for 48 hours marked "covered on 19 Sep" before it drops off. Showing closure is as persuasive as showing need.

**3. Causes, priced in units** *(unique treatment)*

Never show a cause card with a photo, a title, and a "Donate" button. Show the **unit economics**:

```
Gau seva
₹51   one cow, one day
₹351  one cow, one week
₹1,500 one cow, one month
                                    [ Give ₹351 ]
```

Every cause gets real units. Draft set, replace with September's actuals:

| Cause | Unit | Amount |
|---|---|---|
| Food | one plate | ₹35 |
| Food | one family's ration, one week | ₹850 |
| Education | one child's books, one year | ₹1,100 |
| Education | one month of a teacher's honorarium | ₹6,500 |
| Old age home | one resident, one day | ₹180 |
| Gau seva | one cow, one day | ₹51 |
| Temple repair | one sq ft of flooring | ₹450 |
| Ghat cleaning | one worker, one day | ₹520 |
| Disaster relief | one relief kit | ₹1,250 |

Unit pricing raises average gift because it reframes the question from "how much can I spare" to "how much do I want to cover". It is also the single easiest thing to verify in the Khata, which closes the loop.

**4. Follow the rupee** *(unique section)*

A horizontal band, one line of ₹100 broken into segments with widths proportional to the real split:

`₹100 given → ₹2.10 payment gateway → ₹6 operations → ₹91.90 to the ground`

Rendered as a single 1px-bordered bar divided into segments with figures beneath in Plex Mono. No pie chart. No donut. A pie chart of three values is decoration; a proportional bar is the data.

Put the real numbers in, including the unflattering ones. If operations cost is 12%, say 12%. A site that admits 12% is more believable than one claiming 100% to the ground.

**5. Your date** *(unique section, the name feature)*

See 5.6.

**6. Field notes strip**

Three most recent dated notes, headline + place + date. No excerpt cards with read-more links. Just the lines.

**7. Accountability block**

Photo of the actual trustees (not a grid of circles, a single group photo with names under it), trust deed download, registration numbers, last audited statement, and the bank account the donations land in. Publishing the account number sounds alarming and is in fact standard for Indian temple trusts and increases trust sharply. Confirm with September's CA before doing it.

### 5.2 `/khata` — the transparency core

This is the page the whole site exists to support, so it gets the most design attention and the least decoration.

**Principles**

1. Two different kinds of truth, visually separated. **Received** is machine truth, it comes straight from the payments table and needs no human. **Deployed** is human truth, entered manually every Sunday. Never blend them into one number. The difference between them is `Not yet deployed`, shown in `--haldi`, and it is a feature.
2. **Append-only.** A ledger entry is never edited. A mistake is corrected by a new entry of type `correction` that references the original, and both stay visible. Publishing your corrections is a stronger trust signal than never appearing to make mistakes.
3. **Missed weeks are shown, not hidden.** If nobody updated on Sunday, the page shows `Week 39 · no entry filed` in muted ink. An unbroken chain of perfect weeks looks fabricated.
4. **Everything permalinks.** `/khata/2026-w38` is a shareable page. Donors forward these on WhatsApp. That is free distribution.

**Layout**

Top: a summary strip, lifetime figures, in Plex Mono, with a `Last updated: Sunday 20 Sep 2026, 6:40 PM` stamp directly beneath it in `small`. The stamp is as important as the numbers.

Then a year selector, then the table. Actual table markup, not divs, so it is screen-reader navigable and copy-pasteable into a spreadsheet:

```
Week   Dates        Cause          Received   Deployed   Where                     Proof
38     14–20 Sep    Food           1,12,400   1,04,000   Sabarmati kitchen         3 photos, 2 bills
38     14–20 Sep    Gau seva         86,200     86,200   Goshala, Dholka           2 photos, 1 bill
38     14–20 Sep    Temple repair  1,40,000    96,000    Ranchhodji, Dakor         1 photo, 1 quote
38     14–20 Sep    Unallocated      79,610          0   held                      —
```

Row expands in place to show the note the admin wrote, the attached bills, and the photos. No modal.

Bottom: a `Download this year as CSV` link. Institutional donors will do this and it costs you one endpoint.

**Anti-pattern to avoid:** do not build a dashboard. No donut charts, no KPI cards with icons, no sparklines. A dashboard says "we processed data for you". A ledger says "here is the book, check it yourself". The second is the product.

### 5.3 `/give` — checkout

Single column, max 440px, one screen on mobile, zero distractions. Nav collapses to the wordmark only. No footer except the compliance line.

Field order matters, and the order below is deliberate:

1. **Cause** (pre-filled from the link, changeable via a compact select)
2. **Amount**: four chips + Other. Second chip pre-selected. Use shagun amounts, which is the local insight most templates miss: `₹501 · ₹1,100 · ₹2,100 · ₹5,100`, with cause-specific overrides from the unit table. Amounts ending in 1 are what Indians actually give.
3. **Frequency**: `Once` / `Every month` as a two-state toggle, `Once` default for cold traffic. Do not default to monthly, it suppresses first conversion. You recover monthly on the thank-you page instead.
4. **Name** (single field, not first/last)
5. **Phone or email** (one field, auto-detects which). Captured *before* the payment step so an abandoned checkout is recoverable.
6. **Sankalp line** *(unique field)*: optional, `Give in someone's name (optional)`, 60 chars. In the Indian dharmic context this is not sentiment, it is the reason a large share of temple and gau donations happen at all. It raises average gift and gives you a personalised receipt and a shareable card. Print it on the receipt in Devanagari if the donor typed Devanagari.
7. **80G receipt?** A checkbox, off by default. Only when ticked do PAN and address fields appear. Do not make every donor type a PAN to give ₹101.
8. **Cover the transaction fee (₹X)** checkbox, **on** by default, opt-out visible. Recovers roughly 2%.
9. Primary button: `Give ₹501` with the live amount in the label. Never `Submit`, never `Proceed`, never `Donate now`.

Beneath the button, three lines at `small`: 80G registration number, `Book last updated Sunday 20 Sep`, and `Receipt on WhatsApp in under a minute`.

Payment: Razorpay standard checkout. UPI intent deep-links on mobile (GPay, PhonePe, Paytm shown as direct buttons), UPI QR on desktop, cards and netbanking below the fold of the payment sheet.

**Friction audit, apply all:**
- No account creation, ever.
- No OTP before payment.
- No address unless 80G is ticked.
- No captcha. Use Razorpay's own risk checks plus a honeypot field.
- No redirect to a third-party page for the main flow.
- Donate route must ship under 60KB of JS. No animation library, no chart library, no font beyond the two weights it needs on this route.
- LCP target under 1.5s on a throttled 4G / mid-tier Android. Measure on a real ₹12,000 phone before launch.
- Sticky mobile bar with the amount and button once the user scrolls past the chips.

### 5.4 `/give/thanks/[id]` — the second ask

This page does four jobs in order:

1. Confirms with the exact amount, cause, and sankalp line.
2. Receipt: download PDF, and it has already gone to WhatsApp and email.
3. **The monthly upgrade**: one line, `Make this ₹501 every month, on the 20th` with a single button. Post-donation upgrade converts far better than a monthly default at checkout and costs the first gift nothing.
4. Share: a generated card image carrying the sankalp line and the cause, sized for WhatsApp status. This is how a ₹501 donor brings you three more.

### 5.5 `/causes/[slug]`

Structure: unit table first, then the gap for that cause, then the Khata rows filtered to that cause, then the field notes for that cause, then the give widget. Story last, proof first. That is the inversion that separates this from every other NGO cause page.

For ghat cleaning specifically: a before/after image comparison, dated on both sides, dragged by the user. Only use it where September genuinely has both frames.

### 5.6 `/your-date` — monthly giving, built around the name *(unique section)*

Instead of "Become a monthly donor", ask: **pick your date.**

A calendar grid of 1 to 28. The donor picks a day of month, an amount, and a cause, optionally attaching a reason (`Amma's tithi`, `Ekadashi`, `my daughter's birthday`). Every month on that date they get a WhatsApp message that names the reason, then the mandate debits.

Why this is the right feature here and not a gimmick:
- It matches how dharmic giving already works, which is calendar-driven, not campaign-driven.
- It makes the brand name structural rather than arbitrary.
- Retention on date-anchored recurring giving is meaningfully higher than on "1st of the month" defaults, because the date already means something to the donor.
- Cancellation must be one tap from that same WhatsApp message, shown upfront. Hiding cancellation is what destroys recurring programmes in India.

Technical: Razorpay Subscriptions with UPI Autopay e-mandate. Check current AFA thresholds and pre-debit notification rules before you set amount limits, they have changed more than once.

---

## 6. The Khata: data model and weekly ritual

### 6.1 Schema (Postgres)

```sql
causes            id, slug, name, name_hi, summary, active, sort
cause_units       id, cause_id, label, label_hi, amount_paise
donors            id, name, phone, email, pan_encrypted, address, created_at
donations         id, donor_id, cause_id, amount_paise, fee_paise, fee_covered,
                  sankalp, wants_80g, gateway_order_id, gateway_payment_id,
                  status, method, created_at, captured_at
subscriptions     id, donor_id, cause_id, amount_paise, day_of_month, reason,
                  mandate_id, status, next_charge_at
ledger_weeks      id, year, week_no, starts_on, ends_on, published_at,
                  published_by, note
ledger_entries    id, week_id, cause_id, deployed_paise, location, note,
                  entry_type ('deploy'|'correction'|'reversal'),
                  corrects_entry_id, created_at, created_by   -- append only
ledger_proofs     id, entry_id, kind ('photo'|'bill'|'quote'), url, caption, taken_on
gaps              id, cause_id, label, location, target_paise, period,
                  opened_on, closed_on
field_notes       id, cause_id, slug, title, body_md, place, district, noted_on
receipts          id, donation_id, number, pdf_url, issued_on
```

Hard constraints:
- `ledger_entries` has no `UPDATE` grant. Revoke it at the database role level, not just in application code. Corrections are inserts.
- `received` is never stored in the ledger. It is always computed from `donations` where `status='captured'` within the week window. If a human could type the received number, the page is worth nothing.
- Every write to `ledger_entries` writes an `audit_log` row with actor, IP, and before/after payload.

### 6.2 The Sunday ritual (write this as an SOP and hand it to September)

Admin opens `/admin/khata/new`. The form:

1. Week auto-selected, `Received` auto-filled per cause and read-only.
2. For each cause, enter `Deployed`, `Location`, and a one-line note.
3. Attach proofs. At least one photo or bill per entry, enforced. Entries with no proof cannot publish.
4. Preview shows exactly the public row.
5. Publish. Timestamped, attributed, irreversible.

Guardrails built into the admin:
- If the sum of deployed exceeds received-to-date, block and explain.
- If a week goes unpublished by Monday 10:00, send a WhatsApp reminder to two people, not one.
- A published week can only be amended by a correction entry, and the form makes you write a reason that is shown publicly.

Give September a 10-line printable checklist. The whole trust model of the site depends on a non-technical person doing this reliably every Sunday, so the admin needs to be simpler than their existing spreadsheet, not more complex.

---

## 7. Technical architecture

You are a solo dev carrying several clients, so the ruling constraint is **lowest ongoing ops burden**, not maximum flexibility. That argues for one deployable, not a split frontend and backend.

**Recommended**

- **Next.js 15, App Router, TypeScript.** Server components for the Khata and cause pages so they render fast with no client JS.
- **Tailwind v4** with the tokens above defined as CSS custom properties in `@theme`. No arbitrary values allowed in JSX, lint for `[#` and `[0-9]px]`.
- **Radix primitives** for dialog, select, accordion. Use **shadcn/ui only as a code source, then strip it.** Default shadcn tokens plus Inter plus `rounded-lg` plus a soft shadow is precisely the generated look you are trying to avoid. Take the behaviour, delete the styling, rebuild against your tokens.
- **Drizzle + Postgres (Neon).** Neon branches let an agent run migrations against a throwaway branch.
- **Razorpay** for payments (orders API, webhooks for `payment.captured` and `subscription.charged`). Never trust the client-side success callback. The donation is only real when the webhook lands, and it must be idempotent on `gateway_payment_id`.
- **Resend + React Email** for receipts; **Interakt or MSG91** for WhatsApp receipts and monthly reminders. WhatsApp matters more than email for segments 1 and 3.
- **Auth**: Auth.js with email magic link for the two or three admins. No public accounts.
- **Media**: Cloudinary or UploadThing. Enforce EXIF date extraction on upload so the caption date cannot be wrong.
- **Analytics**: Plausible or Umami, plus server-side conversion events fired from the webhook handler, not the browser. Client-side donation tracking undercounts badly on Indian mobile because of UPI app switching.
- **Hosting**: Vercel. Cron via Vercel Cron for the Sunday reminder and the monthly charge reconciliation.

**If September insists on a separate backend**, put FastAPI on Railway and keep only webhooks, receipts, and the ledger there. Do not split for its own sake.

**Security notes**
- PAN encrypted at rest, never logged, never sent to analytics.
- Receipt URLs use a 22-char random id, not a sequential one.
- Rate limit `/api/donate` and the OTP-free recovery endpoints.
- CSP without `unsafe-inline` except the Razorpay script origin.
- Webhook signature verification is non-negotiable. Test it with a replayed payload before launch.

---

## 8. Compliance (India) — verify each with September's CA before launch

| Item | What it is | Why the site needs it |
|---|---|---|
| Trust/Society/Sec 8 registration | Legal existence | Footer, `/who`, gateway onboarding |
| 12A / 12AB | Exemption for the NGO | Footer |
| 80G | Deduction for the donor | Checkout, receipt, footer |
| Form 10BD | Annual statement of donations filed by the NGO | Your DB must be able to export it. Design `donations` for this now |
| Form 10BE | Certificate issued to each donor | Generated from the same data |
| CSR-1 (MCA) | Required to receive CSR funds | `/csr` page |
| NITI Aayog Darpan ID | Needed for government grants | Footer |
| FCRA | Required to accept foreign contributions | If September does not have it, **block foreign-issued cards** and say so on the page. Accepting foreign money without FCRA is a serious offence, not a paperwork slip |

Honest things to put on the site rather than hide:

- 80G deduction is generally not available to donors who file under the new tax regime. A large and growing share of Indian donors are on the new regime. Say this plainly in the FAQ. Donors who find out later feel misled, and it costs you nothing to be straight.
- Cash donations above ₹2,000 do not qualify for 80G. Irrelevant online, relevant for the in-kind page.
- Payment gateways will not onboard September without live `/legal/refund`, `/legal/privacy`, `/legal/terms`, `/contact` with a real address and phone, and a grievance officer. Build those pages in phase 1, not phase 8.

---

## 9. Performance, accessibility, i18n

- Budget: `/` under 120KB JS, `/give` under 60KB, `/khata` under 40KB. Enforce with `@next/bundle-analyzer` in CI.
- LCP under 2.0s on the home page, under 1.5s on `/give`, tested on throttled 4G.
- Fonts: self-host, `woff2`, subset Latin + Devanagari separately, `font-display: swap`, preload only the two weights used above the fold.
- WCAG 2.1 AA. Check `--haldi` on `--paper` specifically, it will likely fail at small sizes; if it does, darken haldi rather than dropping the state.
- Visible focus rings, 2px `--ink` offset 2px. Do not remove outlines.
- Full keyboard path through checkout. Test it.
- The Khata must be usable with a screen reader as a real table with `<caption>`, `<th scope>`, and a summary sentence before it.
- i18n: `next-intl`, English default, Hindi for checkout, receipts, Khata labels, and the FAQ. Add Gujarati only if September's donor base is actually Gujarat-heavy. Do not machine-translate.

---

## 10. Build workflow in Antigravity

Antigravity's usable parts for this project: the Manager surface for running several agents in parallel, artifacts (`implementation_plan.md`, `task.md`, `walkthrough.md`) that you review and comment on rather than re-prompting, and the browser subagent that will actually click through your checkout and record proof it works.

### 10.1 Repo scaffolding before you write a line of product code

```
/AGENTS.md                 hard constraints, the anti-slop checklist, file ownership
/GUARDRAILS.md             known failure patterns, things agents got wrong before
/docs/brief.md             this file
/docs/tokens.md            exact hex, type scale, spacing, the only allowed values
/docs/payments.md          Razorpay integration in full — order flow, webhooks, refunds, keys
/docs/production-scaffold.md   SEO, security, testing, CI, and the bespoke detail layer — Phase 0 must clear this
/docs/content-model.md     schema + copy rules
/docs/compliance.md        section 8, with September's real numbers filled in
/.agent/workflows/
    design-lint.md         run before any UI task closes
    new-section.md         the recipe for adding a page section
    ledger-change.md       extra care path: anything touching ledger_entries
```

`AGENTS.md` should contain, at minimum:

- The six colour tokens and a statement that any other hex is a build failure.
- The three typefaces and their exact role boundaries.
- The radius and shadow rules from 3.3.
- The full anti-slop checklist from 3.7.
- File ownership boundaries so parallel agents do not collide: agent A owns `app/(marketing)/**`, agent B owns `app/khata/**` and `lib/ledger/**`, agent C owns `app/give/**` and `lib/payments/**`, agent D owns `app/admin/**`.
- A rule that `lib/ledger/**` and any migration touching `ledger_entries` requires human approval, no auto-proceed.

### 10.2 Pin the design before you build pages

The single highest-leverage step. Build `/styleguide` as the very first route: every token swatch, the full type scale in English and Devanagari, buttons in all states, the form controls, a sample ledger table, a cause card, a field note, and the ruled-page background.

Then screenshot it and store it at `docs/reference/styleguide.png`. Make that screenshot a **Knowledge Item** so every agent sees it. From then on, every UI task's acceptance criterion is "matches `/styleguide`", which is checkable, instead of "looks good", which is not.

Agents drift visually over long sessions. A pinned styleguide route plus a screenshot is the cheapest fix for that.

### 10.3 Phases

| Phase | Output | Agent mode | Verification |
|---|---|---|---|
| 0 | Repo, `AGENTS.md`, tokens, `/styleguide`, production scaffold cleared (`docs/production-scaffold.md` Part A) | Planning then Execution | You review the screenshot by eye; CI pipeline runs green |
| 1 | Legal pages, `/who`, `/contact`, footer compliance block | Execution | Needed early for gateway onboarding |
| 2 | Schema + seed data + admin auth | Planning, human approval | Migration reviewed by you line by line |
| 3 | `/khata` read-only, from seeded data | Execution | Browser subagent screenshots at 3 breakpoints |
| 4 | `/admin/khata` write path + append-only constraints | Planning, human approval | Write a test that proves `UPDATE` fails |
| 5 | Causes, units, gaps, field notes | Execution, can run parallel to 4 | Styleguide diff |
| 6 | `/give` + Razorpay test mode + webhooks | Planning, human approval | Browser subagent completes a test payment end to end and records it |
| 7 | `/your-date` subscriptions | Planning | Test mandate, test cancel |
| 8 | WhatsApp + email receipts | Execution | Send to your own number |
| 9 | Perf, a11y, i18n, SEO | Execution | Lighthouse in CI, real device test |
| 10 | Content load, go live | Manual | Full checklist below |

Run phases 3, 5, and 1 in parallel in the Manager. Keep 4, 6, and 7 serial and supervised, because they touch money and the trust model.

### 10.4 Prompt scaffolds

**Kickoff**

> Read `docs/brief.md`, `docs/tokens.md`, and `AGENTS.md` in full before doing anything. Then produce an `implementation_plan.md` for Phase 0 only: repo setup, token system as CSS custom properties consumed by Tailwind v4, self-hosted subset fonts, and a `/styleguide` route showing every token and component state listed in section 3 of the brief. Do not build any product pages. List every design decision you are making that is not explicitly specified in the brief, and flag it for my approval inside the plan.

**Any UI section**

> Build the "[section name]" section described in section 5 of `docs/brief.md`. Constraints: only the six tokens in `tokens.css`, only the three typefaces with the role boundaries in section 3.2, radius and shadow per section 3.3, no motion other than what section 3.4 permits. Before you finish, run `.agent/workflows/design-lint.md` and paste the result into the walkthrough. Then open the page in the browser at 390px, 768px, and 1440px and attach screenshots. Compare against `docs/reference/styleguide.png` and list any divergence.

**Ledger work**

> This task touches the trust model. Read section 6 of `docs/brief.md`. Produce an implementation plan first and stop for my approval. Requirements that cannot be traded away: `ledger_entries` is append-only at the database role level, `received` is always computed from `donations` and never stored, every mutation writes an audit row, and an entry with no attached proof cannot be published. Write tests that prove each of these four before writing the feature.

**Checkout**

> Implement `/give` per section 5.3. Hard budget: under 60KB of client JS on this route, measured, reported in the walkthrough. Field order exactly as specified. Use Razorpay test keys from `.env.local`. The donation is only marked captured by the webhook handler, never by the client callback, and the handler must be idempotent on `gateway_payment_id`. Verify by driving a full test payment in the browser and recording it.

**Design critique pass** (run this after every phase, it is the one that actually kills slop)

> Open the pages built in this phase in the browser. Review them against the anti-slop checklist in `AGENTS.md` section 3.7, item by item. For each item, state pass or fail with a screenshot crop. Do not fix anything yet. Produce the list first.

### 10.5 Things that will go wrong, pre-empt them in `GUARDRAILS.md`

- Agents reintroduce `box-shadow` blur and `rounded-lg` when adding a new component. The design-lint workflow must grep for both.
- Agents write copy containing the banned phrases in 3.7. Grep for those too.
- Agents add a chart library to the Khata. Explicitly forbid any dependency on the `/khata` route.
- Agents helpfully add stock image URLs. Forbid any external image domain except your media host in `next.config`.
- Long sessions drift off the type scale. That is what the styleguide screenshot is for.

---

## 11. Inspiration library

Feed these to the agent as references, and more importantly look at them yourself before you start. Noted with what to take and what to leave, since copying a whole site wholesale is how you get generic output.

**Proof and transparency**
- **GiveDirectly** — data-forward, admits its own overheads, publishes research that is unflattering to itself. Take: the willingness to publish the bad number.
- **charity: water** — the 100% model and per-project reporting with GPS and photos. Take: proof attached to a specific gift. Leave: the glossy cinematic photography, you cannot match it and should not try.
- **Watsi** — per-patient ledger, every profile shows the exact cost and who funded it. Take: the granularity.
- **The Ocean Cleanup** — progress reported as engineering, not as sentiment. Take: numbers as the story.
- **Wikipedia's fundraising banners** — direct, plain, slightly awkward, extremely high converting. Take: the copy register.

**Indian donation UX, study the checkout flows specifically**
- **Give.do**, **Milaap**, **Ketto** — for UPI handling, amount chips, and receipt flow. Take: the payment mechanics. Leave: the visual language entirely, it is exactly what you are trying to escape.
- **Goonj** — non-cash giving framed with dignity. Take: the `/in-kind` page model.
- **Akshaya Patra** — unit economics done well (cost per meal). Take: the unit framing.
- Temple trust sites (Tirumala, Shirdi, ISKCON local units) — study their hundi, sankalp, and seva booking flows. Take: the sankalp field, the date-based giving, the naming conventions. Leave: the layout.

**Visual restraint and typography**
- **Stripe Press** — how to make text-heavy pages feel crafted without decoration.
- **Basecamp / 37signals** — opinionated, plain, confident copy and layout.
- **Are.na**, **Cosmos** — ruled, spare, structural.
- **Ek Type** and **Indian Type Foundry** specimen pages — for Devanagari and Latin set together properly. This is where the type direction should come from, not from a western SaaS site.
- Annual reports from **Azim Premji Foundation** and **Dasra** — for how serious Indian institutional documents set numbers and tables.

**Galleries, for scanning not copying**
- **refero.design** — real product flows, best for checkout patterns.
- **Mobbin** — mobile flows, use it for the donate-on-phone path specifically.
- **Godly.website**, **Land-book**, **SiteInspire** — filter by "minimal" and "editorial", ignore everything with a gradient.
- **Typewolf** — font pairings in the wild.

Honest caveat: I am listing these from knowledge, not from checking each one today. Verify they are live and that the specific pages still exist before you cite them in the repo.

---

## 12. Launch checklist

**Money**
- [ ] Razorpay live keys, webhook URL registered, signature verified in production
- [ ] A real ₹1 donation completed end to end on a real phone over mobile data
- [ ] Receipt received on WhatsApp and email, PDF opens, numbers correct
- [ ] Refund path tested once
- [ ] A subscription created, charged, and cancelled
- [ ] Foreign card blocked if no FCRA, with a clear message

**Trust**
- [ ] Khata shows at least 4 weeks of real history at launch. Do not launch with an empty ledger, it is worse than no ledger
- [ ] All registration numbers live in the footer and verified against the certificates
- [ ] Grievance officer named with a working email
- [ ] All four legal pages live

**Craft**
- [ ] Anti-slop checklist run, all items pass
- [ ] Zero stock images
- [ ] Every photo has place and date
- [ ] Lighthouse: 95+ performance on `/give`, 100 accessibility
- [ ] Tested on a sub-₹15,000 Android over 4G, not on your laptop
- [ ] Every banned copy phrase absent from the build

**Post-launch cadence for September, not for you**
- Sunday: publish the Khata week
- Sunday: one photograph with caption
- Monthly: close and reopen the gaps
- Quarterly: a field note per active cause
- Annually: audited statement uploaded, 10BD filed, 10BE issued

---

## 13. Known gaps in this brief

Being straight about what is not settled here:

- **The unit costs in 5.1 are placeholders.** They have to come from September's actual expenditure or the whole unit-pricing strategy collapses on first scrutiny.
- **The colour system is a proposal, not a tested one.** `--haldi` on `--paper` may fail contrast at 14px and need darkening.
- **Recurring payment limits and AFA rules** for UPI Autopay have changed repeatedly. Check current NPCI and RBI rules at build time rather than trusting anything written here.
- **Publishing the trust's bank account** (5.1, section 7) is common for temple trusts and unusual for welfare NGOs. September's CA decides, not you.
- **Whether September has FCRA** changes the international donor story completely. Resolve this before designing anything for NRI donors.
- **The Sunday ritual is the weakest link.** The prettiest ledger in India is worthless if nobody fills it on week six. Budget real time for training and for making the admin genuinely simpler than a spreadsheet.