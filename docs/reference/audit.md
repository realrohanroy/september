# Donatekart Homepage — Visual Design Audit

**Source:** `docs/reference/screencapture-donatekart-2026-09-23-22_44_01.png`  
**Purpose:** Reference-only. Structural patterns, colour, spacing, typography, and component logic extracted for September's design phase. No pixel, logo, or wordmark from Donatekart is or will be imported into the September codebase.  
**Hard rule applied throughout:** Where a finding is ambiguous between "reusable pattern" and "Donatekart-specific branded content", it is flagged and excluded rather than included.

---

## 1. Section Inventory (top to bottom)

### 1.1 Top bar / announcement strip
A full-width horizontal band sitting above the main nav. It appears to contain one or two rotating promotional or cause-spotlight messages. Each message includes a short headline, a sub-line, and a high-contrast CTA button. The background is a mid-dark solid (see colour section). This is functionally a "marquee" or "billboard" strip, not a nav item.

> **⚠ Flag:** The strip contains Donatekart's own campaign photography and branding. The strip *structure* (full-width coloured band, left text, right CTA, photograph area) is a reusable layout pattern. The photograph and wordmark are not.

### 1.2 Global navigation bar
A white or very light background bar. Left side: logotype (brand-specific, excluded). Centre or right-of-centre: five to six navigation labels ("Causes", possibly "Fundraise", "Initiatives", "About", "Support" or similar labels — text is small and hard to resolve at screenshot scale). Far right: two action items that appear to be a "Login" link and a "Select a Language" dropdown or toggle. The bar is compact, approximately 48–56px tall.

> **⚠ Flag:** Nav labels are brand-specific content. The structure (logotype left, nav centre/right, auth+language far right) is a reusable layout pattern. Labels are not.

### 1.3 Hero carousel / banner
Immediately below the nav. A large, full-width rotating hero banner — at least two slides are implied by arrow/dot navigation visible at the edges. Each slide contains a full-bleed photograph, an overlaid text block (headline, sub-line), and an orange CTA button. The text overlay appears left-aligned on the left half of the image. The primary headline is large, bold, and uses a contrasting colour (orange or white depending on slide) over the photograph.

> **⚠ Flag:** Both slides contain Donatekart's own campaign photography and specific campaign copy. The structural pattern (full-width photo, left-aligned text block, CTA, slide indicators) is a layout convention. The photograph and copy are not reusable.

### 1.4 "Explore causes" section
Below the hero. Begins with a small section label ("Please choose your cause"). Immediately beneath: a horizontal icon-and-label filter row showing cause categories, each with a small icon and label (e.g. "Children", "Food", "Medical", "Disability", etc.). This is a horizontal scrollable or wrapping filter strip.

Below the filter: a grid of cause cards. At screenshot scale I can identify approximately nine cards in a 3-column layout, two rows visible before a "View All" link. Each card contains a rectangular photograph, a headline (cause campaign title), a fundraiser name or NGO name in smaller text, a progress bar (thin horizontal bar showing percentage funded), a monetary figure (amount raised), a supporter count figure, and a CTA button.

> **⚠ Flag:** Card photographs and campaign titles are Donatekart-specific content. The card *structure* (photo, title, sub-text, progress bar, amounts, CTA) is a reusable pattern. Progress bar style — see Component section.

### 1.5 "Subscribe to Charge" / "Donate Monthly" section
A full-width section with a light mint/seafoam green-tinted background (distinct from the main white). Contains a section label and "Donate Monthly" as the primary heading. Below: a row of approximately three cards — category or cause cards for recurring donations. Each card shows a photograph, a title, and a "Donate now" CTA button. A small "Starts from ₹502" type label appears beneath each CTA.

> **⚠ Flag:** The section photographs and cause titles are Donatekart-specific. The structural idea (distinct background section, subset of causes promoted as recurring, minimum-amount nudge) is a reusable pattern. The mint-green background tint is a brand choice — see Colour section.

### 1.6 "Medical Emergencies" section
A second cause-category section, similar structure to §1.4 but scoped to medical causes. A section heading ("Medical Emergencies") followed by a 3-column row of cause cards. Cards follow the same structure as §1.4 (photo, title, financial figures, progress bar, CTA). A "View All" link appears below the row.

