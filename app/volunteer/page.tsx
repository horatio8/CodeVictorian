import Link from "next/link"
import VolunteerForm from "./VolunteerForm"
import { getVolunteerPage } from "@/lib/cms"

const FALLBACK_ROLES = [
  { roman: "I.",   title: "Campaign Outreach",         desc: "Distribute materials, attend rallies, and engage with the public at local events across your city.",       commitment: "4–8 hours/week" },
  { roman: "II.",  title: "Content & Communications",  desc: "Write articles, create social media content, produce videos, or help translate materials into European languages.", commitment: "3–6 hours/week" },
  { roman: "III.", title: "Digital Campaigning",       desc: "Manage social media accounts, run online campaigns, moderate forums, and grow our digital presence.",        commitment: "5–10 hours/week" },
  { roman: "IV.",  title: "Local Chapter Leader",      desc: "Organise and lead a local chapter, coordinate events, recruit new volunteers, and represent the movement in your area.", commitment: "6–12 hours/week" },
  { roman: "V.",   title: "Event Organisation",        desc: "Plan and execute events from small meetups to large rallies. Handle logistics, venues, and promotion.",     commitment: "Variable" },
  { roman: "VI.",  title: "Community Building",        desc: "Welcome new members, facilitate discussions, and build relationships within the movement.",                   commitment: "2–4 hours/week" },
]

export default async function VolunteerPage() {
  const cms = await getVolunteerPage()
  const heroEyebrow = cms?.heroEyebrow ?? "Take Action"
  const heroHeadline = cms?.heroHeadline ?? "Volunteer"
  const heroItalicWord = cms?.heroItalicWord ?? "With Us"
  const heroLede =
    cms?.heroLede ??
    "Your time and talent can change the course of history. Join thousands of dedicated volunteers working to preserve Europe’s future."
  const roles = cms?.roles && cms.roles.length > 0 ? cms.roles : FALLBACK_ROLES

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32 on-dark">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow eyebrow-both">{heroEyebrow}</span>
          <h1 className="mt-6 font-serif text-5xl font-medium text-white sm:text-6xl lg:text-7xl">
            {heroHeadline}{" "}
            <span className="italic font-normal text-gold-400">{heroItalicWord}</span>
          </h1>
          <p className="lede mx-auto mt-8 max-w-2xl">{heroLede}</p>
        </div>
      </section>

      {/* Roles */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="sec-num">
            <span className="num">N<sup>o</sup>. I</span>
            <span className="line" />
            <span className="label">Opportunities</span>
          </div>

          <div className="text-center">
            <span className="eyebrow eyebrow-both">Opportunities</span>
            <h2 className="mt-6 font-serif text-4xl font-medium sm:text-5xl">
              Volunteer{" "}
              <span className="italic font-normal text-gold-400">roles</span>.
            </h2>
            <p className="lede mx-auto mt-6 max-w-2xl">
              We have roles for every skill set and schedule. Whether you can give two hours
              a week or twenty, there&rsquo;s a place for you.
            </p>
          </div>

          <div className="mt-16 grid gap-0 border border-gold-400/25 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role, i, arr) => {
              const col = i % 3
              const row = Math.floor(i / 3)
              const totalRows = Math.ceil(arr.length / 3)
              return (
                <article
                  key={role.title ?? i}
                  className={`group p-8 transition-colors hover:bg-ivory ${
                    col < 2 ? "lg:border-r lg:border-gold-400/20" : ""
                  } ${i % 2 === 0 ? "sm:border-r sm:border-gold-400/20 lg:border-r" : ""} ${
                    row < totalRows - 1 ? "border-b border-gold-400/20" : ""
                  }`}
                >
                  <div className="font-serif text-3xl italic text-gold-400 leading-none">
                    {role.roman}
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-medium">{role.title}</h3>
                  <p className="mt-3 font-lede text-base leading-relaxed text-navy-800/70">{role.desc}</p>
                  <div className="mt-5 inline-block border border-gold-400/40 px-3 py-1 font-mono text-[0.625rem] font-medium uppercase tracking-[0.22em] text-gold-600">
                    {role.commitment}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sign-up form */}
      <section className="section-padding bg-ivory border-y border-gold-400/20">
        <div className="mx-auto max-w-2xl">
          <div className="sec-num">
            <span className="num">N<sup>o</sup>. II</span>
            <span className="line" />
            <span className="label">Register</span>
          </div>

          <div className="text-center">
            <span className="eyebrow eyebrow-both">Get Started</span>
            <h2 className="mt-6 font-serif text-4xl font-medium sm:text-5xl">
              Register as a{" "}
              <span className="italic font-normal text-gold-400">volunteer</span>.
            </h2>
          </div>

          <VolunteerForm roles={roles} />
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy py-24 text-center on-dark">
        <div className="mx-auto max-w-3xl px-6">
          <div className="fleur">✦ ❦ ✦</div>
          <h2 className="mt-6 font-serif text-4xl font-medium text-white sm:text-5xl">
            Prefer another way to{" "}
            <span className="italic font-normal text-gold-400">help</span>?
          </h2>
          <p className="lede mx-auto mt-5 max-w-xl">
            Every contribution matters, whether it&rsquo;s your signature, your donation, or your time.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/petition" className="btn-primary">Sign the Petition</Link>
            <Link href="/donate" className="btn-secondary">Donate</Link>
          </div>
        </div>
      </section>
    </>
  )
}
