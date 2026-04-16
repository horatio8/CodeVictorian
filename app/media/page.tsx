import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CTABanner } from "@/components/sections/cta-banner"
import { formatDate } from "@/lib/utils"
import {
  ArrowRight,
  Camera,
  Play,
  FileText,
  Download,
  Palette,
  Share2,
  Image as ImageIcon,
  Video,
  ExternalLink,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Media",
  description:
    "Access the Code Victorian media centre — photo galleries, video content, press releases, brand assets, and social media channels.",
}

const photos = [
  {
    caption: "Vienna Rally — April 2026",
    alt: "Thousands gathered at Heldenplatz for the Vienna rally",
  },
  {
    caption: "Brussels March — Preparations",
    alt: "Volunteers preparing banners for the Brussels heritage march",
  },
  {
    caption: "Petition Milestone Celebration",
    alt: "Campaign team celebrating 50,000 petition signatures",
  },
  {
    caption: "Community Meeting — Paris",
    alt: "Local supporters meeting in Paris to discuss cultural preservation",
  },
  {
    caption: "Code Victorian Leadership Summit",
    alt: "Leadership summit bringing together coordinators from across Europe",
  },
  {
    caption: "Heritage Festival — Prague",
    alt: "Traditional arts and crafts showcase at the Prague heritage festival",
  },
  {
    caption: "Volunteer Training — Berlin",
    alt: "New volunteers attending a training session in Berlin",
  },
  {
    caption: "Press Conference — Strasbourg",
    alt: "Campaign leaders addressing journalists in Strasbourg",
  },
]

const videos = [
  {
    title: "The Code Victorian Story: Our Mission",
    description:
      "An in-depth look at why we started this movement and what we are fighting for across Europe.",
    duration: "8:42",
    date: "2026-03-15",
  },
  {
    title: "Vienna Rally — Full Highlights",
    description:
      "Relive the energy and passion of our biggest rally yet, featuring speeches and crowd moments.",
    duration: "12:15",
    date: "2026-04-06",
  },
  {
    title: "Policy Explainer: Immigration Reform",
    description:
      "A clear, data-driven breakdown of our proposals for a structured and humane immigration policy.",
    duration: "6:30",
    date: "2026-02-28",
  },
  {
    title: "Voices of Europe: Supporter Testimonials",
    description:
      "Hear directly from supporters across the continent about why they joined the movement.",
    duration: "10:05",
    date: "2026-03-22",
  },
]

const pressReleases = [
  {
    title: "Code Victorian Surpasses 50,000 Petition Signatures",
    date: "2026-04-14",
    fileSize: "PDF, 245 KB",
  },
  {
    title: "European Heritage March Announced for 28 April 2026",
    date: "2026-03-20",
    fileSize: "PDF, 189 KB",
  },
  {
    title: "New Policy Paper: A Blueprint for Cultural Preservation",
    date: "2026-03-28",
    fileSize: "PDF, 1.2 MB",
  },
  {
    title: "Code Victorian Volunteer Network Expands to 28 Countries",
    date: "2026-03-01",
    fileSize: "PDF, 156 KB",
  },
  {
    title: "Statement on EU Immigration Policy Proposals",
    date: "2026-02-15",
    fileSize: "PDF, 198 KB",
  },
  {
    title: "Campaign Launch Press Release",
    date: "2026-01-10",
    fileSize: "PDF, 210 KB",
  },
]

const brandAssets = [
  {
    title: "Logo Pack",
    description: "Primary, secondary, and mono logos in SVG, PNG, and EPS formats.",
    fileSize: "ZIP, 4.8 MB",
    icon: Palette,
  },
  {
    title: "Brand Guidelines",
    description: "Colours, typography, tone of voice, and usage rules for all media.",
    fileSize: "PDF, 2.1 MB",
    icon: FileText,
  },
  {
    title: "Press Kit",
    description: "Key facts, leadership bios, campaign timeline, and high-resolution imagery.",
    fileSize: "ZIP, 12 MB",
    icon: Camera,
  },
  {
    title: "Social Media Assets",
    description: "Pre-formatted graphics for Twitter/X, Facebook, Instagram, and YouTube.",
    fileSize: "ZIP, 8.5 MB",
    icon: Share2,
  },
]

const socialChannels = [
  {
    name: "Twitter / X",
    handle: "@CodeVictorian",
    icon: Twitter,
    followers: "34.2K",
    colour: "bg-black",
  },
  {
    name: "Facebook",
    handle: "CodeVictorian",
    icon: Facebook,
    followers: "62.8K",
    colour: "bg-blue-600",
  },
  {
    name: "Instagram",
    handle: "@codevictorian",
    icon: Instagram,
    followers: "28.5K",
    colour: "bg-gradient-to-br from-purple-600 to-pink-500",
  },
  {
    name: "YouTube",
    handle: "Code Victorian",
    icon: Youtube,
    followers: "15.1K",
    colour: "bg-red-600",
  },
]

