"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, easeOut } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

export default function GovApprovals() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const t = translations[lang];

  useGSAP(
    () => {
      const heading = sectionRef.current?.querySelector("[data-heading]") ?? null;
      if (heading) gsap.from(heading, {
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
      id="gov"
      className="w-full py-24 lg:py-36 bg-[#0F2A1E]"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
        <div data-heading className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#52B788]">
            {t.govApprovals.label}
          </span>
          <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-white mt-3">
            {t.govApprovals.title}
          </h2>
          <p className="text-[#B7E4C7] mt-4 text-lg max-w-2xl">
            {t.govApprovals.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.govApprovals.states.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: easeOut }}
              className="rounded-2xl p-8 relative overflow-hidden cursor-default"
              style={{ background: "linear-gradient(135deg, #1a3d2b 0%, #0F2A1E 100%)" }}
            >
              {/* Gold top line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C9A84C]" />

              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#52B788]">
                  {a.badge}
                </span>
                <span className="text-xs text-[#6B7280]">{a.year}</span>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-white mb-6">
                {a.state}
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#0F2A1E]/60 rounded-xl p-4">
                  <p className="font-serif text-3xl font-bold text-[#C9A84C] leading-none">
                    {a.schools}
                  </p>
                  <p className="text-xs text-[#B7E4C7] mt-1">{a.schoolLabel}</p>
                </div>
                <div className="bg-[#0F2A1E]/60 rounded-xl p-4">
                  <p className="font-serif text-3xl font-bold text-[#52B788] leading-none">
                    {a.students}
                  </p>
                  <p className="text-xs text-[#B7E4C7] mt-1">{a.studentLabel}</p>
                </div>
              </div>

              <p className="text-[#B7E4C7] text-sm leading-relaxed">{a.detail}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-[#6B7280] text-sm">
          {t.govApprovals.disclaimer}
        </p>

        {/* Download official letters */}
        <div className="mt-12 border-t border-[#2D6A4F] pt-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#52B788] mb-5 text-center">
            {t.govApprovals.downloadLabel}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pune-zp-permission-letter.pdf"
              download="Pune-ZP-Permission-Letter.pdf"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[#1a3d2b] border border-[#2D6A4F] hover:border-[#C9A84C] hover:bg-[#1f4a33] transition-all group"
            >
              <svg className="w-5 h-5 text-[#C9A84C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div>
                <p className="text-white text-sm font-semibold group-hover:text-[#C9A84C] transition-colors">{t.govApprovals.puneZPName}</p>
                <p className="text-[#6B7280] text-xs">{t.govApprovals.puneZPDesc}</p>
              </div>
            </a>
            <a
              href="/school-permission-letter.pdf"
              download="School-Permission-Letter.pdf"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[#1a3d2b] border border-[#2D6A4F] hover:border-[#C9A84C] hover:bg-[#1f4a33] transition-all group"
            >
              <svg className="w-5 h-5 text-[#C9A84C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div>
                <p className="text-white text-sm font-semibold group-hover:text-[#C9A84C] transition-colors">{t.govApprovals.schoolLetterName}</p>
                <p className="text-[#6B7280] text-xs">{t.govApprovals.schoolLetterDesc}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
