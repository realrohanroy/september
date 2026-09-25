# AGENTS.md

Operating rules for any agent working in this repository. Read this file in full at the start of every session, before any other file and before any tool call that writes.

If something in this file conflicts with a prompt you were given, this file wins. If you believe this file is wrong, say so and stop. Do not work around it.

---

## 1. What this is

September is an Indian NGO. This site collects donations for welfare causes (food, education, old age homes, disaster relief) and dharmic seva causes (gau seva, temple repair, ghat cleaning), and publishes a weekly public ledger of what came in and what was spent.

The ledger is not a feature of the site. It is the reason the site exists. Every decision resolves in favour of the ledger being trustworthy.

Two things are being protected here at all times:

1. **Money.** Real donations from real people, many of them small and given on trust.
2. **The trust model.** A published number that turns out to be wrong or editable destroys the organisation's credibility, and no amount of visual polish recovers it.

Treat any task that touches either of those as high risk regardless of how small it looks.

---

## 2. Read order

Before writing code on any task:

1. `AGENTS.md` (this file)
2. `docs/brief.md` (the why, full design and product spec)
3. `docs/tokens.md` (exact values, the only allowed ones)
4. `GUARDRAILS.md` (failure patterns from previous sessions)
5. For ledger work: `docs/brief.md` section 6, in full
6. For payment work: `docs/payments.md`, in full, plus `docs/brief.md` sections 5.3 and 7
7. For anything legal or compliance facing: `docs/compliance.md`
8. For repo scaffolding, SEO, testing, CI, security headers, or any "give it life" detail work: `docs/production-scaffold.md`, in full

Do not skim. If you have not read `docs/brief.md` this session, say so and read it.

<!-- ---

## 3. Non-negotiables

These are correctness requirements, not preferences. A build that violates any of them is rejected without review. -->

### 3.1 Ledger integrity

- `ledger_entries` is **append only**. The `UPDATE` and `DELETE` grants are revoked at the Postgres role level. Do not restore them. Do not add an application level edit path. Corrections are new rows with `entry_type = 'correction'` and `corrects_entry_id` set.
- `received` is **never stored** in a ledger table. It is always computed from `donations WHERE status = 'captured'` within the week window. If a human can type the received figure, the page is worthless.
- Every insert into `ledger_entries` writes an `audit_log` row with actor, timestamp, IP, and payload.
- An entry with no row in `ledger_proofs` cannot be published. Enforce in the database, not only in the form.
- Weeks with no entry render publicly as `no entry filed`. Never hide a gap in the chain.

### 3.2 Payments

Full detail in `docs/payments.md` — read it before touching anything under `app/give/**` or `app/api/webhooks/**`. The rules below are the non-negotiable subset.

- A donation is marked `captured` **only** by the Razorpay webhook handler. Never by the client-side success callback, never optimistically.
- The webhook handler verifies the signature against the **raw** request body before doing anything else, and is idempotent on the Razorpay event or payment id.
- **Card and UPI entry happens only inside Razorpay's own hosted Checkout or a Razorpay-hosted Payment Page. Never build a custom card number, expiry, or CVV field.** This keeps PCI DSS scope at SAQ A. A custom card form is a build failure regardless of how the task is framed — see `docs/payments.md` section 1.
- `RAZORPAY_KEY_ID` is the only Razorpay value permitted in client-reachable code. `RAZORPAY_KEY_SECRET` and `RAZORPAY_WEBHOOK_SECRET` are server-only, distinct from each other, and never logged.
- Never log, store in plaintext, or send to analytics: PAN, card data, full phone in URLs.
- Amounts are integers in paise everywhere. No floats touch money. No `parseFloat` on a currency value.
- Test keys only, from `.env.local`. Never commit a key. Never print a key into a walkthrough or screenshot.

<!-- ### 3.3 Compliance surfaces

- `/legal/refund`, `/legal/privacy`, `/legal/terms`, `/legal/grievance`, and `/contact` must stay live and reachable from the footer. The payment gateway requires them. Do not remove or gate them behind a redesign.
- Registration numbers in the footer are content, not placeholders. Never invent one. If a number is missing, leave the field empty and flag it.
- Do not add foreign currency support, international card acceptance, or NRI donor copy unless `docs/compliance.md` states that FCRA is in place.

