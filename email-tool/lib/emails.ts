export type EmailType =
  | "cold_outreach"
  | "followup"
  | "government"
  | "partnership"
  | "media"
  | "thank_you"
  | "parent_circular";

export type Language = "en" | "mr" | "hi";
export type Tone = "formal" | "warm" | "urgent";

export interface EmailInput {
  type: EmailType;
  language: Language;
  tone: Tone;
  principalName: string;
  schoolName: string;
  city: string;
  schoolType: string;
  studentCount: string;
  senderName: string;
  senderPhone: string;
  customNote: string;
}

const STATS = {
  focus: "same improvement in focus as ADHD medication in just 6 weeks",
  anxiety: "19.78% reduction in exam anxiety",
  schools_tg: "39,603 schools in Telangana State",
  schools_hy: "500+ schools in Haryana",
  kv: "All India approval by Kendriya Vidyalaya Sangathan",
  research: "50+ peer-reviewed studies published in international journals",
  institutions: "King's College London, NIH (USA), AIIMS, and Delhi University",
  free: "100% free — no fees, no equipment, no obligation",
};

function subjectLine(type: EmailType, lang: Language, school: string): string {
  const subjects: Record<EmailType, Record<Language, string>> = {
    cold_outreach: {
      en: `Free Science-Backed Meditation Program for ${school} Students`,
      mr: `${school} विद्यार्थ्यांसाठी विनामूल्य ध्यान कार्यक्रम`,
      hi: `${school} के छात्रों के लिए निःशुल्क ध्यान कार्यक्रम`,
    },
    followup: {
      en: `Following Up: Free Meditation Program for ${school}`,
      mr: `अनुस्मारक: ${school} साठी विनामूल्य ध्यान कार्यक्रम`,
      hi: `अनुस्मरण: ${school} के लिए निःशुल्क ध्यान कार्यक्रम`,
    },
    government: {
      en: `Request: Implementation of Govt-Approved Meditation Program at ${school}`,
      mr: `विनंती: ${school} येथे शासन-मान्य ध्यान कार्यक्रम राबविणे`,
      hi: `अनुरोध: ${school} में सरकार-अनुमोदित ध्यान कार्यक्रम लागू करना`,
    },
    partnership: {
      en: `Partnership Proposal: Science-Backed Wellness Program for ${school}`,
      mr: `भागीदारी प्रस्ताव: ${school} साठी विज्ञान-आधारित कार्यक्रम`,
      hi: `साझेदारी प्रस्ताव: ${school} के लिए विज्ञान-आधारित कार्यक्रम`,
    },
    media: {
      en: `Press: 39,603 Schools Now Offer Free Evidence-Based Meditation Program`,
      mr: `वृत्त: ३९,६०३ शाळांमध्ये विनामूल्य ध्यान कार्यक्रम`,
      hi: `प्रेस: ३९,६०३ स्कूलों में निःशुल्क ध्यान कार्यक्रम`,
    },
    thank_you: {
      en: `Thank You — Sahaja Yoga Program at ${school}`,
      mr: `धन्यवाद — ${school} येथील सहज योग कार्यक्रम`,
      hi: `धन्यवाद — ${school} में सहज योग कार्यक्रम`,
    },
    parent_circular: {
      en: `Parent Information: Free Meditation Program Introduced at ${school}`,
      mr: `पालकांसाठी माहिती: ${school} मध्ये विनामूल्य ध्यान कार्यक्रम`,
      hi: `अभिभावक सूचना: ${school} में निःशुल्क ध्यान कार्यक्रम`,
    },
  };
  return subjects[type][lang];
}

function greeting(name: string, lang: Language, tone: Tone): string {
  if (!name) name = "Principal";
  if (lang === "en") {
    return tone === "warm"
      ? `Dear ${name},`
      : `Respected ${name},`;
  }
  if (lang === "mr") {
    return `आदरणीय ${name},`;
  }
  return `आदरणीय ${name},`;
}

function closingEN(sender: string, phone: string): string {
  return `Warm regards,
${sender || "Sahaja Yoga Volunteer Coordinator"}
${phone ? `📞 ${phone}` : ""}
Sahaja Yoga School Program
sahajayogascience.vercel.app`;
}