export default function MediaPage() {
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
              For Journalists &amp; Supporters
            </Badge>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-[1.1] text-balance">
              Media <span className="text-accent">Centre</span>
            </h1>
            <p className="text-primary-200 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Photos, videos, press releases, and brand assets &mdash;
              everything you need to cover or share the Code Victorian campaign.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Button asChild size="xl">
                <Link href="/petition">
                  Sign the Petition
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="white" size="xl">
                <a href="#press-kit">
                  Download Press Kit
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">Gallery</Badge>
            <h2 className="text-primary">
              Photo <span className="text-accent">Gallery</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Scenes from rallies, events, and community gatherings across
              Europe.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, i) => (
              <div key={i} className="group cursor-pointer">
                <div
                  className={`aspect-square rounded-xl overflow-hidden relative ${
                    i === 0 || i === 5
                      ? "md:col-span-1 lg:row-span-1"
                      : ""
                  }`}
                >
                  {/* Image Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                    <Camera className="h-10 w-10 text-primary-300 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-muted/50 section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">Watch</Badge>
            <h2 className="text-primary">
              Video <span className="text-accent">Content</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Campaign films, rally highlights, policy explainers, and
              supporter testimonials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <Card key={video.title} className="card-hover group overflow-hidden">
                <CardContent className="p-0">
                  {/* Video Embed Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center relative cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-accent transition-all duration-300">
                      <Play className="h-7 w-7 text-primary-900 ml-1" />
                    </div>
                    {/* Duration Badge */}
                    <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-mono px-2 py-1 rounded">
                      {video.duration}
                    </span>
                    {/* Video Icon Watermark */}
                    <Video className="absolute top-4 left-4 h-5 w-5 text-white/30" />
                  </div>

                  <div className="p-6">
                    <span className="text-xs text-muted-foreground mb-2 block">
                      {formatDate(video.date)}
                    </span>
                    <h3 className="font-serif font-bold text-primary text-lg mb-2 leading-snug group-hover:text-accent transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">Press</Badge>
            <h2 className="text-primary">
              Press <span className="text-accent">Releases</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Official statements and announcements from Code Victorian.
              Download any release below.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {pressReleases.map((release) => (
              <Card key={release.title} className="card-hover">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <FileText className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif font-bold text-primary text-sm md:text-base leading-snug truncate">
                      {release.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-muted-foreground">
                        {formatDate(release.date)}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {release.fileSize}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="shrink-0">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Assets / Press Kit */}
      <section id="press-kit" className="bg-muted/50 section-padding scroll-mt-20">
        <div className="container mx-auto max-w-7xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">Resources</Badge>
            <h2 className="text-primary">
              Brand Assets &amp; <span className="text-accent">Press Kit</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Download official logos, brand guidelines, and media assets for
              use in coverage and promotion.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandAssets.map((asset) => (
              <Card key={asset.title} className="card-hover group text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                    <asset.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-serif font-bold text-primary mb-2">
                    {asset.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {asset.description}
                  </p>
                  <span className="text-xs text-muted-foreground block mb-4">
                    {asset.fileSize}
                  </span>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Feeds */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">Follow Us</Badge>
            <h2 className="text-primary">
              Social <span className="text-accent">Media</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Stay connected with the campaign across all major platforms.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {socialChannels.map((channel) => (
              <Card key={channel.name} className="card-hover group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-14 h-14 rounded-2xl ${channel.colour} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <channel.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-serif font-bold text-primary mb-1">
                    {channel.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {channel.handle}
                  </p>
                  <p className="text-xs text-accent font-semibold mb-4">
                    {channel.followers} followers
                  </p>

                  {/* Feed Placeholder */}
                  <div className="rounded-lg bg-muted/50 border border-border p-4 mb-4">
                    <div className="space-y-2">
                      <div className="h-2 bg-primary-100 rounded w-full" />
                      <div className="h-2 bg-primary-100 rounded w-4/5" />
                      <div className="h-2 bg-primary-100 rounded w-3/5" />
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-3">
                      Latest post preview
                    </p>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-accent"
                  >
                    Follow
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Help Us Spread the Word"
        description="Share our story, download our materials, and amplify the voice of the movement across Europe."
        primaryAction={{ label: "Sign the Petition", href: "/petition" }}
        secondaryAction={{ label: "Become a Volunteer", href: "/volunteer" }}
      />
    </>
  )
}
