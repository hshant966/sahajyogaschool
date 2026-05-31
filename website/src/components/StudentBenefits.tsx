"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, easeOut } from "framer-motion";
import { Brain, Zap, Shield } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

export default function StudentBenefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const t = translations[lang];

  useGSAP(
    () => {
      const header = sectionRef.current?.querySelector("[data-header]") ?? null;
      if (!header) return;
      gsap.from(header, {
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%", once: true },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="w-full py-24 lg:py-36 bg-[#FAFAF7]"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
        <div data-header className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#52B788]">
            {t.stats.title}
          </span>
          <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-[#0F2A1E] mt-3">
            {t.studentBenefits.title}
          </h2>
          <p className="text-[#6B7280] mt-4 text-lg max-w-xl">
            {t.studentBenefits.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.studentBenefits.cards.map((card, i) => {
            const icons = [Brain, Zap, Shield];
            const Icon = icons[i % icons.length];
            const bgs = ["bg-[#0F2A1E]", "bg-[#C9A84C]", "bg-white"];
            const textColors = ["text-white", "text-[#0F2A1E]", "text-[#0F2A1E]"];
            const descColors = ["text-[#B7E4C7]", "text-[#5C4810]", "text-[#6B7280]"];
            const iconColors = ["text-[#52B788]", "text-[#0F2A1E]", "text-[#52B788]"];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: easeOut } }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: easeOut }}
                className={`rounded-2xl p-8 flex flex-col gap-4 cursor-default ${bgs[i]} relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow`}
              >
                {/* Top accent line */}
                {bgs[i] === "bg-white" && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#52B788] to-[#2D6A4F]" />
                )}

                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold uppercase tracking-widest ${
                    i === 0 ? "text-[#52B788]" : i === 1 ? "text-[#0F2A1E]/80" : "text-[#52B788]"
                  }`}>
                    {card.label}
                  </span>
                  <span className={`text-sm font-bold font-serif ${i === 0 ? "text-white/50" : "text-black/35"}`}>
                    {card.number}
                  </span>
                </div>

                <div className={`${iconColors[i]}`}>
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className={`font-serif text-2xl font-semibold ${textColors[i]} leading-tight`}>
                  {card.title}
                </h3>

                <p className={`text-sm leading-relaxed ${descColors[i]} flex-1`}>
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
