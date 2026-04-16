import type { Metadata } from "next"
import Link from "next/link"
import { Users, Star, Crown, CheckCircle } from "lucide-react"

export const metadata: Metadata = { title: "Join Us" }

const tiers = [
  {
    name: "Supporter",
    price: "€5",
    period: "/month",
    icon: Users,
    colour: "navy",
    features: [
      "Official membership card",
      "Monthly newsletter",
      "Access to member forums",
      "Campaign updates and reports",
      "Invitation to local events",
    ],
  },
  {
    name: "Patriot",
    price: "€15",
    period: "/month",
    icon: Star,
    colour: "gold",
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
    name: "Guardian",
    price: "€50",
    period: "/month",
    icon: Crown,
    colour: "navy",
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
      <section className="gradient-navy relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 60% 40%, rgba(212,175,55,0.4) 0%, transparent 50%)" }} />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Membership</span>
          <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Join the Movement
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
            Become part of Europe&rsquo;s most determined civic movement. Your membership
            empowers our campaigns and gives you a voice in shaping our strategy.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">Choose Your Level</span>
            <h2 className="gold-accent-center relative mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Membership Tiers
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`card relative p-8 ${
                  tier.popular ? "ring-2 ring-gold-400 shadow-lg shadow-gold-400/10" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-400 px-4 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-navy-900">
                    Most Popular
                  </div>
                )}
                <tier.icon className={`h-10 w-10 ${tier.popular ? "text-gold-500" : "text-navy-600"}`} />
                <h3 className="mt-4 font-serif text-xl font-bold">{tier.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-serif text-3xl font-bold text-navy-700">{tier.price}</span>
                  <span className="text-sm text-gray-500">{tier.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full ${tier.popular ? "btn-primary" : "btn-navy"}`}
                >
                  Join as {tier.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Why Join Code Victorian?
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {[
              { title: "Shape Our Strategy", desc: "Members vote on campaign priorities and strategy decisions at our annual congress." },
              { title: "Connect With Like-minded Europeans", desc: "Access our exclusive member network spanning 28 countries across the continent." },
              { title: "Stay Ahead of the Curve", desc: "Receive early access to policy papers, research findings, and campaign plans." },
              { title: "Make a Real Impact", desc: "Your membership directly funds campaigns that are changing the political landscape." },
            ].map((item) => (
              <div key={item.title} className="text-left">
                <h3 className="font-serif text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Not Ready to Join Yet?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            You can still make a difference. Sign our petition or make a one-time donation.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/petition" className="btn-primary">Sign the Petition</Link>
            <Link href="/donate" className="btn-secondary">Make a Donation</Link>
          </div>
        </div>
      </section>
    </>
  )
}