function closingMR(sender: string, phone: string): string {
  return `आदरपूर्वक,
${sender || "सहज योग स्वयंसेवक समन्वयक"}
${phone ? `📞 ${phone}` : ""}
सहज योग शाळा कार्यक्रम
sahajayogascience.vercel.app`;
}

function closingHI(sender: string, phone: string): string {
  return `सादर,
${sender || "सहज योग स्वयंसेवक समन्वयक"}
${phone ? `📞 ${phone}` : ""}
सहज योग विद्यालय कार्यक्रम
sahajayogascience.vercel.app`;
}

function closing(lang: Language, sender: string, phone: string): string {
  if (lang === "en") return closingEN(sender, phone);
  if (lang === "mr") return closingMR(sender, phone);
  return closingHI(sender, phone);
}

// ─── BODY GENERATORS ────────────────────────────────────────────────────────

function bodyColdEN(
  school: string,
  city: string,
  students: string,
  tone: Tone,
  note: string
): string {
  const count = students ? ` and its ${students} students` : "";
  const cityLine = city ? ` in ${city}` : "";
  const noteLine = note ? `\n\n${note}` : "";
  const toneOpen =
    tone === "urgent"
      ? `I am writing with some urgency because this opportunity directly addresses the exam stress and focus challenges your students face right now.`
      : tone === "warm"
      ? `I hope this message finds you well. I am reaching out because I believe this program could make a meaningful difference for your school community.`
      : `I am writing to introduce a science-backed meditation program that has already been implemented in thousands of schools across India.`;

  return `${toneOpen}

We are volunteers with the Sahaja Yoga School Program — a free, non-religious meditation initiative validated by ${STATS.institutions}.

WHY THIS MATTERS FOR ${school.toUpperCase()}${cityLine.toUpperCase()}:

• King's College London research confirms: students who practice Sahaja Yoga show ${STATS.focus}
• ${STATS.anxiety} documented within 6 weeks
• EEG and MRI brain scans show measurable improvements in prefrontal cortex activity — the area responsible for concentration, decision-making, and emotional regulation
• Increased melatonin and serotonin production leads to better sleep and reduced aggression
• Zero side effects. No medication. No dependency.

GOVERNMENT RECOGNITION:
✓ ${STATS.schools_tg} (2023)
✓ ${STATS.schools_hy} (2015)
✓ ${STATS.kv} (2022)

WHAT WE OFFER ${school.toUpperCase()}${count}:
• Certified volunteer instructors come to your school — free of cost
• Age-appropriate sessions (6–18 years)
• No equipment, no disruption to schedule
• Parent consent materials included
• Measurable outcomes reported within 6 weeks
• ${STATS.free}

This is not a belief system. It is a neurological technique with published, peer-reviewed evidence. Your students deserve access to it.${noteLine}

I would welcome 15 minutes of your time to share the research and demonstrate the practice. Would you be available for a brief call or visit this week?`;
}

function bodyColdMR(
  school: string,
  city: string,
  students: string,
  note: string
): string {
  const noteLine = note ? `\n\n${note}` : "";
  return `आम्ही सहज योग शाळा कार्यक्रमाचे स्वयंसेवक आहोत — किंग्ज कॉलेज लंडन, NIH अमेरिका, AIIMS आणि दिल्ली विद्यापीठाने संशोधनाने सिद्ध केलेले हे एक विनामूल्य, अधार्मिक ध्यान तंत्र आहे.

${school}${city ? ` (${city})` : ""}च्या विद्यार्थ्यांसाठी हे महत्त्वाचे का आहे:

• किंग्ज कॉलेज लंडनच्या संशोधनानुसार: सहज योग ध्यान करणारे विद्यार्थी केवळ ६ आठवड्यांत ADHD औषधाइतकीच एकाग्रता सुधारणा दाखवतात
• परीक्षेची चिंता १९.७८% कमी होते
• EEG आणि MRI मेंदू स्कॅनमध्ये प्रीफ्रंटल कॉर्टेक्सची क्रिया मोजता येते
• कोणताही दुष्परिणाम नाही. कोणतेही औषध नाही.

शासन मान्यता:
✓ तेलंगणा राज्य — ३९,६०३ शाळा (२०२३)
✓ हरियाणा राज्य — ५०० + शाळा (२०१५)
✓ केंद्रीय विद्यालय संघटना — संपूर्ण भारत (२०२२)

आम्ही ${school} येथे काय देतो:
• प्रमाणित स्वयंसेवक शिक्षक शाळेत येतात — पूर्णपणे विनामूल्य
• वयोगट ६ ते १८ वर्षे
• कोणतेही साहित्य लागत नाही
• पालकांसाठी संमती पत्रे उपलब्ध
• ६ आठवड्यांत मोजता येणारे परिणाम${noteLine}

मला फक्त १५ मिनिटे आपल्याशी बोलायचे आहे. या आठवड्यात भेट किंवा फोन कॉलसाठी आपण उपलब्ध आहात का?`;
}

