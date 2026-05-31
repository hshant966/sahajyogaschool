"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import IndiaMapToggle from "./IndiaMapToggle";

const navLinks = [
  { labelKey: "whatIs" as const, href: "#what-is" },
  { labelKey: "research" as const, href: "#research" },
  { labelKey: "benefits" as const, href: "#benefits" },
  { labelKey: "schools" as const, href: "#schools" },
  { labelKey: "contact" as const, href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useLang();
  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAFAF7]/90 backdrop-blur-md shadow-sm border-b border-[#E5E5E0]/60"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-full bg-[#0F2A1E] flex items-center justify-center group-hover:bg-[#2D6A4F] transition-colors">
              <div className="w-3 h-3 rounded-full bg-[#52B788]" />
            </div>
            <span className="font-serif text-base font-semibold text-[#0F2A1E]">
              Sahaja Yoga Science
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#6B7280] hover:text-[#0F2A1E] transition-colors font-medium"
              >
                {t.nav[link.labelKey]}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {/* Interactive SVG India Map selector */}
            <IndiaMapToggle />

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#0F2A1E] hover:bg-[#2D6A4F] transition-colors"
            >
              {t.cta.submit}
            </a>
          </div>

          {/* Mobile: Map Toggle + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <IndiaMapToggle />
            <button
              className="p-2 text-[#0F2A1E] cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <div className={`w-5 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#FAFAF7] border-t border-[#E5E5E0] px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#0F2A1E] font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav[link.labelKey]}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-3 rounded-full text-sm font-semibold text-white bg-[#0F2A1E] text-center"
              onClick={() => setMenuOpen(false)}
            >
              {t.cta.submit}
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