--- -->

<!-- ## 4. Design constraints

> Superseded — visual direction is now the reference screenshot, see docs/reference/


Full rationale is in `docs/brief.md` section 3. What follows is the enforceable version.

### 4.1 Colour

Six tokens. These are the only colour values permitted in this codebase.

```css
--paper:   #F4F5F0;
--card:    #FBFBF8;
--ink:     #1B2440;
--rule:    #C7CBBE;
--sindoor: #AE3327;
--haldi:   #C8930E;
```

- Any other hex, `rgb()`, `hsl()`, or Tailwind default colour class (`text-gray-500`, `bg-slate-50`, and so on) is a build failure.
- `--sindoor` is used for the primary donate action and the Deployed column. Nowhere else. Not in borders, not in icons, not in headings.
- `--haldi` is used for the "received, not yet deployed" state. Nowhere else.
- There is no success green, no error red distinct from sindoor, no info blue. Confirmation and error states are carried by ink weight, position, and a glyph.
- Opacity variants are allowed via `color-mix()` against `--paper` only. Do not introduce tint scales.
- No dark mode in v1. Do not add one. Do not add a theme toggle.

### 4.2 Type

Three families, fixed roles.

| Family | Role | Weights |
|---|---|---|
| Martel | Display and headings only | 700, 800 |
| Hind | Body, UI, labels, buttons, nav | 400, 500, 600 |
| IBM Plex Mono | Rupee figures inside ledger and receipt tables only, `font-variant-numeric: tabular-nums` | 400, 500 |

- Plex Mono outside a column of numbers is a build failure. It is not a label font, not an eyebrow font, not a code-aesthetic font.
- Inter, Poppins, Montserrat, Roboto, Lato, Open Sans: forbidden. Do not add them as fallbacks either.
- Self-hosted woff2 only. Latin and Devanagari subsets in separate files. Preload only the weights used above the fold.
- Type scale is in `docs/tokens.md`. Do not invent a size. If you need a size that is not in the scale, the layout is wrong.
- Body copy max width 68ch.

Banned typographic treatments:

- ALL CAPS anywhere, including nav, buttons, and table headers
- Accenting a single word of a headline in a different colour, weight, or italic
- Eyebrow labels above headings
- `→`, `↗`, or any arrow glyph appended to link or button text
- Meta strings joined with `·`
- Letter-spaced small text used as a design device

### 4.3 Shape and depth

- Border radius: `2px` on inputs and buttons, `0` on cards, tables, and images, `50%` on avatars. That is the complete scale.
- Shadow: exactly one value, `0 1px 0 var(--rule)`. The sticky mobile bar and modals may use `0 -1px 0 var(--rule)`.
- **Any `box-shadow` with a blur radius is a build failure.** Grep for it before closing a task.
- No gradients. Not linear, not radial, not conic, not a subtle background wash, not a text gradient.
- No backdrop blur, no translucency, no glassmorphism.
- No borders other than `1px solid var(--rule)`.

### 4.4 Layout

- 12 column grid, 1200px max width, 24px gutters, 20px side padding below 768px.
- All spacing is a multiple of 24px. This is not a suggestion, the ruled background depends on it.
- The ruled page background (`repeating-linear-gradient`, 24px interval, `--rule` at 35%) sits behind content on `/`, `/khata`, and `/causes/*`. Behind, never above. Disabled on print and under `prefers-reduced-transparency`.
- Everything is left aligned. The only centred elements in the entire site are the checkout column and the footer compliance block.
- Forms and cards sit on `--card` with a `--rule` border and the ruled background suppressed inside them. -->

### 4.5 Motion

- One non-interactive animation exists in this project: the count-up of figures when the Khata table first enters the viewport, 700ms, once per page load, `prefers-reduced-motion` respected.
- Everything else is response to user action only: focus, press, open, expand, select.
- No fade-and-slide-up on section scroll. No hover lift on cards. No stagger. No parallax. No marquee.
- No animation library. Do not add Framer Motion, GSAP, or AOS. CSS transitions only, 120ms to 200ms, `ease-out`.

