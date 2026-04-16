import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CTABanner } from "@/components/sections/cta-banner"
import {
  Shield,
  Users,
  Landmark,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  BookOpen,
  Scale,
  Globe,
  Heart,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Issues",
  description:
    "The three critical issues driving our campaign: remigration, immigration control, and cultural preservation across Europe.",
}

const issueDetails = [
  {
    id: "remigration",
    icon: Shield,
    title: "Start Remigration",
    subtitle: "Returning those who refuse to integrate",
    paragraphs: [
      "Europe has welcomed millions of migrants over the past decades. Many have integrated successfully, contributing to their host societies. However, a significant number have not \u2014 and have no intention of doing so. Communities are fractured, public services strained, and social cohesion undermined.",
      "Remigration is the structured, lawful, and humane process of returning individuals who refuse to integrate, who commit crimes, or whose presence poses a demonstrable threat to public safety. This is not about ethnicity \u2014 it is about behaviour, values, and respect for the host society.",
      "We advocate for clear legal frameworks, negotiated return agreements with countries of origin, and financial incentives for voluntary departure. This is a policy grounded in pragmatism, not prejudice.",
    ],
    keyPoints: [
      "Establish clear legal criteria for remigration based on integration metrics",
      "Negotiate bilateral return agreements with countries of origin",
      "Fund voluntary return programmes with resettlement support",
      "Prioritise removal of convicted criminals and security threats",
      "Ensure full compliance with international law and human rights standards",
    ],
    stats: [
      { value: "67%", label: "of Europeans favour stricter immigration enforcement" },
      { value: "2.1M", label: "unfulfilled deportation orders across the EU" },
      { value: "78%", label: "want governments to enforce existing laws" },
    ],
  },
  {
    id: "immigration",
    icon: Users,
    title: "Stop Harmful Immigration",
    subtitle: "Protecting our communities from real threats",
    paragraphs: [
      "Not all immigration is equal. Skilled workers, genuine refugees, and those who share our values and wish to contribute are welcome. But Europe cannot continue to accept mass, uncontrolled immigration without consequences.",
      "The current system is broken. Borders are porous, asylum processes are exploited, and criminal networks profit from human trafficking. The result is increased crime, cultural tension, and a loss of trust in government institutions.",
      "We call for a complete overhaul of Europe\u2019s immigration system: robust border enforcement, fast-tracked asylum decisions, immediate removal of those whose claims are rejected, and a points-based system that prioritises skills and cultural compatibility.",
    ],
    keyPoints: [
      "Implement robust external border controls with modern technology",
      "Fast-track asylum processing with binding deadlines",
      "Introduce a points-based immigration system for economic migrants",
      "Dismantle people-smuggling networks through international cooperation",
      "End abuse of the asylum system through stricter verification",
    ],
    stats: [
      { value: "1.14M", label: "irregular border crossings detected in one year" },
      { value: "72%", label: "of asylum claims are ultimately rejected in some countries" },
      { value: "\u20ac12B+", label: "spent annually on asylum processing across the EU" },
    ],
  },
  {
    id: "culture",
    icon: Landmark,
    title: "Preserve European Culture",
    subtitle: "Safeguarding our heritage for future generations",
    paragraphs: [
      "Europe\u2019s cultural heritage is one of the greatest achievements in human history. From the philosophy of Ancient Greece to the Renaissance, from the cathedrals of Gothic architecture to the symphonies of the Classical era \u2014 this legacy belongs to all Europeans.",
      "Yet this heritage is under threat. Historical revisionism, the erosion of national traditions, the neglect of classical education, and the uncritical embrace of multiculturalism at the expense of host cultures are all contributing to a slow but steady cultural decline.",
      "We believe that preserving European culture is not about exclusion \u2014 it is about pride, education, and investment. Our children deserve to know their history, speak their languages fluently, and participate in the traditions that define their communities.",
    ],
    keyPoints: [
      "Invest in cultural education and heritage preservation programmes",
      "Protect and restore historic sites, monuments, and architectural heritage",
      "Promote European languages, literature, art, and music in schools",
      "Celebrate national and regional traditions through public events and funding",
      "Resist ideological revisionism and defend the honest teaching of history",
    ],
    stats: [
      { value: "47", label: "UNESCO World Heritage Sites at risk across Europe" },
      { value: "60%", label: "decline in classical arts education over 20 years" },
      { value: "84%", label: "of Europeans say cultural heritage is important to them" },
    ],
  },
]

export default function IssuesPage() {
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
            Our Priorities
          </Badge>
          <h1 className="text-white mb-6 text-balance">
            The Issues That <span className="text-accent">Matter</span>
          </h1>
          <p className="text-primary-200 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            We are fighting for the future of Europe on three critical fronts.
            These are the issues that define our campaign and drive our
            movement.
          </p>
          <Button asChild size="xl">
            <Link href="/petition">
              Sign the Petition <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Issue Sections */}
      {issueDetails.map((issue, idx) => (
        <section
          key={issue.id}
          id={issue.id}
          className={idx % 2 === 1 ? "bg-muted/50 section-padding" : "section-padding"}
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Content - 3 cols */}
              <div className={`lg:col-span-3 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <issue.icon className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-primary">{issue.title}</h2>
                    <p className="text-muted-foreground">{issue.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {issue.paragraphs.map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                <h3 className="font-serif font-bold text-primary text-xl mb-4">
                  Our Key Proposals
                </h3>
                <ul className="space-y-3 mb-8">
                  {issue.keyPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats Sidebar - 2 cols */}
              <div className={`lg:col-span-2 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-5">
                      <BarChart3 className="h-5 w-5 text-accent" />
                      <h4 className="font-serif font-bold text-primary">
                        Key Figures
                      </h4>
                    </div>
                    <div className="space-y-5">
                      {issue.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="text-3xl font-serif font-bold text-accent">
                            {stat.value}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                    <Separator className="my-6" />
                    <Button asChild className="w-full" size="sm">
                      <Link href="/petition">Add Your Voice</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Our Approach */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="muted" className="mb-4">
            Our Approach
          </Badge>
          <h2 className="text-primary mb-6">
            How We <span className="text-accent">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            We believe in lawful, democratic, and evidence-based advocacy. Our
            campaigns are built on research, public engagement, and
            accountability.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: "Research", text: "Evidence-based policy proposals grounded in data" },
              { icon: Users, title: "Mobilise", text: "Building a grassroots network across Europe" },
              { icon: Scale, title: "Advocate", text: "Lobbying for legislative and policy change" },
              { icon: Globe, title: "Unite", text: "Connecting like-minded Europeans across borders" },
            ].map((item) => (
              <div key={item.title}>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-serif font-bold text-primary mb-1">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Take a Stand?"
        description="Your signature matters. Join tens of thousands of Europeans who are demanding action on the issues that matter."
      />
    </>
  )
}
