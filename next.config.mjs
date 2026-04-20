/** @type {import('next').NextConfig} */

// basePath is required when the static export is served from a
// subpath (e.g. GitHub Pages at username.github.io/CodeVictorian/),
// but breaks when served from a domain root (Vercel serves
// code-victorian.vercel.app at /). Vercel sets VERCEL=1 automatically,
// so only apply the GitHub Pages basePath when NOT on Vercel.
const isVercel = process.env.VERCEL === "1"

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  ...(isVercel ? {} : { basePath: "/CodeVictorian" }),
  images: {
    unoptimized: true,
  },
}

export default nextConfig
