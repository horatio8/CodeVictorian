import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = { title: "News" }

const featured = {
  date: "12 April 2026",
  category: "Events",
  title: "European Heritage Summit Draws Record Attendance in Vienna",
  excerpt: "Over 5,000 delegates from 22 nations gathered in Vienna for the largest-ever European Heritage Summit, marking a turning point in the continent\u2019s cultural preservation movement. The three-day event featured keynote speeches, policy workshops, and a historic joint declaration.",
}

const articles = [
  { date: "8 April 2026", category: "Campaign", title: "Petition Reaches 125,000 Signatures Milestone", excerpt: "Our flagship petition continues to gain momentum as citizens from every EU member state add their voices to the cause for meaningful immigration reform." },
  { date: "3 April 2026", category: "Policy", title: "New Policy Paper: Remigration Framework for the EU", excerpt: "Code Victorian releases comprehensive policy paper outlining a legal and humane framework for remigration across EU member states." },
  { date: "28 March 2026", category: "Press", title: "Code Victorian Featured in Le Monde Interview", excerpt: "Campaign director discusses the movement\u2019s growth and strategy in an exclusive interview with France\u2019s leading newspaper." },
  { date: "22 March 2026", category: "Community", title: "Local Chapters Expand to 28 Countries", excerpt: "With the establishment of chapters in Estonia and Malta, Code Victorian now has active local groups in all 27 EU member states plus Norway." },
  { date: "15 March 2026", category: "Campaign", title: "Spring Campaign Launch: Protect Our Heritage", excerpt: "The new spring campaign focuses on heritage site preservation, with targeted actions in 15 countries over the coming months." },
  { date: "8 March 2026", category: "Events", title: "International Women of Europe Dinner Raises \u20ac85,000", excerpt: "The inaugural Women of Europe dinner in Brussels brought together female leaders from across the movement for an evening of celebration and fundraising." },
  { date: "1 March 2026", category: "Policy", title: "Response to EU Migration Pact Implementation", excerpt: "Code Victorian publishes detailed response to the EU\u2019s Migration Pact implementation timeline, outlining key concerns and proposed amendments." },
  { date: "22 February 2026", category: "Community", title: "Volunteer of the Month: Henrik from Stockholm", excerpt: "Meet Henrik, who has single-handedly built the Swedish chapter from 50 members to over 800 in just nine months." },
  { date: "15 February 2026", category: "Press", title: "Op-Ed: Why Europe Needs Cultural Confidence", excerpt: "Our latest opinion piece, published across six major European newspapers, argues for a renewed sense of cultural confidence." },
]

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, rgba(212,175,55,0.4) 0%, transparent 50%)" }} />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Updates</span>
          <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            News &amp; Updates
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
            The latest from Code Victorian \u2014 campaign updates, policy papers,
            press coverage, and community stories.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <article className="card group overflow-hidden lg:flex">
            <div className="aspect-[16/9] bg-gradient-to-br from-navy-300 to-navy-500 lg:aspect-auto lg:w-1/2" />
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:w-1/2">
              <div className="flex items-center gap-3">
                <span className="rounded bg-gold-400/10 px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-gold-600">
                  {featured.category}
                </span>
                <span className="text-xs text-gray-400">{featured.date}</span>
              </div>
              <h2 className="mt-3 font-serif text-2xl font-bold leading-snug group-hover:text-gold-600 transition-colors sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{featured.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-gold-500 transition-colors group-hover:text-gold-600">
                Read full article <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </article>
        </div>
      </section>

      {/* Article grid */}
      <section className="section-padding bg-white pt-0">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article.title} className="card group">
                <div className="aspect-[16/9] bg-gradient-to-br from-navy-200 to-navy-300" />
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="rounded bg-gold-400/10 px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-gold-600">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">{article.date}</span>
                  </div>
                  <h3 className="mt-2.5 font-serif text-base font-bold leading-snug group-hover:text-gold-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="btn-navy">Load More Articles</button>
          </div>
        </div>
      </section>
    </>
  )
}
