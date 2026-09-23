# production-scaffold.md

What the Phase 0 commit must contain beyond `AGENTS.md`, tokens, and `/styleguide`, for this to be a real public launch and not a demo. Split into two kinds of work: infrastructure that is invisible when it's right and painful when it's missing, and the small bespoke details that are the actual answer to "how do we look crafted instead of generated." Both are required. Neither substitutes for the other.

---

## Part A — infrastructure

### A.1 SEO and metadata

- Per-route `generateMetadata()`: unique title, description, canonical URL for `/`, every `/causes/[slug]`, every `/khata/[week]`, every `/field-notes/[slug]`.
- Dynamic OG images via `@vercel/og`, rendered from the same self-hosted Martel/Hind subsets so a shared link visually matches the site, not a generic template. Minimum three variants: home, a cause page (shows the unit price), a Khata week (shows received/deployed for that week).
- `app/sitemap.ts`, dynamic, includes every published cause, Khata week, and field note. Regenerate on publish, not just at build time.
- `app/robots.ts`, allow all, point at the sitemap. Disallow `/admin`.
- JSON-LD structured data: `NGO`/`NonprofitOrganization` schema on `/who` with the real registration numbers, `DonateAction` schema on `/give`. This is what gets September's donate button surfaced correctly in search and in donation-aggregator crawlers.
- `next/font` with `display: swap`, no layout shift on font load — verify with Lighthouse CLS, not by eye.

### A.2 Error, empty, and loading states — written in voice, not left as Next.js defaults

- `app/not-found.tsx` — do not ship the default Next.js 404. Write it in the site's own voice: something like "This page isn't in the book either," with a link back to the Khata. One line, no illustration.
- `app/error.tsx` and `app/global-error.tsx` — same rule. State what happened, offer the one useful next action (retry, or go to `/give` directly), never a generic "Something went wrong."
- `app/khata/loading.tsx` and any other route with a real load delay — skeleton state is **blank ledger rows** using the same table markup and `--rule` hairlines as the real Khata, not a grey shimmer block. See Part B.3.
- Offline: a minimal `manifest.json` (Part A.5) is enough. Do not build a service-worker offline page for v1, it is not worth the complexity for a donation site.

### A.3 Security and data protection

- CSP header in `next.config`: no `unsafe-inline`, explicit `script-src` allowlist for the Razorpay checkout script origin only.
- Rate limiting on `/api/donate`, `/api/receipt/[id]`, and any OTP-free recovery endpoint. `@upstash/ratelimit` + `@upstash/redis`, sliding window, keyed on IP plus a cookie-based fingerprint so a single flaky connection doesn't get a genuine donor blocked.
- Error monitoring: `@sentry/nextjs`. **Configure `beforeSend` to scrub PAN, phone, email, and address from every event before it leaves the server.** Sentry's default request-body and breadcrumb capture will otherwise ship donor PII to a third party by default. This is not optional, write the scrubbing function and test it with a fixture payment payload before the first real donation runs through it.
- DPDP Act (India, 2023) posture: the `/legal/privacy` page names exactly what is collected (name, phone or email, PAN and address only if 80G is requested, payment metadata from Razorpay), why, how long it is retained, and the grievance officer's contact for a deletion request. Confirm the specifics with September's counsel — this file gives you the scaffold requirement, not the legal text.
- Consent for analytics: a plain, single-line banner in the site's own voice and type system, not a generic cookie-consent overlay from a library. Plausible/Umami are cookieless and may not need a banner at all under current guidance — verify before deciding you need one.

### A.4 Testing and CI

- **Vitest** for unit tests. Non-negotiable coverage before any ledger or payment task is marked done: the four ledger-integrity properties in `AGENTS.md` section 3.1, and the `formatINR()` cases in `tokens.md`.
- **Playwright** for one end-to-end path: complete a test-mode donation on `/give`, confirm the webhook lands, confirm the receipt renders. Run this in CI, not just once by hand.
- GitHub Actions, minimum pipeline on every PR:

```yaml
name: ci
on: [pull_request]
jobs:
  checks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: pnpm }
      - run: pnpm install --frozen-lockfile
      - run: pnpm lint:design
      - run: pnpm typecheck
      - run: pnpm test
      - run: pnpm build
      - run: node scripts/check-bundle-budget.mjs
```

- The agent's self-reported walkthrough checks (design lint, bundle budget, screenshots) are not a substitute for this running in CI. Self-report catches what the agent remembers to check. CI catches what it forgot.

### A.5 PWA basics

- `manifest.json`: name, short_name, the single emoji-derived icon set (see Part B.5), `theme_color: #F4F5F0`, `display: standalone`. Repeat donors in India frequently "add to home screen" a WhatsApp-shared link — this is a five-minute addition with a real retention payoff. No service worker beyond what Next.js provides by default, do not build offline caching for v1.

### A.6 Database and admin hardening

Not covered anywhere else in the docs, and each of these is a real gap, not a nice-to-have:

