"use client"

import Link from "next/link"
import {
  Shield,
  Users,
  Landmark,
  ArrowRight,
  Heart,
  PenLine,
  Calendar,
  ChevronRight,
} from "lucide-react"

const stats = [
  { value: "127,843", label: "Petition Signatures" },
  { value: "28", label: "Countries Represented" },
  { value: "€2.4M", label: "Raised This Year" },
  { value: "15,000+", label: "Active Members" },
]

const issues = [
  {
    icon: Shield,
    title: "Start Remigration",
    desc: "Implement humane but firm remigration policies to restore the demographic balance that has sustained European civilisation for centuries.",
    href: "/issues#remigration",
  },
  {
    icon: Users,
    title: "Stop Harmful Immigration",
    desc: "End the unchecked flow of migration that brings crime and cultural values fundamentally at odds with European society.",
    href: "/issues#immigration",
  },
  {
    icon: Landmark,
    title: "Preserve Our Culture",
    desc: "Safeguard Europe\u2019s rich heritage \u2014 its languages, traditions, architecture, and values \u2014 for future generations.",
    href: "/issues#culture",
  },
]

const news = [
  {
    date: "12 April 2026",
    title: "European Heritage Summit Draws Record Attendance",
    excerpt: "Over 5,000 delegates from 22 nations gathered in Vienna to discuss strategies for cultural preservation across the continent.",
    category: "Events",
  },
  {
    date: "8 April 2026",
    title: "Petition Reaches 125,000 Signatures Milestone",
    excerpt: "Our flagship petition continues to gain momentum as citizens from every EU member state add their voices to the cause.",
    category: "Campaign",
  },
  {
    date: "3 April 2026",
    title: "New Policy Paper: Remigration Framework for the EU",
    excerpt: "Code Victorian releases comprehensive policy paper outlining a legal and humane framework for remigration across member states.",
    category: "Policy",
  },
]

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <IssuesSection />
      <PetitionCTA />
      <NewsSection />
      <DonationSection />
      <FinalCTA />
    </>
  )
}

