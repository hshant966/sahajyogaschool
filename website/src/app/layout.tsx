import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";

const BASE_URL = "https://sahajayogascience.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Sahaja Yoga Science | Peer-Reviewed Meditation Research for Schools",
    template: "%s | Sahaja Yoga Science",
  },
  description:
    "Sahaja Yoga meditation is backed by 50+ peer-reviewed studies from King's College London, NIH, AIIMS, and Delhi University. Approved in 39,603 Indian schools. Free program for schools — improves focus, reduces exam anxiety by 19.78%, and is non-religious.",
  keywords: [
    "Sahaja Yoga science",
    "meditation research schools",
    "Sahaja Yoga King's College London",
    "meditation for students",
    "mental silence neuroscience",
    "exam anxiety reduction meditation",
    "ADHD focus meditation",
    "Sahaja Yoga NIH research",
    "school meditation program India",
    "free meditation schools",
    "Telangana school meditation",
    "Sahaja Yoga peer reviewed",
    "brain science meditation",
    "student wellbeing program",
    "Sahaja Yoga benefits",
  ],
  authors: [{ name: "Sahaja Yoga Science" }],
  creator: "Sahaja Yoga Science",
  publisher: "Sahaja Yoga Science",
  category: "Education, Health, Neuroscience",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Sahaja Yoga Science",
    title: "Sahaja Yoga Science | Peer-Reviewed Meditation Research for Schools",
    description:
      "50+ peer-reviewed studies. 39,603 Indian schools approved. 19.78% reduction in exam anxiety. Free program for schools — non-religious, science-backed.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sahaja Yoga Science — Peer-reviewed meditation research for schools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahaja Yoga Science | Free Science-Backed Meditation for Schools",
    description:
      "King's College London research: 6 weeks of Sahaja Yoga = same focus improvement as ADHD medication. 100% free for schools.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Sahaja Yoga Science",
        description:
          "Peer-reviewed scientific research on Sahaja Yoga meditation for schools",
        inLanguage: "en-IN",
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Sahaja Yoga Science",
        url: BASE_URL,
        description:
          "Science-backed, non-religious meditation program for schools. Backed by 50+ peer-reviewed studies. Free for all schools.",
        sameAs: [],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Sahaja Yoga?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Sahaja Yoga is a meditation technique developed in 1970 that produces a verifiable neurological state called 'mental silence'. It is backed by 50+ peer-reviewed studies from institutions including King's College London, NIH, AIIMS, and Delhi University. It is 100% free, non-religious, and requires no equipment.",
            },
          },
          {
            "@type": "Question",
            name: "Is Sahaja Yoga meditation scientifically proven?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. Over 50 peer-reviewed studies have been published in international journals. King's College London research (2011) showed that 6 weeks of Sahaja Yoga produces the same improvement in children's focus as ADHD medication, with zero side effects. EEG and MRI studies confirm measurable changes in brain activity, cortisol levels, and theta wave patterns.",
            },
          },
          {
            "@type": "Question",
            name: "Is Sahaja Yoga a religion?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "No. Sahaja Yoga is a secular meditation technique. No belief system, religion, or spiritual practice is required. The program for schools contains no religious content and is approved by government bodies in India including Telangana State (39,603 schools), Haryana State (500+ schools), and Kendriya Vidyalaya (All India).",
            },
          },
          {
            "@type": "Question",
            name: "How does Sahaja Yoga help students?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Research shows: 19.78% reduction in exam anxiety within 6 weeks, improved focus equivalent to ADHD medication (King's College London), reduced amygdala activity (less fear and anger), increased melatonin for better sleep, improved social behavior, and zero side effects. The program is age-appropriate for students aged 6–18.",
            },
          },
          {
            "@type": "Question",
            name: "How much does the school meditation program cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "The Sahaja Yoga school program is completely free. There are no fees, subscriptions, equipment costs, or hidden charges. Volunteer-certified instructors visit schools at no cost.",
            },
          },
          {
            "@type": "Question",
            name: "Which government has approved Sahaja Yoga for schools?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Telangana State Government approved Sahaja Yoga in 39,603 schools (including 12,722 private schools) covering 61 lakh students (2023). Haryana State Government approved 500+ schools in Ambala District (2015). Kendriya Vidyalaya Sangathan issued All India approval covering central government schools across all states and union territories (2022).",
            },
          },
          {
            "@type": "Question",
            name: "What research institutions have studied Sahaja Yoga?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Research has been conducted at King's College London (UK), National Institutes of Health (NIH), USA, University of Exeter (UK), Delhi University (India), AIIMS (India), Philadelphia University (USA), Washington University (USA), and Belapur Medical Research Center (India), among others.",
            },
          },
        ],
      },
      {
        "@type": "EducationalOrganization",
        name: "Sahaja Yoga School Program",
        description:
          "Free, non-religious, science-backed meditation program for schools. Approved by Telangana, Haryana, and Kendriya Vidyalaya.",
        educationalCredentialAwarded: "None required",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "School Meditation Program",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Free School Meditation Session",
              price: "0",
              priceCurrency: "INR",
              description:
                "Certified volunteer instructors visit your school for a free guided meditation session.",
            },
          ],
        },
      },
      {
        "@type": "MedicalStudy",
        name: "Effect of Sahaja Yoga on Children's Attention and Focus",
        studyLocation: {
          "@type": "MedicalOrganization",
          name: "King's College London",
        },
        studySubject: {
          "@type": "MedicalCondition",
          name: "Attention Deficit / Focus in School Children",
        },
        outcome:
          "6 weeks of Sahaja Yoga meditation produces equivalent improvement in children's focus as ADHD medication, with zero side effects.",
        description:
          "Peer-reviewed study confirming measurable EEG theta wave increases and cortisol reduction in school-age children after 6 weeks of Sahaja Yoga practice.",
      },
    ],
  };

  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFAF7] text-[#1C1917]">
        <LanguageProvider>
          <Navigation />
          <main className="flex-1" role="main" aria-label="Sahaja Yoga Science content">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
