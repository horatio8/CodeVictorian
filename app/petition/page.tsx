import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { PetitionForm } from "@/components/sections/petition-form"
import { DonationWidget } from "@/components/sections/donation-widget"
import { CTABanner } from "@/components/sections/cta-banner"
import {
  Shield,
  Users,
  Landmark,
  Globe,
  ArrowRight,
  Share2,
  Quote,
  Clock,
  CheckCircle2,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Sign the Petition",
  description:
    "Add your name to the growing movement to preserve European culture, stop harmful immigration, and secure our future. Every signature counts.",
  openGraph: {
    title: "Sign the Petition | Code Victorian",
    description:
      "Add your name to the growing movement to preserve European culture. Every signature counts.",
    url: "https://codevictorian.com/petition",
  },
}

const reasons = [
  {
    icon: Shield,
    title: "Defend Our Borders",
    description:
      "Uncontrolled immigration is eroding the safety and social fabric of our communities. Your signature demands that our governments enforce meaningful border security and end policies that put foreign interests above those of native Europeans.",
  },
  {
    icon: Landmark,
    title: "Preserve Our Heritage",
    description:
      "Centuries of art, architecture, language, and tradition are at risk of being diluted beyond recognition. By signing, you stand for the protection and celebration of European civilisation and the values that underpin it.",
  },
  {
    icon: Users,
    title: "Strengthen Our Communities",
    description:
      "Cohesive communities are built on shared culture and mutual trust. This petition calls for policies that prioritise integration, social cohesion, and the well-being of the people who have called Europe home for generations.",
  },
  {
    icon: Globe,
    title: "Send a Continental Message",
    description:
      "Politicians pay attention to numbers. Every signature adds weight to a pan-European demand that cannot be ignored. Together, we become a force that transcends national borders and compels action at every level of governance.",
  },
]

const testimonials = [
  {
    quote:
      "I signed because my children deserve to grow up in the same safe, culturally rich Europe I did. This petition gives ordinary people a genuine voice.",
    name: "Katarina V.",
    location: "Vienna, Austria",
  },
  {
    quote:
      "For too long, the establishment has dismissed our concerns. Seeing tens of thousands of signatures on this petition finally gives me hope that real change is coming.",
    name: "Thomas B.",
    location: "Munich, Germany",
  },
  {
    quote:
      "I am proud to be among those standing up for European heritage. Code Victorian is doing what our politicians refuse to do\u2014listening to the people.",
    name: "Marie-Claire D.",
    location: "Lyon, France",
  },
  {
    quote:
      "This movement is about love for our homeland, not hatred for anyone else. I signed without hesitation and have encouraged everyone I know to do the same.",
    name: "Pieter J.",
    location: "Amsterdam, Netherlands",
  },
]

const sharingPlatforms = [
  { name: "Facebook", colour: "bg-[#1877F2]" },
  { name: "X", colour: "bg-primary" },
  { name: "WhatsApp", colour: "bg-[#25D366]" },
  { name: "Telegram", colour: "bg-[#0088CC]" },
  { name: "Email", colour: "bg-primary-600" },
]

