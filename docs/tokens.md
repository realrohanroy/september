# tokens.md

Exact values only. No other hex, size, or duration is permitted in the codebase. This file is the arbiter when `docs/brief.md`'s prose and the code disagree on a number — the number here wins.

An agent should be able to generate `app/globals.css` and the Tailwind `@theme` block from this file with no judgement calls.

---

## Colour — locked

Six values. This is the complete palette.

```css
:root{
  color-scheme: light only;

  --paper:    #FFFFFF;
  --card:     #FFFFFF;
  --ink:      #1A1A1A;
  --rule:     #E0E0E0;
  --sindoor:  #F06918;
  --haldi:    #1A2E5E;
}
```

Derived, computed only, never hand-picked:

```css
--ink-60: color-mix(in srgb, var(--ink) 60%, var(--paper));
--ink-40: color-mix(in srgb, var(--ink) 40%, var(--paper));
```

Role lock, do not deviate:

| Token | Only use for |
|---|---|
| `--paper` | Page background |
| `--card` | Forms, cards, table surfaces — anything that is a "loose sheet" |
| `--ink` | Text, rules that carry meaning, focus rings |
| `--rule` | Hairlines, borders, the ruled-page background |
| `--sindoor` | The Give button, the Deployed ledger column. Nothing else |
| `--haldi` | The "received, not yet deployed" ledger state. Nothing else |

**Contrast debt to resolve before build:** `--haldi` on `--paper` at 14px is close to the WCAG AA line. Run a real contrast check before shipping. If it fails, darken haldi — do not drop the state, and do not lighten paper to compensate.

**Not yet decided, do not implement:** a marigold accent (`#D97F1C`) and a leaf accent (`#5A6B45`) are under discussion as a seasonal layer outside the ledger, tied to festival giving pushes. They are not approved tokens. If you see them referenced anywhere, treat them as a proposal, not a spec, until this file is updated.

---

## Type — locked

Three families, fixed roles, no fourth family under any circumstance.

```css
--font-display: 'Nunito Sans', sans-serif;
--font-text:    'Hind', system-ui, sans-serif;
--font-num:     'Nunito Sans', sans-serif;
```

| Role | Family | Weights | Where |
|---|---|---|---|
| Display | Nunito Sans | 700, 800 | Headings only |
| Text | Hind | 400, 500, 600 | Body, UI, labels, buttons, nav |
| Numerals | Nunito Sans | 700 | Rupee figures in ledger and receipt tables only |

Self-hosted `woff2`, Latin and Devanagari subset separately, `font-display: swap`. Preload only the weights used above the fold on that route.

**Not yet decided, do not implement:** Fraunces + Karla is under discussion as a warmer alternative to Martel + Hind. Fraunces has no Devanagari cut, so if it is approved, Hindi headings fall back to Rasa, not to Martel. Do not mix Fraunces and Martel in the same build. Wait for this file to name the winner.

### Scale

```css
--text-display: clamp(2.6rem, 6vw, 4.25rem); /* Nunito Sans 800, lh 1.1 */
--text-h1:      2.25rem;  /* Nunito Sans 700, lh 1.15 */
--text-h2:      1.75rem;  /* Nunito Sans 700, lh 1.2 */
--text-h3:      1.25rem;  /* Hind 600,  lh 1.3 */
--text-body:    1rem;     /* Hind 400,  lh 1.6, max-width 68ch */
--text-small:   0.875rem; /* Hind 400,  lh 1.5 */
--text-num:     1.125rem; /* Nunito Sans 700, proportional, lh 1.4 */
```

No size outside this list. If a layout seems to need a seventh size, the layout is wrong, not the scale.

---

## Spacing — locked

One base unit. Every margin, padding, and gap in the codebase is a multiple of it.

```css
--u: 24px;   /* 1u */
```

Permitted multiples: `6px` (0.25u, inline gaps only — icon-to-label, chip padding), `12px` (0.5u), `24px` (1u), `48px` (2u), `72px` (3u), `96px` (4u), `120px` (5u).

Side padding: `20px` below 768px (the one intentional off-scale value, matches native iOS/Android safe margins), `var(--u)` at and above 768px.

