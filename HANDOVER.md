# Code Victorian — Design Handover

This folder is a complete, self-contained design package for Code Victorian. It is intended to be committed to your git repository so Claude Code (or any engineer) can apply the approved visual design to the live codebase.

## Quick start

1. Copy this entire `design-handover/` folder into the root of your Claude Code project repository.
2. Commit it: `git add design-handover && git commit -m "Add approved design handover"`.
3. Open your project in Claude Code.
4. In the Claude Code chat, run:

   > Apply the design in `design-handover/` to this codebase. Start by reading `design-handover/CLAUDE.md`, then follow `design-handover/PROMPT.md`.

Claude Code will pick up `CLAUDE.md` automatically (it's a convention Claude Code recognises) and use this folder as the source of truth.

## What's inside

```
design-handover/
├── CLAUDE.md              # Claude Code instructions (auto-recognised)
├── HANDOVER.md            # This file
├── DESIGN_SYSTEM.md       # Full spec: palette, type, components
├── PROMPT.md              # Ready-to-run porting prompt
├── reference.html         # Visual reference — open in browser
├── tokens.css             # CSS custom properties
├── components.css         # Component styles
├── fonts.html             # Google Fonts import snippet
├── manifest.json          # Machine-readable index
└── assets/
    ├── logo.png
    ├── hero-video.mp4
    ├── hero-video-360p.mp4
    ├── footer-graphic.png
    └── icon-instagram.png
```

## How Claude Code recognises this handover

Claude Code looks for a `CLAUDE.md` file at the repo root or in project subfolders. The `CLAUDE.md` inside `design-handover/` is written as an instruction file that tells Claude Code how to consume the rest of this folder.

Filenames are chosen to be unambiguous:

- `CLAUDE.md` — Claude Code convention
- `DESIGN_SYSTEM.md` — common spec filename
- `tokens.css` / `components.css` — standard design-system names
- `reference.html` — obvious purpose
- `manifest.json` — structured index for programmatic reading

Any modern agent scanning the repo will identify this as a design package.

## Applying it

Hand Claude Code the prompt in `PROMPT.md`. It covers:

1. Creating/updating `tokens.css` in the active codebase
2. Wiring up Google Fonts
3. Restyling nav, hero, pillars, membership cards, donate form, newsletter, and footer
4. Preserving routing, data, and commerce logic
5. Showing diffs before applying

## Keeping this handover in sync

If the design changes, regenerate this folder and commit the update. The `manifest.json` file includes a `version` field — bump it on every change so diffs are traceable.
