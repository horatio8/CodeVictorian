import type { Metadata } from "next"
import Link from "next/link"
import { Download, Play, FileText, ArrowRight } from "lucide-react"

export const metadata: Metadata = { title: "Media Centre" }

const pressReleases = [
  { date: "12 April MMXXVI",  title: "European Heritage Summit 2026 Concludes with Historic Joint Declaration" },
  { date: "8 April MMXXVI",   title: "Code Victorian Petition Surpasses 125,000 Signatures" },
  { date: "3 April MMXXVI",   title: "New Policy Paper Proposes EU-Wide Remigration Framework" },
  { date: "22 March MMXXVI",  title: "Code Victorian Establishes Chapters in All 27 EU Member States" },
  { date: "1 March MMXXVI",   title: "Statement on EU Migration Pact Implementation Timeline" },
]

const videos = [
  { title: "European Heritage Summit 2026 — Highlights", duration: "12:34", views: "45K",  label: "video · summit"      },
  { title: "What Is Remigration? An Explainer",          duration: "8:21",  views: "128K", label: "video · explainer"   },
  { title: "Campaign Director Interview — Le Monde",     duration: "22:15", views: "67K",  label: "video · le monde"    },
  { title: "Volunteer Stories: Building the Movement",   duration: "15:47", views: "23K",  label: "video · volunteers"  },
]

const resources = [
  { title: "Brand Guidelines & Logo Pack",            type: "ZIP", size: "14 MB"  },
  { title: "Campaign Leaflet Templates",              type: "PDF", size: "8.2 MB" },
  { title: "Policy Briefing: Remigration Framework",  type: "PDF", size: "2.4 MB" },
  { title: "Infographic: Immigration Statistics 2025",type: "PNG", size: "1.8 MB" },
  { title: "Press Kit — Q2 2026",                     type: "ZIP", size: "22 MB"  },
]

const galleryLabels = [
  "gallery · 01 · vienna",
  "gallery · 02 · brussels",
  "gallery · 03 · prague",
  "gallery · 04 · berlin",
  "gallery · 05 · rome",
  "gallery · 06 · paris",
  "gallery · 07 · london",
  "gallery · 08 · lisbon",
]

