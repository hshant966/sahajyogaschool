"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Heart, Brain, Moon } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

interface ChemicalFact {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function BrainScience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const brainSvgRef = useRef<SVGSVGElement>(null);
  const frontLobeRef = useRef<SVGCircleElement>(null);
  const limbicRef = useRef<SVGCircleElement>(null);
  const { lang } = useLang();
  const t = translations[lang];

  const chemicalFacts: ChemicalFact[] = [
    {
      icon: <Heart className="w-5 h-5 text-[#52B788]" />,
      title: t.brainScience.chemicals.endorphinsTitle,
      description: t.brainScience.chemicals.endorphinsDesc,
    },
    {
      icon: <Zap className="w-5 h-5 text-[#C9A84C]" />,
      title: t.brainScience.chemicals.dopamineTitle,
      description: t.brainScience.chemicals.dopamineDesc,
    },
    {
      icon: <Brain className="w-5 h-5 text-[#52B788]" />,
      title: t.brainScience.chemicals.serotoninTitle,
      description: t.brainScience.chemicals.serotoninDesc,
    },
    {
      icon: <Moon className="w-5 h-5 text-[#C9A84C]" />,
      title: t.brainScience.chemicals.melatoninTitle,
      description: t.brainScience.chemicals.melatoninDesc,
    },
  ];

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const leftSection = containerRef.current.querySelector("[data-left]");
      const rightSection = containerRef.current.querySelector("[data-right]");

      gsap.from(leftSection, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          once: true,
        },
        opacity: 0,
        x: -40,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(rightSection, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          once: true,
        },
        opacity: 0,
        x: 40,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
      });

      // Facts fade in
      const facts = rightSection?.querySelectorAll("[data-fact]");
      if (facts) {
        gsap.from(facts, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            once: true,
          },
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.3,
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="w-full py-20 lg:py-32 bg-[#FAFAF7]"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-center">
          {/* LEFT: Brain Image */}
          <div data-left className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/brain-science.png"
                alt="Brain diagram showing prefrontal cortex (green) and amygdala (blue) highlighted"
                width={600}
                height={450}
                className="w-full h-auto"
              />
              {/* Overlay labels */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                <p className="text-xs font-semibold text-[#52B788]">{t.brainScience.prefrontalCortex}</p>
                <p className="text-xs text-[#6B7280]">{t.brainScience.prefrontalCortexDesc}</p>
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                <p className="text-xs font-semibold text-[#C9A84C]">{t.brainScience.amygdala}</p>
                <p className="text-xs text-[#6B7280]">{t.brainScience.amygdalaDesc}</p>
              </div>
            </div>
            {/* Keep svg ref for TS compatibility - hidden */}
            <svg ref={brainSvgRef} className="hidden">
              <circle ref={frontLobeRef} /><circle ref={limbicRef} />
              {/* Background gradient */}
              <defs>
                <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#B7E4C7" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#B7E4C7" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Brain outline - Left hemisphere */}
              <path
                d="M 120 100 Q 100 150 110 200 Q 120 250 140 300 Q 150 350 180 380 L 180 120 Z"
                fill="none"
                stroke="#2D6A4F"
                strokeWidth="2"
                opacity="0.3"
              />

              {/* Brain outline - Right hemisphere */}
              <path
                d="M 280 100 Q 300 150 290 200 Q 280 250 260 300 Q 250 350 220 380 L 220 120 Z"
                fill="none"
                stroke="#2D6A4F"
                strokeWidth="2"
                opacity="0.3"
              />

              {/* Corpus callosum */}
              <ellipse
                cx="200"
                cy="160"
                rx="45"
                ry="20"
                fill="none"
                stroke="#52B788"
                strokeWidth="2"
                opacity="0.4"
              />

              {/* Frontal Lobe - Left side glow (accent green) */}
              <circle
                ref={frontLobeRef}
                cx="160"
                cy="140"
                r="45"
                fill="#52B788"
                opacity="0.3"
              />
              <circle
                cx="160"
                cy="140"
                r="45"
                fill="none"
                stroke="#52B788"
                strokeWidth="2"
              />

              {/* Limbic System - Center glow (gold) */}
              <circle
                ref={limbicRef}
                cx="200"
                cy="220"
                r="52"
                fill="#C9A84C"
                opacity="0.25"
              />
              <circle
                cx="200"
                cy="220"
                r="52"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="2"
              />

              {/* Callout Lines and Labels */}
              {/* Frontal Lobe label */}
              <line x1="160" y1="95" x2="160" y2="60" stroke="#52B788" strokeWidth="1" />
              <text
                x="170"
                y="65"
                fontSize="12"
                fill="#52B788"
                fontWeight="600"
              >
                {t.brainScience.frontalLobe}
              </text>
              <text
                x="170"
                y="80"
                fontSize="11"
                fill="#6B7280"
                fontWeight="400"
              >
                {t.brainScience.frontalLobeDesc}
              </text>

              {/* Limbic System label */}
              <line x1="240" y1="220" x2="300" y2="220" stroke="#C9A84C" strokeWidth="1" />
              <text
                x="310"
                y="225"
                fontSize="12"
                fill="#C9A84C"
                fontWeight="600"
              >
                {t.brainScience.limbicSystem}
              </text>
              <text
                x="310"
                y="240"
                fontSize="11"
                fill="#6B7280"
                fontWeight="400"
              >
                {t.brainScience.limbicSystemDesc}
              </text>

              {/* Mental Clutter Reduction label */}
              <text x="200" y="420" fontSize="13" fill="#1C1917" fontWeight="600" textAnchor="middle">
                {t.brainScience.mentalClutter}
              </text>
              <text x="200" y="440" fontSize="11" fill="#6B7280" textAnchor="middle">
                {t.brainScience.mentalClutterDesc}
              </text>
            </svg>
          </div>

          {/* RIGHT: Content */}
          <div data-right className="flex flex-col gap-8">
            {/* Section Label */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#52B788]">
                {t.brainScience.label}
              </span>
              <div className="w-2 h-2 rounded-full bg-[#52B788]" />
            </div>

            {/* Heading */}
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-[#0F2A1E]">
              {t.brainScience.title}
            </h2>

            {/* Chemical Facts */}
            <div className="space-y-4 py-6 border-y border-[#E5E5E0]">
              {chemicalFacts.map((fact, idx) => (
                <div data-fact key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">{fact.icon}</div>
                  <div>
                    <div className="font-semibold text-[#1C1917]">
                      ↑ {fact.title}
                    </div>
                    <p className="text-sm text-[#6B7280]">{fact.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Block */}
            <blockquote className="pl-6 border-l-4 border-[#C9A84C] py-4 bg-[#F2F2ED] px-4 rounded-sm">
              <p className="italic text-[#1C1917] font-normal text-base">
                {t.brainScience.quote}
              </p>
              <footer className="text-sm text-[#6B7280] mt-3 font-medium">
                {t.brainScience.quoteAuthor}
              </footer>
            </blockquote>

            {/* Supporting text */}
            <p className="text-sm text-[#6B7280] leading-relaxed">
              {t.brainScience.supportingText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
