import type { Metadata } from "next"
import Link from "next/link"
import { Download, Play, Image, FileText, ArrowRight } from "lucide-react"

export const metadata: Metadata = { title: "Media Centre" }

const pressReleases = [
  { date: "12 April 2026", title: "European Heritage Summit 2026 Concludes with Historic Joint Declaration" },
  { date: "8 April 2026", title: "Code Victorian Petition Surpasses 125,000 Signatures" },
  { date: "3 April 2026", title: "New Policy Paper Proposes EU-Wide Remigration Framework" },
  { date: "22 March 2026", title: "Code Victorian Establishes Chapters in All 27 EU Member States" },
  { date: "1 March 2026", title: "Statement on EU Migration Pact Implementation Timeline" },
]

const videos = [
  { title: "European Heritage Summit 2026 \u2014 Highlights", duration: "12:34", views: "45K" },
  { title: "What Is Remigration? An Explainer", duration: "8:21", views: "128K" },
  { title: "Campaign Director Interview \u2014 Le Monde", duration: "22:15", views: "67K" },
  { title: "Volunteer Stories: Building the Movement", duration: "15:47", views: "23K" },
]

const resources = [
  { title: "Brand Guidelines & Logo Pack", type: "ZIP", size: "14 MB" },
  { title: "Campaign Leaflet Templates", type: "PDF", size: "8.2 MB" },
  { title: "Policy Briefing: Remigration Framework", type: "PDF", size: "2.4 MB" },
  { title: "Infographic: Immigration Statistics 2025", type: "PNG", size: "1.8 MB" },
  { title: "Press Kit \u2014 Q2 2026", type: "ZIP", size: "22 MB" },
]

export default function MediaPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 50% 40%, rgba(212,175,55,0.4) 0%, transparent 50%)" }} />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Resources</span>
          <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Media Centre
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
            Press releases, videos, downloadable resources, and brand assets.
            Everything journalists and supporters need.
          </p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">Press</span>
              <h2 className="gold-accent relative mt-3 font-serif text-3xl font-bold sm:text-4xl">
                Press Releases
              </h2>
            </div>
            <span className="text-sm font-medium text-gray-500">Media enquiries: press@codevictorian.com</span>
          </div>
          <div className="mt-10 space-y-3">
            {pressReleases.map((pr) => (
              <div key={pr.title} className="card group flex items-center justify-between p-5">
                <div className="flex items-start gap-4">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-navy-400" />
                  <div>
                    <h3 className="font-serif text-base font-bold group-hover:text-gold-600 transition-colors">
                      {pr.title}
                    </h3>
                    <span className="text-xs text-gray-400">{pr.date}</span>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-gray-300 transition-transform group-hover:translate-x-1 group-hover:text-gold-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">Watch</span>
          <h2 className="gold-accent relative mt-3 font-serif text-3xl font-bold sm:text-4xl">
            Videos
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {videos.map((v) => (
              <div key={v.title} className="card group">
                <div className="relative aspect-video bg-gradient-to-br from-navy-300 to-navy-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-navy-700 shadow-lg transition-transform group-hover:scale-110">
                      <Play className="h-5 w-5 ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 rounded bg-black/60 px-2 py-0.5 text-xs font-medium text-white">
                    {v.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold leading-snug group-hover:text-gold-600 transition-colors">
                    {v.title}
                  </h3>
                  <span className="mt-1 text-xs text-gray-400">{v.views} views</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">Downloads</span>
          <h2 className="gold-accent relative mt-3 font-serif text-3xl font-bold sm:text-4xl">
            Resources &amp; Assets
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <div key={r.title} className="card group flex items-center justify-between p-5">
                <div>
                  <h3 className="text-sm font-bold group-hover:text-gold-600 transition-colors">
                    {r.title}
                  </h3>
                  <span className="text-xs text-gray-400">{r.type} &middot; {r.size}</span>
                </div>
                <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-600 transition-colors group-hover:bg-gold-400 group-hover:text-navy-900">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">Gallery</span>
          <h2 className="gold-accent relative mt-3 font-serif text-3xl font-bold sm:text-4xl">
            Photo Gallery
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="group aspect-square cursor-pointer overflow-hidden rounded-lg bg-gradient-to-br from-navy-200 to-navy-400 transition-all hover:shadow-lg"
              >
                <div className="flex h-full items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="rounded-full bg-white/90 p-2">
                    <Image className="h-5 w-5 text-navy-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="gradient-navy py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Media Enquiries
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            For press enquiries, interview requests, or media accreditation, contact our communications team.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">Contact Press Team</Link>
          </div>
        </div>
      </section>
    </>
  )
}
