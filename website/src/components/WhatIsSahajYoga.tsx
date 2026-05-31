"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, easeOut } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

const LOCALIZED_PILLARS: Record<string, {
  number: string;
  label: string;
  heading: string;
  body: string;
  accent: string;
}[]> = {
  en: [
    {
      number: "01",
      label: "Origin",
      heading: "Developed in 1970",
      body: "Created by Shri Mataji Nirmala Devi in Mumbai. A systematic method to achieve a verifiable neurological state called 'mental silence' — now backed by 50+ peer-reviewed studies.",
      accent: "#52B788",
    },
    {
      number: "02",
      label: "Science",
      heading: "Validated by research",
      body: "Brain and Behavior (2019): 4-week training produces measurable changes in executive-control brain regions. PLOS ONE (2020): Long-term practitioners show ~6.9% larger gray matter volume. 30+ PubMed-indexed studies.",
      accent: "#C9A84C",
    },
    {
      number: "03",
      label: "Schools",
      heading: "39,603 schools approved",
      body: "Telangana State Government approved the program in 39,603 schools. Haryana: 500+ schools. Kendriya Vidyalaya: All India approval. Independently verified government orders.",
      accent: "#52B788",
    },
  ],
  mr: [
    {
      number: "01",
      label: "उत्पत्ती",
      heading: "१९७० मध्ये विकसित",
      body: "मुंबईमध्ये श्री माताजी निर्मला देवी यांनी विकसित केले. 'मानसिक शांतता' (mental silence) ही पडताळणीयोग्य मज्जासंस्थेची (neurological) स्थिती साध्य करण्याची एक पद्धतशीर प्रणाली — आता ५० हून अधिक पीअर-रिव्ह्यू केलेल्या अभ्यासांद्वारे प्रमाणित.",
      accent: "#52B788",
    },
    {
      number: "02",
      label: "विज्ञान",
      heading: "संशोधनाद्वारे सिद्ध",
      body: "ब्रेन अँड बिहेवियर (२०१९): ४-आठवड्यांच्या प्रशिक्षणाने मेंदूच्या नियंत्रण क्षेत्रांमध्ये मोजता येण्याजोगे बदल होतात. PLOS ONE (२०२०): दीर्घकालीन ध्यान करणाऱ्यांमध्ये ग्रे मॅटरचे प्रमाण ~६.९% जास्त आढळले. ३०+ PubMed-निर्देशित अभ्यास.",
      accent: "#C9A84C",
    },
    {
      number: "03",
      label: "शाळा",
      heading: "३९,६०३ शाळांमध्ये मान्यता",
      body: "तेलंगणा सरकारने ३९,६०३ शाळांमध्ये या कार्यक्रमाला मान्यता दिली. हरियाणा: ५००+ शाळा. केंद्रीय विद्यालय: अखिल भारतीय मंजुरी. स्वतंत्रपणे पडताळलेले शासकीय आदेश.",
      accent: "#52B788",
    },
  ],
  hi: [
    {
      number: "01",
      label: "उत्पत्ति",
      heading: "१९७० में विकसित",
      body: "मुंबई में श्री माताजी निर्मला देवी द्वारा विकसित। 'मानसिक शांति' (विचारशून्य जागरूकता) नामक एक सत्यापन योग्य न्यूरोलॉजिकल स्थिति प्राप्त करने की एक व्यवस्थित विधि — जो अब ५० से अधिक वैज्ञानिक अध्ययनों द्वारा प्रमाणित है।",
      accent: "#52B788",
    },
    {
      number: "02",
      label: "विज्ञान",
      heading: "अनुसंधान द्वारा प्रमाणित",
      body: "ब्रेन एंड बिहेवियर (२०१९): ४-सप्ताह के प्रशिक्षण से मस्तिष्क के नियंत्रण क्षेत्रों में मापने योग्य परिवर्तन होते हैं। PLOS ONE (२०२०): दीर्घकालिक ध्यान अभ्यासियों में ग्रे मैटर का आयतन ~६.९% अधिक देखा गया। ३०+ PubMed-अनुक्रमित अध्ययन।",
      accent: "#C9A84C",
    },
    {
      number: "03",
      label: "स्कूल",
      heading: "३९,६०३ स्कूलों में स्वीकृत",
      body: "तेलंगाना सरकार द्वारा ३९,६०३ स्कूलों में इस कार्यक्रम को मंजूरी दी गई। हरियाणा: ५००+ स्कूल। केंद्रीय विद्यालय: अखिल भारतीय स्वीकृति। स्वतंत्र रूप से सत्यापित सरकारी आदेश।",
      accent: "#52B788",
    },
  ]
};

export default function WhatIsSahajYoga() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const t = translations[lang];
  const pillars = LOCALIZED_PILLARS[lang] || LOCALIZED_PILLARS["en"];

  useGSAP(
    () => {
      const heading = sectionRef.current?.querySelector("[data-heading]") ?? null;
      const items = sectionRef.current?.querySelectorAll("[data-pillar]");

      if (heading) {
        gsap.from(heading, {
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      if (items) {
        gsap.from(items, {
          scrollTrigger: { trigger: sectionRef.current, start: "top 60%", once: true },
          opacity: 0,
          y: 40,
          stagger: 0.15,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.2,
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="what-is"
      className="w-full py-24 lg:py-36 bg-white border-t border-[#E5E5E0]"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
        {/* Split header */}
        <div data-heading className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#52B788]">
              {t.whatIs.title}
            </span>
            <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-[#0F2A1E] mt-3 leading-tight">
              {t.whatIs.subtitle}
            </h2>
          </div>
          <div>
            <p className="text-[#6B7280] text-lg leading-relaxed">
              {t.whatIs.body1}
            </p>
            <p className="text-[#6B7280] text-sm leading-relaxed mt-4">
              {t.whatIs.body2}
            </p>
            <div className="mt-6 flex flex-wrap gap-6 items-center">
              <a
                href="#research"
                className="text-sm font-semibold text-[#52B788] hover:text-[#2D6A4F] transition-colors"
              >
                {t.whatIs.learnMore} →
              </a>
              <a
                href="#contact"
                className="px-4 py-2 rounded-full border border-[#0F2A1E] text-[#0F2A1E] text-xs font-medium hover:bg-[#0F2A1E] hover:text-white transition-colors"
              >
                {t.whatIs.watchVideo}
              </a>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              data-pillar
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: easeOut }}
              className="bg-[#FAFAF7] rounded-2xl p-8 border border-[#E5E5E0] hover:shadow-lg transition-shadow relative overflow-hidden cursor-default"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }}
              />
              <div className="flex items-start justify-between mb-6">
                <span className="font-serif text-5xl font-bold text-[#E5E5E0] leading-none">{p.number}</span>
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ color: p.accent, backgroundColor: `${p.accent}18` }}
                >
                  {p.label}
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#0F2A1E] mb-3">
                {p.heading}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
