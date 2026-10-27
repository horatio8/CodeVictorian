// Temporary switches (Oct 2026): donation and Europe First links are taken
// off the site until further notice. Flip to true to bring them back
// everywhere. The /donate page itself still works for direct links and
// Stripe returns; it just isn't linked from anywhere.
export const SHOW_DONATE = false
export const SHOW_EUROPE_FIRST = false

// Where "Join Europe First" buttons send people. Placeholder until the new
// Europe First website is live — set NEXT_PUBLIC_EUROPE_FIRST_URL in Vercel
// (or edit the fallback here) to switch every button at once.
export const EUROPE_FIRST_URL =
  process.env.NEXT_PUBLIC_EUROPE_FIRST_URL ??
  "https://whop.com/joined/code-victorian-ffbd/products/europe-first-tier-1/"
