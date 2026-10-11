"use client"

import { useState } from "react"
import Link from "next/link"
import NewsletterForm from "@/components/NewsletterForm"
import { EUROPE_FIRST_URL } from "@/lib/site"

export type HomeCms = {
  heroEyebrow?: string
  heroHeadlineLines?: { text?: string; italic?: boolean }[]
  heroLede?: string
}

export default function Home({ cms }: { cms?: HomeCms } = {}) {
  return (
    <>
      <HeroSection cms={cms} />
      <DonationSection />
      <FinalCTA />
    </>
  )
}

function HeroSection({ cms }: { cms?: HomeCms }) {
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
              {cms?.heroEyebrow ?? "A Cultural Force · Since MMXXVI"}
            </span>

            <h1 className="mt-7 font-serif text-[2.75rem] font-medium leading-[1.04] text-white sm:text-5xl lg:text-7xl xl:text-[7.5rem]">
              {cms?.heroHeadlineLines && cms.heroHeadlineLines.length > 0 ? (
                cms.heroHeadlineLines.map((line, i) => (
                  <span key={i}>
                    {line.italic ? (
                      <span className="italic font-normal text-gold-400">
                        {line.text}
                      </span>
                    ) : (
                      line.text
                    )}
                    {i < cms.heroHeadlineLines!.length - 1 && <br />}
                  </span>
                ))
              ) : (
                <>
                  <span className="italic font-normal text-gold-400">Europe</span>
                  <br />
                  to remain
                  <br />
                  <span className="italic font-normal text-gold-400">European.</span>
                </>
              )}
            </h1>

            <p className="lede mx-auto mt-9 max-w-lg lg:mx-0">
              {cms?.heroLede ??
                "We are a growing movement of citizens across Europe, united in our commitment to preserve our heritage, protect our communities, and secure our future."}
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href={EUROPE_FIRST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                Join Europe First <span className="font-serif">→</span>
              </a>
              <Link href="/donate#donate" className="btn-secondary w-full sm:w-auto">
                Support the Cause
              </Link>
            </div>
          </div>

          {/* Right — newsletter sign-up card */}
          <div className="animate-fade-in-delay-2 mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Bottom marquee: stats + roman issue number. Hidden below lg
          where the absolute-bottom positioning would overlap the
          stacked form on tablet portrait. */}
      <div className="absolute inset-x-0 bottom-0 z-10 hidden border-t border-gold-400/20 bg-navy-950/40 lg:block">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 font-mono text-[0.625rem] uppercase tracking-[0.24em] text-white/50 sm:flex-row">
          <span>
            Instagram · 360K <span className="mx-3 inline-block h-1.5 w-1.5 rounded-none bg-gold-400 align-middle" />
            Facebook · 18K
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

function DonationSection() {
  const amounts = [35, 65, 135, 600, 1500]
  const [selected, setSelected] = useState<number | null>(135)
  const [frequency, setFrequency] = useState<"once" | "monthly">("monthly")

  const donateHref = (() => {
    const params = new URLSearchParams()
    if (selected !== null) params.set("amount", String(selected))
    params.set("frequency", frequency)
    return `/donate?${params.toString()}#donate`
  })()

  return (
    <section className="section-padding bg-cream border-y border-gold-400/20">
      <div className="mx-auto max-w-7xl">
        <div className="sec-num">
          <span className="num">
            N<sup>o</sup>. II
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
                "€35 prints 250 campaign leaflets for local distribution",
                "€65 funds distribution of 500 campaign leaflets",
                "€135 supports a campaign post on social media",
                "€600 supports attendance at a conference or summit",
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
                const isSelected = selected === a
                return (
                  <button
                    key={a}
                    type="button"
                    onClick={() => setSelected(a)}
                    aria-pressed={isSelected}
                    className={`py-5 text-center font-sans text-2xl font-semibold tracking-tight transition-colors ${
                      isSelected
                        ? "bg-gold-400/15 text-navy-900"
                        : "text-navy-800 hover:bg-gold-400/10"
                    } ${col < 2 ? "border-r border-gold-400/25" : ""} ${
                      row === 0 ? "border-b border-gold-400/25" : ""
                    }`}
                  >
                    €{a.toLocaleString("en-GB")}
                  </button>
                )
              })}
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-pressed={selected === null}
                className={`py-5 text-center font-mono text-xs uppercase tracking-[0.2em] transition-colors ${
                  selected === null
                    ? "bg-gold-400/15 text-navy-900"
                    : "text-navy-800 hover:bg-gold-400/10"
                }`}
              >
                Other
              </button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-0 border border-gold-400/25">
              <button
                type="button"
                onClick={() => setFrequency("once")}
                aria-pressed={frequency === "once"}
                className={`py-3 font-mono text-[0.6875rem] uppercase tracking-[0.24em] transition-colors border-r border-gold-400/25 ${
                  frequency === "once"
                    ? "bg-gold-400 font-medium text-navy-900"
                    : "text-navy-800/65 hover:bg-gold-400/10"
                }`}
              >
                One-time
              </button>
              <button
                type="button"
                onClick={() => setFrequency("monthly")}
                aria-pressed={frequency === "monthly"}
                className={`py-3 font-mono text-[0.6875rem] uppercase tracking-[0.24em] transition-colors ${
                  frequency === "monthly"
                    ? "bg-gold-400 font-medium text-navy-900"
                    : "text-navy-800/65 hover:bg-gold-400/10"
                }`}
              >
                Monthly
              </button>
            </div>

            <Link href={donateHref} className="btn-primary mt-6 w-full">
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
        <div className="fleur">✦ ⚜︎ ✦</div>
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
          <a
            href={EUROPE_FIRST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Join Europe First <span className="font-serif">→</span>
          </a>
          <Link href="/donate#donate" className="btn-secondary">
            Support the Foundation
          </Link>
        </div>
      </div>
    </section>
  )
}