> **⚠ Flag:** Same exclusion as §1.4 on photography and campaign specifics.

### 1.7 "India's Most Trusted Donation Platform" — hero stats band
A large full-width band with a deep blue/navy background (the most visually prominent non-white section). Contains large headline text — this is Donatekart-specific copy, excluded from September. Beneath the headline: three or four animated stat counters, each showing a large bold number and a label ("400+ Cr", "25 Lakhs", "10,000+" or similar figures — Donatekart-specific metrics, excluded). The background appears to include a subtle radial or circular graphic element.

> **⚠ Flag:** The specific copy and stat figures are Donatekart brand claims, not reusable. The pattern (dark full-width banner, large headline, supporting metrics in large type) is a common NGO trust-signal pattern. September's brief explicitly bans animated counters outside the Khata and "Our Impact" sections with counters and no source.

### 1.8 Trust/feature icon strip
Immediately below the navy banner: a narrow horizontal strip containing approximately five icon-and-label pairs ("5,000+ verified NGOs", "Regular Updates", "Multiple Causes", "Product Giving", "100% Transparent", "Trusted by 3.5 Million Donors" — figures are Donatekart-specific, excluded). Each pair uses a small coloured icon and a brief text label. The strip sits on a white or near-white background.

> **⚠ Flag:** Specific claims and figures are Donatekart content. The structural pattern (narrow strip of icon-label pairs as trust signals) is a widely used layout convention.

### 1.9 "How it works" section
A section heading ("How it works") followed by a two-column layout: left column for "Donors" flow, right column for "Charities" flow. Each column shows a numbered or stepped list of short action descriptions. The section contains an embedded card/panel showing form-like UI. Background appears to include a large photographic image partially visible behind.

> **⚠ Flag:** The section photograph is Donatekart's own content. The two-column donor/charity "how it works" layout is a reusable structural pattern. September is not a platform (single NGO, not a marketplace), so the dual-audience framing is not applicable.

### 1.10 Testimonials section
A section heading ("Testimonials") followed by a tabbed or filtered testimonials block. Tabs appear to show "All", "NGOs", "Collections" or similar filter labels. Below: three testimonial cards visible, each with a quotation mark glyph, a paragraph of testimonial text, a profile name, a role or location label, and a small profile photograph. A carousel indicator or arrow is present.

> **⚠ Flag:** All testimonial content and photographs are Donatekart-specific. This is also a testimonial carousel — September's brief explicitly forbids testimonial carousels (AGENTS §1.4, brief §2.3). Noted as a negative example. Do not adopt this pattern.

### 1.11 "Why Donatekart?" / feature grid
A section with a brand-specific heading (excluded). Below: a 2×3 or 3×2 grid of feature cells, each with a small coloured icon, a feature title, and one to two lines of supporting copy. Observed titles (approximately): "Product Giving", "Verified & Trusted", "Guaranteed Updates", "Easy Setup", "Secure & Private", "Receive Support", "Support that Listens".

> **⚠ Flag:** The heading is Donatekart-specific. The feature grid *structure* is generic and widely used. The icon style (small coloured icons with short labels) is a reusable pattern.

### 1.12 Press/media recognition strip
A section heading (Donatekart-specific copy, excluded) followed by a horizontal strip of press or recognition logos: masthead logos of publications or partners. These are third-party brand logos displayed by Donatekart — not reusable assets.

> **⚠ Flag:** Entire visual content here is brand-specific. The structural pattern (media/recognition logo strip) is a "Trusted by" layout convention — September's brief explicitly forbids this (AGENTS §6). Noted as a negative example.

### 1.13 "Impact Across India" / India map section
A section heading ("Impact Across India") followed by a two-column layout. Left column: a choropleth or highlight map of India with states shaded at different opacities in a single accent colour (appears to be the orange/saffron accent). Right column: a data table listing Indian states and a corresponding "Lives Impacted" or similar numerical figure beside each state.

