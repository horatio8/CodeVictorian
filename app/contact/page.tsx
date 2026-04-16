"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { CTABanner } from "@/components/sections/cta-banner"
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react"

const faqs = [
  {
    question: "How can I get involved with Code Victorian?",
    answer:
      "There are many ways to support the movement. You can sign our petition, make a donation, purchase campaign merchandise, volunteer your time, or attend one of our events. Visit our Join page for full details on how to become an active member.",
  },
  {
    question: "Is Code Victorian a political party?",
    answer:
      "No. Code Victorian is a registered third-party campaigner. We advocate for policy positions and raise public awareness, but we do not field candidates for election. We work alongside sympathetic parties and politicians across Europe.",
  },
  {
    question: "How is my donation used?",
    answer:
      "All donations go directly towards campaign activities: organising events, producing educational materials, running awareness campaigns, supporting legal challenges, and maintaining our infrastructure. We publish financial transparency reports quarterly.",
  },
  {
    question: "Can I organise a local event?",
    answer:
      "Absolutely. We encourage grassroots activity and can provide materials, guidance, and promotional support. Contact us using the form above or email events@codevictorian.com to discuss your plans.",
  },
  {
    question: "How do you protect my personal data?",
    answer:
      "We take data protection extremely seriously and comply fully with the GDPR. Your data is stored securely within the EU and is never sold to third parties. Please read our Privacy Policy for comprehensive details on how we handle your information.",
  },
  {
    question: "Do you operate outside of Europe?",
    answer:
      "Our primary focus is Europe, but we welcome support from sympathisers worldwide. Our events and campaigns are concentrated across EU member states, with plans to expand our presence as the movement grows.",
  },
]

const officeHours = [
  { day: "Monday \u2013 Friday", hours: "09:00 \u2013 18:00 CET" },
  { day: "Saturday", hours: "10:00 \u2013 14:00 CET" },
  { day: "Sunday", hours: "Closed" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    gdprConsent: false,
  })
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, gdprConsent: e.target.checked }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulated submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary to-primary-800" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="accent" className="mb-5 text-sm">
              We&rsquo;d Love to Hear From You
            </Badge>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-[1.1] text-balance">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-primary-200 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Whether you have a question, want to get involved, or simply want
              to share your thoughts &mdash; we are here to listen.
            </p>
            <Button asChild size="xl">
              <Link href="/petition">
                Sign the Petition
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form + Sidebar */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="font-serif font-bold text-primary text-2xl md:text-3xl mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill in the form below and we will get back to you within two
                working days.
              </p>

              {isSubmitted ? (
                <Card className="border-accent/20 bg-accent/5">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-serif font-bold text-primary text-xl mb-2">
                      Message Sent Successfully
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for getting in touch. A member of our team will
                      respond within two working days.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="flex h-11 w-full rounded-md border border-border bg-white px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 transition-colors"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="general">General Enquiry</option>
                      <option value="volunteering">Volunteering</option>
                      <option value="events">Events &amp; Rallies</option>
                      <option value="donations">Donations &amp; Finance</option>
                      <option value="press">Press &amp; Media</option>
                      <option value="partnership">
                        Partnerships &amp; Collaboration
                      </option>
                      <option value="data">Data Protection / GDPR</option>
                      <option value="complaint">Complaint</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us what's on your mind..."
                      className="min-h-[160px]"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {/* GDPR Consent */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="gdprConsent"
                      required
                      checked={formData.gdprConsent}
                      onChange={handleCheckbox}
                      className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent"
                    />
                    <label
                      htmlFor="gdprConsent"
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      I consent to Code Victorian processing my personal data to
                      respond to this enquiry, in accordance with the{" "}
                      <Link
                        href="/privacy"
                        className="text-accent underline underline-offset-2 hover:text-accent-600"
                      >
                        Privacy Policy
                      </Link>
                      . I understand I may withdraw my consent at any time.{" "}
                      <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="cta-glow"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>

            {/* Sidebar: Contact Information */}
            <aside className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <h3 className="font-serif font-bold text-primary text-lg">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Address
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Code Victorian
                          <br />
                          Stephansplatz 4
                          <br />
                          1010 Vienna
                          <br />
                          Austria
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Email
                        </p>
                        <a
                          href="mailto:info@codevictorian.com"
                          className="text-sm text-accent hover:underline"
                        >
                          info@codevictorian.com
                        </a>
                        <br />
                        <a
                          href="mailto:press@codevictorian.com"
                          className="text-sm text-muted-foreground hover:text-accent"
                        >
                          press@codevictorian.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Phone
                        </p>
                        <a
                          href="tel:+43151200"
                          className="text-sm text-accent hover:underline"
                        >
                          +43 1 512 00
                        </a>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Social Links */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-3">
                      Follow Us
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        {
                          name: "X (Twitter)",
                          href: "https://x.com/codevictorian",
                        },
                        {
                          name: "Telegram",
                          href: "https://t.me/codevictorian",
                        },
                        {
                          name: "Facebook",
                          href: "https://facebook.com/codevictorian",
                        },
                        {
                          name: "Instagram",
                          href: "https://instagram.com/codevictorian",
                        },
                      ].map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-muted hover:bg-accent/10 hover:text-accent px-3 py-1.5 rounded-full transition-colors"
                        >
                          {social.name}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-5 w-5 text-accent" />
                    <h3 className="font-serif font-bold text-primary text-lg">
                      Office Hours
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {officeHours.map((slot) => (
                      <div
                        key={slot.day}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-foreground font-medium">
                          {slot.day}
                        </span>
                        <span className="text-muted-foreground">
                          {slot.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Responses to enquiries are typically sent within two working
                    days.
                  </p>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-muted/50 section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">
              Our Location
            </Badge>
            <h2 className="text-primary">
              Find <span className="text-accent">Us</span>
            </h2>
          </div>

          <Card className="overflow-hidden max-w-5xl mx-auto">
            <div className="h-80 bg-gradient-to-br from-primary-100 to-primary-200 flex flex-col items-center justify-center text-center p-8">
              <MapPin className="h-12 w-12 text-primary-300 mb-4" />
              <h3 className="font-serif font-bold text-primary text-xl mb-2">
                Stephansplatz 4, 1010 Vienna
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Our headquarters in the heart of Vienna
              </p>
              <Button asChild variant="outline" size="sm">
                <a
                  href="https://maps.google.com/?q=Stephansplatz+4,+1010+Wien,+Austria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">
              Common Questions
            </Badge>
            <h2 className="text-primary">
              Frequently Asked{" "}
              <span className="text-accent">Questions</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Find quick answers below. If your question is not listed, send us
              a message using the form above.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
                >
                  <h3 className="font-serif font-bold text-primary text-sm md:text-base pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-accent shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5">
                    <Separator className="mb-4" />
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Ready to Make Your Voice Heard?"
        description="Join the movement today. Sign the petition or make a donation to support the campaign."
        primaryAction={{ label: "Sign the Petition", href: "/petition" }}
        secondaryAction={{ label: "Make a Donation", href: "/donate" }}
      />
    </>
  )
}
