import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { DonationWidget } from "@/components/sections/donation-widget"
import { CTABanner } from "@/components/sections/cta-banner"
import {
  Heart,
  Megaphone,
  Users,
  Scale,
  BookOpen,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Code Victorian with a donation. Every euro funds campaigns, events, and advocacy to preserve European culture and identity.",
}

const fundingBreakdown = [
  {
    icon: Megaphone,
    title: "Campaign & Advocacy",
    percentage: 40,
    description: "Pan-European awareness campaigns, advertising, and public advocacy.",
  },
  {
    icon: Users,
    title: "Events & Mobilisation",
    percentage: 25,
    description: "Rallies, conferences, community gatherings, and volunteer coordination.",
  },
  {
    icon: Scale,
    title: "Legal & Policy",
    percentage: 20,
    description: "Legal challenges, policy research, and expert consultations.",
  },
  {
    icon: BookOpen,
    title: "Education & Media",
    percentage: 15,
    description: "Educational materials, media production, and cultural preservation projects.",
  },
]

const faqs = [
  {
    q: "Is my donation tax-deductible?",
    a: "As a third-party campaigner, donations to Code Victorian are not tax-deductible. We recommend consulting your tax adviser for jurisdiction-specific guidance.",
  },
  {
    q: "What currencies do you accept?",
    a: "All donations are processed in EUR. If you donate from a non-eurozone country, your bank will convert at the prevailing exchange rate.",
  },
  {
    q: "Can I make an anonymous donation?",
    a: "We collect minimal personal data for donation processing. Under electoral regulations, we may be required to report donations above certain thresholds. See our privacy policy for details.",
  },
  {
    q: "How is my data protected?",
    a: "All payment processing is handled by PCI-DSS compliant processors. We never store card details. Your personal data is protected under GDPR. Read our full privacy policy for more information.",
  },
  {
    q: "Can I set up a recurring donation?",
    a: "Yes. Use the \u2018Monthly\u2019 option in the donation form to set up a recurring contribution. You can cancel at any time by contacting us.",
  },
]

export default function DonatePage() {
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
            Support Us
          </Badge>
          <h1 className="text-white mb-6 text-balance">
            Support the <span className="text-accent">Movement</span>
          </h1>
          <p className="text-primary-200 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Every euro makes a difference. Your generosity directly funds the
            campaigns, events, and advocacy that are preserving Europe&rsquo;s future.
          </p>
          <div className="flex items-center justify-center gap-6">
            <div>
              <span className="text-2xl font-serif font-bold text-accent">&euro;482K+</span>
              <p className="text-xs text-primary-300">Raised this year</p>
            </div>
            <div className="w-px h-10 bg-primary-400/30" />
            <div>
              <span className="text-2xl font-serif font-bold text-accent">8,200+</span>
              <p className="text-xs text-primary-300">Individual donors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form + Info */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge variant="muted" className="mb-4">Make a Donation</Badge>
              <h2 className="text-primary mb-4">
                Fund the <span className="text-accent">Fight</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Choose a one-time or monthly contribution. All amounts make
                a meaningful impact on our ability to campaign effectively
                across Europe.
              </p>
              <DonationWidget />
            </div>

            <div>
              <Badge variant="muted" className="mb-4">Transparency</Badge>
              <h2 className="text-primary mb-4">
                Where Your <span className="text-accent">Money Goes</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We believe in full transparency. Here is how your donations
                are allocated across our key activities.
              </p>

              <div className="space-y-5">
                {fundingBreakdown.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-serif font-bold text-primary text-sm">
                          {item.title}
                        </h4>
                        <span className="text-accent font-bold text-sm">
                          {item.percentage}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-primary-50 rounded-full mb-1.5">
                        <div
                          className="h-full bg-accent rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <p className="text-muted-foreground text-xs">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-primary-50 rounded-xl p-5 flex gap-3">
                <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-serif font-bold text-primary text-sm mb-1">
                    Financial Accountability
                  </h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Our accounts are independently audited annually. We publish
                    financial summaries and are registered with the National
                    Electoral Authority as a third-party campaigner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/50 section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">FAQ</Badge>
            <h2 className="text-primary">
              Donation <span className="text-accent">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.q}>
                <CardContent className="p-6">
                  <div className="flex gap-3">
                    <HelpCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif font-bold text-primary mb-2">
                        {faq.q}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Prefer to Take Action Instead?"
        description="Your voice is just as powerful as your wallet. Sign the petition and make your stance heard."
        primaryAction={{ label: "Sign the Petition", href: "/petition" }}
        secondaryAction={{ label: "Volunteer", href: "/volunteer" }}
      />
    </>
  )
}
