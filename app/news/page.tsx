import type { Metadata } from "next"
import Link from "next/link"

// /news was renamed to /updates. On the Vercel runtime a real 308 is
// issued by next.config.mjs's redirects() before this page is ever
// reached. This file is the fallback for the static-export (GitHub
// Pages) build, where we can't issue a real redirect, so we render a
// one-line landing page with a meta-refresh + visible link.
export const metadata: Metadata = {
  title: "Moved · /updates",
  robots: { index: false, follow: true },
  other: { refresh: "0; url=/updates" },
}

export default function NewsRedirectPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-serif text-2xl">This page has moved.</p>
      <p className="text-base text-navy-800/70">
        News is now{" "}
        <Link href="/updates" className="text-gold-600 underline underline-offset-2">
          Updates
        </Link>
        .
      </p>
    </main>
  )
}
