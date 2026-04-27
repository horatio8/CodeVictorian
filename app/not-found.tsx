import Link from "next/link"

export default function NotFound() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy-900 on-dark">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, color-mix(in srgb, var(--color-gold-400) 12%, transparent), transparent 60%), linear-gradient(180deg, var(--color-navy-900), var(--color-navy-800))",
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
        <span className="eyebrow eyebrow-both">N<sup>o</sup>. CDIV — Page Not Found</span>
        <h1 className="mt-8 font-serif text-6xl font-medium leading-[1.04] text-white sm:text-7xl">
          That page is{" "}
          <span className="italic font-normal text-gold-400">elsewhere</span>.
        </h1>
        <p className="lede mt-7 max-w-xl">
          The page you were looking for has moved, been retitled, or never existed.
          Try one of the directions below.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/" className="btn-primary">
            Return Home <span className="font-serif">→</span>
          </Link>
          <Link href="/petition" className="btn-secondary">
            Sign the Petition
          </Link>
        </div>
        <div className="fleur mt-16">✦ ❦ ✦</div>
      </div>
    </section>
  )
}
