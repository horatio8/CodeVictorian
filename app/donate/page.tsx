import DonateForm from "@/components/DonateForm";

export default function DonatePage() {
  return (
    <>
      <section className="section" style={{ paddingTop: 180 }}>
        <div className="medium">
          <div className="two-col" style={{ gap: 80, alignItems: "start" }}>
            <div>
              <div className="eyebrow">Patronage · Tax-Deductible</div>
              <h1 className="display" style={{ margin: "28px 0" }}>
                Your{" "}
                <span className="display italic" style={{ color: "var(--accent)" }}>
                  contribution
                </span>
                .
              </h1>
              <p className="lede">
                Code Victorian runs without advertising, subscriptions-to-strangers, or
                commercial sponsorship. What it runs on — archives, scholarships, the
                slow work of preservation — is funded entirely by readers who decide,
                quietly, to give.
              </p>
              <div className="dbl-rule" style={{ margin: "40px 0" }} />

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                <div>
                  <div className="roman" style={{ fontSize: 36, fontStyle: "italic" }}>
                    €284K
                  </div>
                  <p style={{ fontSize: 13, color: "var(--fg-muted)", margin: "4px 0 0" }}>
                    Raised in MMXXV
                  </p>
                </div>
                <div>
                  <div className="roman" style={{ fontSize: 36, fontStyle: "italic" }}>
                    IV
                  </div>
                  <p style={{ fontSize: 13, color: "var(--fg-muted)", margin: "4px 0 0" }}>
                    Scholarships endowed
                  </p>
                </div>
                <div>
                  <div className="roman" style={{ fontSize: 36, fontStyle: "italic" }}>
                    MCCXIV
                  </div>
                  <p style={{ fontSize: 13, color: "var(--fg-muted)", margin: "4px 0 0" }}>
                    Patrons in XXIV countries
                  </p>
                </div>
                <div>
                  <div className="roman" style={{ fontSize: 36, fontStyle: "italic" }}>
                    100%
                  </div>
                  <p style={{ fontSize: 13, color: "var(--fg-muted)", margin: "4px 0 0" }}>
                    To preservation work
                  </p>
                </div>
              </div>
            </div>

            <DonateForm />
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--bg-2)", borderTop: "1px solid var(--hairline)" }}
      >
        <div className="wide">
          <div className="sec-num">
            <span className="num">Where it goes</span>
            <span className="line" />
            <span className="label">The ledger</span>
          </div>
          <div className="three-col">
            <div>
              <div className="roman" style={{ fontSize: 40 }}>
                I.
              </div>
              <h4 className="display" style={{ fontSize: 24, margin: "8px 0 10px" }}>
                Archive &amp; Restoration
              </h4>
              <p style={{ color: "var(--fg-muted)", fontSize: 14, lineHeight: 1.7 }}>
                Digitisation of rare correspondence, sheet music, and architectural
                plates — made freely available to members.
              </p>
            </div>
            <div>
              <div className="roman" style={{ fontSize: 40 }}>
                II.
              </div>
              <h4 className="display" style={{ fontSize: 24, margin: "8px 0 10px" }}>
                Scholarships
              </h4>
              <p style={{ color: "var(--fg-muted)", fontSize: 14, lineHeight: 1.7 }}>
                Four fully-funded placements each year in stone-masonry, bookbinding,
                bespoke tailoring, and classical composition.
              </p>
            </div>
            <div>
              <div className="roman" style={{ fontSize: 40 }}>
                III.
              </div>
              <h4 className="display" style={{ fontSize: 24, margin: "8px 0 10px" }}>
                Gatherings
              </h4>
              <p style={{ color: "var(--fg-muted)", fontSize: 14, lineHeight: 1.7 }}>
                Annual summer and winter convenings held in cities that still remember
                why they were built — at or below cost.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