**Every async action carries a state.** Any button that triggers a network call (Give, the admin Publish, the monthly-upgrade button on the thank-you page) is a three-state machine, not a single click: `idle → pending → done` or `idle → pending → error`. On `pending`, disable the button, swap its label to a present-participle (`Processing…`, `Publishing…`), and stop there, no spinner animation beyond the label change. On `done`, the label confirms what happened (`Given`, `Published`). This is feedback, not decoration, and it is required, not optional: a donor tapping Give on patchy mobile data with no state change will tap it twice.

**Considered and rejected, so it does not get reintroduced:** scroll-triggered parallax or pinned sections, cursor-following ("magnetic") buttons, image zoom on hover, and staggered multi-element reveals are common in current UI motion trends and are all wrong for this project. They read as an agency portfolio or a SaaS landing page, they pull attention toward the mechanism instead of the numbers, and several of them (magnetic buttons especially) add JS weight to routes with hard budgets. Hover feedback on this site is limited to the existing underline colour shift on links (`a:hover`) and the button press states in section 4.3. If a future brief argues for more of this, it argues against this section directly and needs a human decision, not a quiet addition mid-task.
<!-- 
### 4.6 Imagery

- Zero stock photography. No Unsplash, no Pexels, no generated images, no placeholder image services. If content is missing, ship a text block and flag the gap.
- Every image renders with a caption in the form `Place, district. DD Mon YYYY.` A photo component that allows an empty caption is a build failure.
- No filters, duotone, overlays, or colour grading on photographs.
- `next.config` image domains allowlist contains the media host and nothing else.
- Icons: Lucide, 1.5px stroke, 20px. Maximum eight distinct icons across the whole site. Emoji are never UI.

--- -->
<!-- 
## 5. Copy rules

Copy is design content. The same review bar applies.

- Sentence case everywhere. Plain verbs. Short sentences. Active voice.
- Buttons state what happens: `Give ₹501`, not `Submit`, `Proceed`, or `Donate now`. An action keeps its name through the whole flow.
- Never plead, never guilt, never use superlatives about the organisation.
- State needs with a number and a place. `Kitchen at Sabarmati, short ₹38,000 this month` beats anything abstract.
- Errors say what happened and what to do. They do not apologise and they are never vague.
- Empty states are an instruction, not a mood.

**Banned phrases.** Grep for these before closing any task that writes copy:

```
transforming lives
making a difference
together we can
join us in our mission
empowering communities
be the change
every child deserves
your support means
we believe that every
change starts with
```

Placeholder text policy: `lorem ipsum` must never reach a commit. Write real draft copy and mark it `<!-- DRAFT: needs September sign-off -->`. -->

---

<!-- ## 6. Anti-slop checklist

> Superseded — visual direction is now the reference screenshot, see docs/reference/


Run this against every page you build, item by item, before you report a task complete. Report pass or fail per item in the walkthrough with a screenshot crop for any fail.

- [ ] No gradient of any kind
- [ ] No backdrop blur, translucency, or glass effect
- [ ] Exactly one border radius value on rectangular surfaces
- [ ] No `box-shadow` with a blur radius
- [ ] Hero is not centred text plus two buttons plus a floating mockup
- [ ] No animated counters outside the Khata
- [ ] No "Trusted by" logo strip
- [ ] No emoji as UI
- [ ] No bento grid
- [ ] No hex, rgb, or hsl value outside `tokens.css`
- [ ] No Tailwind default palette classes
- [ ] No Inter, Poppins, Montserrat, or Roboto
- [ ] No banned copy phrase present
- [ ] No image without a place and date caption
- [ ] No testimonial carousel
- [ ] No `lorem ipsum`
- [ ] No ALL CAPS text
- [ ] No arrow glyph in link or button text
- [ ] Page matches `docs/reference/styleguide.png` on type scale and spacing rhythm

--- -->

## 7. Code conventions

