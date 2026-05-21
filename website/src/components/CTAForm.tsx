"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function CTAForm() {
  const { lang } = useLang();
  const t = translations[lang];
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    school: "",
    city: "",
    phone: "",
    email: "",
    students: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.school.trim()) e.school = "Required";
    if (!form.city.trim()) e.city = "Required";
    if (!/^\d{10}$/.test(form.phone)) e.phone = "Enter valid 10-digit number";
    if (!form.students) e.students = "Required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="w-full py-20 lg:py-28 bg-[#0F2A1E]"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#52B788]">
            {t.cta.label}
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-white mt-3">
            {t.cta.heading}
          </h2>
          <p className="text-[#B7E4C7] mt-4 text-lg">
            {t.cta.sub}
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#1a3d2b] rounded-2xl p-12 text-center border border-[#2D6A4F]">
            <CheckCircle className="w-12 h-12 text-[#52B788] mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-white mb-2">
              {t.cta.success}
            </h3>
            <p className="text-[#B7E4C7]">
              {t.cta.successSub}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#1C1917]">
                  Principal / Contact Name *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-lg border border-[#E5E5E0] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#52B788]"
                  placeholder="Your name"
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">{errors.name}</span>
                )}
              </div>

              {/* School */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#1C1917]">
                  School Name *
                </label>
                <input
                  type="text"
                  value={form.school}
                  onChange={(e) => setForm({ ...form, school: e.target.value })}
                  className="rounded-lg border border-[#E5E5E0] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#52B788]"
                  placeholder="School name"
                />
                {errors.school && (
                  <span className="text-red-500 text-xs">{errors.school}</span>
                )}
              </div>

              {/* City */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#1C1917]">
                  City / District *
                </label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="rounded-lg border border-[#E5E5E0] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#52B788]"
                  placeholder="City or district"
                />
                {errors.city && (
                  <span className="text-red-500 text-xs">{errors.city}</span>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#1C1917]">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="rounded-lg border border-[#E5E5E0] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#52B788]"
                  placeholder="10-digit mobile"
                  maxLength={10}
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs">{errors.phone}</span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#1C1917]">
                  Email (optional)
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-lg border border-[#E5E5E0] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#52B788]"
                  placeholder="your@school.edu.in"
                />
              </div>

              {/* Students */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#1C1917]">
                  Number of Students *
                </label>
                <select
                  value={form.students}
                  onChange={(e) =>
                    setForm({ ...form, students: e.target.value })
                  }
                  className="rounded-lg border border-[#E5E5E0] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#52B788] bg-white"
                >
                  <option value="">Select range</option>
                  <option value="under200">Under 200</option>
                  <option value="200-500">200 – 500</option>
                  <option value="500-1000">500 – 1000</option>
                  <option value="1000+">1000+</option>
                </select>
                {errors.students && (
                  <span className="text-red-500 text-xs">
                    {errors.students}
                  </span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full py-4 rounded-full bg-[#C9A84C] text-[#0F2A1E] font-semibold text-base hover:bg-[#F0D98D] transition-colors"
            >
              {t.cta.submit}
            </button>

            <p className="mt-4 text-center text-xs text-[#9CA3AF]">
              {t.cta.privacy}
            </p>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {["100% Free", "No Dogma", "Non-Religious", "Govt. Approved"].map(
                (b) => (
                  <span
                    key={b}
                    className="px-3 py-1 rounded-full bg-[#F2F2ED] text-[#0F2A1E] text-xs font-medium"
                  >
                    {b}
                  </span>
                )
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
