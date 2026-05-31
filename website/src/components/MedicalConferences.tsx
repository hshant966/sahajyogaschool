"use client";

import { motion, easeOut } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { Award, Landmark, Activity } from "lucide-react";

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
  const { lang } = useLang();
  const t = translations[lang];

  // Map icons to the conferences
  const icons = [Landmark, Award, Activity];

  return (
    <section className="w-full bg-[#FAFAF7] py-24 border-t border-[#E5E5E0]/60">
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
            {t.medicalConferences.title}
          </span>
          <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-serif text-4xl lg:text-5xl font-semibold text-[#0F2A1E] leading-tight mb-4 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {t.medicalConferences.title}
        </motion.h2>

        <motion.p
          className="text-[#6B7280] text-lg max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t.medicalConferences.subtitle}
        </motion.p>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {t.medicalConferences.conferences.map((conf, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl border border-[#E5E5E0] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group cursor-default"
              >
                {/* Accent stripe */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#C9A84C]/45 group-hover:bg-[#C9A84C] transition-colors" />

                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#FAFAF7] flex items-center justify-center text-[#C9A84C]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-3xl font-bold font-serif text-[#0F2A1E]/15">
                    {conf.year}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#0F2A1E] mb-3 leading-snug">
                  {conf.title}
                </h3>

                <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-4">
                  {conf.host}
                </p>

                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {conf.detail}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
