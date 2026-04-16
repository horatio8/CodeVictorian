import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Users, Landmark, Scale, Building2, BookOpen, ArrowRight } from "lucide-react"

export const metadata: Metadata = { title: "Our Issues" }

const issues = [
  {
    id: "remigration",
    icon: Shield,
    title: "Start Remigration",
    subtitle: "Restoring demographic balance through lawful, humane policy",
    paragraphs: [
      "Europe\u2019s demographic transformation is not a natural phenomenon \u2014 it is the result of decades of policy failure. Remigration is the lawful, organised return of those who have no legal right to reside in Europe, or whose presence poses a demonstrable threat to public safety.",
      "We advocate for clear, transparent legal frameworks that prioritise the rights and safety of European citizens while respecting international law. Our policy papers propose a phased approach that begins with enforcing existing deportation orders and ending asylum fraud.",
    ],
    stats: [
      { value: "1.2M", label: "Pending deportation orders in the EU" },
      { value: "68%", label: "Of Europeans want stricter border control" },
      { value: "340%", label: "Rise in asylum applications since 2012" },
    ],
  },
  {
    id: "immigration",
    icon: Users,
    title: "Stop Harmful Immigration",
    subtitle: "Ending the unchecked flow that threatens our communities",
    paragraphs: [
      "Not all immigration is equal. We distinguish between skilled, legal immigration that benefits host societies and the mass, uncontrolled migration that has overwhelmed European infrastructure, depressed wages, and imported crime and cultural values incompatible with European norms.",
      "We demand the immediate closure of illegal migration routes, the reform of the asylum system to prevent exploitation, and the introduction of strict integration requirements for all legal migrants. Europe must regain control of its borders.",
    ],
    stats: [
      { value: "2.1M", label: "Illegal border crossings detected (2024)" },
      { value: "€36B", label: "Annual cost of migration to EU taxpayers" },
      { value: "85%", label: "Of asylum claims lack valid documentation" },
    ],
  },
  {
    id: "culture",
    icon: Landmark,
    title: "Preserve European Culture",
    subtitle: "Safeguarding our heritage for future generations",
    paragraphs: [
      "European civilisation has given the world democracy, the scientific method, the rule of law, classical music, Renaissance art, and the very concept of human rights. This heritage is not a museum piece \u2014 it is a living tradition that must be actively defended and transmitted.",
      "We campaign for strengthened heritage protection laws, mandatory civic and cultural education in schools, the protection of European languages and traditions, and public investment in the arts and cultural institutions that define who we are.",
    ],
    stats: [
      { value: "47", label: "European languages under threat" },
      { value: "2,800+", label: "Heritage sites at risk across the EU" },
      { value: "€120M", label: "Annual shortfall in heritage funding" },
    ],
  },
]

const additionalIssues = [
  { icon: Scale, title: "Democratic Sovereignty", desc: "Restoring decision-making power to national parliaments and the citizens they represent." },
  { icon: Building2, title: "Economic Justice", desc: "Ensuring that globalisation benefits European workers and small businesses, not just multinational corporations." },
  { icon: BookOpen, title: "Education Reform", desc: "Reforming curricula to teach European history, culture, and civic values with pride and accuracy." },
]

export default function IssuesPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, rgba(212,175,55,0.4) 0%, transparent 50%)" }} />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Our Platform</span>
          <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            The Issues
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
            We confront the existential challenges facing Europe with clear, evidence-based
            policies and the courage to speak truths that mainstream politics avoids.
          </p>
        </div>
      </section>

      {/* Main issues */}
      {issues.map((issue, i) => (
        <section
          key={issue.id}
          id={issue.id}
          className={`section-padding ${i % 2 === 0 ? "bg-white" : "bg-cream"}`}
        >
          <div className="mx-auto max-w-7xl">
            <div className={`grid items-start gap-12 lg:grid-cols-5 lg:gap-16 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              <div className={`lg:col-span-3 ${i % 2 === 1 ? "lg:col-start-3" : ""}`}>
                <div className="flex items-center gap-3">
                  <issue.icon className="h-8 w-8 text-gold-500" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">
                    Priority {i + 1}
                  </span>
                </div>
                <h2 className="gold-accent relative mt-4 font-serif text-3xl font-bold sm:text-4xl">
                  {issue.title}
                </h2>
                <p className="mt-2 text-base font-medium text-gray-500">{issue.subtitle}</p>
                {issue.paragraphs.map((p, j) => (
                  <p key={j} className="mt-4 text-base leading-relaxed text-gray-600">{p}</p>
                ))}
                <Link
                  href="/petition"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold-500 transition-colors hover:text-gold-600"
                >
                  Take action <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Stats */}
              <div className={`space-y-4 lg:col-span-2 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                {issue.stats.map((s) => (
                  <div key={s.label} className="card p-6 text-center">
                    <div className="font-serif text-3xl font-bold text-navy-700">{s.value}</div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional issues */}
      <section className="section-padding bg-navy-700">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Also Important</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
              Additional Priorities
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {additionalIssues.map((item) => (
              <div key={item.title} className="rounded-xl bg-white/5 p-7 ring-1 ring-white/10 transition-colors hover:bg-white/10">
                <item.icon className="h-8 w-8 text-gold-400" />
                <h3 className="mt-4 font-serif text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Stand Up for These Issues
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-600">
            Your signature and support make a real difference. Join over 127,000 Europeans demanding change.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/petition" className="btn-primary">Sign the Petition</Link>
            <Link href="/donate" className="btn-navy">Donate to the Cause</Link>
          </div>
        </div>
      </section>
    </>
  )
}
