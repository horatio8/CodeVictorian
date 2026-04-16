"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CTABanner } from "@/components/sections/cta-banner"
import {
  HandHeart,
  Megaphone,
  MapPin,
  Laptop,
  Pen,
  Camera,
  CheckCircle2,
  ArrowRight,
  Users,
  Globe,
  Calendar,
} from "lucide-react"

const roles = [
  {
    icon: Megaphone,
    title: "Campaign Ambassador",
    description: "Represent Code Victorian in your local area, distribute materials, and recruit supporters.",
  },
  {
    icon: MapPin,
    title: "Event Organiser",
    description: "Help plan and run local meetups, rallies, and community events in your region.",
  },
  {
    icon: Laptop,
    title: "Digital Campaigner",
    description: "Create and share content on social media, manage online communities, and spread our message.",
  },
  {
    icon: Pen,
    title: "Writer & Researcher",
    description: "Contribute articles, policy papers, and research to support our advocacy work.",
  },
  {
    icon: Camera,
    title: "Creative & Media",
    description: "Photography, videography, graphic design \u2014 help us tell our story visually.",
  },
  {
    icon: HandHeart,
    title: "Community Support",
    description: "Help with administrative tasks, member support, translation, and general operations.",
  },
]

export default function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    availability: "",
    interests: "",
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
          <Badge variant="accent" className="mb-5">Volunteer</Badge>
          <h1 className="text-white mb-6 text-balance">
            Volunteer for <span className="text-accent">Europe</span>
          </h1>
          <p className="text-primary-200 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Your time and skills can make a real difference. Join our volunteer
            network and help build the movement across the continent.
          </p>
          <div className="flex items-center justify-center gap-6">
            <div>
              <span className="text-2xl font-serif font-bold text-accent">3,200+</span>
              <p className="text-xs text-primary-300">Active volunteers</p>
            </div>
            <div className="w-px h-10 bg-primary-400/30" />
            <div>
              <span className="text-2xl font-serif font-bold text-accent">22</span>
              <p className="text-xs text-primary-300">Countries</p>
            </div>
            <div className="w-px h-10 bg-primary-400/30" />
            <div>
              <span className="text-2xl font-serif font-bold text-accent">50K+</span>
              <p className="text-xs text-primary-300">Hours contributed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">Opportunities</Badge>
            <h2 className="text-primary">
              Ways to <span className="text-accent">Help</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Whether you have an hour a week or can dedicate more time, there is
              a role for you.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((r) => (
              <Card key={r.title} className="card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <r.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-serif font-bold text-primary mb-2">
                    {r.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {r.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="bg-muted/50 section-padding">
        <div className="container mx-auto max-w-2xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">Sign Up</Badge>
            <h2 className="text-primary">
              Become a <span className="text-accent">Volunteer</span>
            </h2>
          </div>

          {submitted ? (
            <Card>
              <CardContent className="p-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-serif font-bold text-primary text-2xl mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground mb-6">
                  We have received your volunteer application. A local coordinator
                  will be in touch within 48 hours.
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
                        Location (city, country) *
                      </label>
                      <Input
                        required
                        value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        placeholder="e.g. Vienna, Austria"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-primary mb-1.5 block">
                        Availability *
                      </label>
                      <Input
                        required
                        value={form.availability}
                        onChange={(e) => setForm({ ...form, availability: e.target.value })}
                        placeholder="e.g. Weekends, 5hrs/week"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1.5 block">
                      Skills &amp; interests (optional)
                    </label>
                    <Textarea
                      value={form.interests}
                      onChange={(e) => setForm({ ...form, interests: e.target.value })}
                      placeholder="Tell us about your skills and which volunteer roles interest you"
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="consent-volunteer"
                      required
                      className="mt-1 rounded border-border accent-accent"
                    />
                    <label htmlFor="consent-volunteer" className="text-xs text-muted-foreground leading-relaxed">
                      I consent to Code Victorian processing my personal data for
                      volunteer coordination and campaign communications. I can
                      withdraw consent at any time.{" "}
                      <a href="/privacy" className="text-accent hover:underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                  <Button type="submit" className="w-full cta-glow" size="lg">
                    Submit Volunteer Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
