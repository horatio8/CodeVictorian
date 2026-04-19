"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LEFT = [
  { href: "/mission", label: "Mission" },
  { href: "/europe-first", label: "Europe First" },
  { href: "/newsletter", label: "Dispatches" },
];

const RIGHT = [
  { href: "/donate", label: "Donate" },
  { href: "/terms", label: "Terms" },
];

export default function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="nav">
      <div className="nav-links">
        {LEFT.map(({ href, label }) => (
          <Link key={href} href={href} className={isActive(href) ? "active" : ""}>
            {label}
          </Link>
        ))}
      </div>

      <Link href="/" className="brand-mark">
        <Image src="/logo.png" alt="Code Victorian" width={44} height={44} priority />
        <div>
          <div className="brand-type">Code Victorian</div>
          <div className="brand-sub">Est. MMXXVI</div>
        </div>
      </Link>

      <div className="nav-links right">
        {RIGHT.map(({ href, label }) => (
          <Link key={href} href={href} className={isActive(href) ? "active" : ""}>
            {label}
          </Link>
        ))}
        <Link
          href="/europe-first"
          className="btn"
          style={{ padding: "10px 18px", fontSize: 10 }}
        >
          Join <span className="arr">→</span>
        </Link>
      </div>
    </nav>
  );
}
