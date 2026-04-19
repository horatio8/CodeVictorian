import NewsletterForm from "@/components/NewsletterForm";

const ARCHIVE = [
  {
    no: "LXI",
    title: "The Afterlife of the Colonnade",
    meta: "Essay · Architecture · 22 min",
    date: "12 APR MMXXVI",
  },
  {
    no: "LX",
    title: "Notes from a Neapolitan Tailor",
    meta: "Dispatch · Craft · 14 min",
    date: "05 APR MMXXVI",
  },
  {
    no: "LIX",
    title: "Of Bach, Palestrina, and Counting",
    meta: "Letter · Music · 9 min",
    date: "29 MAR MMXXVI",
  },
  {
    no: "LVIII",
    title: "The Slow Return of the Long Dinner",
    meta: "Essay · Custom · 17 min",
    date: "22 MAR MMXXVI",
  },
  {
    no: "LVII",
    title: "A Morning with the Binders of Antwerp",
    meta: "Portrait · Craft · 11 min",
    date: "15 MAR MMXXVI",
  },
];

export default function NewsletterPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: 180 }}>
        <div className="medium">
          <div className="two-col" style={{ gap: 100, alignItems: "start" }}>
            <div>
              <div className="eyebrow">The Dispatches · Weekly</div>
              <h1
                className="display"
                style={{ margin: "28px 0 30px", fontSize: "clamp(56px, 7vw, 104px)" }}
              >
                Letters from{" "}
                <span className="display italic" style={{ color: "var(--accent)" }}>
                  somewhere
                </span>{" "}
                slower.
              </h1>
              <p className="lede">
                One long-form dispatch per week — arriving Sunday at dawn. Essays on
                architecture, craft, and classical learning; notes from private
                correspondents in Rome, Vienna, and Edinburgh; and quiet notices of
                upcoming gatherings.
              </p>
              <p className="lede" style={{ marginTop: 18 }}>
                Three decades of archived letters are unlocked with your subscription.
              </p>

              <NewsletterForm style={{ marginTop: 40 }} />
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  color: "var(--fg-muted)",
                  marginTop: 20,
                }}
              >
                FREE · NO ADVERTISING · UNSUBSCRIBE AT ANY TIME
              </p>
            </div>

            <aside
              className="ornament"
              style={{
                border: "1px solid var(--hairline)",
                padding: "48px 40px",
                background: "color-mix(in srgb, var(--bg-2) 60%, transparent)",
              }}
            >
              <div className="eyebrow">This Week&apos;s Issue</div>
              <div className="roman" style={{ marginTop: 14 }}>
                N<sup>o</sup>. LXII — 19 April MMXXVI
              </div>
              <h3 className="display" style={{ margin: "20px 0 10px", fontSize: 32 }}>
                On Slowness, and the Civility of Letters
              </h3>
              <p style={{ color: "var(--fg-muted)", fontSize: 15, lineHeight: 1.75 }}>
                This week: a portrait of the last working letterpress in Antwerp; a
                reader&apos;s correspondence on bookbinding; and a short essay on why,
                exactly, a dinner should last three hours.
              </p>
              <div className="dbl-rule" style={{ margin: "28px 0" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  color: "var(--fg-muted)",
                  letterSpacing: "0.12em",
                }}
              >
                <span>~2,400 words</span>
                <span>Reading time · 18 min</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wide">
          <div className="sec-num">
            <span className="num">From the Archive</span>
            <span className="line" />
            <span className="label">Recent Issues</span>
          </div>
          <div style={{ borderTop: "1px solid var(--hairline)" }}>
            {ARCHIVE.map((row) => (
              <a key={row.no} className="arch-row">
                <span className="roman">{row.no}</span>
                <div>
                  <h4
                    className="display"
                    style={{ margin: "0 0 4px", fontSize: 24, fontWeight: 500 }}
                  >
                    {row.title}
                  </h4>
                  <span style={{ color: "var(--fg-muted)", fontSize: 13 }}>
                    {row.meta}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    color: "var(--fg-muted)",
                    letterSpacing: "0.12em",
                  }}
                >
                  {row.date}
                </span>
                <span className="roman">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
