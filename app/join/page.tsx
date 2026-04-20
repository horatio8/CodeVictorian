import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = { title: "Join Us" }

const tiers = [
  {
    roman: "I.",
    name: "Supporter",
    price: "€5",
    period: "/month",
    features: [
      "Official membership card",
      "Monthly newsletter",
      "Access to member forums",
      "Campaign updates and reports",
      "Invitation to local events",
    ],
  },
  {
    roman: "II.",
    name: "Patriot",
    price: "€15",
    period: "/month",
    popular: true,
    features: [
      "Everything in Supporter",
      "Early access to policy papers",
      "Quarterly video briefings",
      "Voting rights on campaign strategy",
      "Exclusive member merchandise",
      "Priority event registration",
    ],
  },
  {
    roman: "III.",
    name: "Guardian",
    price: "€50",
    period: "/month",
    features: [
      "Everything in Patriot",
      "Direct access to campaign leadership",
      "Annual Heritage Summit invitation",
      "Named recognition in annual report",
      "Personalised campaign briefings",
      "Private networking events",
      "Legacy planning consultation",
    ],
  },
]

export default function JoinPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32 on-dark">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow eyebrow-both">The Membership</span>
          <h1 className="mt-6 font-serif text-5xl font-medium text-white sm:text-6xl lg:text-7xl">
            Join the{" "}
            <span className="italic font-normal text-gold-400">Movement</span>
          </h1>
          <p className="lede mx-auto mt-8 max-w-2xl">
            Become part of Europe&rsquo;s most determined civic movement. Your membership
            empowers our campaigns and gives you a voice in shaping our strategy.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="sec-num">
            <span className="num">N<sup>o</sup>. I</span>
            <span className="line" />
            <span className="label">The Tiers</span>
          </div>

          <div className="text-center">
            <span className="eyebrow eyebrow-both">Choose Your Level</span>
            <h2 className="mt-6 font-serif text-4xl font-medium sm:text-5xl">
              Membership{" "}
              <span className="italic font-normal text-gold-400">Tiers</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative p-10 ${
                  tier.popular
                    ? "ornament border border-gold-400 bg-gold-400/5"
                    : "border border-gold-400/25 bg-ivory"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-navy-800 px-4 py-1 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-gold-400 border border-gold-400">
                    Most Popular
                  </div>
                )}
                <div className="font-serif text-4xl italic text-gold-400 leading-none">
                  {tier.roman}
                </div>
                <span className="eyebrow mt-6">Tier {tier.roman.replace(".", "")}</span>
                <h3 className="mt-4 font-serif text-3xl font-medium">{tier.name}</h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-serif text-4xl italic font-normal text-gold-400">{tier.price}</span>
                  <span className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-navy-800/60">{tier.period}</span>
                </div>
                <ul className="mt-8 space-y-0 border-y border-gold-400/20">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 border-b border-gold-400/15 py-3 font-lede text-sm text-navy-800/75 last:border-b-0">
                      <span className="text-gold-400">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`mt-10 w-full ${tier.popular ? "btn-primary" : "btn-secondary"}`}>
                  Join as {tier.name} <span className="font-serif">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-ivory border-y border-gold-400/20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="eyebrow eyebrow-both">Why Join</span>
            <h2 className="mt-6 font-serif text-4xl font-medium sm:text-5xl">
              Why join{" "}
              <span className="italic font-normal text-gold-400">Code Victorian</span>?
            </h2>
          </div>
          <div className="mt-14 grid gap-0 border border-gold-400/25 sm:grid-cols-2">
            {[
              { roman: "I.",  title: "Shape Our Strategy", desc: "Members vote on campaign priorities and strategy decisions at our annual congress." },
              { roman: "II.", title: "Connect With Like-minded Europeans", desc: "Access our exclusive member network spanning 28 countries across the continent." },
              { roman: "III.",title: "Stay Ahead of the Curve", desc: "Receive early access to policy papers, research findings, and campaign plans." },
              { roman: "IV.", title: "Make a Real Impact", desc: "Your membership directly funds campaigns that are changing the political landscape." },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`p-8 ${
                  i % 2 === 0 ? "sm:border-r sm:border-gold-400/20" : ""
                } ${i < 2 ? "border-b border-gold-400/20" : ""}`}
              >
                <div className="font-serif text-2xl italic text-gold-400 leading-none">{item.roman}</div>
                <h3 className="mt-4 font-serif text-xl font-medium">{item.title}</h3>
                <p className="mt-3 font-lede text-base leading-relaxed text-navy-800/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy py-24 text-center on-dark">
        <div className="mx-auto max-w-3xl px-6">
          <div className="fleur">✦ ❦ ✦</div>
          <h2 className="mt-6 font-serif text-4xl font-medium text-white sm:text-5xl">
            Not ready to join{" "}
            <span className="italic font-normal text-gold-400">yet</span>?
          </h2>
          <p className="lede mx-auto mt-5 max-w-xl">
            You can still make a difference. Sign our petition or make a one-time donation.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/petition" className="btn-primary">Sign the Petition</Link>
            <Link href="/donate" className="btn-secondary">Make a Donation</Link>
          </div>
        </div>
      </section>
    </>
  )
}
