import type { Metadata } from "next";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Sahajyoga School Meditation Program — Overview",
  description: "Science-backed, government-authorized, 100% free meditation program for schools and colleges.",
};

export default function ProgramOverview() {
  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white; }
          .page { margin: 0; padding: 20mm 20mm; max-width: 100%; box-shadow: none; }
          .section-break { page-break-before: always; }
        }
      `}</style>

      <div className="min-h-screen bg-[#FAFAF7] py-10 px-4">
        <div className="page max-w-[800px] mx-auto bg-white rounded-2xl shadow-lg p-10 lg:p-14">

          {/* Print button */}
          <div className="no-print flex justify-end mb-8">
            <PrintButton />
          </div>

          {/* Header */}
          <div className="border-b-2 border-[#0F2A1E] pb-8 mb-8">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#52B788] mb-2">
                  Sahajyog Dhyan Kendra, Pune
                </p>
                <h1 className="font-serif text-3xl lg:text-4xl font-bold text-[#0F2A1E] leading-tight mb-3">
                  School &amp; College Meditation<br />Program Overview
                </h1>
                <p className="text-sm text-[#6B7280]">
                  Science-backed · Government authorized · 100% Free · Zero religion
                </p>
              </div>
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0F2A1E] flex items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-[#52B788]" />
              </div>
            </div>

            {/* Authorization highlight */}
            <div className="mt-6 bg-[#FFF9EC] border border-[#C9A84C]/40 rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-1">
                Official Government Authorization
              </p>
              <p className="text-sm text-[#0F2A1E] font-medium">
                Authorized by Pune Zilla Parishad Education Department for all Pune schools — including ZP, private aided, private unaided, and self-financed schools.
              </p>
              <p className="text-xs text-[#9CA3AF] mt-1 font-mono">
                Ref: जा.क्र. जिप/शिक्षण/प्राथ.२/यो-१४५/१३२४/२०२४ · Signed by Sanjay Naikde, Education Officer (Primary) · 18 September 2024
              </p>
            </div>
          </div>

          {/* What is the program */}
          <section className="mb-8">
            <h2 className="font-serif text-xl font-bold text-[#0F2A1E] mb-4 pb-2 border-b border-[#E5E5E0]">
              What is This Program
            </h2>
            <p className="text-[#374151] text-sm leading-relaxed mb-3">
              The Sahajyoga School Meditation Program brings certified volunteer instructors to your school or college for a free 30-minute guided meditation workshop. The program is suitable for students aged 6–18 (schools) and college-age students. No equipment, no special space, no fees — ever.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {[
                { val: "30 min", label: "Per session" },
                { val: "100%", label: "Free, always" },
                { val: "6–18", label: "Age group" },
                { val: "No", label: "Equipment needed" },
              ].map((item) => (
                <div key={item.label} className="bg-[#F0FDF4] rounded-xl p-3 text-center">
                  <p className="font-serif text-xl font-bold text-[#0F2A1E]">{item.val}</p>
                  <p className="text-xs text-[#6B7280] mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Scientific Research */}
          <section className="mb-8">
            <h2 className="font-serif text-xl font-bold text-[#0F2A1E] mb-4 pb-2 border-b border-[#E5E5E0]">
              Scientific Research
            </h2>
            <p className="text-[#374151] text-sm leading-relaxed mb-4">
              Sahaja Yoga meditation has been studied in peer-reviewed research across 6 countries. Key findings include:
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#52B788] mt-1.5" />
                <div>
                  <p className="text-sm font-semibold text-[#0F2A1E]">
                    King&apos;s College London — EEG Brain Study (Prof. Katya Rubia, Cognitive Neuroscience)
                  </p>
                  <p className="text-xs text-[#6B7280] leading-relaxed mt-0.5">
                    Theta wave activity (deep focused attention, creativity) increases significantly during meditation, concentrated in frontal and temporal areas. Long-term meditators develop thicker cortex in attention areas — meditation is measurably anti-ageing for the brain.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#52B788] mt-1.5" />
                <div>
                  <p className="text-sm font-semibold text-[#0F2A1E]">
                    ADHD — Children&apos;s Concentration Study (6-week program)
                  </p>
                  <p className="text-xs text-[#6B7280] leading-relaxed mt-0.5">
                    A 6-week family-oriented program with parents reported significant improvements in ADHD-related behavior, concentration, sleep, anxiety, and family relationships. Published in Clinical Child Psychology &amp; Psychiatry (2004). No adverse effects reported.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#52B788] mt-1.5" />
                <div>
                  <p className="text-sm font-semibold text-[#0F2A1E]">
                    NIH-Funded Research — Anxiety &amp; Stress (Dr. Chung, Philadelphia University)
                  </p>
                  <p className="text-xs text-[#6B7280] leading-relaxed mt-0.5">
                    In a controlled study of 66 meditators vs controls: meditators improved significantly in anxiety and stress measures. Control group on standard hospital treatment actually got worse over the same period.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#52B788] mt-1.5" />
                <div>
                  <p className="text-sm font-semibold text-[#0F2A1E]">
                    Delhi University — Academic Performance &amp; Focus
                  </p>
                  <p className="text-xs text-[#6B7280] leading-relaxed mt-0.5">
                    Research confirmed measurable improvements in students&apos; concentration, memory retention, and academic performance after a 6-week meditation program.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Student Benefits */}
          <section className="mb-8 section-break">
            <h2 className="font-serif text-xl font-bold text-[#0F2A1E] mb-4 pb-2 border-b border-[#E5E5E0]">
              Measurable Student Benefits
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: "Improved Concentration", desc: "Students show measurably better focus and sustained attention in classroom settings within 6 weeks." },
                { title: "Stronger Memory", desc: "Theta wave enhancement during meditation is directly linked to improved working memory and recall." },
                { title: "Reduced Stress & Anxiety", desc: "Parasympathetic nervous system activation produces deeper rest than sleep — reducing cortisol and exam anxiety." },
                { title: "Better Emotional Balance", desc: "Meditators show less anxiety, sadness, and frustration. Emotional resilience measurably improves." },
                { title: "Improved Sleep Quality", desc: "Melatonin increase from regular practice leads to better sleep — critical for growing children and teenagers." },
                { title: "Zero Side Effects", desc: "Unlike medication, all documented effects of Sahaja Yoga meditation are positive. No adverse events reported across 30+ years of research." },
              ].map((b) => (
                <div key={b.title} className="flex gap-3 items-start p-3 rounded-xl bg-[#F8FAF8]">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#52B788]/20 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0F2A1E]">{b.title}</p>
                    <p className="text-xs text-[#6B7280] leading-relaxed mt-0.5">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Government Approvals */}
          <section className="mb-8">
            <h2 className="font-serif text-xl font-bold text-[#0F2A1E] mb-4 pb-2 border-b border-[#E5E5E0]">
              Government Approvals Across India
            </h2>
            <div className="space-y-3">
              {[
                {
                  name: "Pune Zilla Parishad",
                  year: "2024",
                  detail: "Official authorization for all Pune schools — ZP, private aided, unaided & self-financed. Signed by Education Officer (Primary). Ref: जा.क्र. जिप/शिक्षण/प्राथ.२/यो-१४५/१३२४/२०२४",
                  badge: "Local Government",
                },
                {
                  name: "Telangana State Government",
                  year: "2023",
                  detail: "Education Department order covering 39,603 schools and 61 lakh students. Includes 12,722 private schools.",
                  badge: "State Government",
                },
                {
                  name: "Kendriya Vidyalaya Sangathan",
                  year: "2022",
                  detail: "Central Government approval for all KV schools across all states and union territories of India.",
                  badge: "Central Government",
                },
                {
                  name: "Haryana — Ambala District",
                  year: "2015",
                  detail: "Education Department order. Implementation in 500+ schools, benefiting 50,000+ students.",
                  badge: "State Government",
                },
              ].map((a) => (
                <div key={a.name} className="flex gap-4 items-start p-3 rounded-xl border border-[#E5E5E0]">
                  <div className="flex-shrink-0 text-center">
                    <p className="font-serif text-xl font-bold text-[#C9A84C]">{a.year}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <p className="text-sm font-semibold text-[#0F2A1E]">{a.name}</p>
                      <span className="text-xs bg-[#E5E5E0] px-2 py-0.5 rounded-full text-[#6B7280]">{a.badge}</span>
                    </div>
                    <p className="text-xs text-[#6B7280] leading-relaxed">{a.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#9CA3AF] mt-3">
              Additionally recognized by school boards in Maharashtra, Gujarat, and Karnataka.
            </p>
          </section>

          {/* Workshop Structure */}
          <section className="mb-8">
            <h2 className="font-serif text-xl font-bold text-[#0F2A1E] mb-4 pb-2 border-b border-[#E5E5E0]">
              How a Workshop Works
            </h2>
            <div className="space-y-4">
              {[
                { step: "01", title: "Request a Free Session", desc: "School contacts Sahajyog Dhyan Kendra, Pune via phone or email. No paperwork or fees." },
                { step: "02", title: "Volunteer Instructors Visit", desc: "Certified volunteer instructors come to your school. No travel cost to the school. Any available classroom works — no special space or equipment needed." },
                { step: "03", title: "30-Minute Guided Session", desc: "Age-appropriate guided introduction for students aged 6–18 (or college-age). Covers what mental silence is, a brief guided practice, and Q&A." },
                { step: "04", title: "Measurable Outcomes in 6 Weeks", desc: "Schools that continue the program see measurable improvements in student focus, behavior, and wellbeing. Parent consent materials provided." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#0F2A1E] flex items-center justify-center">
                    <span className="font-serif text-sm font-bold text-[#C9A84C]">{s.step}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0F2A1E]">{s.title}</p>
                    <p className="text-xs text-[#6B7280] leading-relaxed mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="bg-[#0F2A1E] rounded-2xl p-6 text-center">
            <h2 className="font-serif text-xl font-bold text-white mb-2">
              Contact Us to Arrange a Session
            </h2>
            <p className="text-[#B7E4C7] text-sm mb-4">
              Free for every school and college. Volunteer instructors come to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center text-sm">
              <a href="tel:+919999999999" className="text-[#C9A84C] font-semibold hover:text-[#F0D98D] transition-colors">
                📞 Contact Sahajyog Dhyan Kendra, Pune
              </a>
              <span className="hidden sm:block text-[#2D6A4F]">·</span>
              <a href="mailto:info@sahajayogascience.org" className="text-[#C9A84C] font-semibold hover:text-[#F0D98D] transition-colors">
                ✉ info@sahajayogascience.org
              </a>
            </div>
            <p className="text-[#6B7280] text-xs mt-4">
              Authorized by Pune Zilla Parishad · Ref: जा.क्र. जिप/शिक्षण/प्राथ.२/यो-१४५/१३२४/२०२४
            </p>
          </section>

        </div>
      </div>
    </>
  );
}
