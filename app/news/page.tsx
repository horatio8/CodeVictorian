"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { CTABanner } from "@/components/sections/cta-banner"
import { formatDate } from "@/lib/utils"
import {
  ArrowRight,
  Newspaper,
  Calendar,
  Image as ImageIcon,
  Search,
  Mail,
  CheckCircle,
  Clock,
} from "lucide-react"

// export const metadata = { title: "News" }
// Note: metadata is exported from the layout or a separate metadata file
// because this file uses "use client". See below for head metadata approach.

const categories = ["All", "Campaign", "Policy", "Events", "Press"] as const
type Category = (typeof categories)[number]

const featuredArticle = {
  date: "2026-04-14",
  category: "Campaign" as const,
  title: "Code Victorian Surpasses 50,000 Petition Signatures Across Europe",
  excerpt:
    "In a landmark moment for the movement, Code Victorian has officially surpassed 50,000 verified petition signatures. Supporters from 28 European nations have rallied behind the cause, making this the fastest-growing cultural preservation campaign on the continent. Organisers say this milestone signals a turning point in public sentiment.",
  slug: "50000-signatures-milestone",
  readTime: "5 min read",
}

const articles = [
  {
    date: "2026-04-10",
    category: "Campaign" as const,
    title: "Record Petition Numbers: 45,000 and Growing",
    excerpt:
      "Our petition has reached a major milestone as support surges across the continent. Volunteers report unprecedented engagement at events.",
    slug: "record-petition-numbers",
    readTime: "3 min read",
  },
  {
    date: "2026-04-05",
    category: "Events" as const,
    title: "Code Victorian Rally Draws Thousands in Vienna",
    excerpt:
      "Supporters from across Europe gathered for our largest event yet, filling the historic Heldenplatz with flags and determination.",
    slug: "vienna-rally-thousands",
    readTime: "4 min read",
  },
  {
    date: "2026-03-28",
    category: "Policy" as const,
    title: "New Policy Paper: A Blueprint for Cultural Preservation",
    excerpt:
      "Our research team outlines actionable strategies for protecting European heritage through legislative and educational reform.",
    slug: "blueprint-cultural-preservation",
    readTime: "6 min read",
  },
  {
    date: "2026-03-20",
    category: "Press" as const,
    title: "Major Media Coverage: Code Victorian Featured in European Press",
    excerpt:
      "Leading publications across Europe have covered the rapid growth of the Code Victorian movement, bringing our message to millions.",
    slug: "european-press-coverage",
    readTime: "3 min read",
  },
  {
    date: "2026-03-14",
    category: "Policy" as const,
    title: "Immigration Reform: What the Data Tells Us",
    excerpt:
      "A comprehensive analysis of immigration trends and their impact on European communities, drawn from official EU statistics.",
    slug: "immigration-reform-data",
    readTime: "7 min read",
  },
  {
    date: "2026-03-08",
    category: "Events" as const,
    title: "Upcoming: European Heritage March in Brussels",
    excerpt:
      "Join thousands of supporters on 28 April 2026 for a peaceful march through the heart of the EU capital. Registration is now open.",
    slug: "brussels-heritage-march",
    readTime: "2 min read",
  },
  {
    date: "2026-03-01",
    category: "Campaign" as const,
    title: "Volunteer Network Expands to 28 Countries",
    excerpt:
      "Our dedicated volunteer teams now operate in every EU member state, coordinating events, outreach, and community building.",
    slug: "volunteer-network-28-countries",
    readTime: "4 min read",
  },
  {
    date: "2026-02-22",
    category: "Press" as const,
    title: "Op-Ed: Why Europe Must Act Now",
    excerpt:
      "A powerful opinion piece published across multiple European outlets argues that the window for preserving our cultural identity is narrowing.",
    slug: "op-ed-europe-must-act",
    readTime: "5 min read",
  },
]

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary to-primary-800" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="accent" className="mb-5 text-sm">
              Stay Informed
            </Badge>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-[1.1] text-balance">
              News &amp; <span className="text-accent">Updates</span>
            </h1>
            <p className="text-primary-200 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              The latest from the Code Victorian campaign &mdash; policy
              developments, events, press coverage, and grassroots progress
              across Europe.
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

      {/* Featured Article */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-8">
            <Badge variant="muted" className="mb-0">Featured</Badge>
            <Separator className="flex-1" />
          </div>

          <Card className="card-hover overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Image Placeholder */}
                <div className="h-64 md:h-auto min-h-[320px] bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-center">
                    <ImageIcon className="h-16 w-16 text-primary-300 mx-auto mb-3" />
                    <span className="text-sm text-primary-400">
                      Featured Image
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="accent" className="text-[10px]">
                      {featuredArticle.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(featuredArticle.date)}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                  <h2 className="font-serif font-bold text-primary text-2xl md:text-3xl mb-4 leading-snug">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div>
                    <Button asChild variant="primary">
                      <Link href={`/news/${featuredArticle.slug}`}>
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Category Filter + News Grid */}
      <section className="bg-muted/50 section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">Browse</Badge>
            <h2 className="text-primary">
              All <span className="text-accent">Articles</span>
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200
                  ${
                    activeCategory === category
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-primary border border-border hover:bg-primary-50"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Card key={article.slug} className="card-hover group">
                <CardContent className="p-0">
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-t-xl flex items-center justify-center">
                    <Newspaper className="h-12 w-12 text-primary-300 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="accent" className="text-[10px]">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(article.date)}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-primary mb-2 leading-snug group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                      <Link
                        href={`/news/${article.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all"
                      >
                        Read more <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <Search className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
              <h3 className="font-serif font-bold text-primary text-xl mb-2">
                No articles found
              </h3>
              <p className="text-muted-foreground text-sm">
                There are no articles in this category yet. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-primary p-8 md:p-12 text-center relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-6">
                    <Mail className="h-7 w-7 text-accent" />
                  </div>
                  <h2 className="text-white text-2xl md:text-3xl font-serif font-bold mb-3">
                    Stay in the <span className="text-accent">Loop</span>
                  </h2>
                  <p className="text-primary-200 mb-8 max-w-lg mx-auto">
                    Subscribe to our newsletter for the latest campaign news,
                    policy updates, and event announcements delivered straight to
                    your inbox.
                  </p>

                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="max-w-md mx-auto"
                  >
                    <div className="flex gap-3">
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-primary-300 focus-visible:ring-accent"
                      />
                      <Button type="submit" size="default">
                        Subscribe
                      </Button>
                    </div>

                    {/* GDPR Consent */}
                    <label className="flex items-start gap-3 mt-4 text-left cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 h-4 w-4 rounded border-white/30 bg-white/10 text-accent focus:ring-accent shrink-0"
                      />
                      <span className="text-xs text-primary-300 leading-relaxed">
                        I consent to receiving emails from Code Victorian. My
                        data will be processed in accordance with the{" "}
                        <Link
                          href="/privacy"
                          className="text-accent underline underline-offset-2 hover:text-accent-400"
                        >
                          Privacy Policy
                        </Link>
                        . I can unsubscribe at any time. We will never share
                        your information with third parties.
                      </span>
                    </label>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Your Voice Matters"
        description="Every signature strengthens the movement. Join over 50,000 Europeans who have already taken a stand."
      />
    </>
  )
}
