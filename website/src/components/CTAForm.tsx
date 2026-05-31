"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import type { Lang } from "@/lib/translations";

const successTitles: Record<Lang, string> = {
  en: "Request Received",
  mr: "विनंती प्राप्त झाली",
  hi: "अनुरोध प्राप्त हुआ",
  bn: "অনুরোধ প্রাপ্ত হয়েছে",
  te: "అభ్యర్థన స్వీకరించబడింది",
  ta: "கோரிக்கை பெறப்பட்டது",
  ur: "درخواست موصول ہو گئی",
  gu: "વિનંતી પ્રાપ્ત થઈ",
  kn: "ವಿನಂತಿ ಸ್ವೀಕರಿಸಲಾಗಿದೆ",
  or: "ଅନୁରୋଧ ଗ୍ରହଣ କରାଗଲା",
  ml: "അപേക്ഷ ലഭിച്ചു",
  pa: "ਬੇਨਤੀ ਪ੍ਰਾਪਤ ਹੋਈ",
  as: "অনুৰোধ প্ৰাপ্ত হ’ল",
  mai: "अनुरोध प्राप्त भेल",
  sa: "अभ्यर्थनं स्वीकृतम्",
  kok: "मागणी प्राप्त जाली",
  ne: "अनुरोध प्राप्त भयो",
  sd: "درخواست وصول ٿي وئي",
  doi: "अनुरोध प्राप्त होया",
  mni: "রিকুয়েস্ত তৌরকখ্রে",
  sat: "ᱱᱮᱦᱚᱨ ᱧᱟᱢᱮᱱᱟ",
  ks: "درخواست موصول سپج",
  brx: "खावलायनाय मोनबाय"
};

const successSubtitles: Record<Lang, string> = {
  en: "Our volunteer coordinator will contact you within 24 hours.",
  mr: "आमचा स्वयंसेवक समन्वयक २४ तासांत तुमच्याशी संपर्क साधेल.",
  hi: "हमारे स्वयंसेवक समन्वयक २४ घंटों में आपसे संपर्क करेंगे।",
  bn: "আমাদের স্বেচ্ছাসেবক সমন্বয়কারী ২৪ ঘন্টার মধ্যে আপনার সাথে যোগাযোগ করবেন।",
  te: "మా స్వచ్ఛంద సమన్వయకర్త 24 గంటల్లో మిమ్మల్ని సంప్రదిస్తారు.",
  ta: "எங்கள் தன்னார்வ ஒருங்கிணைப்பாளர் 24 மணி நேரத்திற்குள் உங்களைத் தொடர்புகொள்வார்.",
  ur: "ہمارا رضاکار کوآرڈینیٹر 24 گھنٹوں کے اندر آپ سے رابطہ کرے گا۔",
  gu: "અમારા સ્વયંસેવક સંયોજક ૨૪ કલાકમાં આપનો સંપર્ક કરશે.",
  kn: "ನಮ್ಮ ಸ್ವಯಂಸೇವಕ ಸಂಯೋಜಕರು 24 ಗಂಟೆಗಳ ಒಳಗೆ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತಾರೆ.",
  or: "ଆମର ସ୍ବେଚ୍ଛାସେବୀ ସଂଯୋଜକ ୨୪ ଘଣ୍ଟା ମଧ୍ୟରେ ଆପଣଙ୍କ ସହିତ ଯୋଗାଯୋଗ କରିବେ ।",
  ml: "ഞങ്ങളുടെ സന്നദ്ധ കോർഡിനേറ്റർ 24 മണിക്കൂറിനുള്ളിൽ നിങ്ങളെ ബന്ധപ്പെടും.",
  pa: "ਸਾਡੇ ਵਾਲੰਟੀਅਰ ਕੋਆਰਡੀਨੇਟਰ 24 ਘੰਟਿਆਂ ਦੇ ਅੰਦਰ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਨਗੇ।",
  as: "আমাৰ স্বেচ্ছাসেৱক সমন্বয়কগৰাকীয়ে ২৪ ঘণ্টাৰ ভিতৰত আপোনাৰ সৈতে যোগাযোগ কৰিব।",
  mai: "हमर स्वयंसेवक समन्वयक २४ घंटाक भीतर अहाँ सँ संपर्क करताह।",
  sa: "अस्माकं स्वयंसेवक-संयोजकः २४ होराभ्यन्तरे भवता सह सम्पर्कं करिष्यति।",
  kok: "आमचो स्वयंसेवक समन्वयक २४ वरांभितर तुमचे कडेन संपर्क सादटलो.",
  ne: "हाम्रा स्वयंसेवक संयोजकले २४ घण्टाभित्र तपाईंसँग सम्पर्क गर्नेछन्।",
  sd: "اسان جو رضاڪار ڪوآرڊينيٽر 24 ڪلاڪن اندر اوهان سان رابطو ڪندو.",
  doi: "साडे वालंटियर कोआर्डिनेटर २४ घंटें दे अंदर तुंदे कन्नै संपर्क करन।",
  mni: "ঐখোয়গী ভলুন্তিয়র কোওর্দিনেটরনা পুং ২৪ গী মনুংদা অদোমগা কন্ট্যাক্ট তৌরকখিগনি।",
  sat: "ᱟᱵᱚᱨᱮᱱ ᱵᱷᱚᱞᱚᱱᱴᱤᱭᱟᱹ ᱠᱚᱣᱳᱨᱰᱤᱱᱮᱴᱚᱨ ᱒᱔ ᱴᱟᱲᱟᱝ (ᱜᱷᱚᱱᱴᱟ) ᱢᱩᱫᱽ ᱨᱮ ᱡᱚᱜᱟᱡᱚᱜᱽ ᱟᱢᱟ।",
  ks: "سہند رضاکار کوآرڈینیٹر کرنہ 24 گھنٹن اندر تہہ سٟتؠ رابطہ۔",
  brx: "जोंनि स्वयंसेवक संयाजकआ २४ घन्टानि गेजेराव नोंथां जों योगायोग खालामगोन।"
};

export default function CTAForm() {
  const { lang } = useLang();
  const t = translations[lang];
  const [submitting, setSubmitting] = useState(false);
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
    setSubmitting(true);
    // Simulate sending
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="w-full py-20 lg:py-28 bg-[#0F2A1E]"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-white mt-3">
            {t.cta.title}
          </h2>
          <p className="text-[#B7E4C7] mt-4 text-lg">
            {t.cta.subtitle}
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#1a3d2b] rounded-2xl p-12 text-center border border-[#2D6A4F] max-w-xl mx-auto">
            <CheckCircle className="w-12 h-12 text-[#52B788] mx-auto mb-4 animate-bounce" />
            <h3 className="font-serif text-2xl text-white mb-2">
              {successTitles[lang]}
            </h3>
            <p className="text-[#B7E4C7]">
              {successSubtitles[lang]}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl max-w-3xl mx-auto"
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
                  placeholder={t.cta.namePlaceholder}
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
                  placeholder={t.cta.schoolPlaceholder}
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
                  placeholder={t.cta.phonePlaceholder}
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
              disabled={submitting}
              className="mt-8 w-full py-4 rounded-full bg-[#C9A84C] text-[#0F2A1E] font-semibold text-base hover:bg-[#F0D98D] transition-colors disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {submitting ? t.cta.downloading : t.cta.submit}
            </button>

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
