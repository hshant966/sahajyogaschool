"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, easeOut } from "framer-motion";
import { Brain, Zap, Shield, Moon, CheckCircle, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: "focus",
    title: "Better Focus & Attention",
    description: "EEG studies confirm measurable improvement in theta wave activity — the neural signature of sustained attention — in children after 6 weeks of practice.",
    icon: Brain,
    span: "lg:col-span-2",
    bg: "bg-[#0F2A1E]",
    textColor: "text-white",
    descColor: "text-[#B7E4C7]",
    iconColor: "text-[#52B788]",
    badge: "King's College London",
  },
  {
    id: "anxiety",
    title: "19.78%",
    subtitle: "Exam Anxiety Reduced",
    description: "Statistically significant drop in academic stress within 6 weeks.",
    icon: Zap,
    span: "lg:col-span-1",
    bg: "bg-[#C9A84C]",
    textColor: "text-[#0F2A1E]",
    descColor: "text-[#5C4810]",
    iconColor: "text-[#0F2A1E]",
    isStat: true,
  },
  {
    id: "emotional",
    title: "Emotional Stability",
    description: "Amygdala activity — the brain's fear and anger center — measurably reduced. Students show better conflict resolution.",
    icon: Shield,
    span: "lg:col-span-1",
    bg: "bg-white",
    textColor: "text-[#0F2A1E]",
    descColor: "text-[#6B7280]",
    iconColor: "text-[#52B788]",
    badge: "AIIMS Research",
  },
  {
    id: "sleep",
    title: "Better Sleep",
    description: "Increased melatonin and serotonin production. Students fall asleep faster and wake more rested.",
    icon: Moon,
    span: "lg:col-span-1",
    bg: "bg-[#F2F2ED]",
    textColor: "text-[#0F2A1E]",
    descColor: "text-[#6B7280]",
    iconColor: "text-[#52B788]",
  },
  {
    id: "free",
    title: "Zero Cost",
    subtitle: "Always Free",
    description: "Volunteer instructors. No equipment. No subscription. No catch.",
    icon: CheckCircle,
    span: "lg:col-span-1",
    bg: "bg-[#2D6A4F]",
    textColor: "text-white",
    descColor: "text-[#B7E4C7]",
    iconColor: "text-[#52B788]",
    isStat: true,
  },
  {
    id: "adhd",
    title: "Equivalent to ADHD Medication",
    description: "Same improvement in children's attention as pharmaceutical ADHD treatment — with zero side effects and no dependency risk.",
    icon: Award,
    span: "lg:col-span-2",
    bg: "bg-gradient-to-br from-[#1a3d2b] to-[#0F2A1E]",
    textColor: "text-white",
    descColor: "text-[#B7E4C7]",
    iconColor: "text-[#C9A84C]",
    badge: "Published Research",
  },
];

export default function StudentBenefits() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
            Scientific Evidence
          </span>
          <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-[#0F2A1E] mt-3">
            What changes in 6 weeks
          </h2>
          <p className="text-[#6B7280] mt-4 text-lg max-w-xl">
            Peer-reviewed outcomes. Measurable in real classrooms. Reproducible across cultures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: easeOut } }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: easeOut }}
                className={`${card.span} rounded-2xl p-7 flex flex-col gap-4 cursor-default ${card.bg} relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow`}
              >
                {/* Top accent line */}
                {(card.bg === "bg-white" || card.bg === "bg-[#F2F2ED]") && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#52B788] to-[#2D6A4F]" />
                )}

                <div className={`${card.iconColor}`}>
                  <Icon className="w-7 h-7" />
                </div>

                {card.isStat ? (
                  <div>
                    <p className={`font-serif text-5xl font-bold ${card.textColor} leading-none`}>
                      {card.title}
                    </p>
                    <p className={`font-serif text-xl font-semibold ${card.textColor} mt-1`}>
                      {card.subtitle}
                    </p>
                  </div>
                ) : (
                  <h3 className={`font-serif text-xl lg:text-2xl font-semibold ${card.textColor} leading-tight`}>
                    {card.title}
                  </h3>
                )}

                <p className={`text-sm leading-relaxed ${card.descColor} flex-1`}>
                  {card.description}
                </p>

                {card.badge && (
                  <span className={`text-xs font-medium px-3 py-1 rounded-full w-fit ${
                    card.bg === "bg-[#0F2A1E]" || card.bg.includes("1a3d2b")
                      ? "bg-[#2D6A4F] text-[#B7E4C7]"
                      : "bg-[#F2F2ED] text-[#0F2A1E]"
                  }`}>
                    — {card.badge}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
