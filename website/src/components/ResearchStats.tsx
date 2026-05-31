"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, easeOut } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

const LOCALIZED_DATA: Record<string, {
  body: string;
  disclaimer: string;
  stats: { value: string; unit: string; desc: string; citation: string }[];
}> = {
  en: {
    body: "30+ PubMed-indexed studies from King's College London, Delhi University, AIIMS, and institutions across Europe and Australia. Brain changes confirmed via MRI and EEG. Results are consistent and reproducible.",
    disclaimer: "Studies published in Brain and Behavior, PLOS ONE, Clinical Child Psychology & Psychiatry, Journal of Alternative and Complementary Medicine, and Scientific Reports.",
    stats: [
      { value: "6", unit: "Weeks", desc: "Family program for children with ADHD showed measurable improvements in concentration, sleep, anxiety, and behavior", citation: "Clin. Child Psych. & Psychiatry, 2004" },
      { value: "30+", unit: "Studies", desc: "PubMed-indexed peer-reviewed studies on neurological and psychological effects", citation: "NCBI PubMed, 2026" },
      { value: "39,603", unit: "Schools", desc: "Approved by Telangana State Government for school implementation", citation: "Govt. of Telangana, 2023" },
      { value: "4", unit: "Weeks", desc: "Brief training shows measurable changes in executive-control brain regions linked to attention and self-control", citation: "Brain and Behavior, 2019" }
    ]
  },
  mr: {
    body: "किंग्ज कॉलेज लंडन, दिल्ली विद्यापीठ, एम्स (AIIMS) आणि युरोप व ऑस्ट्रेलियातील संस्थांमधील ३० हून अधिक पुराव्यांवर आधारित अभ्यास. एमआरआय (MRI) आणि ईईजी (EEG) द्वारे मेंदूतील बदलांची पुष्टी. परिणाम सुसंगत आणि सिद्ध आहेत.",
    disclaimer: "ब्रेन अँड बिहेवियर, पीएलओएस वन (PLOS ONE), क्लिनिकल चाईल्ड सायकॉलॉजी अँड सायकियाट्री, आणि सायंटिफिक रिपोर्ट्स या जर्नल्समध्ये संशोधन प्रकाशित.",
    stats: [
      { value: "६", unit: "आठवडे", desc: "एडीएचडी (ADHD) ग्रस्त मुलांसाठीच्या ध्यान अभ्यासामध्ये एकाग्रता, झोप, चिंता आणि वर्तनात मोजता येण्याजोगे सुधार दिसून आले", citation: "Clin. Child Psych. & Psychiatry, २००४" },
      { value: "३०+", unit: "अभ्यास", desc: "मेंदूच्या रचनेवर आणि वर्तनावर होणाऱ्या परिणामांवर पीअर-रिव्ह्यू केलेले वैज्ञानिक संशोधन", citation: "NCBI PubMed, २०२६" },
      { value: "३९,६०३", unit: "शाळा", desc: "शालेय ध्यान उपक्रमासाठी तेलंगणा राज्य सरकारद्वारे अधिकृत मान्यता", citation: "Govt. of Telangana, २०२३" },
      { value: "४", unit: "आठवडे", desc: "कमी कालावधीच्या सरावाने देखील लक्ष आणि आत्म-नियंत्रणाशी संबंधित मेंदूच्या कार्यक्षेत्रात बदल होतात", citation: "Brain and Behavior, २०१९" }
    ]
  },
  hi: {
    body: "किंग्स कॉलेज लंदन, दिल्ली विश्वविद्यालय, एम्स (AIIMS) और यूरोप व ऑस्ट्रेलिया के प्रतिष्ठित संस्थानों के ३० से अधिक समीक्षात्मक अध्ययन। एमआरआई (MRI) और ईईजी (EEG) द्वारा मस्तिष्क में बदलाव की पुष्टि। परिणाम सुसंगत और प्रमाणित हैं.",
    disclaimer: "ब्रेन एंड बिहेवियर, पीएलओएस वन (PLOS ONE), क्लीनिकल चाइल्ड साइकोलॉजी एंड साइकियाट्री, और साइंटिफिक रिपोर्ट्स जैसे प्रतिष्ठित जर्नल्स में अध्ययन प्रकाशित.",
    stats: [
      { value: "६", unit: "सप्ताह", desc: "एडीएचडी (ADHD) से पीड़ित बच्चों के ध्यान कार्यक्रम में एकाग्रता, नींद, चिंता और व्यवहार में स्पष्ट सुधार देखा गया", citation: "Clin. Child Psych. & Psychiatry, २००४" },
      { value: "३०+", unit: "अध्ययन", desc: "मस्तिष्क और मानसिक स्वास्थ्य पर होने वाले प्रभावों पर वैज्ञानिक रूप से समीक्षित शोध", citation: "NCBI PubMed, २०२६" },
      { value: "३९,६०३", unit: "स्कूल", desc: "स्कूली स्तर पर ध्यान कार्यक्रम लागू करने के लिए तेलंगाना सरकार द्वारा स्वीकृत", citation: "Govt. of Telangana, २०२३" },
      { value: "४", unit: "सप्ताह", desc: "अल्पकालिक अभ्यास से भी एकाग्रता और आत्म-नियंत्रण से जुड़े मस्तिष्क के हिस्सों में अनुकूल बदलाव दिखाई देते हैं", citation: "Brain and Behavior, २०१९" }
    ]
  }
};

export default function ResearchStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const t = translations[lang];

  // Fallback to English if the active language is not fully translated in this sub-section
  const data = LOCALIZED_DATA[lang] || LOCALIZED_DATA["en"];

  useGSAP(
    () => {
      const cards = sectionRef.current?.querySelectorAll("[data-stat]");
      if (!cards) return;

      gsap.from(cards, {
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="research"
      className="w-full bg-[#0F2A1E] py-24 lg:py-32"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#52B788]">
              {t.stats.title}
            </span>
            <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-white mt-3 leading-tight">
              {t.stats.subtitle}
            </h2>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[#B7E4C7] text-lg leading-relaxed pt-2">
              {data.body}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {data.stats.map((stat, i) => {
            const color = i % 2 === 0 ? "#C9A84C" : "#52B788";
            return (
              <motion.div
                key={i}
                data-stat
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: easeOut }}
                className="rounded-2xl p-7 flex flex-col gap-3 relative overflow-hidden cursor-default border border-[#2D6A4F] hover:border-[#C9A84C] transition-colors"
                style={{ background: "linear-gradient(135deg, #1a3d2b 0%, #0F2A1E 100%)" }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
                />
                <div>
                  <span
                    className="font-serif text-6xl lg:text-7xl font-bold leading-none"
                    style={{ color: color }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="font-serif text-xl lg:text-2xl ml-2"
                    style={{ color: color, opacity: 0.7 }}
                  >
                    {stat.unit}
                  </span>
                </div>
                <p className="text-[#B7E4C7] text-sm leading-relaxed">{stat.desc}</p>
                <p className="text-[#52B788] text-xs font-medium mt-auto">— {stat.citation}</p>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-[#6B7280] text-sm">
          {data.disclaimer}
        </p>
      </div>
    </section>
  );
}