function bodyColdHI(
  school: string,
  city: string,
  students: string,
  note: string
): string {
  const noteLine = note ? `\n\n${note}` : "";
  return `हम सहज योग विद्यालय कार्यक्रम के स्वयंसेवक हैं — किंग्स कॉलेज लंदन, NIH अमेरिका, AIIMS और दिल्ली विश्वविद्यालय द्वारा शोध-सिद्ध यह एक निःशुल्क, धर्मनिरपेक्ष ध्यान तकनीक है।

${school}${city ? ` (${city})` : ""} के छात्रों के लिए यह क्यों महत्वपूर्ण है:

• किंग्स कॉलेज लंदन शोध: सहज योग ध्यान करने वाले छात्र केवल ६ सप्ताह में ADHD दवा जितना एकाग्रता सुधार दिखाते हैं
• परीक्षा चिंता में १९.७८% की कमी दर्ज की गई
• EEG और MRI मस्तिष्क स्कैन में प्रीफ्रंटल कॉर्टेक्स की गतिविधि मापी जा सकती है
• कोई दुष्प्रभाव नहीं। कोई दवा नहीं।

सरकारी मान्यता:
✓ तेलंगाना राज्य — ३९,६०३ स्कूल (२०२३)
✓ हरियाणा राज्य — ५०० + स्कूल (२०१५)
✓ केंद्रीय विद्यालय संगठन — सम्पूर्ण भारत (२०२२)

${school} को क्या मिलेगा:
• प्रमाणित स्वयंसेवक शिक्षक स्कूल में आते हैं — पूर्णतः निःशुल्क
• आयु वर्ग ६ से १८ वर्ष
• कोई सामग्री आवश्यक नहीं
• अभिभावक सहमति पत्र उपलब्ध
• ६ सप्ताह में मापने योग्य परिणाम${noteLine}

मैं केवल १५ मिनट आपसे बात करना चाहूँगा। क्या आप इस सप्ताह मिलने या फ़ोन कॉल के लिए उपलब्ध हैं?`;
}

function bodyFollowupEN(school: string, note: string): string {
  const noteLine = note ? `\n\n${note}` : "";
  return `I wanted to follow up on my earlier message regarding the free Sahaja Yoga meditation program for ${school}.

I understand you receive many communications, so I will be brief.

Three things worth knowing:

1. PROVEN RESULTS — King's College London published peer-reviewed research showing children improve focus at the same rate as ADHD medication after just 6 weeks of Sahaja Yoga. This is measurable, reproducible data.

2. ZERO COST, ZERO OBLIGATION — Our volunteer instructors come to your school. You pay nothing. You commit to nothing beyond agreeing to one introductory session.

3. ALREADY IN 39,603 SCHOOLS — Telangana State Government (2023), Haryana State (2015), and Kendriya Vidyalaya All India (2022) have all independently reviewed and approved this program. These are decisions made by government officials who reviewed the evidence.

If the previous email got lost, I am happy to resend the full research summary. If you have concerns, I am available to address them directly.

A single 15-minute call is all I ask.${noteLine}`;
}

