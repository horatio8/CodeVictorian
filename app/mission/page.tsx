import Link from "next/link";
import Fleur from "@/components/Fleur";

export default function MissionPage() {
  return (
    <>
      <section className="mission-hero">
        <div className="narrow">
          <div className="eyebrow bothrules">The Manifesto</div>
          <h1 className="display" style={{ margin: "28px 0" }}>
            Our{" "}
            <span className="display italic" style={{ color: "var(--accent)" }}>
              Mission
            </span>
            .
          </h1>
          <p className="lede">
            What follows is the statement that binds every letter, dispatch, and
            gathering held under the Code Victorian standard.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="narrow">
          <p
            className="display italic"
            style={{
              fontSize: "clamp(28px, 3vw, 44px)",
              lineHeight: 1.3,
              margin: "0 0 40px",
              color: "var(--fg)",
            }}
          >
            Code Victorian exists to unite as many people as possible in the
            conviction that Europeans, and those of European heritage the world over,
            have the inheritance — and the responsibility — to preserve the
            civilisation that enriched the world more than any other in the history
            of mankind.
          </p>

          <div className="dbl-rule" style={{ margin: "60px 0" }} />

          <h3 className="display" style={{ fontSize: 32, margin: "0 0 16px" }}>
            A cultural inheritance.
          </h3>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.8,
              color: "var(--fg-muted)",
              margin: "0 0 28px",
            }}
          >
            Europe gave the world the cathedral and the concert hall, the essay and
            the novel, the republic and the rule of law. These are not museum pieces.
            They are living practices — taught, rehearsed, kept in use by each
            generation that chooses to keep them.
          </p>

          <h3 className="display" style={{ fontSize: 32, margin: "40px 0 16px" }}>
            A society, not a spectacle.
          </h3>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.8,
              color: "var(--fg-muted)",
              margin: "0 0 28px",
            }}
          >
            Code Victorian is not a brand. It is a correspondence, a reading list, a
            quiet dinner in a small town, a weekly dispatch arriving by email, a
            scholarship paid for by members in twenty-four countries. It is the
            opposite of loud.
          </p>

          <h3 className="display" style={{ fontSize: 32, margin: "40px 0 16px" }}>
            An invitation.
          </h3>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.8,
              color: "var(--fg-muted)",
              margin: "0 0 28px",
            }}
          >
            If you find yourself reaching for Bach when the day ends, rereading
            letters from another century, or teaching a child to set a table properly
            — you are already, in some sense, one of us. The formal invitation is
            below.
          </p>

          <div style={{ marginTop: 48, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link className="btn primary" href="/europe-first">
              Join Europe First <span className="arr">→</span>
            </Link>
            <Link className="btn" href="/newsletter">
              Subscribe to Dispatches
            </Link>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--bg-2)", borderTop: "1px solid var(--hairline)" }}
      >
        <div className="medium" style={{ textAlign: "center" }}>
          <Fleur />
          <p
            className="display italic"
            style={{
              fontSize: "clamp(22px, 2.2vw, 30px)",
              color: "var(--fg-muted)",
              maxWidth: "52ch",
              margin: "0 auto",
            }}
          >
            &ldquo;Tradition is not the worship of ashes, but the preservation of
            fire.&rdquo;
          </p>
          <p className="roman" style={{ marginTop: 24 }}>
            — attributed to Gustav Mahler
          </p>
        </div>
      </section>
    </>
  );
}
