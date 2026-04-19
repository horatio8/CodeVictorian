import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = { title: "News" }

const featured = {
  date: "12 April MMXXVI",
  category: "Events · Vienna",
  title: "European Heritage Summit Draws Record Attendance in Vienna",
  excerpt: "Over 5,000 delegates from 22 nations gathered in Vienna for the largest-ever European Heritage Summit, marking a turning point in the continent\u2019s cultural preservation movement. The three-day event featured keynote speeches, policy workshops, and a historic joint declaration.",
  label: "events · vienna",
}

const articles = [
  { date: "8 April MMXXVI",     category: "Campaign",   label: "campaign · petition",   title: "Petition Reaches 125,000 Signatures Milestone", excerpt: "Our flagship petition continues to gain momentum as citizens from every EU member state add their voices to the cause for meaningful immigration reform." },
  { date: "3 April MMXXVI",     category: "Policy",     label: "policy · paper",        title: "New Policy Paper: Remigration Framework for the EU", excerpt: "Code Victorian releases comprehensive policy paper outlining a legal and humane framework for remigration across EU member states." },
  { date: "28 March MMXXVI",    category: "Press",      label: "press · le monde",      title: "Code Victorian Featured in Le Monde Interview", excerpt: "Campaign director discusses the movement\u2019s growth and strategy in an exclusive interview with France\u2019s leading newspaper." },
  { date: "22 March MMXXVI",    category: "Community",  label: "community · chapters",  title: "Local Chapters Expand to 28 Countries", excerpt: "With the establishment of chapters in Estonia and Malta, Code Victorian now has active local groups in all 27 EU member states plus Norway." },
  { date: "15 March MMXXVI",    category: "Campaign",   label: "campaign · heritage",   title: "Spring Campaign Launch: Protect Our Heritage", excerpt: "The new spring campaign focuses on heritage site preservation, with targeted actions in 15 countries over the coming months." },
  { date: "8 March MMXXVI",     category: "Events",     label: "events · brussels",     title: "International Women of Europe Dinner Raises \u20AC85,000", excerpt: "The inaugural Women of Europe dinner in Brussels brought together female leaders from across the movement for an evening of celebration and fundraising." },
  { date: "1 March MMXXVI",     category: "Policy",     label: "policy · response",     title: "Response to EU Migration Pact Implementation", excerpt: "Code Victorian publishes detailed response to the EU\u2019s Migration Pact implementation timeline, outlining key concerns and proposed amendments." },
  { date: "22 February MMXXVI", category: "Community",  label: "community · stockholm", title: "Volunteer of the Month: Henrik from Stockholm", excerpt: "Meet Henrik, who has single-handedly built the Swedish chapter from 50 members to over 800 in just nine months." },
  { date: "15 February MMXXVI", category: "Press",      label: "press · op-ed",         title: "Op-Ed: Why Europe Needs Cultural Confidence", excerpt: "Our latest opinion piece, published across six major European newspapers, argues for a renewed sense of cultural confidence." },
]

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32 on-dark">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow eyebrow-both">The Dispatches</span>
          <h1 className="mt-6 font-serif text-5xl font-medium text-white sm:text-6xl lg:text-7xl">
            News &amp;{" "}
            <span className="italic font-normal text-gold-400">Updates</span>
          </h1>
          <p className="lede mx-auto mt-8 max-w-2xl">
            The latest from Code Victorian — campaign updates, policy papers,
            press coverage, and community stories.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="sec-num">
            <span className="num">This Week</span>
            <span className="line" />
            <span className="label">N<sup>o</sup>. LXII</span>
          </div>

          <article className="group border border-gold-400/30 bg-ivory lg:flex">
            <div className="plate aspect-[16/9] lg:aspect-auto lg:w-1/2" data-label={featured.label} />
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:w-1/2">
              <div className="flex items-center gap-4 font-mono text-[0.625rem] uppercase tracking-[0.18em]">
                <span className="font-serif italic normal-case tracking-[0.08em] text-gold-400">
                  {featured.category}
                </span>
                <span className="text-navy-800/45">{featured.date}</span>
              </div>
              <h2 className="mt-5 font-serif text-3xl font-medium leading-tight transition-colors group-hover:text-gold-600 sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 font-lede text-[1.0625rem] leading-relaxed text-navy-800/75">
                {featured.excerpt}
              </p>
              <span className="mt-7 inline-flex items-center gap-2 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-gold-600 transition-colors group-hover:text-gold-500">
                Read full article
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </article>
        </div>
      </section>

      {/* Article grid */}
      <section className="section-padding bg-ivory pt-0">
        <div className="mx-auto max-w-7xl">
          <div className="sec-num">
            <span className="num">From the Archive</span>
            <span className="line" />
            <span className="label">Recent Issues</span>
          </div>

          <div className="grid gap-0 border border-gold-400/25 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => {
              const col = i % 3
              const row = Math.floor(i / 3)
              const totalRows = Math.ceil(articles.length / 3)
              return (
                <article
                  key={article.title}
                  className={`group ${col < 2 ? "lg:border-r lg:border-gold-400/20" : ""} ${
                    row < totalRows - 1 ? "border-b border-gold-400/20" : ""
                  }`}
                >
                  <div className="plate aspect-[16/9]" data-label={article.label} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 font-mono text-[0.625rem] uppercase tracking-[0.18em]">
                      <span className="font-serif italic normal-case tracking-[0.08em] text-gold-400">
                        {article.category}
                      </span>
                      <span className="text-navy-800/45">{article.date}</span>
                    </div>
                    <h3 className="mt-3 font-serif text-lg font-medium leading-snug transition-colors group-hover:text-gold-600">
                      {article.title}
                    </h3>
                    <p className="mt-3 font-lede text-sm leading-relaxed text-navy-800/70 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-14 text-center">
            <Link href="#" className="btn-secondary">Load More Articles</Link>
          </div>
        </div>
      </section>
    </>
  )
}
