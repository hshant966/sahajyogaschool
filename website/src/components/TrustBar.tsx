"use client";

import { useLang } from "@/lib/LanguageContext";
import "./trustbar.css";

const LOCALIZED_LABELS: Record<string, string> = {
  en: "Research Institutions",
  mr: "संशोधन संस्था",
  hi: "अनुसंधान संस्थान",
};

const LOCALIZED_INSTITUTIONS: Record<string, string[]> = {
  en: [
    "King's College London",
    "National Institutes of Health, USA",
    "University of Exeter, UK",
    "Delhi University",
    "Philadelphia University",
    "Washington University",
    "Belapur Medical Research Center, India",
  ],
  mr: [
    "किंग्ज कॉलेज लंडन",
    "नॅशनल इन्स्टिट्यूट्स ऑफ हेल्थ, अमेरिका",
    "युनिव्हर्सिटी ऑफ एक्सेटर, युनायटेड किंगडम",
    "दिल्ली विद्यापीठ",
    "फिलाडेल्फिया युनिव्हर्सिटी",
    "वाशिंग्टन युनिव्हर्सिटी",
    "बेलापूर मेडिकल रिसर्च सेंटर, भारत",
  ],
  hi: [
    "किंग्स कॉलेज लंदन",
    "नेशनल इंस्टीट्यूट्स ऑफ हेल्थ, अमेरिका",
    "यूनिवर्सिटी ऑफ एक्सेटर, यूके",
    "दिल्ली विश्वविद्यालय",
    "फिलाडेल्फिया विश्वविद्यालय",
    "वाशिंगटन विश्वविद्यालय",
    "बेलापुर मेडिकल रिसर्च सेंटर, भारत",
  ]
};

export default function TrustBar() {
  const { lang } = useLang();
  const label = LOCALIZED_LABELS[lang] || LOCALIZED_LABELS["en"];
  const institutions = LOCALIZED_INSTITUTIONS[lang] || LOCALIZED_INSTITUTIONS["en"];

  return (
    <section className="w-full bg-[#0F2A1E] py-8 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 flex flex-col gap-4">
        {/* Label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-[#B7E4C7]">
          {label}
        </p>

        {/* Scrolling Container */}
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-6 animate-scroll">
            {institutions.map((inst, idx) => (
              <div key={idx} className="flex items-center gap-6 flex-shrink-0">
                <p className="text-sm font-medium text-white whitespace-nowrap">
                  {inst}
                </p>
                {idx < institutions.length - 1 && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                )}
              </div>
            ))}

            {/* Duplicate for seamless scroll */}
            {institutions.map((inst, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-6 flex-shrink-0">
                <p className="text-sm font-medium text-white whitespace-nowrap">
                  {inst}
                </p>
                {idx < institutions.length - 1 && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
