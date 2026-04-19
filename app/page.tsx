import Link from "next/link";
import HeroFramed from "@/components/HeroFramed";
import Pillars from "@/components/Pillars";
import Fleur from "@/components/Fleur";
import NewsletterForm from "@/components/NewsletterForm";
import Countdown from "@/components/Countdown";

export default function HomePage() {
  return (
    <>
      <HeroFramed
        eyebrow="A Cultural Society · Since MMXXVI"
        headline={
          <>
            Heritage,
            <br />
            <span className="display italic" style={{ color: "var(--accent)" }}>
              beautifully
            </span>
            <br />
            preserved.
          </>
        }
        lede="Code Victorian is a cultural movement devoted to the stewardship of European craft, classical learning, and the elegance of inherited civilisation — uniting those who believe beauty is not optional."
        primary={{ href: "/europe-first", label: "Become a Member" }}
        secondary={{ href: "/mission", label: "Read the Manifesto" }}
      />

      {/* Manifesto quote */}
      <section className="section" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div className="medium">
          <div className="sec-num">
            <span className="num">
              N<sup>o</sup>. I
            </span>
            <span className="line" />
            <span className="label">The Statement</span>
          </div>
          <div className="quote-block">
            <div className="marks">&ldquo;</div>
            <blockquote>
              The first international movement uniting those of European heritage to
              preserve the greatest{" "}
              <span className="display italic" style={{ color: "var(--accent)" }}>
                civilisation
              </span>{" "}
              the world has ever known.
            </blockquote>
            <div className="attr">— The Founding Statement</div>
          </div>
        </div>
      </section>

      <Fleur />

      {/* Pillars */}
      <section className="section" style={{ paddingTop: 60 }}>
        <div className="wide">
          <div className="sec-num">
            <span className="num">
              N<sup>o</sup>. II
            </span>
            <span className="line" />
            <span className="label">The Pillars</span>
          </div>
          <Pillars />
        </div>
      </section>

      {/* Featured dispatches */}
      <section className="section" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="wide">
          <div className="sec-num">
            <span className="num">
              N<sup>o</sup>. III
            </span>
            <span className="line" />
            <span className="label">From the Dispatches</span>
          </div>
          <div className="three-col">
            <article>
              <div
                className="plate"
                style={{ aspectRatio: "4 / 3", marginBottom: 20 }}
                data-label="essay · architecture"
              />
              <span className="kicker">Essay · Architecture</span>
              <h3 className="display" style={{ margin: "4px 0 12px" }}>
                The Afterlife of the Colonnade
              </h3>
              <p style={{ color: "var(--fg-muted)", fontSize: 14, lineHeight: 1.7 }}>
                On the slow return of proportion, repetition, and the civic grammar of
                the classical façade.
              </p>
              <a className="roman" style={{ marginTop: 14, display: "inline-block" }}>
                Read essay →
              </a>
            </article>
            <article>
              <div
                className="plate"
                style={{ aspectRatio: "4 / 3", marginBottom: 20 }}
                data-label="dispatch · craft"
              />
              <span className="kicker">Dispatch · Craft</span>
              <h3 className="display" style={{ margin: "4px 0 12px" }}>
                Notes from a Neapolitan Tailor
              </h3>
              <p style={{ color: "var(--fg-muted)", fontSize: 14, lineHeight: 1.7 }}>
                Three generations of shoulder construction, and what a machine will
                never know about a buttonhole.
              </p>
              <a className="roman" style={{ marginTop: 14, display: "inline-block" }}>
                Read essay →
              </a>
            </article>
            <article>
              <div
                className="plate"
                style={{ aspectRatio: "4 / 3", marginBottom: 20 }}
                data-label="letter · music"
              />
              <span className="kicker">Letter · Music</span>
              <h3 className="display" style={{ margin: "4px 0 12px" }}>
                Of Bach, Palestrina, and Counting
              </h3>
              <p style={{ color: "var(--fg-muted)", fontSize: 14, lineHeight: 1.7 }}>
                Why the counterpoint that trained Europe&apos;s ear remains, to this
                day, the finest discipline of the mind.
              </p>
              <a className="roman" style={{ marginTop: 14, display: "inline-block" }}>
                Read essay →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Membership teaser */}
      <section
        className="section"
        style={{
          background: "var(--bg-2)",
          borderTop: "1px solid var(--hairline)",
          borderBottom: "1px solid var(--hairline)",
        }}
      >
        <div className="wide">
          <div className="sec-num">
            <span className="num">
              N<sup>o</sup>. IV
            </span>
            <span className="line" />
            <span className="label">The Society</span>
          </div>
          <div className="two-col" style={{ gap: 80 }}>
            <div>
              <span className="eyebrow">Europe First · The Membership</span>
              <h2 className="display" style={{ margin: "22px 0" }}>
                A society of{" "}
                <span className="display italic" style={{ color: "var(--accent)" }}>
                  readers,
                </span>{" "}
                makers, and correspondents.
              </h2>
              <p className="lede">
                Membership opens the full archive of long-form dispatches, private
                correspondence circles, and invitations to the annual gatherings — small,
                refined, and held in places that remember why they were built.
              </p>
              <div
                style={{ marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap" }}
              >
                <Link className="btn primary" href="/europe-first">
                  View Tiers <span className="arr">→</span>
                </Link>
                <Link className="btn" href="/mission">
                  Our Mission
                </Link>
              </div>
            </div>
            <div>
              <Countdown />
              <p
                style={{
                  marginTop: 18,
                  fontFamily: "var(--display)",
                  fontStyle: "italic",
                  color: "var(--fg-muted)",
                  textAlign: "center",
                }}
              >
                Until the Summer Gathering — Vienna, MMXXVI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donate teaser */}
      <section className="section">
        <div className="medium" style={{ textAlign: "center" }}>
          <span className="eyebrow bothrules">Patronage</span>
          <h2 className="display" style={{ margin: "22px auto", maxWidth: "14ch" }}>
            Support the{" "}
            <span className="display italic" style={{ color: "var(--accent)" }}>
              quiet work
            </span>{" "}
            of preservation.
          </h2>
          <p className="lede" style={{ maxWidth: "56ch", margin: "0 auto 36px" }}>
            Every dispatch, archive restoration, and scholarship is made possible by
            patrons who believe beauty is worth funding — not only admiring.
          </p>
          <Link className="btn primary" href="/donate">
            Make a Contribution <span className="arr">→</span>
          </Link>
        </div>
      </section>

      {/* Instagram strip */}
      <section
        className="section"
        style={{ background: "var(--bg-2)", padding: "80px var(--sec-px)" }}
      >
        <div className="wide">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 32,
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div>
              <span className="eyebrow">@codevictorian · 316,000 Subscribers</span>
              <h2 className="display" style={{ margin: "16px 0 0" }}>
                Daily, from the{" "}
                <span className="display italic" style={{ color: "var(--accent)" }}>
                  ateliers
                </span>
                .
              </h2>
            </div>
            <a className="btn">
              Follow on Instagram <span className="arr">↗</span>
            </a>
          </div>
          <div className="insta-strip">
            {[
              "01 · café",
              "02 · portrait",
              "03 · archive",
              "04 · atelier",
              "05 · travel",
              "06 · dinner",
            ].map((label) => (
              <div key={label} className="plate insta-tile" data-label={label} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section" style={{ padding: "140px var(--sec-px)" }}>
        <div className="medium" style={{ textAlign: "center" }}>
          <span className="eyebrow bothrules">The Dispatches</span>
          <h2 className="display" style={{ margin: "22px auto", maxWidth: "18ch" }}>
            Letters, carefully written. Delivered on Sundays.
          </h2>
          <p className="lede" style={{ maxWidth: "52ch", margin: "0 auto 36px" }}>
            A single long-form dispatch per week — essays, correspondence, and quiet
            notices of upcoming gatherings. No noise.
          </p>
          <NewsletterForm style={{ maxWidth: 560, margin: "0 auto" }} />
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.18em",
              color: "var(--fg-muted)",
              marginTop: 24,
            }}
          >
            NO ADVERTISING · UNSUBSCRIBE AT ANY TIME
          </p>
        </div>
      </section>
    </>
  );
}
