"use client";

import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const footerLinks = [
  { labelKey: "research" as const, href: "#research" },
  { labelKey: "benefits" as const, href: "#benefits" },
  { labelKey: "schools" as const, href: "#schools" },
  { labelKey: "contact" as const, href: "#contact" },
];

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
  ],
  gu: [
    "કિંગ્સ કોલેજ લંડન",
    "નેશનલ ઇન્સ્ટિટ્યુટ્સ ઓફ હેલ્થ, અમેરિકા",
    "યુનિવર્સિટી ઓફ એક્સેટર, યુકે",
    "દિલ્હી યુનિવર્સિટી",
    "ફિલાડેલ્ફિયા યુનિવર્સિટી",
    "વોશિંગ્ટન યુનિવર્સિટી",
    "બેलापूर મેડિકલ રિસર્ચ સેન્ટર, ભારત",
  ],
  ta: [
    "கிங்ஸ் கல்லூரி லண்டன்",
    "தேசிய சுகாதார நிறுவனம், அமெரிக்கா",
    "எக்ஸிடெர் பல்கலைக்கழகம், யுகே",
    "டெல்லி பல்கலைக்கழகம்",
    "பிலடெல்பியா பல்கலைக்கழகம்",
    "வாஷிங்டன் பல்கலைக்கழகம்",
    "பெலாப்பூர் மருத்துவ ஆராய்ச்சி மையம், இந்தியா",
  ]
};

const LOCALIZED_LABELS: Record<string, { nav: string; inst: string; free: string; noRel: string; govt: string }> = {
  en: { nav: "Navigation", inst: "Research Institutions", free: "100% Free", noRel: "Non-Religious", govt: "Govt. Approved" },
  mr: { nav: "नेव्हिगेशन", inst: "संशोधन संस्था", free: "१००% मोफत", noRel: "धर्मनिरपेक्ष", govt: "शासन मान्यताप्राप्त" },
  hi: { nav: "नेविगेशन", inst: "अनुसंधान संस्थान", free: "१००% निःशुल्क", noRel: "धर्मनिरपेक्ष", govt: "शासकीय स्वीकृत" },
  gu: { nav: "નેવિગેશન", inst: "સંશોધન સંસ્થાઓ", free: "૧૦૦% મફત", noRel: "બિન-ધાર્મિક", govt: "સરકારી મંજૂર" },
  ta: { nav: "வழிசெலுத்தல்", inst: "ஆராய்ச்சி நிறுவனங்கள்", free: "100% இலவசம்", noRel: "மதசார்பற்றது", govt: "அரசு அங்கீகாரம் பெற்றது" }
};

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang];
  const labels = LOCALIZED_LABELS[lang] || LOCALIZED_LABELS["en"];
  const institutions = LOCALIZED_INSTITUTIONS[lang] || LOCALIZED_INSTITUTIONS["en"];

  return (
    <footer className="w-full bg-[#0F2A1E] text-white">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-[#2D6A4F]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-full bg-[#2D6A4F] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#52B788]" />
              </div>
              <span className="font-serif text-base font-semibold text-white">
                Sahaja Yoga Science
              </span>
            </div>
            <p className="text-[#B7E4C7] text-sm leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[labels.free, labels.noRel, labels.govt].map((b) => (
                <span key={b} className="text-xs px-3 py-1 rounded-full bg-[#1a3d2b] text-[#B7E4C7] border border-[#2D6A4F]">
                  {b}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="tel:18002700800"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#52B788] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
                <span>Helpline: 1800-2700-800</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-base font-semibold mb-5 text-white">{labels.nav}</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[#B7E4C7] hover:text-white transition-colors text-sm">
                    {t.nav[link.labelKey]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Institutions */}
          <div>
            <h3 className="font-serif text-base font-semibold mb-5 text-white">{labels.inst}</h3>
            <ul className="space-y-2">
              {institutions.map((inst) => (
                <li key={inst} className="text-[#B7E4C7] text-sm flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#C9A84C] flex-shrink-0" />
                  {inst}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7280] text-sm">
            © {new Date().getFullYear()} Sahaja Yoga Science. Research compiled for educational purposes. {/* rebuild trigger */}
          </p>
          <p className="text-[#6B7280] text-xs">
            All research citations available upon request.
          </p>
        </div>
      </div>
    </footer>
  );
}
