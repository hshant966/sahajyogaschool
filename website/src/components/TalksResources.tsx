"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Play, BookOpen, Mic } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const medicalTalks = [
  {
    date: "2000-06-19",
    displayDate: "19 June 2000",
    title: "NIH Medical Conference",
    location: "National Institutes of Health, Washington D.C., USA",
    flag: "🇺🇸",
    type: "conference",
    url: "https://www.amruta.org/2000/06/19/nih-medical-conference/",
    highlight: true,
  },
  {
    date: "1995-08-02",
    displayDate: "2 August 1995",
    title: "Medical Conference",
    location: "Ecological University of Bucharest, Romania",
    flag: "🇷🇴",
    type: "conference",
    url: "https://www.amruta.org/1995/08/02/medical-conference-at-ecological-university-of-bucharest-1995/",
  },
  {
    date: "1994-09-14",
    displayDate: "14 September 1994",
    title: "Medical Conference",
    location: "St. Petersburg, Russia",
    flag: "🇷🇺",
    type: "conference",
    url: "https://www.amruta.org/1994/09/14/medical-conference-in-st-petersburg-1994/",
  },
  {
    date: "1993-03-25",
    displayDate: "25 March 1993",
    title: "Medical Conference",
    location: "New Delhi, India",
    flag: "🇮🇳",
    type: "conference",
    url: "https://www.amruta.org/1993/03/25/1993-0325-medical-conference-new-delhi-india/",
  },
  {
    date: "1992-08-03",
    displayDate: "3 August 1992",
    title: "Medical Conference",
    location: "Moscow, Russia",
    flag: "🇷🇺",
    type: "conference",
    url: "https://www.amruta.org/1992/08/03/medical-conference-1992-moscow/",
  },
  {
    date: "1990-11-22",
    displayDate: "22 November 1990",
    title: "Doctors Conference",
    location: "Pune, India",
    flag: "🇮🇳",
    type: "conference",
    url: "https://www.amruta.org/1990/11/22/doctors-conference-pune-india-1990/",
  },
  {
    date: "1990-01-13",
    displayDate: "13 January 1990",
    title: "Press Conference & Scientific Discussion",
    location: "Mumbai, India",
    flag: "🇮🇳",
    type: "conference",
    url: "https://www.amruta.org/1990/01/13/press-conference-and-scientific-discussion-mumbai-1990/",
  },
  {
    date: "1997-04-06",
    displayDate: "6 April 1997",
    title: "Address to Doctors",
    location: "New Delhi, India",
    flag: "🇮🇳",
    type: "talk",
    url: "https://www.amruta.org/1997/04/06/address-to-doctors-in-new-delhi-1997/",
  },
  {
    date: "1984-01-31",
    displayDate: "31 January 1984",
    title: "Talk to Doctors at Medical College",
    location: "Sholapur, India",
    flag: "🇮🇳",
    type: "talk",
    url: "https://www.amruta.org/1984/01/31/talk-to-doctors-at-medical-college-in-sholapur-1984/",
  },
  {
    date: "1983-01-04",
    displayDate: "4 January 1983",
    title: "Address to Indian Medical Association",
    location: "Sholapur, India",
    flag: "🇮🇳",
    type: "talk",
    url: "https://www.amruta.org/1983/01/04/address-to-indian-medical-association-sholapur-1983/",
  },
];

const researchVideos = [
  {
    title: "Medical Research — Part 1: Introduction",
    presenter: "Prof. Katya Rubia, King's College London",
    date: "2026-04-25",
    displayDate: "25 April 2026",
    url: "https://www.amruta.org/2026/04/25/medical-research-into-the-benefits-of-sahaja-yoga-meditation-part-1-of-6-introduction-by-katya-rubia/",
    tag: "6-part series",
  },
  {
    title: "Golden Memories — Dr. Sandeep Rai & Dr. Madhur Rai",
    presenter: "Senior Sahaja Yoga Medical Practitioners",
    date: "2025-05-08",
    displayDate: "8 May 2025",
    url: "https://www.amruta.org/2025/05/08/golden-memories-with-shri-mataji-nirmala-devi-dr-sandeep-rai-and-dr-madhur-rai-reminisce/",
    tag: "testimony",
  },
  {
    title: "Golden Memories — Dr. Suresh Nigam",
    presenter: "Sahaja Yoga Medical Researcher",
    date: "2024-12-21",
    displayDate: "21 December 2024",
    url: "https://www.amruta.org/2024/12/21/golden-memories-sahaja-yoga-in-conversation-with-dr-suresh-nigam/",
    tag: "interview",
  },
];

