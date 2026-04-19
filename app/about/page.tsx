import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = { title: "About Us" }

const values = [
  { roman: "I.",   title: "Clarity of Purpose",  text: "We are direct and unapologetic about our mission to preserve European civilisation and its peoples." },
  { roman: "II.",  title: "Transparency",        text: "We operate openly, with full financial disclosure and democratic governance at every level." },
  { roman: "III.", title: "Cultural Pride",      text: "We celebrate the extraordinary achievements and heritage of European peoples without reservation." },
  { roman: "IV.",  title: "Solidarity",          text: "We unite Europeans of all nations under a common cause — transcending borders while respecting sovereignty." },
  { roman: "V.",   title: "Pan-European Vision", text: "Our movement spans the continent, building alliances from Lisbon to Helsinki, from Dublin to Athens." },
  { roman: "VI.",  title: "Excellence",          text: "We pursue the highest standards in our research, campaigns, and community engagement." },
]

const timeline = [
  { year: "MMXXI",   short: "XXI",   title: "Founded",               desc: "Code Victorian established by a group of concerned European citizens in Brussels." },
  { year: "MMXXII",  short: "XXII",  title: "First Campaign",        desc: "Launched the 'Protect Our Heritage' petition, gathering 25,000 signatures in three months." },
  { year: "MMXXIII", short: "XXIII", title: "Continental Expansion", desc: "Opened regional chapters in 12 European countries with dedicated volunteers." },
  { year: "MMXXIV",  short: "XXIV",  title: "Policy Impact",         desc: "Published landmark policy papers cited by MEPs in parliamentary debates." },
  { year: "MMXXV",   short: "XXV",   title: "Membership Milestone",  desc: "Reached 10,000 active members and launched the European Heritage Fund." },
  { year: "MMXXVI",  short: "XXVI",  title: "Growing Stronger",      desc: "Petition surpasses 125,000 signatures; largest-ever European Heritage Summit held in Vienna." },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32 on-dark">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow eyebrow-both">Our Story</span>
          <h1 className="mt-6 font-serif text-5xl font-medium text-white sm:text-6xl lg:text-7xl">
            About{" "}
            <span className="italic font-normal text-gold-400">Code Victorian</span>
          </h1>
          <p className="lede mx-auto mt-8 max-w-2xl">
            We are a supranational third-party campaigning organisation dedicated to the preservation
            of European culture, identity, and heritage through democratic action and civic engagement.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-ivory">
        <div className="mx-auto max-w-7xl">
          <div className="sec-num">
            <span className="num">N<sup>o</sup>. I</span>
            <span className="line" />
            <span className="label">Our Mission</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="eyebrow">Our Mission</span>
              <h2 className="mt-5 font-serif text-4xl font-medium sm:text-5xl">
                Defending Europe&rsquo;s{" "}
                <span className="italic font-normal text-gold-400">future</span>.
              </h2>
              <p className="mt-8 font-lede text-lg leading-relaxed text-navy-800/75">
                Code Victorian was born from a simple conviction: Europe&rsquo;s native peoples have the
                right to preserve their cultures, communities, and way of life. In an era of unprecedented
                demographic change, we provide a voice for the millions who feel unrepresented by
                mainstream politics.
              </p>
              <p className="mt-5 font-lede text-lg leading-relaxed text-navy-800/75">
                We operate at the supranational level, building coalitions across EU member states
                to advocate for sensible immigration policies, cultural preservation, and the democratic
                right of European peoples to determine the future of their own nations.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/petition" className="btn-primary">Sign Our Petition</Link>
                <Link href="/join" className="btn-secondary">Join the Movement</Link>
              </div>
            </div>
            <div className="plate aspect-[4/3]" data-label="the society · brussels" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream border-y border-gold-400/20">
        <div className="mx-auto max-w-7xl">
          <div className="sec-num">
            <span className="num">N<sup>o</sup>. II</span>
            <span className="line" />
            <span className="label">Our Values</span>
          </div>

          <div className="text-center">
            <span className="eyebrow eyebrow-both">What Drives Us</span>
            <h2 className="mt-6 font-serif text-4xl font-medium sm:text-5xl">
              Our{" "}
              <span className="italic font-normal text-gold-400">Values</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-0 border border-gold-400/25 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i, arr) => {
              const col = i % 3
              const row = Math.floor(i / 3)
              const totalRows = Math.ceil(arr.length / 3)
              return (
                <div
                  key={v.title}
                  className={`p-8 ${col < 2 ? "lg:border-r lg:border-gold-400/20" : ""} ${
                    row < totalRows - 1 ? "border-b border-gold-400/20" : ""
                  } ${i % 2 === 0 ? "sm:border-r sm:border-gold-400/20 lg:border-r" : ""}`}
                >
                  <div className="font-serif text-3xl italic text-gold-400 leading-none">{v.roman}</div>
                  <h3 className="mt-5 font-serif text-xl font-medium">{v.title}</h3>
                  <p className="mt-3 font-lede text-base leading-relaxed text-navy-800/70">{v.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-ivory">
        <div className="mx-auto max-w-3xl">
          <div className="sec-num">
            <span className="num">N<sup>o</sup>. III</span>
            <span className="line" />
            <span className="label">Our Journey</span>
          </div>

          <div className="text-center">
            <span className="eyebrow eyebrow-both">Milestones</span>
            <h2 className="mt-6 font-serif text-4xl font-medium sm:text-5xl">
              Our{" "}
              <span className="italic font-normal text-gold-400">Journey</span>
            </h2>
          </div>

          <div className="mt-14 space-y-0">
            {timeline.map((item, i) => (
              <div key={item.year} className="relative flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold-400 bg-ivory font-serif text-sm italic text-gold-400">
                    {item.short}
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-gold-400/25" />}
                </div>
                <div className="pb-2 pt-2.5">
                  <div className="font-mono text-[0.625rem] uppercase tracking-[0.24em] text-navy-800/50">
                    {item.year}
                  </div>
                  <h3 className="mt-1 font-serif text-xl font-medium">{item.title}</h3>
                  <p className="mt-2 font-lede text-base leading-relaxed text-navy-800/70">{item.desc}</p>
                </div>
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
            Ready to join the{" "}
            <span className="italic font-normal text-gold-400">cause</span>?
          </h2>
          <p className="lede mx-auto mt-5 max-w-xl">
            Become part of Europe&rsquo;s fastest-growing civic movement.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/join" className="btn-primary">Become a Member</Link>
            <Link href="/volunteer" className="btn-secondary">Volunteer With Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
