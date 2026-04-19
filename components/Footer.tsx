import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-grand">
      <div className="wide">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
          }}
        >
          <div>
            <Link href="/" className="brand-mark" style={{ marginBottom: 18 }}>
              <Image
                src="/logo.png"
                alt="Code Victorian"
                width={56}
                height={56}
                style={{ height: 56, width: "auto" }}
              />
              <div>
                <div className="brand-type" style={{ fontSize: 24 }}>
                  Code Victorian
                </div>
                <div className="brand-sub">A Cultural Society · Est. MMXXVI</div>
              </div>
            </Link>
            <p
              style={{
                color: "var(--fg-muted)",
                fontSize: 14,
                lineHeight: 1.7,
                maxWidth: "44ch",
                margin: "24px 0",
              }}
            >
              Heritage, craft, letters, community. The slow work of preservation — made weekly,
              for readers in twenty-four countries.
            </p>
          </div>

          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              Society
            </div>
            <Link href="/mission" className="footer-link">
              Mission
            </Link>
            <Link href="/europe-first" className="footer-link">
              Europe First
            </Link>
            <Link href="/newsletter" className="footer-link">
              Dispatches
            </Link>
          </div>

          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              Support
            </div>
            <Link href="/donate" className="footer-link">
              Donate
            </Link>
            <a className="footer-link">Contact</a>
            <Link href="/terms" className="footer-link">
              Terms
            </Link>
          </div>

          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              Correspondence
            </div>
            <a className="footer-link">Instagram ↗</a>
            <a className="footer-link">YouTube ↗</a>
            <a className="footer-link">Facebook ↗</a>
          </div>
        </div>

        <Image
          src="/footer-graphic.png"
          alt=""
          width={700}
          height={300}
          className="footer-graphic"
        />

        <div className="dbl-rule" style={{ margin: "60px 0 24px" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            fontFamily: "var(--mono)",
            fontSize: 11,
            letterSpacing: "0.14em",
            color: "var(--fg-muted)",
          }}
        >
          <span>© MMXXVI CODE VICTORIAN · AMSTERDAM</span>
          <span>MADE WITH PATIENCE · NOT ADVERTISING</span>
        </div>
      </div>
    </footer>
  );
}
