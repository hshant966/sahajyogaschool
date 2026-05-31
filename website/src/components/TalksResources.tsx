"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, easeOut } from "framer-motion";
import { Play, BookOpen, GraduationCap } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

export default function TalksResources() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const t = translations[lang];

  useGSAP(
    () => {
      gsap.from(sectionRef.current?.querySelectorAll("[data-row]") ?? [], {
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
        opacity: 0,
        y: 20,
        stagger: 0.06,
        duration: 0.5,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  const icons = [Play, BookOpen, GraduationCap];

  return (
    <section ref={sectionRef} className="w-full py-24 lg:py-32 bg-[#FAFAF7] border-t border-[#E5E5E0]">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#52B788]">
            {t.nav.schools}
          </span>
          <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-[#0F2A1E] mt-3">
            {t.talksResources.title}
          </h2>
          <p className="text-[#6B7280] mt-4 text-lg max-w-2xl">
            {t.talksResources.subtitle}
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.talksResources.categories.map((cat, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                data-row
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: easeOut } }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: easeOut }}
                className="bg-white rounded-2xl p-8 border border-[#E5E5E0] hover:shadow-md transition-shadow relative overflow-hidden group cursor-default"
              >
                {/* Accent stripe */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#52B788]/40 group-hover:bg-[#52B788] transition-colors" />

                <div className="w-12 h-12 rounded-full bg-[#FAFAF7] flex items-center justify-center text-[#52B788] mb-6">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-2xl font-semibold text-[#0F2A1E] mb-4 group-hover:text-[#2D6A4F] transition-colors">
                  {cat.title}
                </h3>

                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {cat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