export default function MediaPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32 on-dark">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow eyebrow-both">Resources</span>
          <h1 className="mt-6 font-serif text-5xl font-medium text-white sm:text-6xl lg:text-7xl">
            Media{" "}
            <span className="italic font-normal text-gold-400">Centre</span>
          </h1>
          <p className="lede mx-auto mt-8 max-w-2xl">
            Press releases, videos, downloadable resources, and brand assets.
            Everything journalists and supporters need.
          </p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="sec-num">
            <span className="num">N<sup>o</sup>. I</span>
            <span className="line" />
            <span className="label">Press</span>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">Press</span>
              <h2 className="mt-5 font-serif text-4xl font-medium sm:text-5xl">
                Press{" "}
                <span className="italic font-normal text-gold-400">Releases</span>
              </h2>
            </div>
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-navy-800/55">
              Media enquiries · via the contact form
            </span>
          </div>

          <div className="mt-12 border-y border-gold-400/25">
            {pressReleases.map((pr) => (
              <div
                key={pr.title}
                className="group flex items-center justify-between gap-6 border-b border-gold-400/15 p-6 transition-colors last:border-b-0 hover:bg-ivory"
              >
                <div className="flex items-start gap-5">
                  <FileText className="mt-1 h-5 w-5 shrink-0 text-gold-400" />
                  <div>
                    <h3 className="font-serif text-lg font-medium transition-colors group-hover:text-gold-600">
                      {pr.title}
                    </h3>
                    <span className="mt-1 inline-block font-mono text-[0.625rem] uppercase tracking-[0.22em] text-navy-800/50">
                      {pr.date}
                    </span>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-gold-400/50 transition-all group-hover:translate-x-1 group-hover:text-gold-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="section-padding bg-ivory border-y border-gold-400/20">
        <div className="mx-auto max-w-7xl">
          <div className="sec-num">
            <span className="num">N<sup>o</sup>. II</span>
            <span className="line" />
            <span className="label">Watch</span>
          </div>
          <span className="eyebrow">Watch</span>
          <h2 className="mt-5 font-serif text-4xl font-medium sm:text-5xl">
            Videos &amp;{" "}
            <span className="italic font-normal text-gold-400">Interviews</span>
          </h2>

          <div className="mt-12 grid gap-0 border border-gold-400/25 sm:grid-cols-2 lg:grid-cols-4">
            {videos.map((v, i, arr) => (
              <article
                key={v.title}
                className={`group ${i < arr.length - 1 ? "lg:border-r lg:border-gold-400/20" : ""} ${
                  i % 2 === 0 ? "sm:border-r sm:border-gold-400/20" : ""
                } ${i < 2 ? "border-b border-gold-400/20 lg:border-b-0" : ""}`}
              >
                <div className="plate relative aspect-video" data-label={v.label}>
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center border border-gold-400 bg-navy-900/60 text-gold-400 transition-transform group-hover:scale-110">
                      <Play className="h-4 w-4 ml-0.5 fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 z-10 border border-gold-400/40 bg-navy-900/80 px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-gold-400">
                    {v.duration}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-base font-medium leading-snug transition-colors group-hover:text-gold-600">
                    {v.title}
                  </h3>
                  <span className="mt-2 inline-block font-mono text-[0.625rem] uppercase tracking-[0.18em] text-navy-800/50">
                    {v.views} views
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="sec-num">
            <span className="num">N<sup>o</sup>. III</span>
            <span className="line" />
            <span className="label">Downloads</span>
          </div>
          <span className="eyebrow">Downloads</span>
          <h2 className="mt-5 font-serif text-4xl font-medium sm:text-5xl">
            Resources &amp;{" "}
            <span className="italic font-normal text-gold-400">Assets</span>
          </h2>

          <div className="mt-12 grid gap-0 border border-gold-400/25 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r, i, arr) => {
              const col = i % 3
              const row = Math.floor(i / 3)
              const totalRows = Math.ceil(arr.length / 3)
              return (
                <div
                  key={r.title}
                  className={`group flex items-center justify-between gap-5 p-6 transition-colors hover:bg-ivory ${
                    col < 2 ? "lg:border-r lg:border-gold-400/20" : ""
                  } ${
                    row < totalRows - 1 ? "border-b border-gold-400/20" : ""
                  } ${
                    i % 2 === 0 ? "sm:border-r sm:border-gold-400/20 lg:border-r" : ""
                  }`}
                >
                  <div>
                    <h3 className="font-serif text-base font-medium transition-colors group-hover:text-gold-600">
                      {r.title}
                    </h3>
                    <span className="mt-1 inline-block font-mono text-[0.625rem] uppercase tracking-[0.18em] text-navy-800/50">
                      {r.type} · {r.size}
                    </span>
                  </div>
                  <button
                    aria-label={`Download ${r.title}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold-400/40 text-gold-400 transition-colors group-hover:bg-gold-400 group-hover:text-navy-900"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-ivory border-t border-gold-400/20">
        <div className="mx-auto max-w-7xl">
          <div className="sec-num">
            <span className="num">N<sup>o</sup>. IV</span>
            <span className="line" />
            <span className="label">Gallery</span>
          </div>
          <span className="eyebrow">Gallery</span>
          <h2 className="mt-5 font-serif text-4xl font-medium sm:text-5xl">
            Photo{" "}
            <span className="italic font-normal text-gold-400">Gallery</span>
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {galleryLabels.map((label, i) => (
              <div
                key={i}
                className="plate aspect-square cursor-pointer"
                data-label={label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="gradient-navy py-24 text-center on-dark">
        <div className="mx-auto max-w-3xl px-6">
          <div className="fleur">✦ ❦ ✦</div>
          <h2 className="mt-6 font-serif text-4xl font-medium text-white sm:text-5xl">
            Media{" "}
            <span className="italic font-normal text-gold-400">enquiries</span>.
          </h2>
          <p className="lede mx-auto mt-5 max-w-xl">
            For press enquiries, interview requests, or media accreditation, contact our communications team.
          </p>
          <div className="mt-9">
            <Link href="/contact" className="btn-primary">Contact Press Team <span className="font-serif">→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
