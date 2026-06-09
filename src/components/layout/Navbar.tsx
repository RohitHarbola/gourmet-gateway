"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { 
    label: "About", 
    href: "/about",
    dropdown: [
      { label: "About Us", href: "/about" },
      { label: "Business Overview", href: "/about/business-overview" },
      { label: "Management Team", href: "/about/management-team" },
    ],
  },
  { label: "Presence", href: "/presence" },
  {
    label: "Investors",
    href: "/investors",
    dropdown: [
      { label: "Investor Relations", href: "/investors" },
      { 
        label: "Disclosures Under Regulation 46 LODR", 
        href: "/investors/financials",
        dropdown: [
          { label: "Postal Ballot Notice", href: "/investors/postal-ballot-notice" },
          { label: "Annual Reports & Financials", href: "/investors/financials" },
          { label: "Investor's Information", href: "/investors/investors-information" },
          { label: "Archives", href: "/investors/archives" },
          { label: "Investors' Contact", href: "/investors/investors-contact" },
          { label: "Corporate Social Responsibility", href: "/investors/corporate-social-responsibility" },
          { label: "Shareholder's Information", href: "/investors/shareholders-information" },
          { label: "Policies", href: "/investors/policies" },
          { label: "Board of Directors Composition", href: "/investors/board-of-directors-composition" },
        ],
      },
      { label: "Secretarial compliance Report", href: "/investors/secretarial-compliance-report" },
      { label: "MOA and AOA", href: "/investors/moa-and-aoa" },
      { label: "Newspaper Add", href: "/investors/newspaper-add" },
      { label: "Audited Subsidiaries Financial", href: "/investors/audited-subsidiaries-financial" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [mobileNestedOpen, setMobileNestedOpen] = useState<string | null>(null);
  
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const nestedHoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle mouse enter for main dropdown
  const handleMouseEnter = (label: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setTimeout(() => {
      setOpenDropdown(label);
      setOpenNestedDropdown(null);
    }, 20);
  };

  // Handle mouse leave for main dropdown
  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setOpenNestedDropdown(null);
    }, 100);
  };

  // Handle mouse enter for nested dropdown
  const handleNestedMouseEnter = (label: string) => {
    if (nestedHoverTimeoutRef.current) {
      clearTimeout(nestedHoverTimeoutRef.current);
      nestedHoverTimeoutRef.current = null;
    }
    setTimeout(() => {
      setOpenNestedDropdown(label);
    }, 20);
  };

  // Handle mouse leave for nested dropdown
  const handleNestedMouseLeave = () => {
    nestedHoverTimeoutRef.current = setTimeout(() => {
      setOpenNestedDropdown(null);
    }, 100);
  };

  // Handle click on dropdown button
  const handleDropdownClick = (label: string) => {
    if (openDropdown === label) {
      setOpenDropdown(null);
      setOpenNestedDropdown(null);
    } else {
      setOpenDropdown(label);
      setOpenNestedDropdown(null);
    }
  };

  // Handle click on nested dropdown button
  const handleNestedDropdownClick = (label: string) => {
    if (openNestedDropdown === label) {
      setOpenNestedDropdown(null);
    } else {
      setOpenNestedDropdown(label);
    }
  };

  // Mobile dropdown toggle
  const toggleMobileDropdown = (label: string) => {
    if (mobileDropdownOpen === label) {
      setMobileDropdownOpen(null);
      setMobileNestedOpen(null);
    } else {
      setMobileDropdownOpen(label);
      setMobileNestedOpen(null);
    }
  };

  // Mobile nested dropdown toggle
  const toggleMobileNested = (label: string) => {
    if (mobileNestedOpen === label) {
      setMobileNestedOpen(null);
    } else {
      setMobileNestedOpen(label);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setOpenDropdown(null);
        setOpenNestedDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      if (nestedHoverTimeoutRef.current) clearTimeout(nestedHoverTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md">
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
                className="relative dropdown-container"
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
                onMouseLeave={() => link.dropdown && handleMouseLeave()}
              >
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownClick(link.label)}
                      className="flex items-center gap-1 px-4 py-2 text-[12px] uppercase tracking-[0.15em] text-white/80 hover:text-white transition-colors duration-200 font-light"
                    >
                      {link.label}
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {openDropdown === link.label && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-56 bg-[#0d0c09] border border-white/10 py-2 shadow-2xl rounded-sm z-50"
                        onMouseEnter={() => {
                          if (hoverTimeoutRef.current) {
                            clearTimeout(hoverTimeoutRef.current);
                            hoverTimeoutRef.current = null;
                          }
                        }}
                        onMouseLeave={handleMouseLeave}
                      >
                        {link.dropdown.map((item) => (
                          <div key={item.label} className="relative">
                            {item.dropdown ? (
                              <>
                                <button
                                  onClick={() => handleNestedDropdownClick(item.label)}
                                  onMouseEnter={() => handleNestedMouseEnter(item.label)}
                                  onMouseLeave={handleNestedMouseLeave}
                                  className="flex items-center justify-between w-full px-5 py-3 text-[11px] uppercase tracking-[0.12em] text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-150"
                                >
                                  {item.label}
                                  <ChevronDown size={14} className="rotate-[-90deg]" />
                                </button>

                                {/* Nested Dropdown Menu */}
                                {openNestedDropdown === item.label && (
                                  <div 
                                    className="absolute right-full top-0 w-56 bg-[#0d0c09] border border-white/10 py-2 shadow-2xl rounded-sm z-50"
                                    onMouseEnter={() => {
                                      if (nestedHoverTimeoutRef.current) {
                                        clearTimeout(nestedHoverTimeoutRef.current);
                                        nestedHoverTimeoutRef.current = null;
                                      }
                                    }}
                                    onMouseLeave={handleNestedMouseLeave}
                                  >
                                    {item.dropdown.map((subItem) => (
                                      <Link
                                        key={subItem.label}
                                        href={subItem.href}
                                        className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] text-white/70 hover:text-white hover:bg-white/5"
                                        onClick={() => {
                                          setOpenDropdown(null);
                                          setOpenNestedDropdown(null);
                                        }}
                                      >
                                        {subItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </>
                            ) : (
                              <Link
                                href={item.href}
                                className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] text-white/70 hover:text-white hover:bg-white/5"
                                onClick={() => {
                                  setOpenDropdown(null);
                                  setOpenNestedDropdown(null);
                                }}
                              >
                                {item.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-[12px] uppercase tracking-[0.15em] text-white/80 hover:text-white transition-colors duration-200 font-light"
                  >
                    {link.label}
                  </Link>
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
              <div key={link.label} className="flex flex-col">
                {/* Mobile Menu Item with dropdown */}
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(link.label)}
                      className="flex items-center justify-between px-8 py-5 text-xl font-light text-white hover:text-[#C9A96E] transition-colors"
                    >
                      {link.label}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          mobileDropdownOpen === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    
                    {/* Mobile Dropdown Items */}
                    {mobileDropdownOpen === link.label && (
                      <div className="bg-black/30 pl-8">
                        {link.dropdown.map((item) => (
                          <div key={item.label}>
                            {item.dropdown ? (
                              <>
                                <button
                                  onClick={() => toggleMobileNested(item.label)}
                                  className="flex items-center justify-between w-full px-8 py-4 text-lg font-light text-white/80 hover:text-[#C9A96E] transition-colors"
                                >
                                  {item.label}
                                  <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-200 ${
                                      mobileNestedOpen === item.label ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>
                                
                                {/* Mobile Nested Dropdown Items */}
                                {mobileNestedOpen === item.label && (
                                  <div className="bg-black/20 pl-8">
                                    {item.dropdown.map((subItem) => (
                                      <Link
                                        key={subItem.label}
                                        href={subItem.href}
                                        className="block px-8 py-3 text-base font-light text-white/70 hover:text-[#C9A96E] transition-colors"
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        {subItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </>
                            ) : (
                              <Link
                                href={item.href}
                                className="block px-8 py-4 text-lg font-light text-white/80 hover:text-[#C9A96E] transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {item.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="px-8 py-5 text-xl font-light text-white hover:text-[#C9A96E] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
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