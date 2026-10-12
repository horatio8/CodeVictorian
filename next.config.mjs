/** @type {import('next').NextConfig} */

// Builds:
//   - Vercel (default): full Next.js runtime, API routes work, basePath off.
//   - GH Pages mirror: STATIC_EXPORT=1 → static export under /CodeVictorian.
//     The CI workflow removes app/api before this build because static
//     export does not support server-side API routes.
//   - Local dev / local build: normal Next.js build (closest to Vercel).
const isStaticExport = process.env.STATIC_EXPORT === "1"
const isVercel = process.env.VERCEL === "1"

const nextConfig = {
  reactStrictMode: true,
  ...(isStaticExport ? { output: "export", basePath: "/CodeVictorian" } : {}),
  images: {
    unoptimized: true,
  },
  async redirects() {
    if (isStaticExport) return [] // static export can't issue redirects
    return [
      // Europe First is a single page; old Code Victorian paths land on it.
      ...["/member", "/join", "/tiers", "/membership"].map((source) => ({
        source,
        destination: "/",
        permanent: false,
      })),
    ]
  },
}

// Quiet "isVercel unused" warning in static-export builds without losing the
// reference (kept for future per-runtime branching).
void isVercel

export default nextConfig
