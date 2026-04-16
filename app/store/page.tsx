import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CTABanner } from "@/components/sections/cta-banner"
import { formatEUR } from "@/lib/utils"
import {
  ShoppingBag,
  ArrowRight,
  Star,
  Shield,
  Package,
  Heart,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Store",
  description:
    "Shop official Code Victorian campaign merchandise. All proceeds support the movement to preserve European culture and heritage.",
}

const featuredProduct = {
  name: "Heritage Collection Hoodie",
  description:
    "Premium heavyweight organic cotton hoodie featuring the Code Victorian crest. A bold statement piece for those who stand with Europe. Available in deep navy with gold embroidered detailing.",
  price: 65,
  badge: "Best Seller",
}

const products = [
  {
    name: "Campaign T-Shirt",
    description:
      "100% organic cotton tee with the Code Victorian emblem. Comfortable, durable, and a proud statement of your values.",
    price: 25,
    badge: "Popular",
  },
  {
    name: "Enamel Lapel Pin",
    description:
      "Gold-finished enamel pin featuring the Code Victorian crest. A subtle but unmistakable mark of solidarity.",
    price: 8,
    badge: null,
  },
  {
    name: "Campaign Flag",
    description:
      "Full-size 150 × 90 cm flag in deep navy with the gold Code Victorian emblem. Perfect for rallies, events, or display.",
    price: 20,
    badge: null,
  },
  {
    name: "Ceramic Mug",
    description:
      "Sturdy 350 ml ceramic mug with a wrap-around Code Victorian design. Dishwasher and microwave safe.",
    price: 14,
    badge: null,
  },
  {
    name: "Embroidered Cap",
    description:
      "Structured six-panel cap in deep navy with gold-threaded Code Victorian emblem. Adjustable strap for a perfect fit.",
    price: 22,
    badge: "New",
  },
  {
    name: "Canvas Tote Bag",
    description:
      "Heavy-duty organic canvas tote with the campaign motto. Spacious, reusable, and made to last.",
    price: 16,
    badge: null,
  },
  {
    name: "Sticker Pack",
    description:
      "Set of 10 premium vinyl stickers featuring campaign slogans and artwork. Weatherproof and UV-resistant.",
    price: 6,
    badge: null,
  },
  {
    name: "Woven Scarf",
    description:
      "Elegant merino wool scarf in navy and gold. A sophisticated accessory that shows your support in style.",
    price: 35,
    badge: "Limited Edition",
  },
]

export default function StorePage() {
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
              Official Merchandise
            </Badge>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-[1.1] text-balance">
              Campaign <span className="text-accent">Store</span>
            </h1>
            <p className="text-primary-200 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Wear your values with pride. Every purchase directly funds the
              movement to preserve European culture and heritage.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Button asChild size="xl">
                <Link href="/petition">
                  Sign the Petition
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="white" size="xl">
                <Link href="/donate">Make a Donation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">
              Featured
            </Badge>
            <h2 className="text-primary">
              Editor&rsquo;s <span className="text-accent">Pick</span>
            </h2>
          </div>

          <Card className="card-hover max-w-5xl mx-auto overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <ShoppingBag className="h-24 w-24 text-primary-300" />
              </div>
              <CardContent className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="accent">{featuredProduct.badge}</Badge>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                </div>
                <h3 className="font-serif font-bold text-primary text-2xl md:text-3xl mb-3">
                  {featuredProduct.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredProduct.description}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-serif font-bold text-primary">
                    {formatEUR(featuredProduct.price)}
                  </span>
                  <Button size="lg">
                    Add to Cart
                    <ShoppingBag className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-muted/50 section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="section-heading">
            <Badge variant="muted" className="mb-4">
              Shop All
            </Badge>
            <h2 className="text-primary">
              Campaign <span className="text-accent">Merchandise</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              High-quality, ethically sourced merchandise designed with pride.
              Every item you buy strengthens the cause.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.name} className="card-hover group flex flex-col">
                <CardContent className="p-0 flex-1 flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-t-xl flex items-center justify-center relative">
                    <Package className="h-12 w-12 text-primary-300 group-hover:scale-110 transition-transform" />
                    {product.badge && (
                      <Badge
                        variant="accent"
                        className="absolute top-3 right-3 text-[10px]"
                      >
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-serif font-bold text-primary mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-serif font-bold text-primary">
                        {formatEUR(product.price)}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-5 pb-5">
                  <Button className="w-full" size="sm">
                    Add to Cart
                    <ShoppingBag className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proceeds Notice */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-accent/20 bg-accent/5">
            <CardContent className="p-8 md:p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif font-bold text-primary text-2xl mb-3">
                All Proceeds Support the Campaign
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
                Every euro spent in our store goes directly towards funding the
                movement. From organising pan-European events to running
                awareness campaigns, your purchase makes a tangible difference in
                preserving our shared heritage.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-foreground font-medium">
                    Secure Checkout
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-accent" />
                  <span className="text-foreground font-medium">
                    Free Shipping Over {formatEUR(50)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-accent" />
                  <span className="text-foreground font-medium">
                    100% Funds the Cause
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Join the Movement Today"
        description="Shopping is just one way to support us. Sign the petition, make a donation, or volunteer your time."
        primaryAction={{ label: "Sign the Petition", href: "/petition" }}
        secondaryAction={{ label: "Volunteer", href: "/volunteer" }}
      />
    </>
  )
}
