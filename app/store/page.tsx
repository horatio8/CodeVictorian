import type { Metadata } from "next"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

export const metadata: Metadata = { title: "Store" }

const products = [
  { name: "Heritage Shield T-Shirt", price: 29.99, category: "Apparel", colours: "Navy, White, Black" },
  { name: "Code Victorian Cap", price: 19.99, category: "Apparel", colours: "Navy with Gold Embroidery" },
  { name: "Europa Hoodie", price: 54.99, category: "Apparel", colours: "Navy, Charcoal" },
  { name: "Campaign Enamel Pin", price: 8.99, category: "Accessories", colours: "Gold & Navy" },
  { name: "Heritage Tote Bag", price: 14.99, category: "Accessories", colours: "Natural Canvas" },
  { name: "Campaign Sticker Pack (10)", price: 5.99, category: "Accessories", colours: "Assorted" },
  { name: "European Heritage Poster", price: 12.99, category: "Print", colours: "A2 Size" },
  { name: "Policy Papers Collection (Print)", price: 24.99, category: "Print", colours: "Hardcover" },
]

export default function StorePage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 60% 50%, rgba(212,175,55,0.4) 0%, transparent 50%)" }} />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Shop</span>
          <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Campaign Store
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
            Wear your convictions. All proceeds directly fund our campaigns across Europe.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div key={product.name} className="card group">
                <div className="aspect-square bg-gradient-to-br from-navy-100 to-navy-200 flex items-center justify-center">
                  <ShoppingBag className="h-12 w-12 text-navy-300 transition-colors group-hover:text-gold-400" />
                </div>
                <div className="p-5">
                  <span className="text-[0.625rem] font-bold uppercase tracking-wider text-gold-600">
                    {product.category}
                  </span>
                  <h3 className="mt-1 font-serif text-base font-bold leading-snug group-hover:text-gold-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs text-gray-400">{product.colours}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-bold text-navy-700">
                      &euro;{product.price.toFixed(2)}
                    </span>
                    <button className="rounded-lg bg-navy-700 px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-gold-500 hover:text-navy-900">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-xl bg-white p-8 text-center shadow-sm">
            <h3 className="font-serif text-xl font-bold">Bulk Orders &amp; Custom Items</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm text-gray-600">
              Planning an event or need branded materials for your local chapter?
              Contact us for bulk pricing and custom merchandise.
            </p>
            <Link href="/contact" className="btn-navy mt-5 inline-flex">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
