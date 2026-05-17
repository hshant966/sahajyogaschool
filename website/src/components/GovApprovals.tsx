"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, easeOut } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const approvals = [
  {
    state: "Telangana",
    badge: "State Government",
    schools: "39,603",
    schoolLabel: "Schools",
    students: "61 Lakh",
    studentLabel: "Students",
    detail: "Including 12,722 private schools. Official order by Education Department.",
    year: "2023",
    flag: "🏛️",
  },
  {
    state: "Haryana",
    badge: "State Government",
    schools: "500+",
    schoolLabel: "Schools",
    students: "50,000",
    studentLabel: "Students",
    detail: "Ambala District implementation. Education Department order.",
    year: "2015",
    flag: "🏛️",
  },
  {
    state: "Kendriya Vidyalaya",
    badge: "Central Government",
    schools: "All India",
    schoolLabel: "Approval",
    students: "Central",
    studentLabel: "Schools",
    detail: "All states and union territories. Central Government school network.",
    year: "2022",
    flag: "🇮🇳",
  },
];

export default function GovApprovals() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
            Government Recognition
          </span>
          <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-white mt-3">
            Approved by Government of India
          </h2>
          <p className="text-[#B7E4C7] mt-4 text-lg max-w-2xl">
            State and central government bodies have independently reviewed and approved this program. This is not a pilot — it is in active deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {approvals.map((a, i) => (
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
          Additionally recognized by school boards in Maharashtra, Gujarat, and Karnataka.
        </p>
      </div>
    </section>
  );
}
