"use client";

import { motion, easeOut } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function ForSchools() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="schools" className="w-full py-24 lg:py-36 bg-[#FAFAF7]">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#52B788]">
            {t.nav.schools}
          </span>
          <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-[#0F2A1E] mt-3 leading-tight max-w-3xl">
            {t.forSchools.title}
          </h2>
          <p className="text-[#6B7280] mt-4 text-lg max-w-2xl">
            {t.forSchools.subtitle}
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {t.forSchools.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2, ease: easeOut }}
              className="flex flex-col gap-5 p-8 rounded-2xl bg-white border border-[#E5E5E0] hover:border-[#52B788] hover:shadow-md transition-all cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0F2A1E] flex items-center justify-center">
                <span className="font-serif text-xl font-bold text-[#C9A84C]">
                  {step.number}
                </span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#0F2A1E] mb-2">
                  {step.title}
                </h4>
                <p className="text-[#6B7280] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="bg-[#0F2A1E] rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#52B788] to-[#C9A84C]" />
          
          <h3 className="font-serif text-3xl lg:text-4xl font-semibold text-white mb-3">
            {t.cta.title}
          </h3>
          <p className="text-[#B7E4C7] mb-8 text-lg max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-[#C9A84C] text-[#0F2A1E] font-semibold hover:bg-[#F0D98D] transition-colors flex items-center gap-2 group cursor-pointer"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://www.scribd.com/document/871535582/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border-2 border-[#2D6A4F] text-[#B7E4C7] font-semibold hover:border-[#52B788] hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-5 h-5" />
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
