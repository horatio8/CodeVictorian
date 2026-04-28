"use client"

import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import PetitionForm from "@/components/PetitionForm"
import {
  CURRENT_SIGNATURES,
  showSignatureCounter,
} from "@/lib/petition-stats"

// PLACEHOLDER stats — currently hidden behind showSignatureCounter().
// Replace these with real figures (and remove the threshold gate in
// app/page.tsx Home() / petition-stats.ts) once Code Victorian has
// numbers it's comfortable showing publicly.
const stats = [
  { value: "—", label: "Petition Signatures" },
  { value: "—", label: "Countries Represented" },
  { value: "—", label: "Raised This Year" },
  { value: "—", label: "Active Members" },
]

const issues = [
  {
    roman: "I.",
    title: "Start Remigration",
    desc: "Implement humane but firm remigration policies to restore the demographic balance that has sustained European civilisation for centuries.",
    href: "/issues#remigration",
  },
  {
    roman: "II.",
    title: "Stop Harmful Immigration",
    desc: "End the unchecked flow of migration that brings crime and cultural values fundamentally at odds with European society.",
    href: "/issues#immigration",
  },
  {
    roman: "III.",
    title: "Preserve Our Culture",
    desc: "Safeguard Europe\u2019s rich heritage — its languages, traditions, architecture, and values — for future generations.",
    href: "/issues#culture",
  },
]

const news = [
  {
    date: "12 April MMXXVI",
    title: "European Heritage Summit Draws Record Attendance",
    excerpt: "Over 5,000 delegates from 22 nations gathered in Vienna to discuss strategies for cultural preservation across the continent.",
    category: "Events",
    label: "events · vienna",
  },
  {
    date: "8 April MMXXVI",
    title: "Petition Reaches 125,000 Signatures Milestone",
    excerpt: "Our flagship petition continues to gain momentum as citizens from every EU member state add their voices to the cause.",
    category: "Campaign",
    label: "campaign · petition",
  },
  {
    date: "3 April MMXXVI",
    title: "New Policy Paper: Remigration Framework for the EU",
    excerpt: "Code Victorian releases comprehensive policy paper outlining a legal and humane framework for remigration across member states.",
    category: "Policy",
    label: "policy · paper",
  },
]

export default function Home() {
  // Apr 23 brief: hide the public-stats bar until we have credible
  // numbers (using the same threshold gate as the petition counter).
  const showStats = showSignatureCounter()
  return (
    <>
      <HeroSection />
      {showStats && <StatsBar />}
      <IssuesSection />
      <PetitionCTA />
      <NewsSection />
      <DonationSection />
      <FinalCTA />
    </>
  )
}

