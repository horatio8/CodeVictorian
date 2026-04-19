# Porting Prompt — hand this to Claude Code

Copy the block below into Claude Code once this repo is open.

---

Read every file in `design-handover/`, starting with `CLAUDE.md`, then `DESIGN_SYSTEM.md`, then `reference.html`.

Your task: apply the visual design from this handover to the live codebase **without** changing routing, data fetching, form submission, Stripe integration, or CMS content.

### Steps

1. **Tokens**
   - Copy `design-handover/tokens.css` into the project's styles directory (e.g. `src/styles/tokens.css` or `app/globals.css` — follow the project's existing convention).
   - Ensure it is loaded globally before any other stylesheet.

2. **Fonts**
   - Insert the `<link>` block from `design-handover/fonts.html` into the document head (in Next.js, use the `next/font` equivalent or a `<link>` in `layout.tsx`; in Astro, put it in the root layout; in plain HTML, in `<head>`).

3. **Components**
   - For each component styled in `design-handover/components.css`, port the relevant rules into the project's actual component files (React/Vue/Astro/Svelte/HTML).
   - Keep class names (`.nav`, `.hero`, `.pillars`, `.mem-card`, `.news-form`, `.don-grid`, etc.) so the design stays traceable to the handover.
   - Use the structure shown in `reference.html` as the canonical markup for each section.

4. **Assets**
   - Copy everything in `design-handover/assets/` into the project's public assets folder (`public/` for Next.js, `static/` for SvelteKit, etc.).
   - Update image/video `src` paths accordingly.

5. **Preservation**
   - Do not change any route, API call, form action, or environment variable.
   - Do not rewrite copy unless I explicitly ask.
   - Do not introduce new dependencies beyond what is already in `package.json`, unless strictly necessary for font loading.

6. **Review**
   - Before writing changes, print a file-by-file plan.
   - When applying, show a diff per file.
   - After applying, run the project's dev server and confirm the hero, nav, pillars, membership, donate, newsletter, and footer render correctly.

### Design rules to honour

- Navy `#0E1A2E` + gold `#C9A24B`, parchment `#F4EDE0` text, thin gold hairlines.
- Playfair Display for display type, EB Garamond for ledes and quotes, Inter for body, JetBrains Mono for labels/dates.
- Roman numerals for section markers.
- Small-caps eyebrows (11px, 0.28em, uppercase) with a leading 36px gold hairline.
- Corner-bracket ornaments on featured cards.
- Fleur dividers (`✦  ❦  ✦`).
- No emoji outside the fleur. No rounded corners beyond what is specified. No drop shadows beyond button-hover gold glow. No gradients beyond subtle vignettes.

### Hero layout

Use the `framed` variant (video inset as a gold-bordered plate, text below), unless the user says otherwise.

### When finished

Summarise what changed in a short PR description and list any places you had to make judgement calls because the existing markup didn't map cleanly to the reference.
