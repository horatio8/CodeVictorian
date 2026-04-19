"use client";

import { useMemo, useState } from "react";

type Frequency = "once" | "month" | "year";

const FREQ_LABEL: Record<Frequency, string> = {
  once: "one-time",
  month: "monthly",
  year: "annually",
};

const FREQ_BUTTON_SUFFIX: Record<Frequency, string> = {
  once: "",
  month: " / month",
  year: " / year",
};

const TIERS = [10, 20, 30, 40] as const;

export default function DonateForm() {
  const [freq, setFreq] = useState<Frequency>("once");
  const [amount, setAmount] = useState<number | "custom">(20);
  const [customAmount, setCustomAmount] = useState<string>("");

  const displayAmount = useMemo(() => {
    if (amount === "custom") {
      const n = Number(customAmount);
      return Number.isFinite(n) && n > 0 ? `€${n}` : "€—";
    }
    return `€${amount}`;
  }, [amount, customAmount]);

  return (
    <div
      className="ornament"
      style={{
        border: "1px solid var(--hairline)",
        padding: "44px 40px",
        background: "color-mix(in srgb, var(--bg-2) 60%, transparent)",
      }}
    >
      <div className="eyebrow">Select your gift</div>

      <label
        style={{
          display: "block",
          marginTop: 28,
          fontSize: 10,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "var(--fg-muted)",
          marginBottom: 10,
        }}
      >
        Frequency
      </label>
      <div className="freq-tabs">
        {(["once", "month", "year"] as Frequency[]).map((f) => (
          <div
            key={f}
            className={`tab${freq === f ? " active" : ""}`}
            onClick={() => setFreq(f)}
          >
            {f === "once" ? "Once" : f === "month" ? "Monthly" : "Annually"}
          </div>
        ))}
      </div>

      <label
        style={{
          display: "block",
          fontSize: 10,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "var(--fg-muted)",
          marginBottom: 10,
        }}
      >
        Amount
      </label>
      <div className="don-grid">
        {TIERS.map((t) => (
          <div
            key={t}
            className={`don-tier${amount === t ? " active" : ""}`}
            onClick={() => setAmount(t)}
          >
            <div className="amount">€{t}</div>
            <div className="freq">{FREQ_LABEL[freq]}</div>
          </div>
        ))}
        <div
          className={`don-tier${amount === "custom" ? " active" : ""}`}
          onClick={() => setAmount("custom")}
        >
          <div className="amount" style={{ fontSize: 20 }}>
            Custom
          </div>
          <div className="freq">other</div>
        </div>
      </div>

      {amount === "custom" && (
        <input
          type="number"
          min={1}
          placeholder="Enter amount €"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          style={{
            width: "100%",
            padding: "14px 16px",
            background: "transparent",
            border: "1px solid var(--hairline)",
            color: "var(--fg)",
            fontFamily: "var(--serif)",
            fontSize: 18,
            marginBottom: 20,
          }}
        />
      )}

      <button
        type="button"
        className="btn primary"
        style={{ width: "100%", justifyContent: "center" }}
      >
        Donate {displayAmount}
        {FREQ_BUTTON_SUFFIX[freq]} <span className="arr">→</span>
      </button>
      <p
        style={{
          fontFamily: "var(--mono)",
          fontSize: 10,
          letterSpacing: "0.16em",
          color: "var(--fg-muted)",
          marginTop: 18,
          textAlign: "center",
        }}
      >
        SECURE · STRIPE · RECEIPT BY EMAIL
      </p>
    </div>
  );
}
