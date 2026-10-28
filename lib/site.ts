// Switches (Oct 2026): donation links are off the site until further
// notice; Europe First links are on and point at europefirst.net. Flip a
// switch to show/hide every matching link at once. The /donate page itself still works for direct links and
// Stripe returns; it just isn't linked from anywhere.
export const SHOW_DONATE = false
export const SHOW_EUROPE_FIRST = true

// Where "Join Europe First" buttons send people (NEXT_PUBLIC_EUROPE_FIRST_URL
// in Vercel overrides).
export const EUROPE_FIRST_URL =
  process.env.NEXT_PUBLIC_EUROPE_FIRST_URL ?? "https://europefirst.net"
