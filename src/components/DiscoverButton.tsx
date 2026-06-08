// components/DiscoverButton.tsx
'use client';

import Link from "next/link";

export default function DiscoverButton() {
  return (
    <Link
      href="/brands"
      className="btn btn-outline-dark"
      style={{
        display: "inline-block",
        padding: "10px 24px",
        fontSize: "10px",
        fontWeight: 500,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        textDecoration: "none",
        border: "1px solid var(--c-dark)",
        color: "var(--c-dark)",
        background: "transparent",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--c-dark)";
        e.currentTarget.style.color = "white";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = "var(--c-dark)";
      }}
    >
      Discover Our Brands
    </Link>
  );
}