function HeroSection() {
  return (
    <section className="gradient-overlay relative flex min-h-[100vh] items-center overflow-hidden bg-navy-900">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:py-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="animate-fade-in-up text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                Active Campaign
              </span>
            </div>

            <h1 className="font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Europe for
              <span className="block text-gold-400">Native Europeans</span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/70 lg:mx-0 lg:text-lg">
              We are a growing movement of citizens across Europe, united in our
              commitment to preserve our heritage, protect our communities, and
              secure our future.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Link href="/petition" className="btn-primary w-full sm:w-auto">
                <PenLine className="mr-2 h-4 w-4" />
                Sign the Petition
              </Link>
              <Link href="/donate" className="btn-secondary w-full sm:w-auto">
                <Heart className="mr-2 h-4 w-4" />
                Support the Cause
              </Link>
            </div>

            <p className="mt-4 text-xs text-white/40">
              Join 127,843 Europeans who have already signed.
            </p>
          </div>

          {/* Right — Quick petition form */}
          <div className="animate-fade-in-delay-2 mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
            <div className="rounded-xl bg-white/10 p-6 backdrop-blur-md ring-1 ring-white/15 sm:p-8">
              <h2 className="font-serif text-xl font-bold text-white sm:text-2xl">
                Sign Now
              </h2>
              <p className="mt-1.5 text-sm text-white/60">
                Add your name to defend Europe&rsquo;s future.
              </p>
              <form className="mt-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Full name"
                  className="form-input !border-white/20 !bg-white/10 !text-white !placeholder-white/40"
                  required
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="form-input !border-white/20 !bg-white/10 !text-white !placeholder-white/40"
                  required
                />
                <select className="form-input !border-white/20 !bg-white/10 !text-white/60">
                  <option value="">Select your country</option>
                  <option>Austria</option>
                  <option>Belgium</option>
                  <option>Czech Republic</option>
                  <option>Denmark</option>
                  <option>Finland</option>
                  <option>France</option>
                  <option>Germany</option>
                  <option>Greece</option>
                  <option>Hungary</option>
                  <option>Ireland</option>
                  <option>Italy</option>
                  <option>Netherlands</option>
                  <option>Norway</option>
                  <option>Poland</option>
                  <option>Portugal</option>
                  <option>Spain</option>
                  <option>Sweden</option>
                  <option>Other EU Country</option>
                </select>
                <label className="flex items-start gap-2 text-xs text-white/50">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 h-3.5 w-3.5 rounded accent-gold-400"
                  />
                  <span>
                    I agree to the{" "}
                    <Link href="/privacy" className="text-gold-400 underline">
                      privacy policy
                    </Link>{" "}
                    and consent to my data being processed for this petition.
                  </span>
                </label>
                <button type="submit" className="btn-primary w-full">
                  Add My Signature
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[0.625rem] font-medium uppercase tracking-[0.25em] text-white/30">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}

function StatsBar() {
  return (
    <section className="relative -mt-1 bg-navy-700">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-4 py-8 text-center md:py-10">
            <div className="font-serif text-2xl font-bold text-gold-400 md:text-3xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">
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
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">
            Our Platform
          </span>
          <h2 className="gold-accent-center relative mt-3 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
            The Issues That Matter
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gray-600">
            Europe faces existential challenges that demand courage and clarity.
            We address the issues that mainstream politicians are too afraid to
            confront.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {issues.map((issue) => (
            <Link
              key={issue.title}
              href={issue.href}
              className="card group p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-navy-700/5 transition-colors group-hover:bg-gold-400/10">
                <issue.icon className="h-7 w-7 text-navy-700 transition-colors group-hover:text-gold-500" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold">{issue.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {issue.desc}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold-500 transition-colors group-hover:text-gold-600">
                Read more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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
    <section className="gradient-overlay relative overflow-hidden bg-navy-800 py-20 lg:py-28">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2l2 2-2 2zm0-1V20H0v-2h20v-2l2 2-2 2z' fill='%23D4AF37' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <span className="inline-block rounded-full bg-gold-400/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold-400">
          Take Action
        </span>
        <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Your Signature Matters
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
          Every signature brings us closer to making our voices heard at the EU
          level. Stand with over 127,000 fellow Europeans.
        </p>

        {/* Progress bar */}
        <div className="mx-auto mt-8 max-w-md">
          <div className="flex justify-between text-sm text-white/60">
            <span>127,843 signed</span>
            <span>Goal: 200,000</span>
          </div>
          <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-400"
              style={{ width: "64%" }}
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/petition" className="btn-primary">
            <PenLine className="mr-2 h-4 w-4" />
            Sign the Petition
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
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">
              Latest Updates
            </span>
            <h2 className="gold-accent relative mt-3 font-serif text-3xl font-bold sm:text-4xl">
              News &amp; Updates
            </h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-1 text-sm font-semibold text-navy-700 transition-colors hover:text-gold-500"
          >
            View all news
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <article key={item.title} className="card group">
              {/* Placeholder image area */}
              <div className="aspect-[16/9] bg-gradient-to-br from-navy-200 to-navy-300" />
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded bg-gold-400/10 px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-gold-600">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
                <h3 className="mt-3 font-serif text-lg font-bold leading-snug group-hover:text-gold-600 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-2">
                  {item.excerpt}
                </p>
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
    <section className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">
              Support Our Mission
            </span>
            <h2 className="gold-accent relative mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Fund the Fight for Europe
            </h2>
            <p className="mt-8 text-base leading-relaxed text-gray-600">
              Your donation directly funds our campaigns, legal challenges,
              policy research, and grassroots organising across the continent.
              Every euro makes a difference.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "€65 funds distribution of 500 campaign leaflets",
                "€135 sponsors one local community event",
                "€265 covers legal research for one policy paper",
                "€600 supports a regional campaign office for one month",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Donation card */}
          <div className="card mx-auto w-full max-w-md p-8">
            <h3 className="font-serif text-xl font-bold">Make a Donation</h3>
            <p className="mt-1 text-sm text-gray-500">
              Select an amount or enter your own.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {amounts.map((a) => (
                <button
                  key={a}
                  className="rounded-lg border-2 border-navy-100 px-3 py-3 text-sm font-bold text-navy-700 transition-all hover:border-gold-400 hover:bg-gold-400/5 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20"
                >
                  &euro;{a.toLocaleString("en-GB")}
                </button>
              ))}
              <button className="rounded-lg border-2 border-navy-100 px-3 py-3 text-sm font-bold text-navy-700 transition-all hover:border-gold-400 hover:bg-gold-400/5">
                Other
              </button>
            </div>
            <div className="mt-4 flex gap-3">
              <button className="flex-1 rounded-lg bg-navy-700/5 py-2.5 text-xs font-semibold text-navy-700 transition-colors hover:bg-navy-700/10">
                One-time
              </button>
              <button className="flex-1 rounded-lg bg-gold-400/10 py-2.5 text-xs font-bold text-gold-600 ring-1 ring-gold-400/30">
                Monthly
              </button>
            </div>
            <Link href="/donate" className="btn-primary mt-5 w-full">
              Donate Now
            </Link>
            <p className="mt-3 text-center text-[0.625rem] text-gray-400">
              Secure payment. Tax-deductible where applicable.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="gradient-navy relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(212,175,55,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(212,175,55,0.2) 0%, transparent 50%)",
          }}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          The Future of Europe
          <span className="block text-gold-400">Is in Your Hands</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
          Join a growing movement of citizens who refuse to stand by while
          Europe&rsquo;s heritage is eroded. Together, we can make a difference.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/petition" className="btn-primary">
            Sign the Petition
          </Link>
          <Link href="/join" className="btn-secondary">
            Become a Member
          </Link>
        </div>
      </div>
    </section>
  )
}