- **Connection security:** Neon's pooled connection string for all serverless API routes, the direct (unpooled) connection only for migrations. `sslmode=require` enforced, not just defaulted.
- **Backups:** confirm Neon's point-in-time recovery window covers at least 7 to 30 days before launch, and know how to actually invoke a restore before you need it under pressure. A donation ledger cannot tolerate unrecoverable data loss, and "the database is probably backed up" is not a verified fact.
- **Admin accounts are allowlisted, not open.** The set of emails permitted to sign in as admin is fixed at deploy time (an env var or a seeded table), never a signup flow. Auth.js email magic link, short session expiry (12 to 24 hours), and every admin login writes a row to the same `audit_log` table used for ledger mutations — actor email, IP, user agent, timestamp. A login is not exempt from the audit trail just because it isn't a ledger write.
- **CSRF protection on every admin mutating route** stays on. Auth.js provides this by default — confirm it hasn't been disabled somewhere "to make local testing easier" and left that way.
- **Reporting queries** (the CSV export in `docs/brief.md` 6.2, any future analytics query) run through a role with read access only, never through a role that also holds the application's write grants, so a bug in an export feature can't become a write path.

---

## Part B — the bespoke layer

This is the actual answer to "how do we get uniqueness, not just the absence of slop." Removing gradients and stock photos gets you to neutral. These get you to distinctive, and every one of them is generated from the concept and from code, not from an illustration budget or a stock library.

### B.1 The week stamp

Every published Khata week gets a small (28–32px) generative mark, deterministic from the week's id, rendered as inline SVG next to the week label — on `/khata`, on `/khata/[week]`, and baked into that week's OG share image.

Rules that keep it from becoming decoration:

- Composed from exactly three primitives: a partial arc, a short tick, and a dot. No more. If it needs a fourth shape to look good, the algorithm is wrong.
- Monochrome `--ink` only, no colour.
- **Deterministic, not random.** The same week id always produces the same mark — hash the week id to seed the arc angle, tick position, and dot placement. A donor who forwards `/khata/2026-w38` on WhatsApp today and again in a year sees the same stamp both times. A mark that looked freshly generated on every reload would read as decorative and undermine the exact trust the ledger is built to establish.
- Purpose, stated plainly so it doesn't drift into an illustration system: it is a recognition cue, the same job a real ledger's ink stamp does, letting a repeat visitor tell weeks apart at a glance before they read the numbers. If it stops doing that job, cut it.

This is a ~100-line utility, not a design asset. It ships as code, gets no separate design tool, and produces genuine visual variety across fifty-two weeks a year with zero ongoing content burden.

### B.2 The torn edge

Receipts (`/receipt/[id]`, the PDF, and the WhatsApp share card) get one shared visual device: a perforated or torn top edge, a simple repeating triangle or half-circle `clip-path`, referencing a real paper receipt torn from a pad. Used in exactly these three places and nowhere else on the site. Rendered as a CSS `clip-path` or a static inline SVG mask, not an image asset.

### B.3 Loading states that stay in character

Any skeleton or loading state on `/khata` and `/khata/[week]` is built from the **same table markup and `--rule` hairlines as the real content** — blank ledger rows with a faint pulse on the numeral cells only, not a generic grey rounded-rectangle shimmer. The loading state should look like an empty page from the same book, not like a different product's placeholder UI.

### B.4 Small free details

None of these need approval beyond this file, they are default-on:

- `::selection` set to `background: var(--ink); color: var(--paper)` — the default browser blue selection is a small tell that nobody touched the details.
- Scrollbar styled minimally in `--ink`/`--paper` tones on webkit and via `scrollbar-color` elsewhere. Thin, not decorative.
- `accent-color: var(--ink)` on native checkboxes and radios, already specified for the 80G and fee-cover checkboxes — confirm it's applied globally, not just where it was first noticed.
- A skip-to-content link, visually hidden until focused, landing on `<main>`.
- Focus order tested by tabbing through the actual checkout, not assumed from markup order.

### B.5 Favicon and app icon

One emoji-derived mark, matching the favicon already chosen for the published styleguide reference (📒), exported at the sizes `manifest.json` needs (192, 512, plus the standard `favicon.ico` and `apple-touch-icon`). Generate this with a small script (`sharp` rendering the emoji glyph to PNG at each size) rather than hand-exporting from a design tool — keeps it reproducible if the mark ever changes.

### B.6 Print stylesheet

`/khata/[week]` and `/receipt/[id]` get a real `@media print` stylesheet: the ruled background disabled (already required in `AGENTS.md` 4.4), the sindoor/haldi colour coding preserved (auditors will print or save-to-PDF these pages and need the columns to still read correctly in a black-and-white office printer, so verify the distinction survives in greyscale, not just in colour), no navigation, no buttons, just the table and its provenance stamp. September's CA and any institutional donor doing due diligence will use this far more than a screenshot.

---

## What this list is not

It is not permission to add a ninth icon, a second animation, a stock photo "just for the empty state," or a component library. Every item above either closes a real production gap (Part A) or is generated procedurally from the existing token system and the ledger concept itself (Part B). If a new idea for "giving it life" doesn't fit one of those two descriptions, it goes back to a human for a decision before it goes in the codebase — see `AGENTS.md` section 13.