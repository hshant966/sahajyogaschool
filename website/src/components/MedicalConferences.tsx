"use client";

import { motion, easeOut } from "framer-motion";
import { useRef } from "react";

interface Conference {
  year: number;
  title: string;
  location: string;
  country: string;
  flag: string;
  isHighlight?: boolean;
}

const conferences: Conference[] = [
  {
    year: 1983,
    title: "Address to Indian Medical Association",
    location: "Sholapur, India",
    country: "India",
    flag: "🇮🇳",
  },
  {
    year: 1984,
    title: "Talk to Doctors, Medical College",
    location: "Sholapur, India",
    country: "India",
    flag: "🇮🇳",
  },
  {
    year: 1990,
    title: "Doctors Conference",
    location: "Pune, India",
    country: "India",
    flag: "🇮🇳",
  },
  {
    year: 1990,
    title: "Press Conference & Scientific Discussion",
    location: "Mumbai, India",
    country: "India",
    flag: "🇮🇳",
  },
  {
    year: 1992,
    title: "Medical Conference",
    location: "Moscow, Russia",
    country: "Russia",
    flag: "🇷🇺",
  },
  {
    year: 1993,
    title: "Medical Conference",
    location: "New Delhi, India",
    country: "India",
    flag: "🇮🇳",
  },
  {
    year: 1993,
    title: "Program for Doctors",
    location: "India",
    country: "India",
    flag: "🇮🇳",
  },
  {
    year: 1994,
    title: "Medical Conference",
    location: "St. Petersburg, Russia",
    country: "Russia",
    flag: "🇷🇺",
  },
  {
    year: 1995,
    title: "Medical Conference",
    location: "Bucharest, Romania",
    country: "Romania",
    flag: "🇷🇴",
  },
  {
    year: 1997,
    title: "Address to Doctors",
    location: "New Delhi, India",
    country: "India",
    flag: "🇮🇳",
  },
  {
    year: 2000,
    title: "NIH Medical Conference",
    location: "Washington D.C., USA",
    country: "USA",
    flag: "🇺🇸",
    isHighlight: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function MedicalConferences() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full bg-[#FAFAF7] py-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section Label */}
        <motion.div
          className="flex items-center gap-2 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
            Global Recognition
          </span>
          <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-serif text-5xl lg:text-6xl font-semibold text-[#0F2A1E] leading-tight mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Four decades of medical dialogue
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          {/* Timeline - Horizontal on desktop, vertical on mobile */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Mobile/Tablet vertical timeline */}
            <div className="lg:hidden flex flex-col gap-4">
              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {conferences.map((conference, index) => (
                  <motion.div
                    key={`${conference.year}-${index}`}
                    variants={itemVariants}
                    className={`p-5 rounded-lg border-l-4 ${
                      conference.isHighlight
                        ? "bg-white border-[#C9A84C] shadow-lg"
                        : "bg-[#F2F2ED] border-[#E5E5E0]"
                    }`}
                  >
                    <div className="flex items-baseline gap-3 mb-2">
                      <span
                        className={`text-3xl font-bold ${
                          conference.isHighlight ? "text-[#C9A84C]" : "text-[#0F2A1E]"
                        }`}
                      >
                        {conference.year}
                      </span>
                      <span className="text-2xl">{conference.flag}</span>
                    </div>
                    <p
                      className={`font-medium ${
                        conference.isHighlight
                          ? "text-[#0F2A1E]"
                          : "text-[#1C1917]"
                      }`}
                    >
                      {conference.title}
                    </p>
                    <p className="text-sm text-[#6B7280] mt-1">
                      {conference.location}
                    </p>
                    {conference.isHighlight && (
                      <div className="mt-3 pt-3 border-t border-[#E5E5E0]">
                        <span className="inline-block px-3 py-1 bg-[#C9A84C] text-white text-xs font-semibold rounded-full">
                          NATIONAL INSTITUTES OF HEALTH
                        </span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Desktop horizontal scroll timeline */}
            <div className="hidden lg:flex flex-col w-full">
              <div
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
              >
                <motion.div
                  className="flex gap-4 flex-shrink-0"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {conferences.map((conference, index) => (
                    <motion.div
                      key={`${conference.year}-${index}`}
                      variants={itemVariants}
                      className={`flex-shrink-0 w-80 p-6 rounded-lg border ${
                        conference.isHighlight
                          ? "bg-white border-[#C9A84C] shadow-xl ring-2 ring-[#C9A84C] ring-opacity-20"
                          : "bg-white border-[#E5E5E0]"
                      }`}
                    >
                      <div className="flex items-baseline gap-3 mb-3">
                        <span
                          className={`text-4xl font-bold ${
                            conference.isHighlight
                              ? "text-[#C9A84C]"
                              : "text-[#0F2A1E]"
                          }`}
                        >
                          {conference.year}
                        </span>
                        <span className="text-3xl">{conference.flag}</span>
                      </div>
                      <p
                        className={`font-semibold text-lg ${
                          conference.isHighlight
                            ? "text-[#0F2A1E]"
                            : "text-[#1C1917]"
                        }`}
                      >
                        {conference.title}
                      </p>
                      <p className="text-sm text-[#6B7280] mt-2">
                        {conference.location}
                      </p>
                      {conference.isHighlight && (
                        <div className="mt-4 pt-4 border-t border-[#E5E5E0]">
                          <span className="inline-block px-3 py-1 bg-[#C9A84C] text-white text-xs font-bold rounded-full">
                            NATIONAL INSTITUTES OF HEALTH
                          </span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              <p className="text-xs text-[#6B7280] mt-2">Scroll to explore →</p>
            </div>
          </div>

          {/* Founder Credentials Card */}
          <motion.div
            className="lg:sticky lg:top-24 h-fit"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white p-8 rounded-lg border border-[#E5E5E0] shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-[#0F2A1E] mb-2">
                Shri Mataji Nirmala Devi
              </h3>
              <p className="text-sm text-[#6B7280] mb-6">
                (1923 – 2011)
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <span className="text-[#C9A84C] flex-shrink-0">✓</span>
                  <span className="text-sm text-[#1C1917]">
                    <strong>Nobel Peace Prize</strong> nominee (×2)
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#C9A84C] flex-shrink-0">✓</span>
                  <span className="text-sm text-[#1C1917]">
                    <strong>Personality of Year 1986</strong> — Italian Government
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#C9A84C] flex-shrink-0">✓</span>
                  <span className="text-sm text-[#1C1917]">
                    <strong>US Congress Recognition</strong> (1997, 2000)
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#C9A84C] flex-shrink-0">✓</span>
                  <span className="text-sm text-[#1C1917]">
                    Founded <strong>Belapur International Medical Research Center</strong>, Bombay
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E5E5E0]">
                <p className="text-sm font-medium text-[#0F2A1E] mb-2">
                  Sahaja Yoga
                </p>
                <p className="text-sm text-[#6B7280]">
                  Practiced in <strong>92 countries</strong> worldwide
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