> **⚠ Flag:** The specific figure data and impact claims are Donatekart-specific content. The structural idea (map + data table side by side) is a generic data-visualisation pattern. The map as a geographic asset (outline of India) is a freely available public resource, not a Donatekart-specific asset — but whether September would use this section type is a separate design decision not currently specified in the brief.

### 1.14 Full-bleed promotional CTA banner
A very large full-width section. Left approximately 55% of the width: a strong orange/saffron solid-colour panel with a large bold multi-line statement headline in white text (Donatekart campaign copy — excluded) followed by a white outlined CTA button. Right approximately 45%: a full-bleed photograph (Donatekart-specific — excluded).

> **⚠ Flag:** The headline and photograph are Donatekart-specific content. The structural pattern (two-panel section: solid colour left with headline + CTA, photograph right) is a reusable layout convention.

### 1.15 Footer
- Top row: logotype far left (brand-specific, excluded), social media icons far right (icons for Twitter/X, Facebook, Instagram, LinkedIn, YouTube — approximately)
- Multi-column link structure below: approximately 5 columns ("Donate To", "Fundraise", "Initiatives", "Discover", "Contact us"). Each column has four to six link labels beneath it.
- A horizontal rule separates footer columns from the bottom strip.
- Bottom strip: newsletter email signup field + "Subscribe" button, inline. Copyright/legal text.

> **⚠ Flag:** Logotype, social handles, and specific link labels are Donatekart brand content. The footer *structure* (logo top-left, social icons top-right, multi-column link columns, bottom newsletter strip) is a standard footer layout pattern.

---

## 2. Colour Palette

All values are best-effort visual reads from the screenshot. They are **visual approximations only** — not confirmed brand values. Do not import these hex values into September.

| Role | Sample location | Best-effort hex | Notes |
|---|---|---|---|
| Page background | Main content area | `#FFFFFF` or `#FAFAFA` | Pure white or near-white; clean and very neutral |
| Body text | Cause card titles, body copy | `#1A1A1A` or `#222222` | Near-black, high contrast; neutral dark |
| Subtext / secondary text | Card metadata (counts, amounts) | `#666666` or `#777777` | Medium grey; clearly distinct from headings |
| Primary accent / CTA | "Donate now" buttons, active UI | `#F06918` or `#E96B1B` | Warm orange-saffron; used pervasively for all primary actions |
| Progress bar fill | Cause cards | `#F06918` | Same primary accent |
| Section headings | Section heading text | `#1A1A1A` | Same near-black as body or marginally heavier |
| Navy/dark band background | §1.7 "Most Trusted" section | `#1A2E5E` or `#0F1F4B` | Deep blue-navy; used only for that one trust-signal section |
| Mint/seafoam section background | §1.5 "Donate Monthly" | `#E8F5F0` or `#EBF6F2` | Very pale mint-green; a single-section differentiation tint |
| Button text on orange | CTA buttons | `#FFFFFF` | White on orange |
| Borders / rules | Card outlines | `#E0E0E0` or `#EBEBEB` | Very light grey; hairline at card edges |
| Progress bar background | Cause cards | `#E0E0E0` | Same light grey as borders; unfilled portion |
| Orange CTA section background | §1.14 full-bleed CTA panel | `#F06918` or `#E8600A` | Same orange; at large scale appears slightly richer/deeper |

**Palette summary:** A two-accent system. A dominant warm orange (`~#F06918`) handles all primary actions, progress fills, and the §1.14 CTA section. A deep navy (`~#1A2E5E`) anchors one trust-signal band. The rest of the site is white/near-white with near-black text and light-grey rules. One section uses a pale mint tint. No secondary accent colour in the functional sense — orange does all the emotional and UI heavy lifting.

**Contrast with September's palette:** September intentionally diverges from this model. The "saffron/orange for every button" approach is the mainstream Indian NGO default, which the September brief identifies as the template to escape. September uses `--sindoor` (`#AE3327`) — constrained to a single use — not as a background wash or a pervasive accent.

---

## 3. Typography

> **Note:** A screenshot carries no font metadata. All identifications below are **visual approximations only** — closest freely licensed Google Font matches based on letterform character, proportions, and weight. They are stated as approximations, not confirmed matches.