function HeroSection() {
  // Force vertical-centred 100vh hero only at lg+; on smaller screens
  // the stacked headline + form is taller than the viewport, and
  // items-center pushes the form off-screen, so we let the section
  // grow naturally below lg.
  return (
    <section className="gradient-overlay relative overflow-hidden bg-navy-900 on-dark lg:flex lg:min-h-[100vh] lg:items-center">
      {/* Background video — muted, looped, dimmed under a vignette */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-35"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-24 sm:pt-32 lg:py-40">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="animate-fade-in-up text-center lg:text-left">
            <span className="eyebrow" style={{ justifyContent: "flex-start" }}>
              A Cultural Society · Since MMXXVI
            </span>

            <h1 className="mt-7 font-serif text-[2.75rem] font-medium leading-[1.04] text-white sm:text-5xl lg:text-7xl xl:text-[7.5rem]">
              Europe for
              <br />
              <span className="italic font-normal text-gold-400">Native</span>
              <br />
              Europeans.
            </h1>

            <p className="lede mx-auto mt-9 max-w-lg lg:mx-0">
              We are a growing movement of citizens across Europe, united in our
              commitment to preserve our heritage, protect our communities, and
              secure our future.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Link href="/petition" className="btn-primary w-full sm:w-auto">
                Sign the Petition <span className="font-serif">→</span>
              </Link>
              <Link href="/donate" className="btn-secondary w-full sm:w-auto">
                Support the Cause
              </Link>
            </div>

            {/* Social-proof line is hidden until we have a credible signature count. */}
            {showSignatureCounter() && (
              <p className="mt-5 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-white/40">
                Join {CURRENT_SIGNATURES.toLocaleString("en-GB")} Europeans who have already signed
              </p>
            )}
          </div>

          {/* Right — shared PetitionForm in dark variant; same component used on
              /petition and /remigration so all three feed into /api/petition. */}
          <div className="animate-fade-in-delay-2 mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
            <PetitionForm variant="dark" />
          </div>
        </div>
      </div>

      {/* Bottom marquee: stats + roman issue number. Hidden below lg
          where the absolute-bottom positioning would overlap the
          stacked form on tablet portrait. */}
      <div className="absolute inset-x-0 bottom-0 z-10 hidden border-t border-gold-400/20 bg-navy-950/40 lg:block">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 font-mono text-[0.625rem] uppercase tracking-[0.24em] text-white/50 sm:flex-row">
          <span>
            Instagram · 316K <span className="mx-3 inline-block h-1.5 w-1.5 rounded-none bg-gold-400 align-middle" />
            YouTube · Published Weekly
            <span className="mx-3 inline-block h-1.5 w-1.5 rounded-none bg-gold-400 align-middle" />
            Members in XXIV Countries
          </span>
          <span className="roman normal-case tracking-[0.08em]">
            N<sup>o</sup>. I — MMXXVI
          </span>
        </div>
      </div>
    </section>
  )
}

function StatsBar() {
  return (
    <section className="relative bg-navy-800 border-y border-gold-400/20 on-dark">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-4 py-10 text-center md:py-12 ${
              i < stats.length - 1 ? "md:border-r md:border-gold-400/15" : ""
            } ${i === 1 ? "md:border-r" : ""} ${
              i < 2 ? "border-b border-gold-400/15 md:border-b-0" : ""
            }`}
          >
            <div className="font-serif text-4xl font-medium text-gold-400 md:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 font-mono text-[0.625rem] font-medium uppercase tracking-[0.28em] text-white/55">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function IssuesSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl">
        <div className="sec-num">
          <span className="num">
            N<sup>o</sup>. II
          </span>
          <span className="line" />
          <span className="label">The Platform</span>
        </div>

        <div className="text-center">
          <span className="eyebrow eyebrow-both">Our Platform</span>
          <h2 className="mt-6 font-serif text-4xl font-medium sm:text-5xl lg:text-6xl">
            The Issues That{" "}
            <span className="italic font-normal text-gold-400">Matter</span>
          </h2>
          <p className="lede mx-auto mt-8 max-w-2xl">
            Europe faces existential challenges that demand courage and clarity.
            We address the issues that mainstream politicians are too afraid to
            confront.
          </p>
        </div>

        <div className="mt-16 grid gap-0 border-y border-gold-400/25 sm:grid-cols-2 lg:grid-cols-3">
          {issues.map((issue, i) => (
            <Link
              key={issue.title}
              href={issue.href}
              className={`group block p-10 transition-colors hover:bg-cream-dark/60 ${
                i < issues.length - 1 ? "lg:border-r lg:border-gold-400/20" : ""
              } ${
                i === 0 ? "sm:border-r sm:border-gold-400/20" : ""
              } ${
                i < 2 ? "border-b border-gold-400/20 lg:border-b-0" : ""
              }`}
            >
              <div className="font-serif text-4xl italic text-gold-400">
                {issue.roman}
              </div>
              <h3 className="mt-6 font-serif text-2xl font-medium leading-tight">
                {issue.title}
              </h3>
              <p className="mt-4 font-lede text-base leading-relaxed text-navy-800/70">
                {issue.desc}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-gold-600 transition-colors group-hover:text-gold-500">
                Read more
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function PetitionCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 lg:py-32 on-dark">
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="fleur">✦ ❦ ✦</div>
        <span className="eyebrow eyebrow-both mt-6">Take Action</span>
        <h2 className="mt-6 font-serif text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
          Your{" "}
          <span className="italic font-normal text-gold-400">Signature</span>{" "}
          Matters
        </h2>
        <p className="lede mx-auto mt-6 max-w-xl">
          Every signature brings us closer to making our voices heard at the EU
          level. Add yours.
        </p>

        {/* Progress bar — gated until we cross the credibility threshold. */}
        {showSignatureCounter() && (
          <div className="mx-auto mt-10 max-w-lg">
            <div className="mb-3 flex justify-between font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-white/60">
              <span>{CURRENT_SIGNATURES.toLocaleString("en-GB")} signed</span>
              <span>next milestone</span>
            </div>
            <div className="h-px w-full bg-gold-400/25" />
            <div className="mt-1 h-1 w-full bg-white/5" />
          </div>
        )}

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/petition" className="btn-primary">
            Sign the Petition <span className="font-serif">→</span>
          </Link>
          <Link href="/issues" className="btn-secondary">
            Learn Why It Matters
          </Link>
        </div>
      </div>
    </section>
  )
}

function NewsSection() {
  return (
    <section className="section-padding bg-ivory">
      <div className="mx-auto max-w-7xl">
        <div className="sec-num">
          <span className="num">
            N<sup>o</sup>. III
          </span>
          <span className="line" />
          <span className="label">From the Dispatches</span>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow">Latest Updates</span>
            <h2 className="mt-5 font-serif text-4xl font-medium sm:text-5xl">
              News &amp;{" "}
              <span className="italic font-normal text-gold-400">Updates</span>
            </h2>
          </div>
          <Link
            href="/updates"
            className="inline-flex items-center gap-2 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-gold-600 transition-colors hover:text-gold-500"
          >
            View all news
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-0 border-t border-gold-400/25 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, i) => (
            <article
              key={item.title}
              className={`group ${
                i < 2 ? "border-b border-gold-400/20 lg:border-b-0" : ""
              } ${
                i < news.length - 1 ? "lg:border-r lg:border-gold-400/20" : ""
              } ${
                i === 0 ? "sm:border-r sm:border-gold-400/20" : ""
              }`}
            >
              <div className="plate aspect-[16/9]" data-label={item.label} />
              <div className="p-7">
                <div className="flex items-center gap-4 font-mono text-[0.625rem] uppercase tracking-[0.18em]">
                  <span className="font-serif italic normal-case tracking-[0.08em] text-gold-400">
                    {item.category}
                  </span>
                  <span className="text-navy-800/45">{item.date}</span>
                </div>
                <h3 className="mt-4 font-serif text-xl font-medium leading-snug transition-colors group-hover:text-gold-600">
                  {item.title}
                </h3>
                <p className="mt-3 font-lede text-[0.9375rem] leading-relaxed text-navy-800/70 line-clamp-3">
                  {item.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-gold-600 transition-colors group-hover:text-gold-500">
                  Read essay
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function DonationSection() {
  const amounts = [65, 135, 265, 600, 1500]

  return (
    <section className="section-padding bg-cream border-y border-gold-400/20">
      <div className="mx-auto max-w-7xl">
        <div className="sec-num">
          <span className="num">
            N<sup>o</sup>. IV
          </span>
          <span className="line" />
          <span className="label">Patronage</span>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="eyebrow">Support Our Mission</span>
            <h2 className="mt-5 font-serif text-4xl font-medium sm:text-5xl">
              Fund the{" "}
              <span className="italic font-normal text-gold-400">fight</span>{" "}
              for Europe
            </h2>
            <p className="lede mt-8">
              Your donation directly funds our campaigns, legal challenges,
              policy research, and grassroots organising across the continent.
              Every euro makes a difference.
            </p>
            <ul className="mt-8 space-y-0 border-y border-gold-400/20">
              {[
                "€65 funds distribution of 500 campaign leaflets",
                "€135 sponsors one local community event",
                "€265 covers legal research for one policy paper",
                "€600 supports a regional campaign office for one month",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border-b border-gold-400/15 py-4 font-lede text-[0.9375rem] text-navy-800/75 last:border-b-0"
                >
                  <span className="font-serif text-sm italic text-gold-400">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Donation card — corner-bracket ornament, square tiles */}
          <div className="ornament border border-gold-400/40 bg-ivory p-10 mx-auto w-full max-w-md">
            <span className="eyebrow">Make a Donation</span>
            <h3 className="mt-4 font-serif text-2xl font-medium">
              Select your gift.
            </h3>
            <p className="mt-2 font-lede text-sm text-navy-800/60">
              Select an amount or enter your own.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-0 border border-gold-400/25">
              {amounts.map((a, i) => {
                const col = i % 3
                const row = Math.floor(i / 3)
                return (
                  <button
                    key={a}
                    className={`py-5 text-center font-sans text-2xl font-semibold tracking-tight text-navy-800 transition-colors hover:bg-gold-400/10 ${
                      col < 2 ? "border-r border-gold-400/25" : ""
                    } ${row === 0 ? "border-b border-gold-400/25" : ""}`}
                  >
                    €{a.toLocaleString("en-GB")}
                  </button>
                )
              })}
              <button className="py-5 text-center font-mono text-xs uppercase tracking-[0.2em] text-navy-800 transition-colors hover:bg-gold-400/10">
                Other
              </button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-0 border border-gold-400/25">
              <button className="py-3 font-mono text-[0.6875rem] uppercase tracking-[0.24em] text-navy-800/65 transition-colors hover:bg-gold-400/10 border-r border-gold-400/25">
                One-time
              </button>
              <button className="bg-gold-400 py-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-navy-900">
                Monthly
              </button>
            </div>

            <Link href="/donate" className="btn-primary mt-6 w-full">
              Donate Now <span className="font-serif">→</span>
            </Link>
            <p className="mt-4 text-center font-mono text-[0.625rem] uppercase tracking-[0.18em] text-navy-800/50">
              Secure · Stripe · Receipt by Email
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="gradient-navy relative overflow-hidden py-24 lg:py-32 on-dark">
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <div className="fleur">✦ ❦ ✦</div>
        <h2 className="mt-6 font-serif text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
          The Future of Europe
          <br />
          <span className="italic font-normal text-gold-400">
            Is in Your Hands
          </span>
        </h2>
        <p className="lede mx-auto mt-6 max-w-xl">
          Join a growing movement of citizens who refuse to stand by while
          Europe&rsquo;s heritage is eroded. Together, we can make a difference.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/petition" className="btn-primary">
            Sign the Petition <span className="font-serif">→</span>
          </Link>
          <Link href="/member" className="btn-secondary">
            Join Europe First
          </Link>
        </div>
      </div>
    </section>
  )
}
