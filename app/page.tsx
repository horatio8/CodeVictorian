import NewsletterForm from "@/components/NewsletterForm"

// Europe First — single-page community site. Newsletter sign-up leads;
// membership tiers follow. Content carried over from the former Code
// Victorian /member and /join pages.

const PRINCIPLES = [
  { roman: "I.", title: "Native Europeans, Worldwide", desc: "We unite people of European descent across continents — from Lisbon to Boston to Sydney — under a common cause." },
  { roman: "II.", title: "Quiet Action, Not Noise", desc: "Correspondence circles, regional gatherings, mutual aid. The slow work, not the loud kind." },
  { roman: "III.", title: "Civil Conversation", desc: "Disagreement on detail is welcome. Agreement on the inheritance is the entry condition." },
  { roman: "IV.", title: "Real-World Organising", desc: "We move beyond the timeline. Members meet in person, often, in their cities and ours." },
]

const EXPECTATIONS = [
  "Show up — at least once a year, in person.",
  "Correspond — write to your circle, read what they send.",
  "Set the phone down at dinner.",
  "Bring a friend, when one is ready.",
]

const NOT_EXPECTED =
  "Agreement on every point. Residence in Europe. A particular faith. A particular politics. Membership is a civil one — conversation, not consensus."

const TIERS = [
  {
    roman: "I.",
    name: "CV Europe First",
    price: "€9.99",
    priceWas: "€14.99",
    period: "p/m",
    ctaLabel: "Join the Revival",
    ctaHref: "https://whop.com/joined/code-victorian-ffbd/products/europe-first-tier-1/",
    features: [
      "Your entire contribution supports the Code Victorian Foundation",
      "Full access to the Europe First Discord group chats",
      "Connect with Matthias and other nationalist activists",
      "Expand your network with like-minded people across the West",
    ],
  },
  {
    roman: "II.",
    name: "CV Europe First Lifelong Access",
    price: "€499.99",
    priceWas: "€749.99",
    period: "One-time",
    ctaLabel: "Join the Revival",
    ctaHref: "https://whop.com/joined/code-victorian-ffbd/products/europe-first-lifelong-access/",
    features: [
      "Everything included as a regular Founding Member for the rest of your life",
      "A Private Video Conversation with Matthias to thank you and discuss anything of interest to you",
    ],
  },
]

