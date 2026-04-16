import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"

export const metadata: Metadata = { title: "Events" }

const upcoming = [
  {
    date: "3 May 2026",
    day: "3",
    month: "MAY",
    title: "European Identity Forum \u2014 Berlin",
    location: "Berlin Congress Centre, Germany",
    time: "09:00\u201317:00 CET",
    desc: "A full-day conference on preserving European identity in the 21st century. Keynote speakers, panel discussions, and networking.",
    type: "Conference",
    attendees: 450,
  },
  {
    date: "17 May 2026",
    day: "17",
    month: "MAY",
    title: "Heritage Walk \u2014 Prague Old Town",
    location: "Prague, Czech Republic",
    time: "10:00\u201313:00 CET",
    desc: "Guided walking tour of Prague\u2019s historic quarter, celebrating the architectural heritage of Central Europe.",
    type: "Community",
    attendees: 80,
  },
  {
    date: "1 June 2026",
    day: "1",
    month: "JUN",
    title: "Annual Members\u2019 Congress",
    location: "Vienna, Austria",
    time: "10:00\u201318:00 CET",
    desc: "Our flagship annual event. Members vote on strategy, elect leadership, and hear from campaign teams across Europe.",
    type: "Members Only",
    attendees: 1200,
  },
  {
    date: "14 June 2026",
    day: "14",
    month: "JUN",
    title: "Volunteer Training Day \u2014 Amsterdam",
    location: "Amsterdam, Netherlands",
    time: "11:00\u201316:00 CET",
    desc: "Hands-on training in campaign techniques, public speaking, digital outreach, and community organising.",
    type: "Training",
    attendees: 120,
  },
  {
    date: "28 June 2026",
    day: "28",
    month: "JUN",
    title: "Summer Fundraising Gala",
    location: "Brussels, Belgium",
    time: "19:00\u201323:00 CET",
    desc: "An elegant evening of dining, music, and speeches to raise funds for autumn campaigns. Black tie optional.",
    type: "Fundraiser",
    attendees: 300,
  },
]

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 30% 70%, rgba(212,175,55,0.4) 0%, transparent 50%)" }} />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Calendar</span>
          <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Upcoming Events
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
            Join us in person across Europe. From conferences and rallies to community walks
            and training days, there&rsquo;s always something happening.
          </p>
        </div>
      </section>

      {/* Event list */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            {upcoming.map((event) => (
              <article key={event.title} className="card group overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  {/* Date badge */}
                  <div className="flex shrink-0 items-center justify-center bg-navy-700 px-6 py-5 text-center sm:w-28 sm:flex-col sm:py-8">
                    <span className="font-serif text-3xl font-bold text-gold-400 sm:text-4xl">{event.day}</span>
                    <span className="ml-2 text-sm font-bold uppercase tracking-wider text-white/60 sm:ml-0 sm:mt-1">
                      {event.month}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded bg-gold-400/10 px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-gold-600">
                        {event.type}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Users className="h-3 w-3" /> {event.attendees} expected
                      </span>
                    </div>
                    <h3 className="mt-2 font-serif text-lg font-bold group-hover:text-gold-600 transition-colors">
                      {event.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{event.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {event.time}
                      </span>
                    </div>
                    <div className="mt-4">
                      <button className="inline-flex items-center gap-1 text-sm font-bold text-gold-500 transition-colors hover:text-gold-600">
                        Register <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Want to Host an Event?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            If you&rsquo;d like to organise a local event for Code Victorian, we&rsquo;d love to hear from you.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="btn-primary">Get in Touch</Link>
            <Link href="/volunteer" className="btn-secondary">Become a Volunteer</Link>
          </div>
        </div>
      </section>
    </>
  )
}