### 3.1 Primary headings (section headings, hero headlines)

**Visual character:** Sans-serif, geometric-leaning with some warmth. Bold to extra-bold weight. Title case or sentence case (varies by context). Letter spacing neutral to slightly tight. Proportions are moderately wide — not condensed. The `a` and `g` appear double-storey (humanist influence). Line height appears tight at approximately 1.1–1.2 for large display headings.

**Closest Google Font approximations (visual only):**
- **Nunito Sans** (700–800 weight) — rounded geometric quality and double-storey letterforms; warmth is close
- **DM Sans** (700 weight) — slightly more neutral geometric, but proportions and headline weight character are close

### 3.2 Body text / card body / metadata

**Visual character:** Sans-serif, clean and neutral. Regular to medium weight (400–500). Letterforms appear more utilitarian and less geometric than the headings — closer to humanist or transitional sans. Generous x-height, readable at small sizes. Line height approximately 1.5–1.6 for body text blocks.

**Closest Google Font approximations (visual only):**
- **Hind** (400–500 weight) — humanist sans, large x-height, designed for screen legibility; matches the utilitarian character closely
- **Noto Sans** (400–500 weight) — similarly neutral humanist, excellent legibility at small sizes; proportions are close

### 3.3 Monetary figures / numbers

The large fundraising amounts and stats appear to use the same sans-serif as headings — not a monospace. Numbers are bold. They appear to be proportional numerals, not tabular. No evidence of a dedicated monospace face for financial figures.

**Note for September:** This is the opposite of September's approach. September uses IBM Plex Mono for ledger numerals to enforce tabular alignment and signal accounting precision. Donatekart's approach treats monetary figures as marketing claims (bold, proportional, attention-grabbing) rather than accounting data (precise, aligned, verifiable). This is a meaningful design-philosophy difference and a useful contrast to point to.

### 3.4 CTA button text

Medium-bold weight, same sans-serif family as body. Button text is compact (approximately 13–15px equivalent). Case is hard to confirm at screenshot resolution — appears sentence case on some buttons.

---

## 4. Spacing Rhythm

All values are relative approximations from visual inspection. No precise pixel measurements are possible from a screenshot.

| Element | Approximate value | Notes |
|---|---|---|
| Section top/bottom padding | ~60–80px | Moderately spaced; not generous, not cramped |
| Card grid gutter | ~16–20px | Cards in the cause grid are close but not touching |
| Card internal padding | ~12–16px | Modest internal padding; photograph fills top of card edge to edge |
| Section heading to content gap | ~20–28px | Heading is close to its content |
| Nav height | ~48–56px | Compact nav bar |
| Cause filter row height | ~40–48px | Compact horizontal category filter strip |
| Hero/banner height | ~320–400px | Large, dominant first impression |
| Body text line-height | ~1.5–1.6 | Comfortable reading rhythm |
| Button vertical padding | ~10–14px | Moderately tall buttons, not chunky |

**Spacing character overall:** Donatekart's rhythm is functional but not generous. The page prioritises information density — many causes shown quickly — over editorial breathing room. The page feels busy at scroll. This is the opposite of September's intent: September is ledger-first and transparency-anchored, not an infinite scroll of causes.

**Baseline grid:** No evidence of a deliberate baseline grid. Spacing appears driven by UI convention rather than typographic rhythm. This is relevant because September's 24px baseline grid is a deliberate and visible differentiator.

---

## 5. Component Styles

### 5.1 Buttons

**Primary CTA (filled):**
- Fill: orange (~`#F06918`)
- Text: white
- Border radius: approximately 4–6px — noticeably rounded but not pill-shaped
- No visible border on the filled state
- Padding: approximately 10–14px vertical, 20–28px horizontal
- Font weight: bold/semibold
- No icon in most CTA buttons

**Secondary / ghost button:**
- Outline style; the §1.14 banner uses a white-outlined button (`border: 1px solid white; background: transparent; color: white`)
- Same radius as primary

**Note for September:** September uses `2px` radius on all buttons and inputs — far more restrained than Donatekart's `4–6px`. The brief explicitly calls out "a single 12px radius on everything is the SaaS-kit tell." Donatekart's radius is not the SaaS extreme but is still more rounded than September's system.

