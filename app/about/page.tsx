import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = { title: "About Us" }

// Per Apr 23 brief: 4 values (was 6).
// - Solidarity, Excellence, Pan-European Vision merged into Pro-Native European
// - Transparency renamed Good Governance, no "personal financial disclosure" line
const values = [
  { roman: "I.",   title: "Clarity of Purpose",  text: "We are direct and unapologetic about our mission to preserve European civilisation." },
  { roman: "II.",  title: "Good Governance",     text: "We operate openly with transparency and strong governance." },
  { roman: "III.", title: "Cultural Pride",      text: "We celebrate the extraordinary achievements and heritage of European peoples without reservation." },
  { roman: "IV.",  title: "Pro-Native European", text: "We unite people around the world of European descent under a common cause, building alliances from New York to Paris, from Sydney to Athens." },
]

// Per Apr 23 brief: six milestones from founding to real-world organising.
const timeline = [
  { date: "February MMXXV",   short: "II · XXV",  title: "Code Victorian Founded",         desc: "The movement is established by a small circle of correspondents." },
  { date: "June MMXXV",       short: "VI · XXV",  title: "Pan-European Tour",               desc: "An on-the-road tour through France, Germany, Italy, and Hungary — meeting allies in person." },
  { date: "July MMXXV",       short: "VII · XXV", title: "&ldquo;Dare to Dream&rdquo; Goes Viral", desc: "The flagship campaign reaches six million people across Europe and the diaspora." },
  { date: "August MMXXV",     short: "VIII · XXV",title: "100,000 Followers",                desc: "The audience crosses six figures and continues to compound monthly." },
  { date: "February MMXXVI",  short: "II · XXVI", title: "Europe First Launches",            desc: "The community arm of the movement opens for applications." },
  { date: "April MMXXVI",     short: "IV · XXVI", title: "Real-World Political Organising",  desc: "The transition from publishing to political action begins in earnest." },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32 on-dark">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          {/* Logo — drop a file at public/logo.png (or fbbbfinalcv.png) before deploy. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Code Victorian"
            className="mx-auto mb-10 h-20 w-auto"
          />
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

      {/* Mission statement — moved here per Apr 23 brief */}
      <section className="section-padding bg-ivory">
        <div className="mx-auto max-w-3xl">
          <div className="sec-num">
            <span className="num">N<sup>o</sup>. I</span>
            <span className="line" />
            <span className="label">Our Mission</span>
          </div>

          <span className="eyebrow">Our Mission</span>
          <h2 className="mt-5 font-serif text-4xl font-medium sm:text-5xl">
            Defending Europe&rsquo;s{" "}
            <span className="italic font-normal text-gold-400">future</span>.
          </h2>

          <p className="font-quote mt-9 text-2xl leading-relaxed text-navy-800 sm:text-3xl">
            &ldquo;Europe&rsquo;s native peoples have the right — and the duty — to preserve
            their cultures, communities, and way of life.&rdquo;
          </p>

          <p className="mt-9 text-base leading-relaxed text-navy-800/80">
            Code Victorian was born from a simple conviction: in an era of unprecedented
            demographic change, the millions of Europeans who feel unrepresented by
            mainstream politics deserve a voice that speaks plainly.
          </p>
          <p className="mt-5 text-base leading-relaxed text-navy-800/80">
            We operate at the supranational level, building coalitions across EU member
            states — and with the diaspora in the United States, Canada, Australia, and
            New Zealand — to advocate for sensible immigration policies, cultural
            preservation, and the democratic right of European peoples to determine the
            future of their own nations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/petition" className="btn-primary">Sign Our Petition</Link>
            <Link href="/member" className="btn-secondary">Join Europe First</Link>
          </div>
        </div>
      </section>

      {/* Mission video — drop a file at public/mission.mp4 (the existing
          one-sentence mission statement video). The <video> falls back
          gracefully to a striped plate if the file is missing. */}
      <section className="bg-ivory pb-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="border border-gold-400/30">
            <video
              className="block w-full"
              src="/mission.mp4"
              controls
              preload="metadata"
              poster="/mission-poster.jpg"
              playsInline
            >
              <track kind="captions" />
            </video>
          </div>
          <p className="mt-3 text-center font-mono text-[0.625rem] uppercase tracking-[0.2em] text-navy-800/50">
            The mission · in one sentence
          </p>
        </div>
      </section>

      {/* Values — 4 (was 6) */}
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
              Four{" "}
              <span className="italic font-normal text-gold-400">Values</span>.
            </h2>
          </div>

          <div className="mt-16 grid gap-0 border border-gold-400/25 sm:grid-cols-2">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`p-10 ${i % 2 === 0 ? "sm:border-r sm:border-gold-400/20" : ""} ${
                  i < values.length - 2 ? "border-b border-gold-400/20" : ""
                }`}
              >
                <div className="font-serif text-3xl italic text-gold-400 leading-none">{v.roman}</div>
                <h3 className="mt-5 font-serif text-2xl font-medium">{v.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-navy-800/75">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline — 6 milestones */}
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
              The{" "}
              <span className="italic font-normal text-gold-400">journey</span>{" "}
              so far.
            </h2>
          </div>

          <div className="mt-14 space-y-0">
            {timeline.map((item, i) => (
              <div key={item.title} className="relative flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 min-w-12 shrink-0 items-center justify-center border border-gold-400 bg-ivory px-2 font-serif text-xs italic text-gold-400">
                    {item.short}
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-gold-400/25" />}
                </div>
                <div className="pb-2 pt-2.5">
                  <div className="font-mono text-[0.625rem] uppercase tracking-[0.24em] text-navy-800/50">
                    {item.date}
                  </div>
                  <h3
                    className="mt-1 font-serif text-xl font-medium"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p className="mt-2 text-base leading-relaxed text-navy-800/70">{item.desc}</p>
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
            Sign the petition, support the work, then join Europe First.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/petition" className="btn-primary">Sign the Petition</Link>
            <Link href="/member" className="btn-secondary">Join Europe First</Link>
          </div>
        </div>
      </section>
    </>
  )
}
