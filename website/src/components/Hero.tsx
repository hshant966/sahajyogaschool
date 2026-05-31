"use client";

import { Suspense, lazy, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

const NeuralNetwork = lazy(() => import("./NeuralNetwork"));

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const t = translations[lang];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Pause video — scroll drives playback
    video.pause();

    const ctx = gsap.context(() => {
      // Scroll drives video currentTime
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "+=600",
        scrub: 1,
        onUpdate: (self) => {
          if (!video.duration) return;
          video.currentTime = self.progress * video.duration;
        },
      });

      // Overlay fades in as video plays (text masking effect)
      if (overlayRef.current) {
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "+=300",
              scrub: true,
            },
          }
        );
      }

      // Hero content fade up on load
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          opacity: 0,
          y: 24,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          delay: 0.2,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* Scroll-tied video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/images/hero-transition.mp4"
        muted
        playsInline
        preload="auto"
      />

      {/* Gradient overlay — left side for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#FAFAF7]/95 via-[#FAFAF7]/70 to-transparent" />

      {/* Bottom gradient mask — text appears from below */}
      <div
        ref={overlayRef}
        className="absolute bottom-0 left-0 right-0 h-1/2 z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(250,250,247,0.95) 0%, transparent 100%)",
        }}
      />

      {/* 3D Neural Network — right side, desktop only */}
      <div className="absolute right-0 top-0 w-1/2 h-full z-20 hidden lg:block opacity-35">
        <Suspense fallback={null}>
          <NeuralNetwork />
        </Suspense>
      </div>

      {/* Hero content */}
      <div className="relative z-30 w-full h-full flex items-center pt-20">
        <div
          ref={contentRef}
          className="w-full max-w-7xl mx-auto px-6 lg:px-16 flex flex-col justify-center gap-7"
        >
          {/* Label */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#52B788]">
              {t.hero.label}
            </span>
            <div className="w-2 h-2 rounded-full bg-[#52B788]" />
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-serif text-5xl lg:text-7xl xl:text-8xl font-semibold text-[#0F2A1E] max-w-4xl"
            style={{ lineHeight: "1.05" }}
          >
            {t.hero.headline}
          </h1>

          {/* Credential bar */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs text-[#6B7280] hover:text-[#0F2A1E] transition-colors group w-fit animate-pulse"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
            <span className="font-mono">
              {t.hero.credential}
            </span>
            <span className="text-[#C9A84C] group-hover:translate-x-0.5 transition-transform">↗</span>
          </a>

          {/* Body / Subline */}
          <p className="text-base lg:text-lg leading-relaxed text-[#6B7280] max-w-2xl">
            {t.hero.subline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-[#0F2A1E] text-white font-medium hover:bg-[#2D6A4F] transition-colors"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border-2 border-[#52B788] text-[#52B788] font-medium hover:bg-[#52B788] hover:text-white transition-all"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Trust pills — premium styling */}
          <div className="flex flex-wrap gap-3">
            {["King's College London", "NIH Funded", "Govt. Authorized", "Schools & Colleges"].map((badge) => (
              <span
                key={badge}
                className="px-4 py-1.5 rounded-full bg-white border-2 border-[#52B788] text-[#0F2A1E] text-xs font-medium shadow-sm hover:shadow-md transition-shadow"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-[#9CA3AF]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#52B788] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
