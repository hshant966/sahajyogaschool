"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import type { Lang } from "@/lib/translations";

const navLinks = [
  { labelKey: "whatIs" as const, href: "#what-is" },
  { labelKey: "research" as const, href: "#research" },
  { labelKey: "benefits" as const, href: "#benefits" },
  { labelKey: "schools" as const, href: "#schools" },
  { labelKey: "contact" as const, href: "#contact" },
];

const liveLangs: { code: Lang; label: string; native: string }[] = [
  { code: "en", label: "English", native: "EN" },
  { code: "mr", label: "Marathi", native: "मराठी" },
  { code: "hi", label: "Hindi", native: "हिंदी" },
  { code: "bn", label: "Bengali", native: "বাংলা" },
  { code: "te", label: "Telugu", native: "తెలుగు" },
  { code: "ta", label: "Tamil", native: "தமிழ்" },
  { code: "ur", label: "Urdu", native: "اردو" },
  { code: "gu", label: "Gujarati", native: "ગુજરાતી" },
  { code: "kn", label: "Kannada", native: "ಕನ್ನಡ" },
  { code: "or", label: "Odia", native: "ଓଡ଼ିଆ" },
  { code: "ml", label: "Malayalam", native: "മലയാളം" },
  { code: "pa", label: "Punjabi", native: "ਪੰਜਾਬੀ" },
  { code: "as", label: "Assamese", native: "অসমীয়া" },
  { code: "mai", label: "Maithili", native: "मैथिली" },
  { code: "sa", label: "Sanskrit", native: "संस्कृतम्" },
  { code: "kok", label: "Konkani", native: "कोंकणी" },
  { code: "ne", label: "Nepali", native: "नेपाली" },
  { code: "sd", label: "Sindhi", native: "سنڌي" },
  { code: "doi", label: "Dogri", native: "डोगरी" },
  { code: "mni", label: "Manipuri", native: "মৈতৈলোন্" },
  { code: "sat", label: "Santali", native: "ᱥᱟᱱᱛᱟᱲᱤ" },
  { code: "ks", label: "Kashmiri", native: "كٲشُر" },
  { code: "brx", label: "Bodo", native: "बड़ो" }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang } = useLang();
  const modalRef = useRef<HTMLDivElement>(null);
  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLangOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [langOpen]);

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
            {/* Globe language button */}
            <button
              onClick={() => setLangOpen(true)}
              aria-label="Switch language"
              className="p-2 rounded-full hover:bg-[#E5E5E0]/60 transition-colors text-[#6B7280] hover:text-[#0F2A1E] flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                <path strokeWidth="1.5" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-wide">
                {liveLangs.find((l) => l.code === lang)?.native ?? "EN"}
              </span>
            </button>

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#0F2A1E] hover:bg-[#2D6A4F] transition-colors"
            >
              {t.cta.submit}
            </a>
          </div>

          {/* Mobile: globe + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setLangOpen(true)}
              aria-label="Switch language"
              className="p-2 text-[#6B7280]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                <path strokeWidth="1.5" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
              </svg>
            </button>
            <button
              className="p-2 text-[#0F2A1E]"
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

      {/* Language modal overlay */}
      {langOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Modal / bottom sheet */}
          <div
            ref={modalRef}
            className="relative w-full sm:w-[480px] bg-[#FAFAF7] rounded-t-3xl sm:rounded-2xl p-6 shadow-2xl border border-[#E5E5E0] max-h-[85vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-serif text-lg font-semibold text-[#0F2A1E]">
                Choose Language / भाषा निवडा / भाषा चुनें
              </h3>
              <button
                onClick={() => setLangOpen(false)}
                className="w-8 h-8 rounded-full bg-[#E5E5E0] flex items-center justify-center text-[#6B7280] hover:bg-[#d0d0ca] transition-colors text-sm"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Live languages */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {liveLangs.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setLangOpen(false); }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                    lang === l.code
                      ? "bg-[#C9A84C] text-[#0F2A1E]"
                      : "bg-white border border-[#E5E5E0] text-[#0F2A1E] hover:border-[#52B788]"
                  }`}
                >
                  <span>{l.label} ({l.native})</span>
                  {lang === l.code && (
                    <span className="text-xs font-bold text-[#0F2A1E]">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
