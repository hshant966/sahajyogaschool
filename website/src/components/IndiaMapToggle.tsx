"use client";

import { useState, useEffect, useRef } from "react";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import type { Lang } from "@/lib/translations";
import { Globe, X } from "lucide-react";

const LOCALIZED_MAP: Record<string, { title: string; subtitle: string; hoverHelp: string; selectTitle: string; selectDirect: string }> = {
  en: {
    title: "Regional Language Map",
    subtitle: "Click a state to select its language",
    hoverHelp: "Hover over states to view names",
    selectTitle: "Select Language for",
    selectDirect: "Or select language directly",
  },
  mr: {
    title: "प्रादेशिक भाषा नकाशा",
    subtitle: "भाषा निवडण्यासाठी राज्यावर क्लिक करा",
    hoverHelp: "नाव पाहण्यासाठी राज्यावर माउस न्या",
    selectTitle: "साठी भाषा निवडा -",
    selectDirect: "किंवा थेट भाषा निवडा",
  },
  hi: {
    title: "क्षेत्रीय भाषा मानचित्र",
    subtitle: "भाषा चुनने के लिए राज्य पर क्लिक करें",
    hoverHelp: "नाम देखने के लिए राज्यों पर माउस घुमाएँ",
    selectTitle: "के लिए भाषा चुनें -",
    selectDirect: "या सीधे भाषा चुनें",
  },
  gu: {
    title: "પ્રાદેશિક ભાષા નકશો",
    subtitle: "ભાષા પસંદ કરવા માટે રાજ્ય પર ક્લિક કરો",
    hoverHelp: "નામ જોવા માટે રાજ્ય પર માઉસ લાવો",
    selectTitle: "માટે ભાષા પસંદ કરો -",
    selectDirect: "અથવા સીધી ભાષા પસંદ કરો",
  },
  ta: {
    title: "வட்டார மொழி வரைபடம்",
    subtitle: "மொழியைத் தேர்ந்தெடுக்க ஒரு மாநிலத்தைக் கிளிக் செய்க",
    hoverHelp: "பெயர்களைக் காண மாநிலங்களின் மேல் நகர்த்தவும்",
    selectTitle: "இதற்கான மொழியைத் தேர்ந்தெடுக்கவும் -",
    selectDirect: "அல்லது மொழியை நேரடியாகத் தேர்ந்தெடுக்கவும்",
  },
};

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

interface StateOption {
  code: Lang;
  name: string;
  native: string;
}

interface StateData {
  name: string;
  lang?: Lang;
  options?: StateOption[];
}

const STATE_LANGS: Record<string, StateData> = {
  mh: { name: "Maharashtra", lang: "mr" },
  gj: { name: "Gujarat", lang: "gu" },
  ka: { name: "Karnataka", lang: "kn" },
  kl: { name: "Kerala", lang: "ml" },
  tn: { name: "Tamil Nadu", lang: "ta" },
  ap: { name: "Andhra Pradesh", lang: "te" },
  tg: {
    name: "Telangana",
    options: [
      { code: "te", name: "Telugu", native: "తెలుగు" },
      { code: "ur", name: "Urdu", native: "اردو" }
    ]
  },
  or: { name: "Odisha", lang: "or" },
  wb: { name: "West Bengal", lang: "bn" },
  as: {
    name: "Assam",
    options: [
      { code: "as", name: "Assamese", native: "অসমীয়া" },
      { code: "brx", name: "Bodo", native: "बड़ो" }
    ]
  },
  pb: { name: "Punjab", lang: "pa" },
  hp: { name: "Himachal Pradesh", lang: "hi" },
  ut: { name: "Uttarakhand", lang: "hi" },
  hr: { name: "Haryana", lang: "hi" },
  rj: { name: "Rajasthan", lang: "hi" },
  mp: { name: "Madhya Pradesh", lang: "hi" },
  up: { name: "Uttar Pradesh", lang: "hi" },
  ct: { name: "Chhattisgarh", lang: "hi" },
  dl: { name: "Delhi", lang: "hi" },
  br: {
    name: "Bihar",
    options: [
      { code: "hi", name: "Hindi", native: "हिंदी" },
      { code: "mai", name: "Maithili", native: "मैथिली" }
    ]
  },
  jh: {
    name: "Jharkhand",
    options: [
      { code: "hi", name: "Hindi", native: "हिंदी" },
      { code: "sat", name: "Santali", native: "ᱥᱟᱱᱛᱟᱲᱤ" }
    ]
  },
  jk: {
    name: "Jammu & Kashmir",
    options: [
      { code: "ks", name: "Kashmiri", native: "كٲشُر" },
      { code: "doi", name: "Dogri", native: "डोगरी" },
      { code: "ur", name: "Urdu", native: "اردو" },
      { code: "hi", name: "Hindi", native: "हिंदी" }
    ]
  },
  mn: {
    name: "Manipur",
    options: [
      { code: "mni", name: "Manipuri", native: "মৈতৈলোন্" },
      { code: "en", name: "English", native: "EN" }
    ]
  },
  ga: { name: "Goa", lang: "kok" },
  sk: { name: "Sikkim", lang: "ne" }
};