- Next.js 15 App Router, TypeScript strict, Tailwind v4.
- **Server components by default.** Add `'use client'` only when an interaction genuinely requires it, and say why in the PR body.
- Tokens are consumed through Tailwind `@theme` custom properties. **Arbitrary values in JSX are forbidden**: no `bg-[#fff]`, no `p-[13px]`, no `text-[15px]`. If the value you need is not in the scale, the design is wrong, not the scale.
- Radix primitives for dialog, select, accordion, tooltip. shadcn/ui may be used as a **code source only**: copy the component in, then delete its styling entirely and rebuild against our tokens. Shipping shadcn's default look is a build failure.
- Drizzle for schema and queries. Raw SQL only inside `lib/db/sql/` with a comment explaining why the query builder was insufficient.
- Money is `bigint` paise in the database, `number` paise in TypeScript, formatted only at the render boundary by `formatINR()` in `lib/format.ts`. Never format money inline.
- Dates are stored UTC, rendered in Asia/Kolkata. The week boundary for the ledger is Monday 00:00 IST to Sunday 23:59 IST.
- Zod at every trust boundary: form input, webhook payload, route params, env.
- No `any`. No `@ts-ignore` without an adjacent comment naming the issue.

### 7.1 Dependency policy

Adding a dependency requires human approval. Ask, do not install.

