import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CTABanner } from "@/components/sections/cta-banner"
import { formatDate } from "@/lib/utils"
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Users,
  Star,
  Megaphone,
  CalendarPlus,
  Mail,
  CheckCircle2,
  ImageIcon,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join Code Victorian at events across Europe. Rallies, conferences, community gatherings, and more. Find an event near you or host your own.",
  openGraph: {
    title: "Events | Code Victorian",
    description:
      "Join Code Victorian at events across Europe. Rallies, conferences, community gatherings, and more.",
    url: "https://codevictorian.com/events",
  },
}

const featuredEvent = {
  date: "2026-04-28",
  endDate: "2026-04-28",
  time: "11:00\u201316:00 CET",
  title: "European Heritage March \u2014 Brussels",
  location: "Parc du Cinquantenaire, Brussels, Belgium",
  description:
    "Our flagship event of the spring. Thousands of Europeans will march peacefully through the heart of the EU capital to deliver a powerful message: the people of this continent demand to be heard. The march will culminate at the Parc du Cinquantenaire with speeches from prominent voices in the movement, live music celebrating European culture, and the formal presentation of our petition milestone to the press.",
  highlights: [
    "Keynote addresses from leading European campaigners",
    "Live traditional music from six European nations",
    "Formal petition milestone press conference",
    "Family-friendly programme with food stalls and activities",
    "Free transport subsidies available for groups travelling over 200km",
  ],
  attendees: 4200,
  category: "March",
}

const upcomingEvents = [
  {
    date: "2026-05-09",
    time: "18:00\u201321:00 CET",
    title: "Town Hall: Immigration Policy in Focus",
    location: "Stadthalle, Munich, Germany",
    description:
      "An open town hall where citizens can hear expert analysis on immigration policy and ask questions directly to our panel of researchers and campaigners.",
    category: "Town Hall",
    attendees: 850,
  },
  {
    date: "2026-05-15",
    time: "09:00\u201318:00 CET",
    title: "Cultural Preservation Conference",
    location: "Palais Ferstel, Vienna, Austria",
    description:
      "A full-day conference featuring workshops, panels, and presentations on safeguarding European traditions, language, and heritage for future generations.",
    category: "Conference",
    attendees: 1200,
  },
  {
    date: "2026-06-01",
    time: "14:00\u201317:00 CET",
    title: "Community Rally for European Identity",
    location: "Dam Square, Amsterdam, Netherlands",
    description:
      "A spirited afternoon rally bringing together communities from across the Low Countries. Speakers, music, and a collective declaration of European pride.",
    category: "Rally",
    attendees: 2000,
  },
  {
    date: "2026-06-20",
    time: "10:00\u201316:00 CET",
    title: "Heritage Festival \u2014 Midsummer Celebration",
    location: "Parco Sempione, Milan, Italy",
    description:
      "A festive celebration of European midsummer traditions. Traditional crafts, folk performances, artisan food markets, and family activities in the heart of Milan.",
    category: "Festival",
    attendees: 3500,
  },
  {
    date: "2026-07-11",
    time: "18:30\u201321:30 CET",
    title: "Petition Delivery Gala Dinner",
    location: "H\u00f4tel de Crillon, Paris, France",
    description:
      "An exclusive evening to celebrate reaching our 100,000-signature target. Join us for dinner, speeches, and the announcement of our next campaign phase.",
    category: "Gala",
    attendees: 300,
  },
]

