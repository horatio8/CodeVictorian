import type { Metadata } from "next"
import Link from "next/link"
import { Target, Eye, Heart, Users, Globe, Award } from "lucide-react"

export const metadata: Metadata = { title: "About Us" }

const values = [
  { icon: Target, title: "Clarity of Purpose", text: "We are direct and unapologetic about our mission to preserve European civilisation and its peoples." },
  { icon: Eye, title: "Transparency", text: "We operate openly, with full financial disclosure and democratic governance at every level." },
  { icon: Heart, title: "Cultural Pride", text: "We celebrate the extraordinary achievements and heritage of European peoples without reservation." },
  { icon: Users, title: "Solidarity", text: "We unite Europeans of all nations under a common cause — transcending borders while respecting sovereignty." },
  { icon: Globe, title: "Pan-European Vision", text: "Our movement spans the continent, building alliances from Lisbon to Helsinki, from Dublin to Athens." },
  { icon: Award, title: "Excellence", text: "We pursue the highest standards in our research, campaigns, and community engagement." },
]

const timeline = [
  { year: "2021", title: "Founded", desc: "Code Victorian established by a group of concerned European citizens in Brussels." },
  { year: "2022", title: "First Campaign", desc: "Launched the 'Protect Our Heritage' petition, gathering 25,000 signatures in three months." },
  { year: "2023", title: "Continental Expansion", desc: "Opened regional chapters in 12 European countries with dedicated volunteers." },
  { year: "2024", title: "Policy Impact", desc: "Published landmark policy papers cited by MEPs in parliamentary debates." },
  { year: "2025", title: "Membership Milestone", desc: "Reached 10,000 active members and launched the European Heritage Fund." },
  { year: "2026", title: "Growing Stronger", desc: "Petition surpasses 125,000 signatures; largest-ever European Heritage Summit held in Vienna." },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(212,175,55,0.4) 0%, transparent 50%)" }} />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Our Story</span>
          <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            About Code Victorian
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
            We are a supranational third-party campaigning organisation dedicated to the preservation
            of European culture, identity, and heritage through democratic action and civic engagement.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">Our Mission</span>
              <h2 className="gold-accent relative mt-3 font-serif text-3xl font-bold sm:text-4xl">
                Defending Europe&rsquo;s Future
              </h2>
              <p className="mt-8 text-base leading-relaxed text-gray-600">
                Code Victorian was born from a simple conviction: Europe&rsquo;s native peoples have the
                right to preserve their cultures, communities, and way of life. In an era of unprecedented
                demographic change, we provide a voice for the millions who feel unrepresented by
                mainstream politics.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                We operate at the supranational level, building coalitions across EU member states
                to advocate for sensible immigration policies, cultural preservation, and the democratic
                right of European peoples to determine the future of their own nations.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/petition" className="btn-primary">Sign Our Petition</Link>
                <Link href="/join" className="btn-navy">Join the Movement</Link>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-navy-200 via-navy-300 to-navy-400 shadow-lg" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">What Drives Us</span>
            <h2 className="gold-accent-center relative mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Our Values
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="card p-7">
                <v.icon className="h-8 w-8 text-gold-500" />
                <h3 className="mt-4 font-serif text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">Our Journey</span>
            <h2 className="gold-accent-center relative mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Milestones
            </h2>
          </div>
          <div className="mt-14 space-y-0">
            {timeline.map((item, i) => (
              <div key={item.year} className="relative flex gap-6 pb-10 last:pb-0">
                {/* Line */}
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-400 text-xs font-bold text-navy-900">
                    {item.year.slice(2)}
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-navy-100" />}
                </div>
                <div className="pb-2 pt-1.5">
                  <h3 className="font-serif text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Ready to Join the Cause?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            Become part of Europe&rsquo;s fastest-growing civic movement.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/join" className="btn-primary">Become a Member</Link>
            <Link href="/volunteer" className="btn-secondary">Volunteer With Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
