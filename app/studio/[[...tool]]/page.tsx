/**
 * Sanity Studio embedded at /studio.
 *
 * Authentication is handled by Sanity's own login (Google / GitHub /
 * email magic link via sanity.io). Access control is configured in the
 * Sanity project's Members page — only emails added there can sign in.
 *
 * If NEXT_PUBLIC_SANITY_PROJECT_ID isn't set, this route falls back to
 * a friendly setup-required message instead of crashing.
 */

"use client"

import dynamic from "next/dynamic"
import config from "../../../sanity.config"

const NextStudio = dynamic(
  () => import("next-sanity/studio").then((m) => m.NextStudio),
  { ssr: false },
)

export const dynamicParams = true

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="font-serif text-3xl font-medium">CMS not configured</h1>
        <p className="text-base text-navy-800/75">
          The Sanity project ID hasn&rsquo;t been set yet. See{" "}
          <code className="font-mono text-sm">CMS_SETUP.md</code> in the repo for
          the 5-minute setup.
        </p>
      </main>
    )
  }

  return <NextStudio config={config} />
}
