export default function MembershipCards() {
  return (
    <div className="mem-cards">
      <div className="mem-card ornament">
        <div className="tier-label">Founder · Monthly</div>
        <h3 className="tier-name">The Correspondent</h3>
        <div className="tier-price">
          €9.99{" "}
          <span
            style={{
              fontFamily: "var(--body)",
              fontSize: 13,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--fg-muted)",
            }}
          >
            / month
          </span>
        </div>
        <p style={{ color: "var(--fg-muted)", fontSize: 15, lineHeight: 1.7 }}>
          For those joining the society in its founding year. Locked in for life at the
          founding rate.
        </p>
        <ul>
          <li>The full weekly Dispatches — long form</li>
          <li>The complete archive of past issues</li>
          <li>Member-only correspondence circles</li>
          <li>Invitation to one annual regional gathering</li>
          <li>A quarterly printed supplement</li>
        </ul>
        <a className="btn primary" style={{ width: "100%", justifyContent: "center" }}>
          Become a Correspondent <span className="arr">→</span>
        </a>
      </div>

      <div className="mem-card featured ornament">
        <div className="tier-label">Lifetime · Founding Circle</div>
        <h3 className="tier-name">The Patron</h3>
        <div className="tier-price">
          €499.99{" "}
          <span
            style={{
              fontFamily: "var(--body)",
              fontSize: 13,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--fg-muted)",
            }}
          >
            / one-time
          </span>
        </div>
        <p style={{ color: "var(--fg-muted)", fontSize: 15, lineHeight: 1.7 }}>
          For those who would see the society endure. Lifetime standing in the Founding
          Circle, limited to CCCXVI members.
        </p>
        <ul>
          <li>Everything in The Correspondent — for life</li>
          <li>Named in the founding registry</li>
          <li>Priority seating at all gatherings, East &amp; West</li>
          <li>A hand-bound leather volume of the first year&apos;s Dispatches</li>
          <li>Private quarterly correspondence from the editor</li>
          <li>One guest invitation to each annual summer gathering</li>
        </ul>
        <a className="btn primary" style={{ width: "100%", justifyContent: "center" }}>
          Enter the Founding Circle <span className="arr">→</span>
        </a>
      </div>
    </div>
  );
}