### 5.2 Cause cards

- Background: white
- Border: `1px solid` light grey (~`#E0E0E0`)
- Border radius: approximately 4–8px — cards are visibly rounded
- No visible shadow blur (or very subtle); relies on border rather than shadow for elevation
- Structure top to bottom:
  1. Photograph (full-width within card, flush to card edge at top and sides)
  2. Title (bold, 1–2 lines)
  3. Fundraiser/NGO sub-label (small, grey)
  4. Progress bar (thin, ~4px height, full card width, rounded caps)
  5. Amount raised + supporter count (small, side by side)
  6. CTA button (full-width or close to full-width within card)
- Card width: approximately 300–340px at the 3-column layout; cards are equal width

**Note for September:** September's cards use `0` border radius (per brief §3.3), `--card` background, and a `1px solid var(--rule)` border only. No shadow. Donatekart's card radius is a visible departure and a commonly used default.

### 5.3 Progress bars

- Track background: light grey (~`#E0E0E0`)
- Fill: orange accent
- Height: approximately 4px
- Rounded end caps on both track and fill
- No label text inside the bar; amount text appears separately

**Note for September:** September's brief describes a "thin progress rule in `--rule` filled `--ink`" for the gap section. The idea is similar; the styling is different (ink fill not accent-colour fill, `--rule` track not `#E0E0E0`).

### 5.4 Form fields / inputs

Visible in the "How it works" section panel:
- White background
- Light grey border
- Approximately 4–6px radius
- Standard height (~36–40px)
- Placeholder text in grey

### 5.5 Navigation

- Full-width white bar
- Logotype far left
- Nav links centre-right, regular weight, grey or near-black
- Auth actions far right (Login link + language toggle)
- No visible bottom border on the nav — relies on contrast with content below
- No active/selected state visible at screenshot scale

### 5.6 Footer

- White or near-white background
- Multi-column layout (~5 columns)
- Logotype top-left
- Social icons top-right (icon-only, small)
- Column headings: bold/semibold
- Link text: regular weight, grey
- Horizontal rule separating footer columns from bottom strip
- Bottom strip: inline newsletter input field + "Subscribe" button; copyright text in small grey

### 5.7 Section headings

- Left-aligned in most sections
- No eyebrow labels in the strict sense; some sections have a small preface line ("Please choose your cause") in small text above the main heading — functionally similar to an eyebrow
- An orange underline accent or short coloured rule appears on or near some section headings (visible but hard to confirm at screenshot resolution)

> **⚠ Flag:** If the coloured underline accent is on section headings, this is a Donatekart-specific styling choice. September's brief bans "accenting a single word of a headline in a different colour" (AGENTS §4.2). Noted as a negative example. Small preface lines above headings function as eyebrow labels — also banned in September's brief.

---

## 6. Imagery Style

### 6.1 Photography versus illustration

The site is almost entirely photograph-driven:
- Large full-bleed campaign/cause photographs in the hero carousel
- Rectangular cause photographs in every cause card
- A large background photograph in the "How it works" section
- A large full-bleed photograph on the right half of the §1.14 CTA banner
- Profile photographs in the testimonials
- No illustration system visible anywhere; no abstract blob shapes, no SVG decorative elements beyond possibly a subtle circular motif in the navy band (§1.7)

### 6.2 Photography treatment

- **No visible duotone, filter, or colour overlay** on most photographs — reproduced as-is
- **Hero photographs** may have a very subtle dark overlay to aid text legibility; hard to confirm at screenshot resolution
- **Card photographs** appear unfiltered, cropped to a consistent height within each card
- **No captions** visible on any photograph

> **⚠ Flag:** Absence of captions is noted. September mandates `Place, district. DD Mon YYYY.` captions on every photograph. Donatekart's uncaptioned approach is the opposite convention and a negative reference.

### 6.3 Image shapes and containment

