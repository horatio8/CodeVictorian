# CLAUDE.md — Code Victorian Design Handover

> **For Claude Code:** This folder (`design-handover/`) contains the approved visual design for Code Victorian. When working on this repository, treat its contents as the **single source of truth** for colour, typography, spacing, and component styling. Do not invent new tokens or restyle components without consulting this handover first.

## What this repo is

Code Victorian is a cultural society website. Pages: Home, Mission, Newsletter (Dispatches), Donate, Europe First (membership), Terms.

## What this folder contains

| File | Purpose |
|---|---|
| `CLAUDE.md` | This file — orientation for Claude Code |
| `HANDOVER.md` | Human-readable overview and porting instructions |
| `DESIGN_SYSTEM.md` | The full design system specification |
| `reference.html` | Complete visual reference — open in a browser to see the target design |
| `tokens.css` | CSS custom properties (colours, fonts, spacing) — drop in as-is |
| `components.css` | Component-level styles (nav, hero, pillars, cards, forms, footer) |
| `fonts.html` | Google Fonts `<link>` block to paste into your document head |
| `PROMPT.md` | A ready-to-run prompt you can re-issue to Claude Code |
| `manifest.json` | Machine-readable index of this handover |
| `assets/` | Logos, hero video, footer graphic, icons |

## Your job when working in this repo

1. **Read `DESIGN_SYSTEM.md` first.** It describes the palette, type scale, ornamentation, and component patterns.
2. **Use `tokens.css` as-is.** Do not change variable names or values without explicit user approval.
3. **Port component styles from `components.css`** into the project's actual component files (React/Vue/Astro/etc.) — keep class names and structure consistent with the reference.
4. **Preserve all existing routing, data fetching, Stripe integration, and form submission logic.** This handover is visual only.
5. **Do not change copy** unless the user explicitly asks.
6. **Show a diff per file before applying.**

## Design principles to preserve

- Old-world luxury: deep navy + gilded gold on parchment
- Editorial typography: Playfair Display (display) + EB Garamond (serif) + Inter (body) + JetBrains Mono (labels)
- Roman numerals for section markers (I., II., III., IV.)
- Small-caps eyebrows with a 36px gold hairline
- Corner-bracket ornaments on featured cards
- Fleur dividers (`✦  ❦  ✦`)
- Generous spacing; no visual noise; no emoji; no gradients beyond subtle vignettes

## When in doubt

Open `reference.html` in a browser and match what you see. If the user requests a change, update `DESIGN_SYSTEM.md` and the relevant token/component file in lockstep so this handover stays authoritative.
