import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Clock, Users, ArrowRight } from "lucide-react"

export const metadata: Metadata = { title: "Events" }

const upcoming = [
  { date: "3 May MMXXVI",   day: "III",   month: "May",  title: "European Identity Forum — Berlin",            location: "Berlin Congress Centre, Germany", time: "09:00–17:00 CET", desc: "A full-day conference on preserving European identity in the 21st century. Keynote speakers, panel discussions, and networking.", type: "Conference",    attendees: 450 },
  { date: "17 May MMXXVI",  day: "XVII",  month: "May",  title: "Heritage Walk — Prague Old Town",             location: "Prague, Czech Republic",           time: "10:00–13:00 CET", desc: "Guided walking tour of Prague\u2019s historic quarter, celebrating the architectural heritage of Central Europe.",           type: "Community",     attendees: 80  },
  { date: "1 June MMXXVI",  day: "I",     month: "Jun",  title: "Annual Members\u2019 Congress",               location: "Vienna, Austria",                  time: "10:00–18:00 CET", desc: "Our flagship annual event. Members vote on strategy, elect leadership, and hear from campaign teams across Europe.",         type: "Members Only",  attendees: 1200},
  { date: "14 June MMXXVI", day: "XIV",   month: "Jun",  title: "Volunteer Training Day — Amsterdam",          location: "Amsterdam, Netherlands",           time: "11:00–16:00 CET", desc: "Hands-on training in campaign techniques, public speaking, digital outreach, and community organising.",                   type: "Training",      attendees: 120 },
  { date: "28 June MMXXVI", day: "XXVIII",month: "Jun",  title: "Summer Fundraising Gala",                     location: "Brussels, Belgium",                time: "19:00–23:00 CET", desc: "An elegant evening of dining, music, and speeches to raise funds for autumn campaigns. Black tie optional.",                type: "Fundraiser",    attendees: 300 },
]

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32 on-dark">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow eyebrow-both">The Calendar</span>
          <h1 className="mt-6 font-serif text-5xl font-medium text-white sm:text-6xl lg:text-7xl">
            Upcoming{" "}
            <span className="italic font-normal text-gold-400">Events</span>
          </h1>
          <p className="lede mx-auto mt-8 max-w-2xl">
            Join us in person across Europe. From conferences and rallies to community walks
            and training days, there&rsquo;s always something happening.
          </p>
        </div>
      </section>

      {/* Event list */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-4xl">
          <div className="sec-num">
            <span className="num">From the Calendar</span>
            <span className="line" />
            <span className="label">Upcoming</span>
          </div>

          <div className="border-t border-gold-400/25">
            {upcoming.map((event) => (
              <article
                key={event.title}
                className="group flex flex-col border-b border-gold-400/20 transition-colors hover:bg-ivory sm:flex-row"
              >
                {/* Date block — flat navy, roman numeral */}
                <div className="flex shrink-0 items-center justify-center gap-3 border-r border-gold-400/20 bg-navy-800 px-6 py-5 on-dark sm:w-36 sm:flex-col sm:gap-1 sm:py-10">
                  <span className="font-serif text-4xl italic font-normal text-gold-400 sm:text-5xl leading-none">
                    {event.day}
                  </span>
                  <span className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-white/55 sm:mt-2">
                    {event.month}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-4 font-mono text-[0.625rem] uppercase tracking-[0.18em]">
                    <span className="font-serif italic normal-case tracking-[0.08em] text-gold-400">
                      {event.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-navy-800/50">
                      <Users className="h-3 w-3" /> {event.attendees} expected
                    </span>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl font-medium transition-colors group-hover:text-gold-600">
                    {event.title}
                  </h3>
                  <p className="mt-2 font-lede text-base leading-relaxed text-navy-800/70">{event.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-6 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-navy-800/55">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3 w-3 text-gold-400" /> {event.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3 text-gold-400" /> {event.time}
                    </span>
                  </div>
                  <div className="mt-5">
                    <button className="inline-flex items-center gap-2 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-gold-600 transition-colors hover:text-gold-500">
                      Register
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy py-24 text-center on-dark">
        <div className="mx-auto max-w-3xl px-6">
          <div className="fleur">✦ ❦ ✦</div>
          <h2 className="mt-6 font-serif text-4xl font-medium text-white sm:text-5xl">
            Want to host an{" "}
            <span className="italic font-normal text-gold-400">event</span>?
          </h2>
          <p className="lede mx-auto mt-5 max-w-xl">
            If you&rsquo;d like to organise a local event for Code Victorian, we&rsquo;d love to hear from you.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="btn-primary">Get in Touch</Link>
            <Link href="/volunteer" className="btn-secondary">Become a Volunteer</Link>
          </div>
        </div>
      </section>
    </>
  )
}
