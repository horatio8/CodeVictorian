import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = { title: "Store" }

const products = [
  { name: "Heritage Shield T-Shirt",          price: 29.99, category: "Apparel",     colours: "Navy, White, Black",                label: "apparel · shirt" },
  { name: "Code Victorian Cap",               price: 19.99, category: "Apparel",     colours: "Navy with Gold Embroidery",         label: "apparel · cap" },
  { name: "Europa Hoodie",                    price: 54.99, category: "Apparel",     colours: "Navy, Charcoal",                    label: "apparel · hoodie" },
  { name: "Campaign Enamel Pin",              price:  8.99, category: "Accessories", colours: "Gold & Navy",                       label: "accessories · pin" },
  { name: "Heritage Tote Bag",                price: 14.99, category: "Accessories", colours: "Natural Canvas",                    label: "accessories · tote" },
  { name: "Campaign Sticker Pack (10)",       price:  5.99, category: "Accessories", colours: "Assorted",                          label: "accessories · stickers" },
  { name: "European Heritage Poster",         price: 12.99, category: "Print",       colours: "A2 Size",                           label: "print · poster" },
  { name: "Policy Papers Collection (Print)", price: 24.99, category: "Print",       colours: "Hardcover",                         label: "print · volume" },
]

export default function StorePage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32 on-dark">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow eyebrow-both">The Shop</span>
          <h1 className="mt-6 font-serif text-5xl font-medium text-white sm:text-6xl lg:text-7xl">
            Campaign{" "}
            <span className="italic font-normal text-gold-400">Store</span>
          </h1>
          <p className="lede mx-auto mt-8 max-w-2xl">
            Wear your convictions. All proceeds directly fund our campaigns across Europe.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="sec-num">
            <span className="num">From the Workshops</span>
            <span className="line" />
            <span className="label">The Collection</span>
          </div>

          <div className="grid gap-0 border border-gold-400/25 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, i, arr) => {
              const col = i % 4
              const row = Math.floor(i / 4)
              const totalRows = Math.ceil(arr.length / 4)
              return (
                <article
                  key={product.name}
                  className={`group ${col < 3 ? "lg:border-r lg:border-gold-400/20" : ""} ${
                    i % 2 === 0 ? "sm:border-r sm:border-gold-400/20" : ""
                  } ${row < totalRows - 1 ? "border-b border-gold-400/20" : ""}`}
                >
                  <div className="plate aspect-square" data-label={product.label} />
                  <div className="p-6">
                    <span className="font-serif italic text-gold-400 text-base">
                      {product.category}
                    </span>
                    <h3 className="mt-2 font-serif text-lg font-medium leading-snug transition-colors group-hover:text-gold-600">
                      {product.name}
                    </h3>
                    <p className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-navy-800/50">
                      {product.colours}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="font-serif text-2xl italic text-gold-600">
                        €{product.price.toFixed(2)}
                      </span>
                      <button className="border border-gold-400 bg-transparent px-3 py-2 font-mono text-[0.625rem] font-medium uppercase tracking-[0.22em] text-gold-600 transition-colors hover:bg-gold-400 hover:text-navy-900">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-16 border border-gold-400/40 bg-ivory p-10 text-center ornament">
            <div className="fleur">✦ ❦ ✦</div>
            <h3 className="mt-6 font-serif text-3xl font-medium">
              Bulk orders &amp; custom items.
            </h3>
            <p className="mx-auto mt-3 max-w-lg font-lede text-base text-navy-800/70">
              Planning an event or need branded materials for your local chapter?
              Contact us for bulk pricing and custom merchandise.
            </p>
            <Link href="/contact" className="btn-primary mt-6 inline-flex">
              Contact Us <span className="font-serif">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