function bodyGovernmentEN(school: string, city: string, note: string): string {
  const noteLine = note ? `\n\n${note}` : "";
  return `I write to formally request implementation of the Sahaja Yoga Meditation Program at ${school}${city ? `, ${city}` : ""}.

This program carries official government recognition:

GOVERNMENT APPROVALS ON RECORD:
• Telangana State Government: Official order approving implementation in 39,603 schools (2023), covering 61 lakh students
• Haryana Education Department: Ambala District order for 500+ schools (2015)
• Kendriya Vidyalaya Sangathan: All India approval across all states and union territories (2022)

SCIENTIFIC BASIS:
The program is backed by ${STATS.research} from ${STATS.institutions}. Research confirms measurable neurological benefits including ${STATS.anxiety} and ${STATS.focus}.

PROGRAM DETAILS:
• Non-religious, secular technique — no beliefs required
• Age-appropriate for students 6–18 years
• Delivered by certified volunteer instructors at no cost
• No equipment, no curriculum changes, no disruption
• Parent consent documentation provided as standard

Copies of government orders and research publications are available upon request.

I respectfully request a meeting to discuss implementation at your institution.${noteLine}`;
}

function bodyThankYouEN(school: string, note: string): string {
  const noteLine = note ? `\n\n${note}` : "";
  return `Thank you for welcoming the Sahaja Yoga program at ${school}. Your decision to prioritize student mental wellbeing is one that will have measurable, lasting impact.

What happens next:

1. Our coordinator will contact you within 48 hours to schedule the first session
2. We will share parent information materials for distribution
3. The first session is introductory — no commitment beyond that is expected

Research from King's College London shows that results become measurable within 6 weeks. We will provide a simple feedback framework so your team can document outcomes.

If you need anything before then — additional research, certificates, or government approval documentation — please reach out directly.

Thank you for trusting us with your students.${noteLine}`;
}

function bodyParentEN(school: string, note: string): string {
  const noteLine = note ? `\n\n${note}` : "";
  return `Dear Parent / Guardian,

We are pleased to inform you that ${school} has introduced a free, science-backed meditation program for our students.

ABOUT THE PROGRAM:
The Sahaja Yoga meditation program is a non-religious, secular technique validated by peer-reviewed research at King's College London, NIH (USA), AIIMS, and Delhi University.

WHAT RESEARCH SHOWS:
• Improved focus and attention in school — equivalent to ADHD medication effect (King's College London, 2011)
• 19.78% reduction in exam anxiety within 6 weeks
• Better sleep quality and emotional regulation
• Zero side effects. No medication.

IMPORTANT FOR PARENTS:
• This is NOT a religious practice
• No beliefs or rituals are involved
• Sessions are conducted during school hours
• Your child's participation is welcomed but always voluntary

GOVERNMENT RECOGNITION:
This program is approved by Telangana State (39,603 schools), Haryana State (500+ schools), and Kendriya Vidyalaya All India.

For questions or to view the research, visit: sahajayogascience.vercel.app${noteLine}

Warm regards,
The Management
${school}`;
}

export function generateEmail(input: EmailInput): {
  subject: string;
  body: string;
} {
  const {
    type,
    language,
    tone,
    principalName,
    schoolName,
    city,
    studentCount,
    senderName,
    senderPhone,
    customNote,
  } = input;

  const school = schoolName || "your school";
  const subject = subjectLine(type, language, school);

  let bodyContent = "";

  if (type === "cold_outreach") {
    if (language === "en")
      bodyContent = bodyColdEN(school, city, studentCount, tone, customNote);
    else if (language === "mr")
      bodyContent = bodyColdMR(school, city, studentCount, customNote);
    else bodyContent = bodyColdHI(school, city, studentCount, customNote);
  } else if (type === "followup") {
    bodyContent = bodyFollowupEN(school, customNote);
  } else if (type === "government") {
    bodyContent = bodyGovernmentEN(school, city, customNote);
  } else if (type === "thank_you") {
    bodyContent = bodyThankYouEN(school, customNote);
  } else if (type === "parent_circular") {
    bodyContent = bodyParentEN(school, customNote);
  } else if (type === "partnership") {
    bodyContent = bodyColdEN(school, city, studentCount, tone, customNote);
  } else {
    bodyContent = bodyColdEN(school, city, studentCount, tone, customNote);
  }

  const greet = greeting(principalName, language, tone);
  const close = closing(language, senderName, senderPhone);

  const body = `${greet}\n\n${bodyContent}\n\n${close}`;

  return { subject, body };
}
