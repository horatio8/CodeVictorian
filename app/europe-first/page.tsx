import Fleur from "@/components/Fleur";
import MembershipCards from "@/components/MembershipCards";

export default function EuropeFirstPage() {
  return (
    <>
      <section className="mission-hero" style={{ minHeight: "60vh" }}>
        <div className="narrow">
          <div className="eyebrow bothrules">The Membership</div>
          <h1 className="display" style={{ margin: "28px 0" }}>
            <span className="display italic" style={{ color: "var(--accent)" }}>
              Europe
            </span>{" "}
            First.
          </h1>
          <p className="lede">
            A society of readers, makers, and correspondents. Two tiers. One standard.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wide">
          <MembershipCards />
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--bg-2)", borderTop: "1px solid var(--hairline)" }}
      >
        <div className="medium">
          <Fleur />
          <div className="two-col" style={{ gap: 80, marginTop: 40 }}>
            <div>
              <h3 className="display" style={{ fontSize: 36, margin: "0 0 20px" }}>
                What is expected of a member.
              </h3>
              <p style={{ color: "var(--fg-muted)", fontSize: 16, lineHeight: 1.8 }}>
                Attention. Correspondence. A willingness, when at a gathering, to set
                down the telephone for the duration of dinner. Nothing more.
              </p>
            </div>
            <div>
              <h3 className="display" style={{ fontSize: 36, margin: "0 0 20px" }}>
                What is{" "}
                <em style={{ color: "var(--accent)", fontStyle: "italic" }}>not</em>{" "}
                expected.
              </h3>
              <p style={{ color: "var(--fg-muted)", fontSize: 16, lineHeight: 1.8 }}>
                Agreement on every point. Residence in Europe. A particular faith. A
                particular politics. The society is a civil one — conversation, not
                consensus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