// Map languages to their main highlighting state IDs for visual feedback
const LANG_TO_STATE: Record<string, string> = {
  mr: "mh",
  gu: "gj",
  kn: "ka",
  ml: "kl",
  ta: "tn",
  te: "ap",
  or: "or",
  bn: "wb",
  as: "as",
  pa: "pb",
  hi: "up", // Highlight UP for generic Hindi
  kok: "ga",
  ne: "sk",
  mni: "mn",
};

export default function IndiaMapToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeState, setActiveState] = useState<{ id: string; name: string; options?: StateOption[] } | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const { lang, setLang } = useLang();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const t = translations[lang];
  const mapLabels = LOCALIZED_MAP[lang] || LOCALIZED_MAP["en"];

  // Disable scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Load SVG and attach listeners dynamically
  useEffect(() => {
    if (!isOpen || !mapContainerRef.current) return;

    fetch("/india-map.svg")
      .then((res) => res.text())
      .then((svgText) => {
        const container = mapContainerRef.current;
        if (!container) return;
        
        container.innerHTML = svgText;
        const svg = container.querySelector("svg");
        if (!svg) return;

        svg.setAttribute("class", "w-full h-auto max-h-[50vh] md:max-h-[60vh] select-none object-contain");
        
        const paths = svg.querySelectorAll("path");
        paths.forEach((path) => {
          const id = path.getAttribute("id") || "";
          const name = path.getAttribute("name") || "";

          // Styling
          path.style.cursor = "pointer";
          path.style.transition = "fill 0.2s ease, stroke-width 0.2s ease";
          path.style.stroke = "#113A24"; // Forest green border
          path.style.strokeWidth = "1.5";

          // Initial fill colors
          const currentHighlightState = LANG_TO_STATE[lang];
          const isSelected = id === currentHighlightState || (lang === "hi" && ["mp", "hp", "ut", "hr", "rj", "ct", "dl", "br", "jh"].includes(id));
          
          if (isSelected) {
            path.style.fill = "#C9A84C"; // Gold for selected state
          } else if (STATE_LANGS[id]) {
            path.style.fill = "#164A2F"; // Dark forest green for active regions
          } else {
            path.style.fill = "#0E2F1E"; // Very dark green for inactive regions (e.g. UTs / default English)
          }

          // Hover handler
          path.addEventListener("mouseenter", () => {
            setHoveredState(name);
            path.style.strokeWidth = "2.5";
            path.style.stroke = "#52B788";
            if (!isSelected) {
              path.style.fill = "#247047"; // Sage highlight
            }
          });

          path.addEventListener("mouseleave", () => {
            setHoveredState(null);
            path.style.strokeWidth = "1.5";
            path.style.stroke = "#113A24";
            if (!isSelected) {
              if (STATE_LANGS[id]) {
                path.style.fill = "#164A2F";
              } else {
                path.style.fill = "#0E2F1E";
              }
            } else {
              path.style.fill = "#C9A84C";
            }
          });

          // Click handler
          path.addEventListener("click", (e) => {
            const data = STATE_LANGS[id];
            if (!data) {
              // Fallback default: English
              setLang("en");
              setIsOpen(false);
              return;
            }

            if (data.options) {
              // Open state language picker popover
              setActiveState({
                id,
                name: data.name,
                options: data.options,
              });
            } else if (data.lang) {
              setLang(data.lang);
              setIsOpen(false);
            }
          });
        });
      })
      .catch((err) => console.error("Error loading India map SVG:", err));
  }, [isOpen, lang, setLang]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setActiveState(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const currentLangNative = liveLangs.find((l) => l.code === lang)?.native ?? "EN";

  return (
    <>
      {/* Apple-style Navigation Pill */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-full border border-[#E5E5E0] bg-white/70 backdrop-blur-sm shadow-sm hover:border-[#52B788] hover:bg-white transition-all flex items-center gap-2 group cursor-pointer text-[#0F2A1E]"
        aria-label="Select website language"
      >
        <Globe className="w-4 h-4 text-[#52B788] group-hover:rotate-12 transition-transform" />
        <span className="text-xs font-semibold tracking-wide uppercase">
          {currentLangNative}
        </span>
      </button>

      {/* Full screen Map Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0F2A1E]/95 backdrop-blur-md overflow-y-auto">
          <div className="w-full min-h-screen flex flex-col items-center p-6 relative max-w-5xl mx-auto">
            {/* Top Info Bar */}
            <div className="w-full flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#52B788] flex items-center justify-center">
                  <Globe className="w-4 h-4 text-[#0F2A1E]" />
                </div>
                <div>
                  <h3 className="font-serif text-base md:text-lg font-semibold text-white leading-tight">
                    {mapLabels.title}
                  </h3>
                  <p className="text-xs text-[#B7E4C7]/80">
                    {mapLabels.subtitle}
                  </p>
                </div>
              </div>
              
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center text-white cursor-pointer flex-shrink-0"
                aria-label="Close language selector"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Inner Window */}
            <div
              ref={modalRef}
              className="w-full flex-1 flex flex-col items-center justify-center relative"
            >
              {/* Quick State/Language Selector Dropdown (Optimized for mobile tap targets) */}
              <div className="w-full max-w-xs mb-6 px-4 z-20">
                <label htmlFor="mobile-lang-select" className="block text-xs font-semibold text-[#B7E4C7]/80 mb-2 text-center">
                  {mapLabels.selectDirect}
                </label>
                <div className="relative">
                  <select
                    id="mobile-lang-select"
                    value={lang}
                    onChange={(e) => {
                      setLang(e.target.value as Lang);
                      setIsOpen(false);
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-[#164A2F]/80 border border-[#2D6A4F] text-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#52B788] focus:border-transparent transition-all cursor-pointer text-center"
                  >
                    {liveLangs.map((l) => (
                      <option key={l.code} value={l.code} className="text-[#0F2A1E] bg-[#FAFAF7]">
                        {l.label} ({l.native})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Hovered State Tooltip indicator */}
              <div className="h-8 mb-4 text-center">
                {hoveredState ? (
                  <div className="px-4 py-1 rounded-full bg-[#164A2F] border border-[#2D6A4F] text-xs font-semibold text-[#B7E4C7] shadow-sm animate-fade-in">
                    {hoveredState}
                  </div>
                ) : (
                  <div className="text-xs text-white/50">
                    {mapLabels.hoverHelp}
                  </div>
                )}
              </div>

              {/* SVG Interactive Map Container */}
              <div
                ref={mapContainerRef}
                className="w-full max-w-[480px] md:max-w-2xl flex items-center justify-center relative select-none px-2 mx-auto"
                style={{ minHeight: "35vh" }}
              />

            {/* Bottom floating pills for non-geographic / global languages */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 max-w-lg">
              {/* Sanskrit, Sindhi & English defaults */}
              <button
                onClick={() => {
                  setLang("sa");
                  setIsOpen(false);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                  lang === "sa"
                    ? "bg-[#C9A84C] text-[#0F2A1E] border-[#C9A84C]"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40"
                }`}
              >
                Sanskrit (संस्कृतम्)
              </button>
              <button
                onClick={() => {
                  setLang("sd");
                  setIsOpen(false);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                  lang === "sd"
                    ? "bg-[#C9A84C] text-[#0F2A1E] border-[#C9A84C]"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40"
                }`}
              >
                Sindhi (سنڌي)
              </button>
              <button
                onClick={() => {
                  setLang("en");
                  setIsOpen(false);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                  lang === "en"
                    ? "bg-[#C9A84C] text-[#0F2A1E] border-[#C9A84C]"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40"
                }`}
              >
                English (Global)
              </button>
            </div>
          </div>

          {/* Popover overlay modal for multi-language states */}
          {activeState && (
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
              <div className="bg-[#FAFAF7] text-[#0F2A1E] rounded-2xl p-6 w-full max-w-sm border border-[#E5E5E0] shadow-2xl animate-scale-up">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#E5E5E0]">
                  <h4 className="font-serif font-semibold text-base">
                    {mapLabels.selectTitle} {activeState.name}
                  </h4>
                  <button
                    onClick={() => setActiveState(null)}
                    className="p-1 hover:bg-[#E5E5E0] rounded-full transition-colors cursor-pointer text-[#6B7280]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex flex-col gap-2">
                  {activeState.options?.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => {
                        setLang(opt.code);
                        setActiveState(null);
                        setIsOpen(false);
                      }}
                      className={`w-full px-4 py-3 rounded-xl text-left text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                        lang === opt.code
                          ? "bg-[#C9A84C] text-[#0F2A1E]"
                          : "bg-white border border-[#E5E5E0] text-[#0F2A1E] hover:border-[#52B788] hover:bg-[#FAFAF7]"
                      }`}
                    >
                      <span>{opt.name}</span>
                      <span className="text-xs opacity-85 font-normal">({opt.native})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )}
  </>
);
}
