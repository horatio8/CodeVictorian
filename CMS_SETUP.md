# CMS setup

The CMS lives at **`/admin`** and stores its content in your existing Supabase
project. No third-party CMS vendor — one Postgres table, one custom editor UI,
done.

## How it works

- `cms_documents` (Postgres) — one row per page, `content` is JSONB.
- `cms_admins` — email allowlist for who can sign in.
- The public site reads via the anon key (RLS allows SELECT only).
- The `/admin` editor writes via the service-role key (bypasses RLS).
- Magic-link sign-in via Supabase Auth, gated by the allowlist.
- Save calls `revalidateTag()` so edits go live within ~1 second.

## One-time setup (~5 min)

### 1. Run the schema

In **Supabase Studio → SQL Editor**, paste the contents of
[`supabase/schema.sql`](./supabase/schema.sql) and run it. This:

- Creates `cms_documents` and `cms_admins`.
- Enables RLS with one anon-readable policy.
- Seeds the 11 document slugs (empty content — pages fall back to hard-coded
  copy until you publish).

### 2. Add yourself to the allowlist

Still in the SQL Editor:

```sql
insert into public.cms_admins (email) values ('you@example.com')
  on conflict (email) do nothing;
```

Repeat for each teammate later. Emails are matched case-insensitively (lowercase
in the column).

### 3. Set Vercel env vars

Project → Settings → **Environment Variables**, add to **Production +
Preview + Development**:

| Name | Where to find it |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Project Settings → API → "Project URL" |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Project Settings → API → "anon / public" key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Project Settings → API → "service_role" key (keep secret!) |

Then redeploy.

### 4. Enable magic-link auth

In Supabase → **Authentication → Providers**, make sure **Email** is enabled
with **"Confirm email" off** (we use one-time magic links, not confirmation
emails).

Under **Authentication → URL Configuration**, add to "Redirect URLs":

- `https://code-victorian.vercel.app/admin/auth/callback`
- `https://codevictorian.com/admin/auth/callback`
- `https://preview.codevictorian.com/admin/auth/callback`
- `http://localhost:3000/admin/auth/callback` (for local dev)

### 5. Sign in

1. Visit `https://code-victorian.vercel.app/admin/login`.
2. Enter your allowlisted email → click "Send sign-in link".
3. Click the link in the email → land on `/admin`.

## Editing content

The dashboard at `/admin` lists 11 documents. Click any row to edit. Forms
auto-generate from the schema in [`lib/cms-schemas.ts`](./lib/cms-schemas.ts).

- **Text fields** type as expected.
- **Lists** have ↑ ↓ Remove controls plus an "Add" button.
- **Boolean** is a checkbox (e.g. "italic" flag on hero lines, "popular" on
  membership tiers).
- **Save and publish** writes to Postgres and punches the cache — your edit is
  live on the public site within ~1 second.

## Pages and what they control

| Document | Public route | Notes |
| --- | --- | --- |
| Site Settings | global | Brand mark, navigation, footer. *(Header/Footer wiring lands in a follow-up.)* |
| Home page | `/` | Hero (multi-line headline with italic flag), lede |
| Petition page | `/petition` | Hero (use `{italic}…{/italic}` markers), preamble, demands, closing |
| Issues page | `/issues` | Hero, main issues with paragraphs + stats, additional priorities |
| About page | `/about` | Hero, mission, values, timeline |
| Donate page | `/donate` | Hero, transparency promises, Stripe Checkout product description |
| Europe First | `/member` | Hero, principles, expectations, footer paragraph |
| Membership tiers | `/join` | Hero, tiers (price/period/features/popular flag) |
| Volunteer page | `/volunteer` | Hero, roles |
| Contact page | `/contact` | Hero, contacts, subjects, quick links |
| Privacy page | `/privacy` | Hero, sections (with bullets), callout |

## Adding a field

1. Add the field to the schema in `lib/cms-schemas.ts`.
2. Add the matching property to the `Type` in `lib/cms.ts`.
3. Read it on the page (`cms?.newField ?? "fallback"`).
4. The editor picks up the new field on the next reload — nothing else needed.

## Troubleshooting

| Symptom | Cause / fix |
| --- | --- |
| `/admin` shows "CMS not configured" | Env vars missing or unset for the deploy scope. Set on Production + Preview + Development. |
| "That email isn't on the admin allowlist" | Add yourself to `cms_admins`. Match the case of what you typed (the lookup is lowercased). |
| Magic link returns to `/admin/login?error=…` | Add the callback URL to Supabase → Authentication → URL Configuration → Redirect URLs. |
| Edit saved but site doesn't update | Force-refresh the page — `revalidateTag` invalidates the data cache, but stale browser caches may persist for a few seconds. |
| Anything else | Check the Vercel function logs for the failing route. |
