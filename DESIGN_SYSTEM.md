# Code Victorian — Design System

Version 1.0 · April 2026

## Palette

### Navy + Gold (default)

| Token | Hex | Usage |
|---|---|---|
| `--navy` | `#0E1A2E` | Primary background |
| `--navy-deep` | `#070E1A` | Deeper background, footer |
| `--ink` | `#0B1320` | Deepest dark, text on gold |
| `--parchment` | `#F4EDE0` | Foreground text on navy |
| `--parchment-2` | `#EBE2D0` | Cards on light theme |
| `--gold` | `#C9A24B` | Primary accent |
| `--gold-soft` | `#E8C778` | Soft gold, hover state |
| `--gold-deep` | `#9C7A2E` | Dark gold, ivory theme |
| `--hairline` | `rgba(201, 162, 75, 0.28)` | Thin rules |
| `--rule` | `rgba(201, 162, 75, 0.35)` | Section rules |

### Alternate themes

- **Ivory** (`data-theme="ivory"`) — parchment background, gold-deep text, gold accent
- **Oxblood** (`data-theme="oxblood"`) — `#3A1418` background, gold accent
- **Light** (`data-theme="light"`) — `#FBF7EE` background, navy text, gold accent

## Typography

### Families

| Role | Stack |
|---|---|
| Display | `'Playfair Display', 'Cormorant Garamond', Georgia, serif` |
| Serif (lede, quotes) | `'EB Garamond', Georgia, serif` |
| Body | `'Inter', 'Helvetica Neue', Arial, sans-serif` |
| Mono (labels, dates) | `'JetBrains Mono', ui-monospace, monospace` |

### Scale

| Element | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|
| H1 display | `clamp(56px, 9vw, 148px)` | 500 | 1.02 | -0.012em |
| H2 display | `clamp(44px, 6.5vw, 96px)` | 500 | 1.02 | -0.012em |
| H3 display | `clamp(28px, 3.2vw, 44px)` | 500 | 1.02 | -0.012em |
| Lede | `clamp(18px, 1.5vw, 22px)` | 400 (serif) | 1.55 | 0 |
| Body | 16px | 400 | 1.6 | -0.005em |
| Eyebrow | 11px | 500 | 1 | 0.28em (uppercase) |
| Roman | 14–18px | 400 italic (display) | 1 | 0.08em |
| Button | 11px | 500 | 1 | 0.24em (uppercase) |
| Mono label | 10–11px | 400 | 1 | 0.14–0.28em (uppercase) |

### Rules of use

- **Display italic with gold colour** is the signature treatment for emphasised words in headlines. Apply `.display.italic` + `color: var(--accent)` on one or two key words per headline.
- **Small-caps eyebrows** always have a leading 36px gold rule (`::before` pseudo).
- **Roman numerals** mark sections (I, II, III, IV) and issue numbers (No. LXI).

## Ornamentation

- Corner-bracket ornaments on featured cards (`.ornament::before` + `::after`).
- Fleur divider: `✦  ❦  ✦` centered with 80px hairlines either side.
- Double-rule separator: a pair of parallel 1px hairlines 4px apart.
- Striped placeholder plates for imagery: 135° repeating gold lines over `--bg-2` with a monospace label.

## Spacing

| Token | Value |
|---|---|
| `--sec-py` | 140px (88px in tight density) |
| `--sec-px` | `clamp(24px, 6vw, 96px)` |
| `--stack` | 28px (18px in tight density) |

Max-widths: `.wide` 1440, `.medium` 1080, `.narrow` 760.

## Components

### Nav
- Fixed, blurred backdrop (`backdrop-filter: blur(14px)`).
- Three columns: left links · centered brand mark · right links + join button.
- Links: 11px uppercase 0.22em spacing; active link has a 1px gold underline.
- Brand mark: logo image + "Code Victorian" in display + small-caps "Est. MMXXVI" sub-label in gold.

### Hero
- Three layout variants via `data-layout`:
  - `full` — full-bleed background video with vignette overlay.
  - `split` — video on right 50%, text on left 50%.
  - `framed` — video inset as a centered gold-bordered plate; text below.
- Always includes a bottom marquee with stats + issue number.

### Pillars
- Four columns separated by vertical hairlines.
- Each pillar: Roman numeral glyph, display title, muted body.

### Membership cards
- Two cards, featured variant with gold-tinted background and gold border.
- Corner-bracket ornament.
- Tier label (eyebrow), tier name (display), price (display italic gold), feature list with `✦` bullets.

### Donate form
- Frequency tabs (Once / Monthly / Annually) — active tab is solid gold.
- 5-tile amount grid (€10/20/30/40/Custom), square aspect, active tile is solid gold.
- Dynamic button copy reflects selection.

### Newsletter form
- Two-column grid: input + submit button, no gap.
- 1px gold hairline border, no radius.
- Submit: solid gold, uppercase small-caps, 0.28em spacing.

### Footer
- Four columns: brand + blurb / Society / Support / Correspondence.
- Faded footer graphic (sepia, 55% opacity).
- Double rule separates from the copyright row.
- Copyright row: mono, uppercase, 0.14em spacing.

## Tone

- Quiet, confident, editorial.
- No emoji. No gradients beyond subtle radial vignettes. No drop shadows except button-hover glow.
- Language is formal but not stiff; prefer "dispatches" over "newsletter", "patron" over "donor", "correspondent" over "subscriber".
