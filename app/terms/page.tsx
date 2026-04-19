export default function TermsPage() {
  return (
    <section className="section" style={{ paddingTop: 180 }}>
      <div className="terms-body">
        <div className="eyebrow">Legal</div>
        <h1 className="display" style={{ margin: "24px 0 0" }}>
          Terms &amp; Conditions
        </h1>
        <p
          style={{
            color: "var(--fg-muted)",
            fontSize: 13,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginTop: 8,
          }}
        >
          Last revised · XIX April MMXXVI
        </p>

        <div className="dbl-rule" style={{ margin: "40px 0" }} />

        <h3>I. Registered Entity</h3>
        <p>
          Code Victorian is a cultural society registered in the Netherlands. All
          membership fees, patronage, and correspondence are processed under this
          registration.
        </p>

        <h3>II. Membership</h3>
        <p>
          Membership of Europe First is offered on a monthly or lifetime basis. Monthly
          membership may be cancelled at any time from the member&apos;s account;
          lifetime membership is non-refundable after fourteen days of registration.
        </p>

        <h3>III. Patronage &amp; Donations</h3>
        <p>
          Gifts made through the Donate page are processed via Stripe. Receipts are
          issued by email. Where permitted by the laws of the patron&apos;s
          jurisdiction, gifts may be tax-deductible; we do not advise on tax matters.
        </p>

        <h3>IV. Content &amp; Copyright</h3>
        <p>
          All Dispatches, essays, and published correspondence are the property of
          Code Victorian and its contributors. Personal sharing is welcome; commercial
          reproduction is not permitted without written consent.
        </p>

        <h3>V. Privacy</h3>
        <p>
          We collect only the information required to send Dispatches and fulfil
          membership. Your details are never sold, shared, or repurposed for
          advertising.
        </p>

        <h3>VI. Governing Law</h3>
        <p>
          These terms are governed by the laws of the Netherlands. Any disputes shall
          be resolved in the courts of Amsterdam.
        </p>
      </div>
    </section>
  );
}
