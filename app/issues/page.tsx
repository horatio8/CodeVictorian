import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = { title: "Our Issues" }

const romans = ["I", "II", "III", "IV", "V", "VI"]

const issues = [
  {
    id: "remigration",
    title: "Start Remigration",
    subtitle: "Restoring demographic balance through lawful, humane policy",
    paragraphs: [
      "Europe\u2019s demographic transformation is not a natural phenomenon — it is the result of decades of policy failure. Remigration is the lawful, organised return of those who have no legal right to reside in Europe, or whose presence poses a demonstrable threat to public safety.",
      "We advocate for clear, transparent legal frameworks that prioritise the rights and safety of native Europeans while respecting international law. Our policy proposes a phased approach that begins with enforcing existing deportation orders and ending asylum fraud.",
    ],
    stats: [
      { value: "1.2M", label: "Pending deportation orders in the EU" },
      { value: "68%", label: "Of Europeans want stricter border control" },
      { value: "340%", label: "Rise in asylum applications since 2012" },
    ],
  },
  {
    id: "immigration",
    title: "Stop Harmful Immigration",
    subtitle: "Ending the unchecked flow that threatens our communities",
    paragraphs: [
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
    title: "Preserve European Culture",
    subtitle: "Safeguarding our heritage for future generations",
    paragraphs: [
      "European civilisation, built on the bedrock of Christianity, gave the world democracy, the scientific method, the rule of law, classical music, Renaissance art, and the very concept of human rights. These achievements did not emerge in a vacuum — they grew from a Christian moral tradition that shaped the continent's understanding of human dignity, individual conscience, and the duty to govern justly. This heritage is not a museum piece — it is a living tradition that must be actively defended and transmitted.",
      "We campaign for strengthened heritage protection laws, mandatory civic and cultural education in schools that includes the Christian foundations of European thought, the protection of European languages, traditions, and sacred architecture, and public investment in the arts and cultural institutions that define who we are.",
    ],
    stats: [
      { value: "47", label: "European languages under threat" },
      { value: "2,800+", label: "Heritage sites at risk across the EU" },
      { value: "€120M", label: "Annual shortfall in heritage funding" },
    ],
  },
]

const additionalIssues = [
  { roman: "IV.", title: "Democratic Sovereignty", desc: "Restoring decision-making power to national parliaments and the citizens they represent." },
  { roman: "V.", title: "Economic Justice", desc: "Ensuring that globalisation benefits European workers and small businesses, not just multinational corporations." },
  // Apr 23 brief: Education Reform wording sharpened.
  { roman: "VI.", title: "Education Reform", desc: "Remove woke propaganda and ideology from our education system. Restore the teaching of European history, culture, and civic values." },
]

export default function IssuesPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32 on-dark">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow eyebrow-both">Our Platform</span>
          <h1 className="mt-6 font-serif text-5xl font-medium text-white sm:text-6xl lg:text-7xl">
            The{" "}
            <span className="italic font-normal text-gold-400">Issues</span>
          </h1>
          <p className="lede mx-auto mt-8 max-w-2xl">
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
          className={`section-padding ${i % 2 === 0 ? "bg-ivory" : "bg-cream"} ${
            i < issues.length - 1 ? "border-b border-gold-400/20" : ""
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="sec-num">
              <span className="num">N<sup>o</sup>. {romans[i]}</span>
              <span className="line" />
              <span className="label">Priority {romans[i]}</span>
            </div>

            <div className={`grid items-start gap-12 lg:grid-cols-5 lg:gap-16 ${
              i % 2 === 1 ? "lg:grid-flow-dense" : ""
            }`}>
              <div className={`lg:col-span-3 ${i % 2 === 1 ? "lg:col-start-3" : ""}`}>
                <div className="font-serif text-5xl italic text-gold-400 leading-none">
                  {romans[i]}.
                </div>
                <span className="eyebrow mt-6">Priority {romans[i]}</span>
                <h2 className="mt-4 font-serif text-4xl font-medium sm:text-5xl">
                  {issue.title}
                </h2>
                <p className="mt-3 font-lede text-xl italic text-navy-800/70">{issue.subtitle}</p>
                {issue.paragraphs.map((p, j) => (
                  <p key={j} className="mt-5 font-lede text-base leading-relaxed text-navy-800/75">{p}</p>
                ))}
                <Link
                  href="/petition"
                  className="mt-9 inline-flex items-center gap-2 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-gold-600 transition-colors hover:text-gold-500"
                >
                  Take action <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Stats */}
              <div className={`lg:col-span-2 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="border border-gold-400/25">
                  {issue.stats.map((s, k, arr) => (
                    <div
                      key={s.label}
                      className={`p-8 text-center ${
                        k < arr.length - 1 ? "border-b border-gold-400/20" : ""
                      }`}
                    >
                      <div className="font-serif text-4xl font-medium text-navy-800">{s.value}</div>
                      <div className="mt-2 font-mono text-[0.625rem] font-medium uppercase tracking-[0.24em] text-navy-800/55">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional issues */}
      <section className="section-padding bg-navy-900 on-dark">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="eyebrow eyebrow-both">Also Important</span>
            <h2 className="mt-6 font-serif text-4xl font-medium text-white sm:text-5xl">
              Additional{" "}
              <span className="italic font-normal text-gold-400">Priorities</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-0 border border-gold-400/25 sm:grid-cols-3">
            {additionalIssues.map((item, i, arr) => (
              <div
                key={item.title}
                className={`p-8 transition-colors hover:bg-white/5 ${
                  i < arr.length - 1 ? "sm:border-r sm:border-gold-400/25" : ""
                }`}
              >
                <div className="font-serif text-4xl italic text-gold-400 leading-none">
                  {item.roman}
                </div>
                <h3 className="mt-5 font-serif text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-3 font-lede text-sm leading-relaxed text-white/65">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream text-center">
        <div className="mx-auto max-w-3xl px-6">
          <div className="fleur">✦ ❦ ✦</div>
          <h2 className="mt-6 font-serif text-4xl font-medium sm:text-5xl">
            Stand up for these{" "}
            <span className="italic font-normal text-gold-400">issues</span>.
          </h2>
          <p className="lede mx-auto mt-5 max-w-xl">
            Your signature and support make a real difference. Join over 127,000 Europeans demanding change.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/petition" className="btn-primary">Sign the Petition</Link>
            <Link href="/donate" className="btn-secondary">Donate to the Cause</Link>
          </div>
        </div>
      </section>
    </>
  )
}