Grid: 12 columns, `1200px` max width, `24px` gutters.

---

## Radius and elevation — locked

```css
--radius-control: 4px;  /* inputs, buttons */
--radius-card:    6px;  /* cards, tables, images */
--radius-avatar:  50%;
--shadow-line:    0 1px 0 var(--rule);
--shadow-line-up: 0 -1px 0 var(--rule); /* sticky bars, modals */
```

That is the complete set. No `box-shadow` with a blur radius exists anywhere in this codebase. No radius value outside these three.

---

## Motion — locked

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--dur-fast: 120ms;
--dur-base: 160ms;
--dur-slow: 200ms;
--dur-khata-count: 700ms; /* the one exception, see AGENTS.md 4.5 */
```

Transitions run on `color`, `background-color`, `border-color` only. Never on `transform` or `opacity` for entrance effects — see `AGENTS.md` section 4.5 for what is and is not permitted.

---

## Breakpoints — locked

```css
--bp-sm:  480px;
--bp-md:  768px;
--bp-lg:  1024px;
--bp-xl:  1200px;  /* = content max-width */
```

Verification screenshots are taken at `390px` (mobile, below `--bp-sm`), `768px` (`--bp-md`), and `1440px` (above `--bp-xl`, confirms the page does not stretch past max-width).

---

## Z-index — locked

Not previously specified, and stacking bugs are expensive to unwind later. Fix the scale now.

```css
--z-base:   0;   /* ruled-page background pseudo-element */
--z-content:1;   /* ordinary page content */
--z-sticky: 10;  /* sticky mobile donate bar */
--z-popover:20;  /* select dropdowns, tooltips */
--z-modal:  30;  /* dialogs */
--z-toast:  40;  /* transient confirmation messages, if any exist */
```

Nothing in the codebase sets a raw numeric `z-index` outside this list.

---

## Icons — locked

Lucide, `1.5px` stroke, `20px` grid. Maximum eight distinct icons in the entire site. Starter allocation, adjust only by editing this list, not by adding a ninth silently:

1. `menu` — mobile nav open
2. `x` — close (nav, modal, dialog)
3. `chevron-down` — accordion / expand (Khata row, FAQ)
4. `check` — confirmation states
5. `alert-circle` — error and warning states
6. `download` — CSV export, receipt PDF
7. `share-2` — the WhatsApp share card action
8. `arrow-up-right` — reserved. Do not use for inline links (see `AGENTS.md` 4.2 on arrow glyphs); reserved specifically for external-link indicators on `/who` and `/reports` where the destination leaves the site.

---

## Photography — locked

```css
--photo-ratio: 3 / 2;
```

Full-bleed or column-width, `0` radius, `1px solid var(--rule)` border, caption in `--text-small` directly beneath, no exceptions. Caption format is fixed: `Place, district. DD Mon YYYY.`

---

## Currency formatting — locked

Rupee figures use **Indian digit grouping** (lakhs and crores: `4,18,210`, not the Western `418,210`). This is a visible, immediate tell of whether a site was actually built for an Indian audience, and it is easy to get wrong by default — `Number.toLocaleString('en-US')` produces the wrong grouping, and even `en-IN` locale handling is inconsistent across JS runtimes for edge cases like crores. Do not rely on locale inference.

Contract for `formatINR()` in `lib/format.ts`:

```ts
// Input: integer paise. Output: "₹ 4,18,210" (no decimals if .00,
// "₹ 4,18,210.50" if not). Indian grouping: last 3 digits, then
// groups of 2. Symbol and figure separated by one non-breaking space
// in prose, no space in a ledger table cell where alignment matters.
formatINR(41821000) // "₹4,18,210"
formatINR(41821050) // "₹4,18,210.50"
```

Write a unit test with at least these cases: a 3-digit amount, a 5-digit amount (lakh boundary), an 8-digit amount (crore boundary), and a decimal amount. This is exactly the kind of function that looks trivial and ships wrong.

---

## Change control

This file is edited deliberately, not incidentally. A task that needs a value not listed here stops and asks, it does not add the value and move on. If a value is approved, it is added here first, in its own commit, before it appears in any component.