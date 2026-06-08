"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "About", 
    href: "/about",
     dropdown: [
      { label: "About Us", href: "/about" },
      { label: "Business Overview", href: "/about/business-overview" },
      { label: "Management Team", href: "/about/management-team" },
      
    ],
   },
  {
    label: "Our Brands",
    href: "/brands",
    dropdown: [
      { label: "BARISTA COFFEE", href: "/brands" },
      { label: "KYLIN", href: "/brands" },
      { label: "WANCHAI", href: "/brands" },
      { label: "DRIZZLE & DUST", href: "/brands" },
    ],
  },
  { label: "Presence", href: "/presence" },
  {
    label: "Investors",
    href: "/investors",
    dropdown: [
      { label: "Investor Relations", href: "/investors" },
      { label: "Disclosures Under Regulation 46 LODR", href: "/investors/financials",
         dropdown: [
          {label: "Postal Ballot Notice", href: "/investors/postal-ballot-notice"},
        {label: "Annual Reports & Financials", href: "/investors/financials"},
        {label: "Investor's Information", href: "/investors/investors-information"},
        {label: "Archives", href: "/investors/archives"},
       {label: "Investors' Contact", href: "/investors/investors-contact"},
       {label: "Corporate Social Responsibility", href: "/investors/csr"},
       {label: "Shareholder's Information", href: "/investors/shareholders-information"},
       {label: "Policies", href: "/investors/policies"},
       {label: "Board of Directors Composition", href: "/investors/board-of-directors-composition"},
      ]},
      { label: "Secretarial compliance Report", href: "/investors/secretarial-compliance-report" },
      { label: "MOA and AOA", href: "/investors/moa-and-aoa" },
      { label: "Newspaper Add", href: "/investors/newspaper-add" },
      { label: "Audited Subsidiaries Financial", href: "/investors/audited-subsidiaries-financial" },
      
    ],
  },
  { label: "Leadership", href: "/leadership" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md">
        <div className="mx-auto max-w-[1400px] px-8 flex h-[88px] items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-4">
            <div className="relative w-[50px] h-[50px]">
              <Image
                src="/logo.png"
                alt="Gourmet Gateway India Limited"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h2 className="font-serif text-[24px] font-normal text-white leading-tight tracking-wide">
                Gourmet Gateway
              </h2>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] mt-[2px] font-light">
                India Limited
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-[12px] uppercase tracking-[0.15em] text-white/80 hover:text-white transition-colors duration-200 font-light"
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-[#0d0c09]/95 backdrop-blur-sm border border-white/10 py-2 shadow-2xl rounded-sm">
                 {link.dropdown.map((item) => (
  <div key={item.label} className="relative group">
    <Link
      href={item.href}
      className="flex items-center justify-between px-5 py-3 text-[11px] uppercase tracking-[0.12em] text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-150"
    >
      {item.label}
      {item.dropdown && <ChevronDown size={14} />}
    </Link>

    {item.dropdown && (
      <div className="absolute left-full top-0 w-56 bg-[#0d0c09]/95 backdrop-blur-sm border border-white/10 hidden group-hover:block rounded-sm">
        {item.dropdown.map((subItem) => (
          <Link
            key={subItem.label}
            href={subItem.href}
            className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] text-white/70 hover:text-white hover:bg-white/5"
          >
            {subItem.label}
          </Link>
        ))}
      </div>
    )}
  </div>
))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="ml-4 bg-[#C9A96E] px-7 py-3 text-[11px] uppercase tracking-[0.2em] text-white hover:bg-[#b8965a] transition-colors duration-200 font-light"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden bg-[#C9A96E] p-3 text-white rounded-sm"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0d0c09] pt-[88px] lg:hidden overflow-y-auto">
          <div className="flex flex-col divide-y divide-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-8 py-5 text-xl font-light text-white hover:text-[#C9A96E] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mx-8 mt-6 bg-[#C9A96E] px-6 py-4 text-center text-sm uppercase tracking-[0.2em] text-white"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}