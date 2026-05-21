"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, easeOut } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
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
    body: "EEG and fMRI studies at King's College London confirm measurable brain changes. Theta wave activity increases. Cortisol drops. Prefrontal activation strengthens. These are not anecdotes.",
    accent: "#C9A84C",
  },
  {
    number: "03",
    label: "Schools",
    heading: "39,603 schools approved",
    body: "Telangana State Government approved the program in 39,603 schools. Haryana: 500+ schools. Kendriya Vidyalaya: All India approval. Independently verified government orders.",
    accent: "#52B788",
  },
];

export default function WhatIsSahajYoga() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const t = translations[lang];

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
      className="w-full py-24 lg:py-36 bg-white border-t border-[#E5E5E0]"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
        {/* Split header */}
        <div data-heading className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#52B788]">
              {t.whatIs.label}
            </span>
            <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-[#0F2A1E] mt-3 leading-tight">
              {t.whatIs.headline1}
              <br />
              <span className="text-[#52B788]">{t.whatIs.headline2}</span>
            </h2>
          </div>
          <div>
            <p className="text-[#6B7280] text-lg leading-relaxed">
              {t.whatIs.sub}
            </p>
            <div className="mt-6 flex gap-6">
              <div>
                <p className="font-serif text-4xl font-bold text-[#C9A84C]">50+</p>
                <p className="text-xs text-[#9CA3AF] uppercase tracking-wide mt-1">Peer-reviewed studies</p>
              </div>
              <div className="w-px bg-[#E5E5E0]" />
              <div>
                <p className="font-serif text-4xl font-bold text-[#52B788]">6</p>
                <p className="text-xs text-[#9CA3AF] uppercase tracking-wide mt-1">Countries researched</p>
              </div>
              <div className="w-px bg-[#E5E5E0]" />
              <div>
                <p className="font-serif text-4xl font-bold text-[#0F2A1E]">1970</p>
                <p className="text-xs text-[#9CA3AF] uppercase tracking-wide mt-1">Year founded</p>
              </div>
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

        {/* Pull quote */}
        <div className="mt-20 py-12 border-y border-[#E5E5E0] text-center">
          <p className="font-serif text-3xl lg:text-4xl text-[#0F2A1E] max-w-3xl mx-auto leading-snug italic">
            {t.whatIs.quote}{" "}
            <span className="text-[#C9A84C]">{t.whatIs.quoteAccent}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
