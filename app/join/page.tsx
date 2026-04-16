"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { CTABanner } from "@/components/sections/cta-banner"
import {
  Users,
  Mail,
  Calendar,
  MessageSquare,
  Globe,
  Star,
  CheckCircle2,
  ArrowRight,
  Shield,
  BookOpen,
} from "lucide-react"

const benefits = [
  {
    icon: Mail,
    title: "Exclusive Updates",
    description: "Be the first to know about campaign developments, policy positions, and breaking news.",
  },
  {
    icon: Calendar,
    title: "Priority Event Access",
    description: "Early registration and reserved places at rallies, conferences, and community events.",
  },
  {
    icon: MessageSquare,
    title: "Direct Input",
    description: "Participate in member surveys and consultations that shape our campaign priorities.",
  },
  {
    icon: Globe,
    title: "European Network",
    description: "Connect with like-minded individuals across 28 countries through our member community.",
  },
  {
    icon: Shield,
    title: "Member Badge & Materials",
    description: "Receive your official Code Victorian member pack with badge, materials, and merchandise discounts.",
  },
  {
    icon: BookOpen,
    title: "Research Access",
    description: "Full access to our policy papers, research reports, and educational materials.",
  },
]

const testimonials = [
  {
    name: "Klaus M.",
    country: "Germany",
    quote: "Finally an organisation that speaks for ordinary Europeans. Proud to be a member since 2024.",
  },
  {
    name: "Sophie L.",
    country: "France",
    quote: "The community of members is inspiring. We share ideas, organise locally, and genuinely make a difference.",
  },
  {
    name: "Mikael S.",
    country: "Sweden",
    quote: "Joining Code Victorian gave me hope that our voices can be heard above the noise.",
  },
]

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    reason: "",
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

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
            Membership
          </Badge>
          <h1 className="text-white mb-6 text-balance">
            Join the <span className="text-accent">Movement</span>
          </h1>
          <p className="text-primary-200 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Become an official member of Code Victorian and stand shoulder to
            shoulder with thousands of Europeans committed to preserving our
            continent&rsquo;s future.
          </p>
          <div className="flex items-center justify-center gap-6">
            <div>
              <span className="text-2xl font-serif font-bold text-accent">12,450+</span>
              <p className="text-xs text-primary-300">Active members</p>
            </div>
            <div className="w-px h-10 bg-primary-400/30" />
            <div>
              <span className="text-2xl font-serif font-bold text-accent">28</span>
              <p className="text-xs text-primary-300">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">Member Benefits</Badge>
            <h2 className="text-primary">
              Why <span className="text-accent">Join</span>?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <Card key={b.title} className="card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <b.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-serif font-bold text-primary mb-2">
                    {b.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {b.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="bg-muted/50 section-padding">
        <div className="container mx-auto max-w-2xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">Sign Up</Badge>
            <h2 className="text-primary">
              Become a <span className="text-accent">Member</span>
            </h2>
            <p className="text-muted-foreground mt-3">
              Membership is free. Fill in the form below to join.
            </p>
          </div>

          {submitted ? (
            <Card>
              <CardContent className="p-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-serif font-bold text-primary text-2xl mb-2">
                  Welcome Aboard!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your membership application has been received. Check your email
                  for confirmation and your welcome pack details.
                </p>
                <Button asChild>
                  <Link href="/petition">
                    Sign the Petition Too <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-primary mb-1.5 block">
                        First name *
                      </label>
                      <Input
                        required
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-primary mb-1.5 block">
                        Last name *
                      </label>
                      <Input
                        required
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1.5 block">
                      Email address *
                    </label>
                    <Input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-primary mb-1.5 block">
                        Phone (optional)
                      </label>
                      <Input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-primary mb-1.5 block">
                        Country *
                      </label>
                      <Input
                        required
                        value={form.country}
                        onChange={(e) => setForm({ ...form, country: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1.5 block">
                      Why do you want to join? (optional)
                    </label>
                    <Input
                      value={form.reason}
                      onChange={(e) => setForm({ ...form, reason: e.target.value })}
                      placeholder="Tell us briefly what motivates you"
                    />
                  </div>
                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="consent-join"
                      required
                      className="mt-1 rounded border-border accent-accent"
                    />
                    <label htmlFor="consent-join" className="text-xs text-muted-foreground leading-relaxed">
                      I consent to Code Victorian processing my personal data for
                      membership management and campaign communications. I understand
                      I can withdraw consent at any time.{" "}
                      <a href="/privacy" className="text-accent hover:underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                  <Button type="submit" className="w-full cta-glow" size="lg">
                    Join Code Victorian
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">Member Voices</Badge>
            <h2 className="text-primary">
              Hear From Our <span className="text-accent">Members</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="card-hover">
                <CardContent className="p-6">
                  <Star className="h-5 w-5 text-accent mb-3" />
                  <p className="text-foreground text-sm italic leading-relaxed mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-serif font-bold text-primary text-sm">
                      {t.name}
                    </p>
                    <p className="text-muted-foreground text-xs">{t.country}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Prefer to Show Your Support Differently?"
        description="Sign the petition, make a donation, or volunteer your time. Every action counts."
        primaryAction={{ label: "Sign the Petition", href: "/petition" }}
        secondaryAction={{ label: "Donate", href: "/donate" }}
      />
    </>
  )
}
