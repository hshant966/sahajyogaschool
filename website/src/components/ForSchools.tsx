"use client";

import { motion, easeOut } from "framer-motion";
import { Check, ArrowRight, Download } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Request a free session",
    description: "Fill out a quick form with your school name and contact details.",
  },
  {
    number: "02",
    title: "We visit your school",
    description: "Certified volunteer instructors come to you — no travel needed.",
  },
  {
    number: "03",
    title: "Students experience meditation",
    description: "Guided introduction, age-appropriate for 6–18 year olds.",
  },
];

const benefits = [
  "100% Free — no fees, ever",
  "No religious content or requirement",
  "Volunteer-certified instructors",
  "Age-appropriate program (6–18)",
  "Measurable outcomes in 6 weeks",
  "Parent consent materials provided",
  "No equipment or space change needed",
];

export default function ForSchools() {
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
            For Schools
          </span>
          <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-[#0F2A1E] mt-3 leading-tight max-w-3xl">
            Bring science-backed meditation to your school
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* How it works */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="font-serif text-2xl font-semibold text-[#0F2A1E] mb-10">
              How it works
            </h3>
            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2, ease: easeOut }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#0F2A1E] flex items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-[#C9A84C]">
                      {step.number}
                    </span>
                  </div>
                  <div className="pt-1">
                    <h4 className="text-lg font-semibold text-[#0F2A1E] mb-1">
                      {step.title}
                    </h4>
                    <p className="text-[#6B7280] text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What you get */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl font-semibold text-[#0F2A1E] mb-10">
              What you get
            </h3>
            <div className="space-y-3">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 + 0.3, ease: easeOut }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#E5E5E0] hover:border-[#52B788] hover:shadow-sm transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-[#52B788]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#52B788]" />
                  </div>
                  <p className="text-[#1C1917] text-sm font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="bg-[#0F2A1E] rounded-3xl p-10 lg:p-14 text-center">
          <h3 className="font-serif text-3xl lg:text-4xl font-semibold text-white mb-3">
            Ready to get started?
          </h3>
          <p className="text-[#B7E4C7] mb-8 text-lg">
            Free, easy to arrange, and makes a real measurable difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-[#C9A84C] text-[#0F2A1E] font-semibold hover:bg-[#F0D98D] transition-colors flex items-center gap-2 group"
            >
              Request a Free Session
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://www.scribd.com/document/871535582/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border-2 border-[#2D6A4F] text-[#B7E4C7] font-semibold hover:border-[#52B788] hover:text-white transition-colors flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Program Overview
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
