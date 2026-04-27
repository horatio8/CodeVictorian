import type { Metadata } from "next"
import Link from "next/link"
import { PetitionForm } from "@/app/petition/page"

export const metadata: Metadata = {
  title: "Sign the Petition — Code Victorian",
  description:
    "Defend Europe's future. Sign our petition to enforce existing deportation orders, reform the immigration system, and establish a transparent remigration framework.",
  // Don't index this page — it's a dedicated link-in-bio landing page.
  // Keep it discoverable via direct URL but not in search.
  robots: { index: false, follow: true },
}

export default function RemigrationLandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-navy-900 on-dark">
      {/* Optional background video — drop a file at public/petition-bg.mp4
          and uncomment this block to enable. */}
      {/* <video
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        src="/petition-bg.mp4"
        autoPlay muted loop playsInline preload="auto"
      /> */}

      {/* Subtle vignette + parchment grain placeholder */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, color-mix(in srgb, var(--color-gold-400) 14%, transparent), transparent 60%), linear-gradient(180deg, var(--color-navy-900), var(--color-navy-800))",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10 lg:py-14">
        {/* Tiny brand mark — the only chrome */}
        <Link href="/" className="inline-flex flex-col leading-none">
          <span className="font-serif text-xl font-medium text-white">Code Victorian</span>
          <span className="mt-2 font-mono text-[0.625rem] font-normal uppercase tracking-[0.32em] text-gold-400">
            Est. MMXXVI
          </span>
        </Link>

        <div className="grid flex-1 items-center gap-12 pt-16 lg:grid-cols-5 lg:gap-16 lg:pt-20">
          {/* Petition copy */}
          <div className="lg:col-span-3">
            <span className="eyebrow eyebrow-both">Active Petition</span>
            <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.04] text-white sm:text-6xl lg:text-7xl">
              Defend{" "}
              <span className="italic font-normal text-gold-400">Europe&rsquo;s</span>
              <br />
              future.
            </h1>
            <p className="lede mt-7 max-w-xl">
              Sign our petition to the European Parliament, the European Commission, and
              every national government of the EU.
            </p>

            <ol className="mt-10 space-y-5 border-y border-gold-400/25 py-8">
              {[
                ["I",   "Enforce existing deportation orders", "Execute the over 1.2 million pending deportation orders across the EU."],
                ["II",  "Reform the immigration system",       "Strict EU borders, closed loopholes, offshore processing centres for new asylum seekers."],
                ["III", "Establish remigration",               "Develop and implement transparent remigration policies across all EU member states."],
              ].map(([roman, title, body]) => (
                <li key={roman} className="flex gap-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-gold-400/50 font-serif text-lg italic text-gold-400">
                    {roman}
                  </span>
                  <span>
                    <strong className="block font-serif text-xl font-medium text-white">
                      {title}
                    </strong>
                    <span className="mt-1 block text-base text-white/75">{body}</span>
                  </span>
                </li>
              ))}
            </ol>

            <p className="mt-6 font-mono text-[0.625rem] uppercase tracking-[0.24em] text-white/45">
              Add your name <span className="mx-2">→</span>
            </p>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <PetitionForm />
          </div>
        </div>

        {/* Tiny footer — single legal/return link, no nav, no social */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gold-400/20 pt-6 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-white/40 sm:flex-row">
          <span>© MMXXVI Code Victorian · A Cultural Society</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold-400">
              Privacy
            </Link>
            <Link href="/" className="hover:text-gold-400">
              Full Site →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