Pre-approved: `next`, `react`, `tailwindcss`, `drizzle-orm`, `zod`, `next-intl`, `lucide-react`, Radix packages, `razorpay`, `resend`, `@react-email/*`, `next-auth`, `@vercel/og` (share cards and OG images, rendered from the same self-hosted fonts as the site, no separate design tool), `@react-pdf/renderer` (donation receipts, typeset against the same type scale, not a headless-browser PDF), `sharp` (photo resize and format conversion only — never colour, filter, or crop in a way that changes the photograph's content), `vitest` (unit tests, including the ledger-integrity and `formatINR` cases), `@playwright/test` (the one end-to-end checkout path), `@sentry/nextjs` (error monitoring — `beforeSend` PII scrubbing is mandatory, see `docs/production-scaffold.md` A.3), `@upstash/ratelimit` + `@upstash/redis` (rate limiting on `/api/donate` and receipt lookups).

Explicitly forbidden: any chart library, any animation library, any UI kit shipped as a styled package (MUI, Chakra, Mantine, Ant), moment.js, lodash, any icon pack beyond Lucide, any carousel library.

### 7.2 Route budgets

Measured and reported in the walkthrough. Over budget is a failed task.

| Route | Client JS budget |
|---|---|
| `/give` | 60KB |
| `/khata` | 40KB |
| `/` | 120KB |
| everything else | 100KB |

`/khata` must render fully without JavaScript. Test with JS disabled.

---

## 8. File ownership

When multiple agents run in parallel, stay inside your lane. Touching another agent's paths without coordination is how merge conflicts and silent regressions happen.

| Lane | Owns | Must not touch |
|---|---|---|
| A: marketing | `app/(marketing)/**`, `components/marketing/**` | `lib/ledger/**`, `lib/payments/**`, `app/admin/**` |
| B: ledger | `app/khata/**`, `lib/ledger/**`, `components/khata/**` | `app/give/**`, `lib/payments/**` |
| C: payments | `app/give/**`, `app/api/webhooks/**`, `lib/payments/**` | `lib/ledger/**`, `app/admin/**` |
| D: admin | `app/admin/**`, `components/admin/**` | `app/(marketing)/**`, `app/give/**` |

Shared and coordinated: `lib/db/schema.ts`, `app/globals.css`, `tailwind.config`, `components/ui/**`, `docs/**`.

Changing anything in the shared set requires you to announce it in the task artifact before you edit, and to re-run the styleguide screenshot comparison afterwards.

---

## 9. Approval gates

Stop and wait for a human on any of these. Produce an `implementation_plan.md` first and do not proceed to execution until it is approved, regardless of the artifact review policy setting.

- Any change to `lib/ledger/**`
- Any migration touching `ledger_entries`, `ledger_proofs`, `donations`, or `subscriptions`
- Any change to `app/api/webhooks/**`
- Any change to the six colour tokens or the type scale
- Adding a dependency
- Anything on `/legal/**` or the footer compliance block
- Anything that touches PAN, phone, or address handling
- Deleting a test

Everything else may proceed under normal execution mode.

---

## 10. Verification protocol

A task is not complete when the code compiles. It is complete when there is evidence.

Every UI task, in the walkthrough:

1. Run `pnpm lint:design` (see section 11) and paste the full output.
2. Open the route in the browser at 390px, 768px, and 1440px. Attach all three screenshots.
3. Compare against `docs/reference/styleguide.png`. List every divergence in type size, spacing, colour, or radius. "No divergence" is only acceptable if you actually looked.
4. Tab through the page with the keyboard. Confirm every interactive element has a visible focus ring and the order is sensible.
5. Report the client JS bundle size for the route against its budget.
6. Run the anti-slop checklist from section 6 and report pass or fail per item.

Every ledger or payment task, additionally:

7. Write the tests that prove the non-negotiables in section 3 **before** writing the feature. Paste the failing output, then the passing output.
8. Drive the real flow in the browser end to end and attach the recording. For payments, that means completing a test payment and showing the webhook landing.

Screenshots of your own code are not verification. Screenshots of the rendered page are.

---

<!-- ## 11. Design lint
k first.

```bash
#!/usr/bin/env bash
set -uo pipefail
fail=0
check () { # $1 = pattern, $2 = message, $3 = path glob
  if grep -rnE "$1" --include="$3" app components lib 2>/dev/null; then
    echo "FAIL: $2"; fail=1
  fi
`pnpm lint:design` runs `scripts/design-lint.sh`. Keep it passing. If you add a legitimate exception, you are almost certainly wrong, so as
}

check '#[0-9a-fA-F]{3,8}\b' 'raw hex outside tokens.css' '*.tsx'
check 'rgba?\(|hsla?\(' 'raw rgb/hsl colour' '*.tsx'
check 'box-shadow:[^;]*[0-9]+px [0-9]+px' 'shadow with blur radius' '*.css'
check 'shadow-(sm|md|lg|xl|2xl)' 'tailwind blur shadow utility' '*.tsx'
check 'rounded-(sm|md|lg|xl|2xl|3xl|full)' 'off-scale border radius' '*.tsx'
check 'gradient' 'gradient' '*.tsx'
check 'backdrop-blur|backdrop-filter' 'backdrop blur' '*.tsx'
check 'text-(gray|slate|zinc|neutral|stone|red|blue|green|amber)-[0-9]' 'tailwind default palette' '*.tsx'
check 'bg-(gray|slate|zinc|neutral|stone|red|blue|green|amber)-[0-9]' 'tailwind default palette' '*.tsx'
check '\[[0-9]+px\]|\[#' 'arbitrary tailwind value' '*.tsx'
check 'uppercase|text-transform: *uppercase' 'uppercase text' '*.tsx'
check 'Inter|Poppins|Montserrat|Roboto|Lato' 'banned typeface' '*.tsx'
check 'lorem ipsum' 'placeholder text' '*.tsx'
check 'transforming lives|making a difference|together we can|join us in our mission|empowering communities|be the change' 'banned copy phrase' '*.tsx'
check 'unsplash|pexels|placehold|picsum' 'stock or placeholder image' '*.tsx'
check '→|↗' 'arrow glyph in copy' '*.tsx'

exit $fail
```

The lint catches the mechanical violations. It does not catch a page that is technically compliant and still looks generic. That judgement is yours, and section 6 item 19 is where you exercise it.

--- -->

## 12. Git

- Branch per task: `lane/short-description`, for example `ledger/append-only-constraints`.
- Atomic commits. One logical change each. Conventional commit subjects.
- Never commit `.env*`, media originals, or anything under `docs/reference/` larger than 500KB.
- Never force push a shared branch.
- Never commit generated screenshots into `app/` or `components/`. They live in `docs/walkthroughs/`.

---

## 13. Communication

- If the brief does not cover a decision, make the smallest reasonable choice, ship it, and list it in the walkthrough under `Decisions I made that the brief does not cover`. Do not silently invent design direction.
- If you are blocked, stop and say what you need. Do not build a placeholder version of a blocked feature.
- If you find something in the brief that is wrong or internally inconsistent, say so directly. The brief is a document, not an authority.
- Do not report a task complete with known failures folded into the summary. List them as failures.

---

## 14. Standing reminders

- The ledger is the product. Everything else supports it.
- This site is used on cheap Android phones over patchy mobile data. Test there, not on a laptop.
- A donor giving ₹101 deserves the same checkout quality as one giving ₹51,000, and there are far more of the first kind.
- Anything that makes the site look more impressive at the cost of making the numbers less checkable is the wrong trade.
- When in doubt, remove something.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
