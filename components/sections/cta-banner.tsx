import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTABannerProps {
  heading?: string
  description?: string
  primaryAction?: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
}

export function CTABanner({
  heading = "Ready to Stand Up for Europe?",
  description = "Join thousands who are already making their voices heard. Sign the petition and become part of the movement.",
  primaryAction = { label: "Sign the Petition", href: "/petition" },
  secondaryAction = { label: "Make a Donation", href: "/donate" },
}: CTABannerProps) {
  return (
    <section className="bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto max-w-4xl section-padding relative z-10 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-serif font-bold mb-4 text-balance">
          {heading}
        </h2>
        <p className="text-primary-200 text-lg mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="xl">
            <Link href={primaryAction.href}>{primaryAction.label}</Link>
          </Button>
          <Button asChild variant="white" size="xl">
            <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
