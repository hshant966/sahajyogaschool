export type Lang =
  | "en"
  | "mr"
  | "hi"
  | "bn"
  | "te"
  | "ta"
  | "ur"
  | "gu"
  | "kn"
  | "or"
  | "ml"
  | "pa"
  | "as"
  | "mai"
  | "sa"
  | "kok"
  | "ne"
  | "sd"
  | "doi"
  | "mni"
  | "sat"
  | "ks"
  | "brx";

type TranslationShape = {
  nav: {
    research: string;
    benefits: string;
    schools: string;
    contact: string;
    cta: string;
  };
  hero: {
    label: string;
    headline: string;
    subline: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  whatIs: {
    label: string;
    headline1: string;
    headline2: string;
    sub: string;
    quote: string;
    quoteAccent: string;
  };
  stats: {
    label: string;
    heading: string;
  };
  cta: {
    label: string;
    heading: string;
    sub: string;
    submit: string;
    privacy: string;
    success: string;
    successSub: string;
  };
  footer: {
    tagline: string;
  };
};

const en: TranslationShape = {
  nav: {
    research: "Research",
    benefits: "Benefits",
    schools: "For Schools",
    contact: "Contact",
    cta: "Request a Session",
  },
  hero: {
    label: "Peer-Reviewed · Govt. Authorized · 100% Free",
    headline: "The Science of Mental Silence",
    subline: "Proven by King's College London · NIH Washington DC · Delhi University",
    body: "6 weeks of Sahaja Yoga meditation produces the same improvement in children's focus as ADHD medication — with zero side effects.",
    ctaPrimary: "See the Research",
    ctaSecondary: "Request a Free Session",
  },
  whatIs: {
    label: "What is Sahaja Yoga",
    headline1: "Not a religion.",
    headline2: "A science.",
    sub: "Sahaja Yoga is a meditation technique now validated by peer-reviewed research across 6 countries. No belief required. No fees. No dogma.",
    quote: "No fees. No religion. No dogma.",
    quoteAccent: "Just results.",
  },
  stats: {
    label: "Evidence-based",
    heading: "What the research shows",
  },
  cta: {
    label: "Free program",
    heading: "Bring this to your school",
    sub: "Join 39,603+ schools across India. No cost. No obligations.",
    submit: "Schedule Our Free Session",
    privacy: "No spam. Our volunteer coordinator contacts you within 24 hours.",
    success: "Request received",
    successSub: "Our volunteer coordinator will contact you within 24 hours.",
  },
  footer: {
    tagline: "Science-backed meditation for schools. 100% free. Non-religious. Government approved.",
  },
};

const mr: TranslationShape = {
  nav: {
    research: "संशोधन",
    benefits: "फायदे",
    schools: "शाळांसाठी",
    contact: "संपर्क",
    cta: "सत्र मागवा",
  },
  hero: {
    label: "समीक्षित संशोधन",
    headline: "मानसिक शांततेचे विज्ञान",
    subline: "King's College London · NIH Washington DC · दिल्ली विद्यापीठ यांनी सिद्ध",
    body: "६ आठवड्यांच्या सहज योग ध्यानामुळे मुलांच्या एकाग्रतेत ADHD औषधांइतकी सुधारणा होते — कोणतेही दुष्परिणाम नाहीत.",
    ctaPrimary: "संशोधन पहा",
    ctaSecondary: "मोफत सत्र मागवा",
  },
  whatIs: {
    label: "सहज योग म्हणजे काय",
    headline1: "धर्म नाही.",
    headline2: "विज्ञान आहे.",
    sub: "सहज योग ही एक ध्यान पद्धती आहे जी ६ देशांमधील समीक्षित संशोधनाने मान्यताप्राप्त आहे. कोणतीही श्रद्धा आवश्यक नाही. कोणतेही शुल्क नाही. कोणताही धर्म नाही.",
    quote: "शुल्क नाही. धर्म नाही. मतप्रणाली नाही.",
    quoteAccent: "फक्त परिणाम.",
  },
  stats: {
    label: "पुराव्यावर आधारित",
    heading: "संशोधन काय सांगते",
  },
  cta: {
    label: "मोफत कार्यक्रम",
    heading: "हे तुमच्या शाळेत आणा",
    sub: "भारतभर ३९,६०३+ शाळांसोबत सामील व्हा. कोणतीही किंमत नाही. कोणतेही बंधन नाही.",
    submit: "आमचे मोफत सत्र निश्चित करा",
    privacy: "स्पॅम नाही. आमचा स्वयंसेवक समन्वयक २४ तासांत संपर्क करेल.",
    success: "विनंती प्राप्त झाली",
    successSub: "आमचा स्वयंसेवक समन्वयक २४ तासांत तुमच्याशी संपर्क साधेल.",
  },
  footer: {
    tagline: "निरोगी मन · आनंदी हृदय · उज्ज्वल उद्या",
  },
};

const hi: TranslationShape = {
  nav: {
    research: "अनुसंधान",
    benefits: "लाभ",
    schools: "विद्यालयों के लिए",
    contact: "संपर्क",
    cta: "सत्र का अनुरोध करें",
  },
  hero: {
    label: "समीक्षित अनुसंधान",
    headline: "मानसिक मौन का विज्ञान",
    subline: "King's College London · NIH Washington DC · दिल्ली विश्वविद्यालय द्वारा प्रमाणित",
    body: "६ सप्ताह के सहज योग ध्यान से बच्चों की एकाग्रता में ADHD दवा जितना सुधार होता है — बिना किसी दुष्प्रभाव के।",
    ctaPrimary: "अनुसंधान देखें",
    ctaSecondary: "निःशुल्क सत्र का अनुरोध करें",
  },
  whatIs: {
    label: "सहज योग क्या है",
    headline1: "धर्म नहीं।",
    headline2: "विज्ञान है।",
    sub: "सहज योग एक ध्यान तकनीक है जो ६ देशों में समीक्षित अनुसंधान द्वारा मान्यता प्राप्त है। कोई विश्वास आवश्यक नहीं। कोई शुल्क नहीं। कोई मत नहीं।",
    quote: "कोई शुल्क नहीं। कोई धर्म नहीं। कोई मत नहीं।",
    quoteAccent: "सिर्फ परिणाम।",
  },
  stats: {
    label: "साक्ष्य-आधारित",
    heading: "अनुसंधान क्या कहता है",
  },
  cta: {
    label: "निःशुल्क कार्यक्रम",
    heading: "इसे अपने विद्यालय में लाएँ",
    sub: "भारत भर में ३९,६०३+ विद्यालयों से जुड़ें। कोई लागत नहीं। कोई बाध्यता नहीं।",
    submit: "हमारा निःशुल्क सत्र निर्धारित करें",
    privacy: "कोई स्पैम नहीं। हमारा स्वयंसेवक समन्वयक २४ घंटों में संपर्क करेगा।",
    success: "अनुरोध प्राप्त हुआ",
    successSub: "हमारा स्वयंसेवक समन्वयक २४ घंटों में आपसे संपर्क करेगा।",
  },
  footer: {
    tagline: "स्वस्थ मन · प्रसन्न हृदय · बेहतर कल",
  },
};

// TODO: Gemini translation needed — 19 languages below use English as fallback
const stub = en;

export const translations: Record<Lang, TranslationShape> = {
  en,
  mr,
  hi,
  bn: stub,   // Bengali
  te: stub,   // Telugu
  ta: stub,   // Tamil
  ur: stub,   // Urdu
  gu: stub,   // Gujarati
  kn: stub,   // Kannada
  or: stub,   // Odia
  ml: stub,   // Malayalam
  pa: stub,   // Punjabi
  as: stub,   // Assamese
  mai: stub,  // Maithili
  sa: stub,   // Sanskrit
  kok: stub,  // Konkani
  ne: stub,   // Nepali
  sd: stub,   // Sindhi
  doi: stub,  // Dogri
  mni: stub,  // Manipuri (Meitei)
  sat: stub,  // Santali
  ks: stub,   // Kashmiri
  brx: stub,  // Bodo
};