type TalkType = { date: string; displayDate: string; title: string; location: string; flag: string; type: string; url: string; highlight?: boolean };

export default function TalksResources() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<"all" | "conference" | "talk">("all");

  useGSAP(
    () => {
      gsap.from(sectionRef.current?.querySelectorAll("[data-row]") ?? [], {
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
        opacity: 0,
        y: 20,
        stagger: 0.06,
        duration: 0.5,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  const filtered = filter === "all" ? medicalTalks : medicalTalks.filter((t) => t.type === filter);

  return (
    <section ref={sectionRef} className="w-full py-24 lg:py-32 bg-[#FAFAF7] border-t border-[#E5E5E0]">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#52B788]">
            Primary Sources
          </span>
          <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-[#0F2A1E] mt-3">
            Talks & Medical Conferences
          </h2>
          <p className="text-[#6B7280] mt-4 text-lg max-w-2xl">
            Original talks by Shri Mataji Nirmala Devi at medical conferences worldwide — with exact dates and source links. Click any entry to listen.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-3 mb-8">
          {(["all", "conference", "talk"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f
                  ? "bg-[#0F2A1E] text-white"
                  : "bg-[#F2F2ED] text-[#6B7280] hover:bg-[#E5E5E0]"
              }`}
            >
              {f === "all" ? "All" : f === "conference" ? "Medical Conferences" : "Doctor Talks"}
            </button>
          ))}
        </div>

        {/* Talks table */}
        <div className="rounded-2xl border border-[#E5E5E0] overflow-hidden bg-white">
          {/* Table header */}
          <div className="grid grid-cols-[120px_1fr_200px] bg-[#F2F2ED] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">
            <span>Date</span>
            <span>Event</span>
            <span>Location</span>
          </div>

          {filtered.map((talk: TalkType, i) => (
            <a
              key={i}
              data-row
              href={talk.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`grid grid-cols-[120px_1fr_200px] px-6 py-4 items-center border-t border-[#E5E5E0] hover:bg-[#FAFAF7] transition-colors group ${
                talk.highlight ? "bg-[#F0FDF4]" : ""
              }`}
            >
              <span className="text-sm font-mono text-[#9CA3AF]">{talk.displayDate.split(" ").slice(2).join(" ")} {talk.displayDate.split(" ")[1]}</span>
              <div className="flex items-center gap-3">
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                  talk.type === "conference"
                    ? "bg-[#B7E4C7] text-[#0F2A1E]"
                    : "bg-[#F0D98D] text-[#78350F]"
                }`}>
                  {talk.type === "conference" ? <Mic className="w-3 h-3" /> : <BookOpen className="w-3 h-3" />}
                  {talk.type === "conference" ? "Conference" : "Talk"}
                </span>
                <span className="font-medium text-[#1C1917] group-hover:text-[#0F2A1E]">
                  {talk.title}
                </span>
                {talk.highlight && (
                  <span className="px-2 py-0.5 bg-[#0F2A1E] text-white text-xs rounded-full">NIH</span>
                )}
                <ExternalLink className="w-3.5 h-3.5 text-[#9CA3AF] opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
              </div>
              <span className="text-sm text-[#6B7280]">
                {talk.flag} {talk.location.split(",").slice(-2).join(",")}
              </span>
            </a>
          ))}
        </div>

        {/* Research videos */}
        <div className="mt-16">
          <h3 className="font-serif text-3xl font-semibold text-[#0F2A1E] mb-8">
            Researcher Presentations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchVideos.map((v, i) => (
              <a
                key={i}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 border border-[#E5E5E0] hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#0F2A1E] flex items-center justify-center flex-shrink-0">
                    <Play className="w-3.5 h-3.5 text-white ml-0.5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#52B788]">
                    {v.tag}
                  </span>
                </div>
                <h4 className="font-serif text-lg font-semibold text-[#0F2A1E] mb-2 group-hover:text-[#2D6A4F] transition-colors">
                  {v.title}
                </h4>
                <p className="text-sm text-[#6B7280] mb-3">{v.presenter}</p>
                <p className="text-xs font-mono text-[#9CA3AF]">{v.displayDate}</p>
                <div className="mt-4 flex items-center gap-1 text-xs text-[#52B788] font-medium">
                  Listen on amruta.org <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Source note */}
        <p className="mt-10 text-xs text-[#9CA3AF] text-center">
          All talks sourced from{" "}
          <a href="https://www.amruta.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#52B788]">
            amruta.org
          </a>{" "}
          — the official archive of Shri Mataji's talks. Click any entry to access the original recording.
        </p>
      </div>
    </section>
  );
}
