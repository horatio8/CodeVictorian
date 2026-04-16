import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CTABanner } from "@/components/sections/cta-banner"
import {
  Shield,
  Heart,
  Users,
  Landmark,
  Target,
  Globe,
  ArrowRight,
  BookOpen,
  Scale,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Code Victorian — a pan-European third-party campaigner dedicated to preserving European culture, heritage, and identity.",
}

const values = [
  {
    icon: Shield,
    title: "Sovereignty",
    description:
      "We believe every European nation has the right to determine its own future, control its own borders, and protect its own citizens.",
  },
  {
    icon: Heart,
    title: "Heritage",
    description:
      "Europe\u2019s cultural, artistic, and intellectual heritage is one of humanity\u2019s greatest treasures. It must be actively preserved.",
  },
  {
    icon: Scale,
    title: "Accountability",
    description:
      "Governments must be held accountable to their people. Policy should serve the interests of citizens, not ideological agendas.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Strong, cohesive communities are the foundation of a thriving society. We champion solidarity among Europeans.",
  },
]

const timeline = [
  {
    year: "2023",
    title: "Foundation",
    description:
      "Code Victorian was founded by a group of concerned citizens from across the continent, united by a shared belief in Europe\u2019s future.",
  },
  {
    year: "2024",
    title: "First Campaign",
    description:
      "Our inaugural petition gathered 10,000 signatures in its first month, demonstrating widespread public concern.",
  },
  {
    year: "2025",
    title: "Pan-European Expansion",
    description:
      "Operations expanded to 20 countries with local coordinators and volunteer networks established across the continent.",
  },
  {
    year: "2026",
    title: "Growing Momentum",
    description:
      "With nearly 50,000 petition signatures and over 12,000 members, our movement continues to grow every day.",
  },
]

const team = [
  {
    name: "Dr. Heinrich Waldstein",
    role: "Chairman",
    description:
      "Former professor of European history with over 25 years of academic research into cultural preservation.",
  },
  {
    name: "Maria Szab\u00f3",
    role: "Director of Operations",
    description:
      "A veteran campaign organiser with experience across multiple European political movements.",
  },
  {
    name: "Lars Eriksson",
    role: "Head of Communications",
    description:
      "Award-winning journalist and communications strategist dedicated to amplifying the European voice.",
  },
  {
    name: "Dr. Chiara Fontana",
    role: "Policy Director",
    description:
      "Legal scholar specialising in immigration law, border policy, and EU regulatory frameworks.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary to-primary-800" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10 py-20 md:py-28 text-center">
          <Badge variant="accent" className="mb-5">
            About Us
          </Badge>
          <h1 className="text-white mb-6 text-balance">
            About <span className="text-accent">Code Victorian</span>
          </h1>
          <p className="text-primary-200 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            We are a pan-European third-party campaigner standing for the
            preservation of our continent&rsquo;s culture, heritage, and
            identity. Founded by citizens, driven by conviction.
          </p>
          <Button asChild size="xl">
            <Link href="/petition">
              Sign the Petition <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="muted" className="mb-4">
                Our Mission
              </Badge>
              <h2 className="text-primary mb-4">
                A Voice for <span className="text-accent">Europe</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Code Victorian exists because ordinary Europeans deserve a
                platform. For too long, the concerns of everyday citizens about
                immigration, cultural change, and national sovereignty have been
                dismissed or ignored.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are not a political party. We are a supranational campaign
                organisation, registered as a third-party campaigner with the
                National Electoral Authority. Our role is to amplify the voice
                of the people and hold governments accountable.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is straightforward: to advocate for policies that
                protect European culture, enforce sensible immigration controls,
                and ensure that the continent our ancestors built remains a
                homeland for those who cherish it.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-muted rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[350px]">
              <Globe className="h-16 w-16 text-accent mb-6" />
              <p className="text-3xl font-serif font-bold text-primary mb-2">
                28 Countries
              </p>
              <p className="text-muted-foreground">
                One movement, united across Europe
              </p>
              <Separator className="my-6 max-w-[200px]" />
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-2xl font-serif font-bold text-primary">
                    47K+
                  </p>
                  <p className="text-xs text-muted-foreground">Signatures</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-primary">
                    12K+
                  </p>
                  <p className="text-xs text-muted-foreground">Members</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-primary">
                    200+
                  </p>
                  <p className="text-xs text-muted-foreground">Events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/50 section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">
              Our Values
            </Badge>
            <h2 className="text-primary">
              What We <span className="text-accent">Stand For</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="card-hover text-center">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <value.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-serif font-bold text-primary text-lg mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">
              Our Journey
            </Badge>
            <h2 className="text-primary">
              The <span className="text-accent">Story</span> So Far
            </h2>
          </div>

          <div className="space-y-0">
            {timeline.map((item, idx) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <span className="text-primary-900 font-bold text-xs">
                      {item.year}
                    </span>
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border my-2" />
                  )}
                </div>
                <div className="pb-10">
                  <h3 className="font-serif font-bold text-primary text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-muted/50 section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">
              Leadership
            </Badge>
            <h2 className="text-primary">
              Our <span className="text-accent">Team</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Experienced, dedicated, and driven by a shared vision for Europe.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="card-hover">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary-300" />
                  </div>
                  <h3 className="font-serif font-bold text-primary mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="muted" className="mb-4">
            Why Code Victorian
          </Badge>
          <h2 className="text-primary mb-6">
            What Sets Us <span className="text-accent">Apart</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Issue-Focused",
                text: "We are not a political party. We campaign on specific issues that matter to Europeans.",
              },
              {
                icon: Globe,
                title: "Pan-European",
                text: "Active across 28 countries, we unite Europeans regardless of national boundaries.",
              },
              {
                icon: BookOpen,
                title: "Transparent",
                text: "Every donation, every action, every campaign \u2014 we operate with full accountability.",
              },
            ].map((item) => (
              <div key={item.title}>
                <item.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="font-serif font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