const pastEvents = [
  {
    date: "2026-03-15",
    title: "Code Victorian Rally \u2014 Vienna",
    location: "Heldenplatz, Vienna, Austria",
    description:
      "Over 3,000 supporters gathered at Heldenplatz for our largest rally to date, with speeches that made international headlines.",
    attendees: 3200,
    category: "Rally",
  },
  {
    date: "2026-02-22",
    title: "Founding Conference",
    location: "Kongresshaus, Zurich, Switzerland",
    description:
      "The inaugural Code Victorian conference where our manifesto was unveiled and the petition campaign officially launched.",
    attendees: 800,
    category: "Conference",
  },
  {
    date: "2026-01-18",
    title: "Winter Vigil for European Heritage",
    location: "Brandenburg Gate, Berlin, Germany",
    description:
      "A candlelit vigil in the winter cold, attended by hundreds who braved sub-zero temperatures to stand for European culture.",
    attendees: 450,
    category: "Vigil",
  },
]

export default function EventsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary to-primary-800" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="accent" className="mb-5 text-sm">
              <Calendar className="h-3.5 w-3.5 mr-1.5" />
              Rallies &bull; Conferences &bull; Community
            </Badge>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-[1.1] text-balance">
              Events
            </h1>
            <p className="text-primary-200 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              From marches in Brussels to festivals in Milan, Code Victorian is
              bringing Europeans together across the continent. Find an event
              near you and be part of the movement in person.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Button asChild size="xl">
                <Link href="/petition">
                  Sign the Petition
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="white" size="xl">
                <a href="#upcoming">
                  View Upcoming Events
                </a>
              </Button>
            </div>

            {/* Event Stats */}
            <div className="flex items-center gap-6 mt-10 justify-center">
              <div>
                <span className="text-2xl font-serif font-bold text-accent">
                  12
                </span>
                <p className="text-xs text-primary-300">Events in 2026</p>
              </div>
              <div className="w-px h-10 bg-primary-400/30" />
              <div>
                <span className="text-2xl font-serif font-bold text-accent">
                  8
                </span>
                <p className="text-xs text-primary-300">Countries</p>
              </div>
              <div className="w-px h-10 bg-primary-400/30" />
              <div>
                <span className="text-2xl font-serif font-bold text-accent">
                  15,000+
                </span>
                <p className="text-xs text-primary-300">Attendees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Upcoming Event */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="section-heading">
            <Badge variant="accent" className="mb-4">
              <Star className="h-3 w-3 mr-1.5" />
              Featured Event
            </Badge>
            <h2 className="text-primary">
              Next Major <span className="text-accent">Gathering</span>
            </h2>
          </div>

          <Card className="overflow-hidden max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5">
              {/* Left: Visual */}
              <div className="md:col-span-2 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center p-12 min-h-[280px]">
                <div className="text-center">
                  <Calendar className="h-16 w-16 text-primary-400 mx-auto mb-4" />
                  <p className="text-3xl font-serif font-bold text-primary">
                    28
                  </p>
                  <p className="text-lg font-serif text-primary-600">
                    April 2026
                  </p>
                  <Badge variant="accent" className="mt-3">
                    {featuredEvent.category}
                  </Badge>
                </div>
              </div>

              {/* Right: Details */}
              <CardContent className="md:col-span-3 p-8 md:p-10">
                <h3 className="font-serif font-bold text-primary text-2xl md:text-3xl mb-3">
                  {featuredEvent.title}
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-accent" />
                    {featuredEvent.location}
                  </span>
                  <span className="hidden sm:block text-border">|</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-accent" />
                    {featuredEvent.time}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredEvent.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {featuredEvent.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-accent" />
                    <span>
                      {featuredEvent.attendees.toLocaleString("en-GB")}{" "}
                      registered
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="cta-glow">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    View Full Details
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Upcoming Events List */}
      <section id="upcoming" className="bg-muted/50 section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">Coming Soon</Badge>
            <h2 className="text-primary">
              Upcoming <span className="text-accent">Events</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              We have a packed calendar of events across Europe. Find one near
              you and join the movement in person.
            </p>
          </div>

          {/* Calendar Integration Note */}
          <div className="bg-white border border-border rounded-xl p-4 mb-8 max-w-2xl mx-auto flex items-center gap-3">
            <CalendarPlus className="h-5 w-5 text-accent shrink-0" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-primary">Calendar sync coming soon.</strong>{" "}
              We are building an iCal and Google Calendar integration so you can
              subscribe to all Code Victorian events automatically.
            </p>
          </div>

          <div className="space-y-5">
            {upcomingEvents.map((event) => (
              <Card key={event.title} className="card-hover">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Date Column */}
                    <div className="md:w-36 bg-primary-50 flex flex-row md:flex-col items-center justify-center p-4 md:p-6 gap-2 md:gap-0 shrink-0 rounded-t-xl md:rounded-t-none md:rounded-l-xl">
                      <span className="text-2xl md:text-3xl font-serif font-bold text-primary">
                        {new Date(event.date).getDate()}
                      </span>
                      <span className="text-sm font-medium text-primary-600">
                        {new Date(event.date).toLocaleDateString("en-GB", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-5 md:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="accent" className="text-[10px]">
                              {event.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {event.attendees.toLocaleString("en-GB")}{" "}
                              registered
                            </span>
                          </div>
                          <h3 className="font-serif font-bold text-primary text-lg md:text-xl">
                            {event.title}
                          </h3>
                        </div>
                        <Button
                          size="sm"
                          className="shrink-0 self-start cta-glow"
                        >
                          Register
                        </Button>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-accent" />
                          {event.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-accent" />
                          {event.time}
                        </span>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">Looking Back</Badge>
            <h2 className="text-primary">
              Past <span className="text-accent">Events</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              A look at where we have been and the milestones we have reached
              together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <Card key={event.title} className="card-hover">
                <CardContent className="p-0">
                  <div className="h-40 bg-gradient-to-br from-primary-100 to-primary-200 rounded-t-xl flex items-center justify-center">
                    <ImageIcon className="h-10 w-10 text-primary-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="muted" className="text-[10px]">
                        {event.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(event.date)}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-primary text-lg mb-1">
                      {event.title}
                    </h3>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mb-3">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-sm text-accent font-medium">
                      <Users className="h-4 w-4" />
                      {event.attendees.toLocaleString("en-GB")} attended
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Host an Event CTA */}
      <section className="bg-muted/50 section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg border border-border p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Megaphone className="h-10 w-10 text-accent mb-5" />
                <h2 className="font-serif font-bold text-primary text-3xl mb-3">
                  Host an Event
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Want to bring the movement to your city? We provide full
                  support for local organisers, including promotional materials,
                  speaker coordination, and logistical guidance.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Free organiser toolkit and branded materials",
                    "Speaker and panel coordination support",
                    "Promotion across our European network",
                    "On-the-ground logistical advice",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary-50 rounded-xl p-6 md:p-8">
                <h3 className="font-serif font-bold text-primary text-xl mb-2">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground text-sm mb-5">
                  Fill in your details and our events team will be in touch
                  within 48 hours.
                </p>
                <div className="space-y-3">
                  <div className="bg-white border border-border rounded-md px-3 py-2.5 text-sm text-muted-foreground">
                    Your full name
                  </div>
                  <div className="bg-white border border-border rounded-md px-3 py-2.5 text-sm text-muted-foreground">
                    Email address
                  </div>
                  <div className="bg-white border border-border rounded-md px-3 py-2.5 text-sm text-muted-foreground">
                    City &amp; Country
                  </div>
                  <div className="bg-white border border-border rounded-md px-3 py-2.5 text-sm text-muted-foreground h-20">
                    Tell us about your event idea...
                  </div>
                  <Button className="w-full cta-glow" size="lg">
                    <Mail className="mr-2 h-4 w-4" />
                    Submit Enquiry
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Stand With Us Across Europe"
        description="Whether you attend in person or support from home, your voice matters. Sign the petition and help us reach 100,000 signatures."
        primaryAction={{ label: "Sign the Petition", href: "/petition" }}
        secondaryAction={{ label: "Make a Donation", href: "/donate" }}
      />
    </>
  )
}
