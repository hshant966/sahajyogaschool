# Gemini Translation Prompt
## Instructions: Paste this entire prompt into Gemini 1.5 Pro or 2.0 Flash

---

You are a professional translator specializing in Indian languages. I need TypeScript translation objects for a school outreach website promoting Sahaja Yoga meditation — a science-backed, non-religious, government-authorized, 100% free program for schools.

**Context:** This is a serious educational website targeting school principals, teachers, and parents in India. The tone must be formal, trustworthy, and education-appropriate. NOT spiritual or religious in tone. The program is scientific and government-approved.

**English source (reference):**

```typescript
{
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
    body: "A peer-reviewed 6-week program showed measurable improvements in children's attention, focus, and behavior — confirmed by published research in clinical journals.",
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
}
```

**Marathi reference (for tone/style calibration):**
```typescript
{
  nav: { research: "संशोधन", benefits: "फायदे", schools: "शाळांसाठी", contact: "संपर्क", cta: "सत्र मागवा" },
  hero: {
    label: "समीक्षित संशोधन",
    headline: "मानसिक शांततेचे विज्ञान",
    subline: "King's College London · NIH Washington DC · दिल्ली विद्यापीठ यांनी सिद्ध",
    body: "समीक्षित ६-आठवड्यांच्या कार्यक्रमाने मुलांच्या लक्ष, एकाग्रता आणि वर्तनात मोजता येणारी सुधारणा दाखवली — नैदानिक जर्नल्समधील प्रकाशित संशोधनाने पुष्टी.",
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
  stats: { label: "पुराव्यावर आधारित", heading: "संशोधन काय सांगते" },
  cta: {
    label: "मोफत कार्यक्रम",
    heading: "हे तुमच्या शाळेत आणा",
    sub: "भारतभर ३९,६०३+ शाळांसोबत सामील व्हा. कोणतीही किंमत नाही. कोणतेही बंधन नाही.",
    submit: "आमचे मोफत सत्र निश्चित करा",
    privacy: "स्पॅम नाही. आमचा स्वयंसेवक समन्वयक २४ तासांत संपर्क करेल.",
    success: "विनंती प्राप्त झाली",
    successSub: "आमचा स्वयंसेवक समन्वयक २४ तासांत तुमच्याशी संपर्क साधेल.",
  },
  footer: { tagline: "निरोगी मन · आनंदी हृदय · उज्ज्वल उद्या" },
}
```

---

**Your task:** Translate the English source into each of the 19 languages below. Output valid TypeScript object literals only — no explanations, no comments, just code. Use the EXACT TypeScript variable names shown in the format example below.

**Critical rules:**
1. Keep proper nouns untranslated: "King's College London", "NIH Washington DC", "Sahaja Yoga", "Delhi University"
2. Numbers stay as Arabic numerals: 39,603+ / 24 / 6
3. Tone: formal, educational, trustworthy — NOT devotional or spiritual
4. The `headline1` / `headline2` pair must preserve the 2-line dramatic structure ("Not X. / A science.")
5. `footer.tagline` can be adapted — not literal translation. Use something poetic/meaningful for education in that language
6. For languages with native numeral systems (Bengali, Odia, etc.) you MAY use native numerals where they feel natural, but Arabic numerals are also acceptable

**Output format:**
```typescript
const bn: TranslationShape = {
  nav: { ... },
  hero: { ... },
  whatIs: { ... },
  stats: { ... },
  cta: { ... },
  footer: { ... },
};
```

**Languages to translate (19 total):**

1. `bn` — Bengali (বাংলা)
2. `te` — Telugu (తెలుగు)
3. `ta` — Tamil (தமிழ்)
4. `ur` — Urdu (اردو) — note: RTL script, right-to-left
5. `gu` — Gujarati (ગુજરાતી)
6. `kn` — Kannada (ಕನ್ನಡ)
7. `or` — Odia (ଓଡ଼ିଆ)
8. `ml` — Malayalam (മലയാളം)
9. `pa` — Punjabi/Gurmukhi (ਪੰਜਾਬੀ)
10. `as` — Assamese (অসমীয়া)
11. `mai` — Maithili (मैथिली)
12. `sa` — Sanskrit (संस्कृतम्) — use classical Sanskrit, not modern Hindi transliteration
13. `kok` — Konkani (कोंकणी) — use Devanagari script
14. `ne` — Nepali (नेपाली)
15. `sd` — Sindhi (سنڌي) — use Perso-Arabic script
16. `doi` — Dogri (डोगरी) — use Devanagari script
17. `mni` — Manipuri/Meitei (মৈতৈলোন্) — use Bengali/Meitei script
18. `sat` — Santali (ᱥᱟᱱᱛᱟᱲᱤ) — use Ol Chiki script where possible, or Devanagari
19. `ks` — Kashmiri (كٲشُر) — use Perso-Arabic script (Nastaliq)

---

**Output all 19 as one continuous TypeScript block, each variable named exactly as the language code shown above (bn, te, ta, etc.).**

When done, I will paste the output directly into this file:
`src/lib/translations.ts`
replacing the `// TODO: Gemini translation needed — 19 languages below use English as fallback` section.