export default function EuropeFirstHome() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-overlay relative overflow-hidden bg-navy-900 on-dark lg:flex lg:min-h-[100vh] lg:items-center">
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
            <div className="text-center lg:text-left">
              <span className="eyebrow" style={{ justifyContent: "flex-start" }}>The Community · Est. MMXXVI</span>
              <h1 className="mt-7 font-serif text-[3rem] font-medium leading-[1.04] text-white sm:text-6xl lg:text-8xl">
                <span className="italic font-normal text-gold-400">Europe</span> First.
              </h1>
              <p className="lede mx-auto mt-9 max-w-xl lg:mx-0">
                A community of native Europeans — at home and abroad — organising for
                the preservation of European civilisation. Members in twenty-four
                countries. New York to Paris, Sydney to Athens.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <a href="#membership" className="btn-primary w-full sm:w-auto">
                  Join the Community <span className="font-serif">→</span>
                </a>
                <a href="#newsletter" className="btn-secondary w-full sm:w-auto">
                  Join the Newsletter
                </a>
              </div>
            </div>
            <div id="newsletter" className="mx-auto w-full max-w-md scroll-mt-24 lg:mx-0 lg:ml-auto">
              <NewsletterForm />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 hidden border-t border-gold-400/20 bg-navy-950/40 lg:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 font-mono text-[0.625rem] uppercase tracking-[0.24em] text-white/50">
            <span>
              Members in XXIV Countries
              <span className="mx-3 inline-block h-1.5 w-1.5 rounded-none bg-gold-400 align-middle" />
              In Person &amp; Online
            </span>
            <span className="roman normal-case tracking-[0.08em]">
              N<sup>o</sup>. I — MMXXVI
            </span>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section id="principles" className="section-padding scroll-mt-20 bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="sec-num">
            <span className="num">N<sup>o</sup>. I</span>
            <span className="line" />
            <span className="label">The Principles</span>
          </div>
          <div className="text-center">
            <span className="eyebrow eyebrow-both">What Binds Us</span>
            <h2 className="mt-6 font-serif text-4xl font-medium sm:text-5xl">
              Four <span className="italic font-normal text-gold-400">Principles</span>.
            </h2>
          </div>
          <div className="mt-16 grid gap-0 border border-gold-400/25 sm:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.roman}
                className={`p-10 ${i % 2 === 0 ? "sm:border-r sm:border-gold-400/20" : ""} ${
                  i < PRINCIPLES.length - 1 ? "border-b border-gold-400/20" : ""
                } ${i === PRINCIPLES.length - 2 ? "sm:border-b-0" : ""}`}
              >
                <div className="font-serif text-3xl italic leading-none text-gold-400">{p.roman}</div>
                <h3 className="mt-5 font-serif text-2xl font-medium">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-navy-800/75">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership tiers */}
      <section id="membership" className="section-padding scroll-mt-20 bg-ivory border-y border-gold-400/20">
        <div className="mx-auto max-w-7xl">
          <div className="sec-num">
            <span className="num">N<sup>o</sup>. II</span>
            <span className="line" />
            <span className="label">The Tiers</span>
          </div>
          <div className="text-center">
            <span className="eyebrow eyebrow-both">Choose Your Level</span>
            <h2 className="mt-6 font-serif text-4xl font-medium sm:text-5xl">
              Membership <span className="italic font-normal text-gold-400">Tiers</span>
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2">
            {TIERS.map((tier) => (
              <div key={tier.name} className="relative flex flex-col border border-gold-400/25 bg-cream p-10">
                <div className="font-serif text-4xl italic leading-none text-gold-400">{tier.roman}</div>
                <span className="eyebrow mt-6">Tier {tier.roman.replace(".", "")}</span>
                <h3 className="mt-4 font-serif text-3xl font-medium">{tier.name}</h3>
                <div className="mt-3 flex flex-wrap items-baseline gap-2">
                  <span className="font-serif text-4xl italic font-normal text-gold-400">{tier.price}</span>
                  <span className="font-serif text-2xl italic font-normal text-gold-400/40 line-through">{tier.priceWas}</span>
                  <span className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-navy-800/60">{tier.period}</span>
                </div>
                <ul className="mt-8 flex-1 space-y-0 border-y border-gold-400/20">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 border-b border-gold-400/15 py-3 font-lede text-sm text-navy-800/75 last:border-b-0">
                      <span className="text-gold-400">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={tier.ctaHref} target="_blank" rel="noopener noreferrer" className="btn-primary mt-10 w-full">
                  {tier.ctaLabel} <span className="font-serif">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-5xl">
          <div className="fleur">✦ ⚜︎ ✦</div>
          <div className="mt-10 grid gap-12 sm:grid-cols-2">
            <div>
              <span className="eyebrow">Expected of a Member</span>
              <h3 className="mt-5 font-serif text-3xl font-medium">
                What we <span className="italic font-normal text-gold-400">ask</span>.
              </h3>
              <ul className="mt-7 space-y-0 border-y border-gold-400/20">
                {EXPECTATIONS.map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-gold-400/15 py-3 text-base text-navy-800/80 last:border-b-0">
                    <span className="text-gold-400">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="eyebrow">Not Expected</span>
              <h3 className="mt-5 font-serif text-3xl font-medium">
                What we <em className="italic font-normal text-gold-400">don&rsquo;t</em>.
              </h3>
              <p className="mt-7 text-base leading-relaxed text-navy-800/75">{NOT_EXPECTED}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="gradient-navy relative overflow-hidden py-24 text-center lg:py-32 on-dark">
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <div className="fleur">✦ ⚜︎ ✦</div>
          <h2 className="mt-6 font-serif text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
            Take your <span className="italic font-normal text-gold-400">place</span>.
          </h2>
          <p className="lede mx-auto mt-6 max-w-xl">
            Become a member today, or sign up for the newsletter.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#membership" className="btn-primary">
              Join the Community <span className="font-serif">→</span>
            </a>
            <a href="#newsletter" className="btn-secondary">
              Join the Newsletter
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
