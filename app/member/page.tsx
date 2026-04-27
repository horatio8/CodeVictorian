import Link from "next/link"
import MemberApplyForm from "./MemberApplyForm"

export const metadata = {
  title: "Europe First — The Community",
  description:
    "Europe First is the community arm of Code Victorian. Members in twenty-four countries, organising in person and online.",
}

const principles = [
  { roman: "I.", title: "Native Europeans, Worldwide", desc: "We unite people of European descent across continents — from Lisbon to Boston to Sydney — under a common cause." },
  { roman: "II.", title: "Quiet Action, Not Noise", desc: "Correspondence circles, regional gatherings, mutual aid. The slow work, not the loud kind." },
  { roman: "III.", title: "Civil Conversation", desc: "Disagreement on detail is welcome. Agreement on the inheritance is the entry condition." },
  { roman: "IV.", title: "Real-World Organising", desc: "We move beyond the timeline. Members meet in person, often, in their cities and ours." },
]

const expectations = [
  "Show up — at least once a year, in person.",
  "Correspond — write to your circle, read what they send.",
  "Set the phone down at dinner.",
  "Bring a friend, when one is ready.",
]

export default function MemberPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32 on-dark">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow eyebrow-both">The Community</span>
          <h1 className="mt-6 font-serif text-5xl font-medium text-white sm:text-6xl lg:text-7xl">
            <span className="italic font-normal text-gold-400">Europe</span> First.
          </h1>
          <p className="lede mx-auto mt-8 max-w-2xl">
            A community of native Europeans — at home and abroad — organising for the
            preservation of European civilisation. Members in twenty-four countries.
            New York to Paris, Sydney to Athens.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="#join" className="btn-primary">
              Join the Community <span className="font-serif">→</span>
            </Link>
            <Link href="/join" className="btn-secondary">
              See Membership Tiers
            </Link>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="sec-num">
            <span className="num">N<sup>o</sup>. I</span>
            <span className="line" />
            <span className="label">The Principles</span>
          </div>

          <div className="text-center">
            <span className="eyebrow eyebrow-both">What Binds Us</span>
            <h2 className="mt-6 font-serif text-4xl font-medium sm:text-5xl">
              Four{" "}
              <span className="italic font-normal text-gold-400">Principles</span>.
            </h2>
          </div>

          <div className="mt-16 grid gap-0 border border-gold-400/25 sm:grid-cols-2">
            {principles.map((p, i) => (
              <div
                key={p.roman}
                className={`p-10 ${i % 2 === 0 ? "sm:border-r sm:border-gold-400/20" : ""} ${
                  i < principles.length - 2 ? "border-b border-gold-400/20" : ""
                }`}
              >
                <div className="font-serif text-3xl italic text-gold-400 leading-none">{p.roman}</div>
                <h3 className="mt-5 font-serif text-2xl font-medium">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-navy-800/75">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expectations + non-expectations */}
      <section className="section-padding bg-ivory border-y border-gold-400/20">
        <div className="mx-auto max-w-5xl">
          <div className="fleur">✦ ❦ ✦</div>
          <div className="mt-10 grid gap-12 sm:grid-cols-2">
            <div>
              <span className="eyebrow">Expected of a Member</span>
              <h3 className="mt-5 font-serif text-3xl font-medium">
                What we{" "}
                <span className="italic font-normal text-gold-400">ask</span>.
              </h3>
              <ul className="mt-7 space-y-0 border-y border-gold-400/20">
                {expectations.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-gold-400/15 py-3 text-base text-navy-800/80 last:border-b-0"
                  >
                    <span className="text-gold-400">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="eyebrow">Not Expected</span>
              <h3 className="mt-5 font-serif text-3xl font-medium">
                What we{" "}
                <em className="italic font-normal text-gold-400">don&rsquo;t</em>.
              </h3>
              <p className="mt-7 text-base leading-relaxed text-navy-800/75">
                Agreement on every point. Residence in Europe. A particular faith. A
                particular politics. Membership is a civil one — conversation, not
                consensus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join form */}
      <section id="join" className="section-padding bg-cream">
        <div className="mx-auto max-w-2xl">
          <div className="sec-num">
            <span className="num">N<sup>o</sup>. II</span>
            <span className="line" />
            <span className="label">Join the Community</span>
          </div>

          <div className="text-center">
            <span className="eyebrow eyebrow-both">Apply for Membership</span>
            <h2 className="mt-6 font-serif text-4xl font-medium sm:text-5xl">
              Join{" "}
              <span className="italic font-normal text-gold-400">Europe First</span>.
            </h2>
            <p className="lede mt-6">
              Free to apply. Membership is approved by referral or after a short
              correspondence.
            </p>
          </div>

          <div className="mt-12 ornament border border-gold-400/40 bg-ivory p-8 sm:p-12">
            <MemberApplyForm />
          </div>

          <p className="mt-10 text-center text-base text-navy-800/70">
            Looking for paid patronage tiers?{" "}
            <Link href="/join" className="text-gold-600 underline underline-offset-2">
              See membership tiers
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
