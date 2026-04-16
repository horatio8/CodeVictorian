import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PetitionForm } from "@/components/sections/petition-form"
import { DonationWidget } from "@/components/sections/donation-widget"
import { CTABanner } from "@/components/sections/cta-banner"
import {
  Shield,
  Users,
  Landmark,
  ArrowRight,
  Calendar,
  Newspaper,
  Star,
} from "lucide-react"

const issues = [
  {
    icon: Shield,
    title: "Start Remigration",
    description:
      "A structured and humane programme to return those who refuse to integrate, protecting the safety and cohesion of European communities.",
    href: "/issues#remigration",
  },
  {
    icon: Users,
    title: "Stop Harmful Immigration",
    description:
      "Enforce strict border controls and halt the influx of individuals whose cultures and conduct directly threaten our way of life.",
    href: "/issues#immigration",
  },
  {
    icon: Landmark,
    title: "Preserve European Culture",
    description:
      "Safeguard Europe\u2019s heritage, traditions, and values for future generations through education, investment, and institutional reform.",
    href: "/issues#culture",
  },
]

const newsItems = [
  {
    date: "2026-04-10",
    title: "Record Petition Numbers: 45,000 and Growing",
    excerpt:
      "Our petition has reached a major milestone as support surges across the continent.",
    category: "Campaign",
  },
  {
    date: "2026-04-05",
    title: "Code Victorian Rally Draws Thousands in Vienna",
    excerpt:
      "Supporters from across Europe gathered for our largest event yet.",
    category: "Events",
  },
  {
    date: "2026-03-28",
    title: "New Policy Paper: A Blueprint for Cultural Preservation",
    excerpt:
      "Our research team outlines actionable strategies for protecting European heritage.",
    category: "Policy",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary to-primary-800" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
          {/* Classical Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 py-20 md:py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Messaging */}
            <div className="text-center lg:text-left">
              <Badge variant="accent" className="mb-5 text-sm">
                Third-Party Campaigner &bull; Europe
              </Badge>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-[1.1] text-balance">
                Europe for{" "}
                <span className="text-accent">Native Europeans</span>
              </h1>
              <p className="text-primary-200 text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Our continent&rsquo;s heritage is under threat. Join the growing
                movement to preserve European culture, stop harmful immigration,
                and secure our future.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Button asChild size="xl">
                  <Link href="/petition">
                    Sign the Petition
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="white" size="xl">
                  <Link href="/donate">Make a Donation</Link>
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
                <div>
                  <span className="text-2xl font-serif font-bold text-accent">
                    47,832
                  </span>
                  <p className="text-xs text-primary-300">Signatures</p>
                </div>
                <div className="w-px h-10 bg-primary-400/30" />
                <div>
                  <span className="text-2xl font-serif font-bold text-accent">
                    12,450
                  </span>
                  <p className="text-xs text-primary-300">Members</p>
                </div>
                <div className="w-px h-10 bg-primary-400/30" />
                <div>
                  <span className="text-2xl font-serif font-bold text-accent">
                    28
                  </span>
                  <p className="text-xs text-primary-300">Countries</p>
                </div>
              </div>
            </div>

            {/* Right: Petition Form */}
            <div className="lg:pl-8">
              <PetitionForm />
            </div>
          </div>
        </div>
      </section>

      {/* Issues Section */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">Our Priorities</Badge>
            <h2 className="text-primary">
              The Issues That <span className="text-accent">Matter</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              We are fighting for the future of Europe on three critical fronts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {issues.map((issue) => (
              <Link key={issue.title} href={issue.href}>
                <Card className="card-hover h-full group cursor-pointer">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                      <issue.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="font-serif font-bold text-primary text-xl mb-3">
                      {issue.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {issue.description}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-muted/50 section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <Star className="h-10 w-10 text-accent mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-serif text-primary leading-snug mb-6 text-balance">
            &ldquo;A continent that does not protect its culture, its people,
            and its borders cannot call itself free.&rdquo;
          </blockquote>
          <p className="text-muted-foreground font-medium">&mdash; Code Victorian</p>
        </div>
      </section>

      {/* Donation Section */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="muted" className="mb-4">Support the Cause</Badge>
              <h2 className="text-primary mb-4">
                Fund the <span className="text-accent">Movement</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your financial support makes our work possible. From organising
                events across Europe to running awareness campaigns, every euro
                goes directly towards protecting our shared heritage.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  "Fund pan-European awareness campaigns",
                  "Organise rallies, events, and community gatherings",
                  "Support legal challenges to harmful immigration policies",
                  "Produce educational materials about European heritage",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <DonationWidget />
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-muted/50 section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-10">
            <div>
              <Badge variant="muted" className="mb-4">Stay Informed</Badge>
              <h2 className="text-primary">Latest News</h2>
            </div>
            <Button asChild variant="outline" className="hidden md:inline-flex">
              <Link href="/news">
                View All News <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Card key={item.title} className="card-hover">
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-t-xl flex items-center justify-center">
                    <Newspaper className="h-12 w-12 text-primary-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="accent" className="text-[10px]">
                        {item.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(item.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-primary mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.excerpt}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline">
              <Link href="/news">
                View All News <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">Upcoming</Badge>
            <h2 className="text-primary">
              Join Us at an <span className="text-accent">Event</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                date: "28 April 2026",
                title: "European Heritage March \u2014 Brussels",
                description: "A peaceful march through the heart of the EU capital.",
              },
              {
                date: "15 May 2026",
                title: "Cultural Preservation Conference \u2014 Vienna",
                description: "Speakers and workshops on safeguarding European traditions.",
              },
            ].map((event) => (
              <Card key={event.title} className="card-hover">
                <CardContent className="p-6 flex gap-5">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex flex-col items-center justify-center shrink-0">
                    <Calendar className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <span className="text-xs text-accent font-semibold">
                      {event.date}
                    </span>
                    <h3 className="font-serif font-bold text-primary mt-1 mb-1">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {event.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/events">
                See All Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  )
}
