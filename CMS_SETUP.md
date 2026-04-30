# CMS — Sanity Studio (one-time setup)

This site uses **Sanity** as the CMS. The Studio is embedded in the
Next.js app at `/studio` — same domain, same deploy, no second service.
Editors log into Sanity using their existing email; you control who can
edit by adding their email to the project's Members page.

The free tier covers everything a campaign site needs (500K reads/month,
5 editors, 10GB media). No credit card required.

## 1. Create the Sanity project (5 minutes, one time)

1. Sign up at https://sanity.io/manage with your email or Google.
2. Create a new project. Name it **Code Victorian**, region wherever
   suits you (Europe is fine; doesn't affect editor access).
3. On the project's overview page, **copy the Project ID** — it's a
   string of 8 characters and digits, e.g. `o1k2j5n9`.
4. The default dataset is `production`. Leave it.
5. **Members** → add the email of every editor who should be able to log
   into the Studio. They'll get an invite by email; until then, only
   you can edit.

## 2. Set the env vars on Vercel

https://vercel.com/tellerconsulting/code-victorian/settings/environment-variables

| Name | Value |
| --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | the 8-character ID from step 1 |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-12-01` (leave as-is unless docs say otherwise) |

Set all three for **Production** and **Preview**. Click **"Redeploy"**
on the latest deployment so the env vars take effect.

## 3. Allow CORS for the Studio

Sanity's Studio (running on `code-victorian.vercel.app/studio`) needs
permission to talk to the Sanity API. Once:

1. https://sanity.io/manage → your project → **API** → **CORS Origins**
2. **Add CORS origin**:
   - Origin: `https://code-victorian.vercel.app`
   - "Allow credentials": **on** (this is what lets you stay logged in)
3. Add a second origin for any custom domain you point at Vercel later
   (e.g. `https://codevictorian.com`).
4. While you're testing locally, also add `http://localhost:3000`.

## 4. Open the Studio

After Vercel redeploys, go to:

> https://code-victorian.vercel.app/studio

Sign in with the email you used at sanity.io. You'll see the content
list down the left rail:

- **Site Settings** — brand name, logo, navigation, footer copy
- **Home page** — hero, issues teaser, news cards, CTAs
- **Petition page** — the three demands + preamble
- **Issues page** — main 3 issues + additional priorities
- **About page** — values, timeline, mission statement
- **Donate page** — preset amounts, impact rows, Stripe product description
- **Member (Europe First)** — principles, expectations
- **Membership tiers** — pricing tiers
- **Volunteer** — role list
- **Contact** — info rows, subject options
- **Privacy** — sections + bullets

Click any of those, edit, click **Publish**. Changes go live within ~60
seconds (Vercel revalidates the affected pages).

## 5. Wiring status (current PR)

✅ **Editable + reflects on the live site immediately**
- Site Settings — brand name, logo, header navigation, footer
  copyright, headquarters, footer disclaimer
- Donate — Stripe Checkout product description (the line shown on
  Stripe's hosted payment page)

🟡 **Schemas defined, Studio can edit, but the page still reads
hardcoded copy until the corresponding wiring lands** (next iteration):

- Home page hero + sections
- Petition demands
- Issues page
- About page (values, timeline)
- Donate page (presets, impact rows)
- Member, Join, Volunteer, Contact, Privacy

Each of these has a complete schema and editor UI in `/studio` — what's
missing is the page-side fetch + render pass. Adding it is a small
mechanical change per page (`const cms = await getXPage()` + replace
hardcoded strings with `cms?.field ?? "fallback"`). Ping for it when
you want it.

## 6. Optional — production-only revalidation hook

If you want pages to update **instantly** instead of within Vercel's
60-second revalidation window when an editor publishes:

1. Sanity Studio → **Manage** → your project → **API** → **Webhooks**
2. **Add webhook**:
   - URL: `https://code-victorian.vercel.app/api/revalidate-cms`
     (this endpoint can be added in a later PR — happy to wire it)
   - Trigger: "Create / Update / Delete"
   - Filter: `_type in ["siteSettings", "homePage", "petitionPage", …]`
3. Copy the webhook signing secret into Vercel as
   `SANITY_REVALIDATE_SECRET`.

Until that endpoint exists, ISR caches pages for 60 seconds — usually
fine for editorial copy.

## 7. If something breaks

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| `/studio` shows "CMS not configured" | env vars not set / not redeployed | redo step 2, then redeploy |
| Studio loads but says "Unable to connect to project" | CORS not added | redo step 3 |
| Studio loads but I can't see anyone's data | wrong dataset name | step 2: must be `production` (or whatever you chose) |
| Edits in Studio show in Studio but not on the live site | revalidation delay | wait 60s; or wire the webhook in step 6 |
| Build fails after adding Sanity env vars | typo in NEXT_PUBLIC_SANITY_PROJECT_ID | re-copy from sanity.io/manage |