- Card photographs: rectangular, rounded corners matching the card radius (approximately 4–8px on top-left and top-right, `0` at the bottom where photograph meets content), full width of card
- Hero photographs: full-bleed rectangular, no rounding visible
- Section background photographs: full-bleed, no frame or rounding
- Profile photographs in testimonials: appear circular (50% radius), approximately 40–48px diameter

### 6.4 Icons

The cause category filter strip and feature grid (§1.11) use small icons:
- Appears to be a filled or semi-filled style — not purely outline/line icons
- Colours are varied — each icon in a distinct colour matching a category (blue, green, orange, red, purple, etc.)
- Size approximately 24–32px
- Representational icons (child figure, hospital cross, plate symbol, etc.)

> **⚠ Flag:** The specific icon set is Donatekart's. September's brief specifies Lucide line icons at 1.5px stroke, 20px, maximum eight distinct icons across the whole site. Donatekart uses far more icons in far more colours — the opposite of September's constraint.

---

## 7. Patterns Worth Noting (for September's design decisions)

Structural or interaction patterns that appear in the screenshot and that the September brief has already addressed or explicitly rejected. Recorded here as a decision log.

| Donatekart pattern | September's position |
|---|---|
| Hero carousel with multiple slides | Explicitly forbidden: "No hero carousel" (brief §1.4) |
| Animated stat counters (§1.7) | Forbidden outside the Khata: "No animated counters outside the Khata" (AGENTS §6) |
| Testimonial carousel (§1.10) | Forbidden: "No testimonial carousel of beneficiaries" (brief §1.4, AGENTS §6) |
| "Trusted by" / press logo strip (§1.12) | Forbidden: "No 'Trusted by' logo strip" (AGENTS §6) |
| Progress bar showing percentage funded | Legitimate UI pattern. September's gap section uses a similar device with `--rule` track filled `--ink` — more restrained |
| Cause cards: photo first, amounts second | September inverts this: unit costs and ledger rows first, photography secondary |
| Unit pricing absent | September requires unit pricing as the primary cause framing ("one cow, one day · ₹51") |
| Multiple scrolling cause category sections | September homepage does not enumerate all causes in scrolling sections; ledger is the homepage centrepiece |
| All-caps preface labels above headings | Banned in September's brief (AGENTS §4.2): "ALL CAPS anywhere" and "Eyebrow labels above headings" |
| Orange as primary action colour used everywhere | September uses sindoor (`#AE3327`) for donate action only, strictly constrained |
| Uncaptioned photographs | September mandates caption on every image (brief §3.6, AGENTS §4.6) |
| "Most Trusted Platform" self-claim copy | September's voice guidelines forbid superlatives about the organisation (brief §2.2, AGENTS §5) |
| Two-column hero: left text/photo, right photo/content | Already specified in September's brief (§5.1) — confirmed as a broadly readable layout |

---

## 8. Summary Assessment

**What Donatekart does well at the structural level:**
- Clear primary action colour applied consistently
- Cause card structure communicates key data (name, progress, amounts) efficiently
- The "Impact Across India" map + state data table is a transparency device worth noting
- Footer multi-column link structure is comprehensive

**What Donatekart does that September should not replicate:**
- Information density and carousel-first hero create noise, not trust
- Cause cards are marketed (photograph first) rather than accounted (units, costs, proof first)
- "Most Trusted" self-claims are exactly the superlatives September's voice guidelines forbid
- No captions on photographs
- Testimonial carousel (forbidden)
- Press logo trust strip (forbidden)
- Animated stat counters (forbidden outside the Khata)
- The site is a fundraising marketplace (many NGOs, infinite causes) rather than a single-organisation ledger — the structural comparison is therefore limited and should not be over-read

**What September can extract at the pure structural level:**
- The cause card component structure (photo + metadata + progress bar + CTA) as a baseline to deliberately invert
- The two-panel split layout (left content, right photograph) confirmed as broadly readable
- The idea of a differentiated-background section for a specific content type (recurring giving) — executed differently in September with no tint, but the sectioning intent is reasonable

---

*Written: 2026-09-24. No photographs, logos, wordmarks, or copyrighted imagery from Donatekart are referenced as reusable assets. Colour values, spacing approximations, and structural observations are the only extractable outputs from this audit.*
