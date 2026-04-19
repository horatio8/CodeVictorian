import Link from "next/link";

type Props = {
  eyebrow: string;
  headline: React.ReactNode;
  lede: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export default function HeroFramed({ eyebrow, headline, lede, primary, secondary }: Props) {
  return (
    <section className="hero" data-layout="framed">
      <div className="hero-fallback" aria-hidden />
      <video className="bg-video" src="/hero-video.mp4" autoPlay muted loop playsInline preload="auto" />
      <div className="vignette" />
      <div className="content">
        <div className="hero-text-wrap">
          <div className="eyebrow" style={{ justifyContent: "center", marginBottom: 28 }}>
            {eyebrow}
          </div>
          <h1 className="display">{headline}</h1>
          <p className="lede" style={{ maxWidth: 560, margin: "36px auto 0" }}>
            {lede}
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              marginTop: 44,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link className="btn primary" href={primary.href}>
              {primary.label} <span className="arr">→</span>
            </Link>
            {secondary && (
              <Link className="btn" href={secondary.href}>
                {secondary.label}
              </Link>
            )}
          </div>
        </div>

        <div className="marquee">
          <span>
            INSTAGRAM · 316K <span className="dot" /> YouTube · Published Weekly{" "}
            <span className="dot" /> Members in XXIV Countries
          </span>
          <span className="roman">
            N<sup>o</sup>. I — MMXXVI
          </span>
        </div>
      </div>
    </section>
  );
}
