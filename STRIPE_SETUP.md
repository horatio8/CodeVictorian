# Stripe — donation flow setup

The donation flow on `/donate` uses three serverless API routes:

- `POST /api/checkout` — creates a Stripe Checkout Session and returns
  the hosted URL. Frontend redirects the browser to it.
- `GET  /api/checkout/verify?session_id=…` — used by `/donate?status=success`
  to confirm the session was actually paid before showing thank-you copy.
- `POST /api/stripe-webhook` — receives signed events from Stripe so we
  have a server-side source of truth for completed payments.

All three routes only run on the Vercel build (the GitHub Pages mirror
strips `app/api/` before its static export — see
`.github/workflows/deploy.yml`).

## Required environment variables (Vercel → Settings → Environment Variables)

Add each to **Production**, **Preview**, and **Development** (or at least
to the environments you intend to test in). Stripe's dashboard always
shows you both a test and a live secret — they must not be mixed across
environments.

| Name | Where to find it | Notes |
| --- | --- | --- |
| `STRIPE_SECRET_KEY` | Stripe Dashboard → Developers → API keys → "Secret key" (sk_test_… or sk_live_…) | Used by `/api/checkout` and `/api/checkout/verify` to talk to Stripe. |
| `STRIPE_WEBHOOK_SECRET` | Stripe Dashboard → Developers → Webhooks → click your endpoint → "Signing secret" (whsec_…) | Used by `/api/stripe-webhook` to verify each event came from Stripe. |
| `NEXT_PUBLIC_SITE_ORIGIN` | _optional_ | Override for the URL used in Stripe success/cancel redirects. Defaults to the request `Origin` header, then `https://<VERCEL_URL>`, then `https://code-victorian.vercel.app`. |

`STRIPE_PUBLISHABLE_KEY` is **not** required — we use Stripe Checkout's
hosted page, not Stripe Elements, so the publishable key never has to
touch the browser.

## Stripe Dashboard configuration

### 1. Payment methods (Settings → Payment methods)

Enable any payment methods you want offered to donors. Useful ones for a
European campaign with a US/CA/AU diaspora:

- Card (always on)
- Apple Pay / Google Pay (auto-on with cards on supported browsers)
- SEPA Direct Debit (EU bank transfers, recurring-friendly)
- iDEAL (Netherlands)
- Bancontact (Belgium)
- Klarna (some countries)

We do **not** hard-pin payment-method types in code — Stripe Checkout
displays whatever you've enabled per the buyer's region.

### 2. Webhook endpoint (Developers → Webhooks → "Add endpoint")

Endpoint URL:

```
https://<your-domain>/api/stripe-webhook
```

For Vercel preview deploys, point a separate Stripe **test mode**
endpoint at the preview URL:

```
https://code-victorian-git-<branch>-tellerconsulting.vercel.app/api/stripe-webhook
```

Events to listen for:

- `checkout.session.completed`
- `checkout.session.async_payment_succeeded`
- `checkout.session.async_payment_failed`
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.payment_failed`

After saving, copy the **signing secret** that Stripe shows (starts with
`whsec_…`) and paste it into Vercel as `STRIPE_WEBHOOK_SECRET` for the
matching environment.

You can verify the webhook in the dashboard with **"Send test event"**.
A successful test event lands in the Vercel function logs as
`[stripe-webhook] checkout.session.completed { … }`.

### 3. Branding (Settings → Branding)

Optional but recommended: upload the Code Victorian logo, set the
accent colour (`#C9A24B`), and put the support contact (whatever
you're using — currently the `/contact` form). This branding appears
on the hosted Checkout page and on Stripe's automated receipt emails.

### 4. Receipts (Settings → Emails → Customer emails)

Enable **"Successful payments"** so Stripe automatically emails a
receipt to every donor. Subscriptions also send invoice receipts.

## Local development

Stripe doesn't have a sandbox you can hit from `localhost` for webhooks
without a tunnel. Two options:

```bash
# 1. Use the Stripe CLI to forward live test events to your localhost
stripe login
stripe listen --forward-to http://localhost:3000/api/stripe-webhook
# Copy the temporary whsec_… it prints into your .env.local
```

```bash
# 2. Or skip webhooks locally and just exercise /api/checkout
#    by triggering a real test-mode redirect to Stripe's hosted page.
```

Recommended `.env.local`:

```env
STRIPE_SECRET_KEY=sk_test_…
STRIPE_WEBHOOK_SECRET=whsec_…   # from `stripe listen` (option 1) or the dashboard test endpoint
NEXT_PUBLIC_SITE_ORIGIN=http://localhost:3000
```

## Test cards

In test mode, Stripe never charges anything. Use these from
[stripe.com/docs/testing](https://stripe.com/docs/testing):

| Outcome | Card number |
| --- | --- |
| Successful payment | `4242 4242 4242 4242` |
| Requires authentication (3DS) | `4000 0025 0000 3155` |
| Declined (generic) | `4000 0000 0000 0002` |
| Declined (insufficient funds) | `4000 0000 0000 9995` |

Any future expiry date, any CVC, any postcode/ZIP.

## Reliability notes

- The `success_url` redirect is **not** trusted as proof of payment —
  the browser can be closed mid-checkout. The `/api/stripe-webhook`
  endpoint is the source of truth.
- `/api/checkout/verify` exists so the success page can confirm the
  payment server-side before flipping to the thank-you state. If
  someone forges `?status=success&session_id=fake`, the verify call
  will reject it.
- An `idempotencyKey` is sent with every Checkout Session create so
  accidental double-clicks within a one-minute window collapse into a
  single Stripe session — no duplicate charges.
- The Stripe API version is pinned via `STRIPE_API_VERSION` in each
  route file. Bump explicitly when you deliberately upgrade; this
  prevents Stripe from changing behaviour out from under us.
- Errors are `console.error`'d so they appear in Vercel's function
  logs. Stripe will retry webhooks automatically on any non-2xx
  response from `/api/stripe-webhook`.

## What's logged by the webhook today

Right now `/api/stripe-webhook` only **logs** events — there's no
database write or downstream sync (no Supabase, no Campaign Nucleus
donor receiver). The Stripe dashboard remains the system of record.
The handler has clear hooks (search the file for "Hook for future …
sync goes here") for adding a CN POST or a Supabase insert when ready.
