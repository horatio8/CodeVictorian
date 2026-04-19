"use client";

import { useEffect, useState } from "react";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

// Summer Gathering — Vienna, 20 June MMXXVI
const TARGET = new Date("2026-06-20T18:00:00+02:00").getTime();

export default function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = now === null ? 0 : Math.max(0, TARGET - now);
  const d = Math.floor(diff / 86_400_000);
  const h = Math.floor((diff / 3_600_000) % 24);
  const m = Math.floor((diff / 60_000) % 60);
  const s = Math.floor((diff / 1_000) % 60);

  return (
    <div className="countdown">
      <div className="cd-cell">
        <div className="cd-num">{pad(d)}</div>
        <div className="cd-label">Days</div>
      </div>
      <div className="cd-cell">
        <div className="cd-num">{pad(h)}</div>
        <div className="cd-label">Hours</div>
      </div>
      <div className="cd-cell">
        <div className="cd-num">{pad(m)}</div>
        <div className="cd-label">Min</div>
      </div>
      <div className="cd-cell">
        <div className="cd-num">{pad(s)}</div>
        <div className="cd-label">Sec</div>
      </div>
    </div>
  );
}
