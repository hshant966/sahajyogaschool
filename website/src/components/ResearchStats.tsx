"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, easeOut } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: "6",
    unit: "Weeks",
    description: "Same improvement in student focus as ADHD medication",
    citation: "King's College London, 2011",
    color: "#C9A84C",
  },
  {
    value: "50+",
    unit: "Studies",
    description: "Peer-reviewed research published in international journals",
    citation: "PubMed & NIH indexed",
    color: "#52B788",
  },
  {
    value: "39,603",
    unit: "Schools",
    description: "Approved by Telangana State Government, India",
    citation: "Govt. of Telangana, 2023",
    color: "#C9A84C",
  },
  {
    value: "120+",
    unit: "Countries",
    description: "Countries where Sahaja Yoga is practiced and studied",
    citation: "International Research",
    color: "#52B788",
  },
];

export default function ResearchStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const t = translations[lang];

  useGSAP(
    () => {
      const cards = sectionRef.current?.querySelectorAll("[data-stat]");
      if (!cards) return;

      gsap.from(cards, {
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="research"
      className="w-full bg-[#0F2A1E] py-24 lg:py-32"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#52B788]">
              {t.stats.label}
            </span>
            <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-white mt-3 leading-tight">
              {t.stats.heading}
            </h2>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[#B7E4C7] text-lg leading-relaxed">
              Independent research institutions across 6 countries have published peer-reviewed studies on the neurological and psychological effects of Sahaja Yoga meditation. The evidence is consistent and reproducible.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              data-stat
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: easeOut }}
              className="rounded-2xl p-7 flex flex-col gap-3 relative overflow-hidden cursor-default border border-[#2D6A4F] hover:border-[#C9A84C] transition-colors"
              style={{ background: "linear-gradient(135deg, #1a3d2b 0%, #0F2A1E 100%)" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, ${stat.color}, transparent)` }}
              />
              <div>
                <span
                  className="font-serif text-6xl lg:text-7xl font-bold leading-none"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </span>
                <span
                  className="font-serif text-xl lg:text-2xl ml-2"
                  style={{ color: stat.color, opacity: 0.7 }}
                >
                  {stat.unit}
                </span>
              </div>
              <p className="text-[#B7E4C7] text-sm leading-relaxed">{stat.description}</p>
              <p className="text-[#52B788] text-xs font-medium mt-auto">— {stat.citation}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-[#6B7280] text-sm">
          Research conducted at King's College London, Delhi University, AIIMS, University of Exeter, and institutions across Europe and Australia.
        </p>
      </div>
    </section>
  );
}