export default function PetitionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        {/* Background Pattern */}
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Urgency Messaging */}
            <div className="text-center lg:text-left">
              <Badge variant="accent" className="mb-5 text-sm">
                <Clock className="h-3.5 w-3.5 mr-1.5" />
                Urgent &mdash; Every Signature Matters
              </Badge>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-[1.1] text-balance">
                Sign the{" "}
                <span className="text-accent">Petition</span>
              </h1>
              <p className="text-primary-200 text-lg md:text-xl leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                Europe&rsquo;s future is being decided right now. Add your name
                to the fastest-growing petition on the continent and demand that
                our leaders act before it is too late.
              </p>
              <p className="text-primary-300 text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                We are calling on the European Parliament and national
                governments to implement strict immigration controls, begin a
                structured remigration programme, and invest in the preservation
                of European culture and heritage. Your signature is your vote for
                a future that honours our past.
              </p>

              {/* Urgency Stats */}
              <div className="flex items-center gap-6 justify-center lg:justify-start mb-8">
                <div>
                  <span className="text-2xl font-serif font-bold text-accent">
                    47,832
                  </span>
                  <p className="text-xs text-primary-300">Signatures</p>
                </div>
                <div className="w-px h-10 bg-primary-400/30" />
                <div>
                  <span className="text-2xl font-serif font-bold text-accent">
                    52,168
                  </span>
                  <p className="text-xs text-primary-300">Still Needed</p>
                </div>
                <div className="w-px h-10 bg-primary-400/30" />
                <div>
                  <span className="text-2xl font-serif font-bold text-accent">
                    28
                  </span>
                  <p className="text-xs text-primary-300">Countries</p>
                </div>
              </div>

              {/* Urgency Nudge */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-accent shrink-0" />
                  <p className="text-sm text-primary-100">
                    <strong className="text-white">1,247 people</strong> signed
                    in the last 24 hours. Momentum is building&mdash;don&rsquo;t
                    let it slow down.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Petition Form (primary CTA above the fold) */}
            <div className="lg:pl-4">
              <PetitionForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why Sign Section */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">
              Why Your Signature Matters
            </Badge>
            <h2 className="text-primary">
              Four Reasons to <span className="text-accent">Sign Today</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              This is more than a petition. It is a declaration that the people
              of Europe will not stand by while their continent is transformed
              beyond recognition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {reasons.map((reason) => (
              <Card key={reason.title} className="card-hover h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <reason.icon className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-primary text-xl mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/50 section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">Voices of Europe</Badge>
            <h2 className="text-primary">
              Why People Are <span className="text-accent">Signing</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Hear from fellow Europeans who have already added their names to
              the petition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="card-hover h-full">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-accent/30 mb-4" />
                  <blockquote className="text-foreground leading-relaxed mb-5 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <Separator className="mb-4" />
                  <div>
                    <p className="font-serif font-bold text-primary">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Sharing Section */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-2xl shadow-lg border border-border p-8 md:p-12">
            <Share2 className="h-10 w-10 text-accent mx-auto mb-5" />
            <h2 className="font-serif font-bold text-primary text-3xl mb-3">
              Spread the Word
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Every share multiplies our impact. Help us reach 100,000
              signatures by sharing this petition with your friends, family, and
              community.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {sharingPlatforms.map((platform) => (
                <button
                  key={platform.name}
                  className={`${platform.colour} text-white px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity`}
                >
                  Share on {platform.name}
                </button>
              ))}
            </div>

            <div className="bg-muted/50 rounded-lg p-4 max-w-lg mx-auto">
              <p className="text-xs text-muted-foreground mb-2 font-medium">
                Or copy the petition link:
              </p>
              <div className="flex items-center gap-2">
                <code className="flex-1 bg-white border border-border rounded-md px-3 py-2 text-sm text-primary truncate">
                  https://codevictorian.com/petition
                </code>
                <Button variant="outline" size="sm">
                  Copy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/50 section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">How It Works</Badge>
            <h2 className="text-primary">
              Your Signature, <span className="text-accent">Your Impact</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Sign the Petition",
                description:
                  "Fill in your details above. It takes less than a minute and your information is protected.",
              },
              {
                step: "02",
                title: "Share With Others",
                description:
                  "Use social media, email, or word of mouth to help us reach our goal of 100,000 signatures.",
              },
              {
                step: "03",
                title: "We Deliver Your Voice",
                description:
                  "Once we hit our target, we will formally present the petition to the European Parliament and national governments.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-serif font-bold text-accent">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-primary text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Demands */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">Our Demands</Badge>
            <h2 className="text-primary">
              What We Are <span className="text-accent">Calling For</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "An immediate halt to mass immigration from cultures incompatible with European values.",
              "A structured, humane remigration programme for those who refuse to integrate.",
              "Significant investment in European cultural preservation, education, and heritage.",
              "Full enforcement of existing border and asylum laws across the continent.",
              "A pan-European referendum on immigration policy, giving citizens a direct voice.",
            ].map((demand, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white rounded-xl border border-border p-5 shadow-sm"
              >
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                <p className="text-foreground leading-relaxed">{demand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary CTA: Donation */}
      <section className="bg-muted/50 section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="muted" className="mb-4">
                Go Further
              </Badge>
              <h2 className="text-primary mb-4">
                Amplify Your{" "}
                <span className="text-accent">Impact</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your signature is powerful, but your financial support can take
                this movement even further. Every donation funds the campaigns,
                events, and legal challenges that turn public demand into
                political action.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  "Fund targeted advertising to reach more Europeans",
                  "Organise rallies and gatherings across the continent",
                  "Produce professional media to spread our message",
                  "Cover the legal costs of formal petition delivery",
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

      {/* CTA Banner */}
      <CTABanner
        heading="Already Signed? There&rsquo;s More You Can Do."
        description="Share the petition, attend an event, or make a donation. Every action brings us closer to a Europe that honours its people."
        primaryAction={{ label: "Share the Petition", href: "#share" }}
        secondaryAction={{ label: "View Events", href: "/events" }}
      />
    </>
  )
}
