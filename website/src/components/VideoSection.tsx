"use client";

import { motion, easeOut } from "framer-motion";
import { Play } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

interface PlaylistVideo {
  part: number;
  title: string;
  videoId: string;
}

const LOCALIZED_VIDEO_DATA: Record<string, {
  part1Title: string;
  continueText: string;
  channelNote: string;
  playlist: { part: number; title: string; videoId: string }[];
}> = {
  en: {
    part1Title: "Part 1: Introduction",
    continueText: "Continue the series",
    channelNote: "All videos from the official Shri Mataji Nirmala Devi YouTube channel",
    playlist: [
      { part: 2, title: "Body", videoId: "M1_RrUGmNlk" },
      { part: 3, title: "The Brain", videoId: "3loz19_PUeU" },
      { part: 4, title: "Health", videoId: "xscl5M8xuUg" },
      { part: 5, title: "Illness", videoId: "yumnEGS-1oc" },
      { part: 6, title: "Conclusions", videoId: "VDgTAVUOc6A" },
    ]
  },
  mr: {
    part1Title: "भाग १: परिचय",
    continueText: "मालिका पुढे पहा",
    channelNote: "सर्व व्हिडिओ अधिकृत श्री माताजी निर्मला देवी युट्यूब चॅनेलवरून घेतलेले आहेत",
    playlist: [
      { part: 2, title: "शरीर", videoId: "M1_RrUGmNlk" },
      { part: 3, title: "मेंदू", videoId: "3loz19_PUeU" },
      { part: 4, title: "आरोग्य", videoId: "xscl5M8xuUg" },
      { part: 5, title: "आजारपण", videoId: "yumnEGS-1oc" },
      { part: 6, title: "निष्कर्ष", videoId: "VDgTAVUOc6A" },
    ]
  },
  hi: {
    part1Title: "भाग १: परिचय",
    continueText: "श्रृंखला जारी रखें",
    channelNote: "सभी वीडियो आधिकारिक श्री माताजी निर्मला देवी यूट्यूब चैनल से लिए गए हैं",
    playlist: [
      { part: 2, title: "शरीर", videoId: "M1_RrUGmNlk" },
      { part: 3, title: "मस्तिष्क", videoId: "3loz19_PUeU" },
      { part: 4, title: "स्वास्थ्य", videoId: "xscl5M8xuUg" },
      { part: 5, title: "बीमारी", videoId: "yumnEGS-1oc" },
      { part: 6, title: "निष्कर्ष", videoId: "VDgTAVUOc6A" },
    ]
  },
  gu: {
    part1Title: "ભાગ ૧: પરિચય",
    continueText: "શ્રેણી ચાલુ રાખો",
    channelNote: "બધા વિડીયો સત્તાવાર શ્રી માતાજી નિર્મલા દેવી યુટ્યુબ ચેનલ પરથી લેવામાં આવ્યા છે",
    playlist: [
      { part: 2, title: "શરીર", videoId: "M1_RrUGmNlk" },
      { part: 3, title: "મગજ", videoId: "3loz19_PUeU" },
      { part: 4, title: "આરોગ્ય", videoId: "xscl5M8xuUg" },
      { part: 5, title: "બીમારી", videoId: "yumnEGS-1oc" },
      { part: 6, title: "નિષ્કર્ષ", videoId: "VDgTAVUOc6A" },
    ]
  },
  ta: {
    part1Title: "பாகம் 1: அறிமுகம்",
    continueText: "தொடரைத் தொடரவும்",
    channelNote: "அனைத்து வீடியோக்களும் ஸ்ரீ மாதாஜி நிர்மலா தேவி அதிகாரப்பூர்வ யூடியூப் சேனலில் இருந்து எடுக்கப்பட்டவை",
    playlist: [
      { part: 2, title: "உடல்", videoId: "M1_RrUGmNlk" },
      { part: 3, title: "மூளை", videoId: "3loz19_PUeU" },
      { part: 4, title: "ஆரோக்கியம்", videoId: "xscl5M8xuUg" },
      { part: 5, title: "நோய்", videoId: "yumnEGS-1oc" },
      { part: 6, title: "முடிவுகள்", videoId: "VDgTAVUOc6A" },
    ]
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export default function VideoSection() {
  const { lang } = useLang();
  const t = translations[lang];
  const vData = LOCALIZED_VIDEO_DATA[lang] || LOCALIZED_VIDEO_DATA["en"];

  return (
    <section className="w-full bg-[#0F2A1E] py-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section Label */}
        <motion.div
          className="flex items-center gap-2 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#52B788]">
            {t.nav.research}
          </span>
          <div className="w-2 h-2 rounded-full bg-[#52B788]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-serif text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {t.videoSection.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-[#C9A84C] mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t.videoSection.subtitle}
        </motion.p>

        {/* Featured Video */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube-nocookie.com/embed/nIdgQ-xAXEw?controls=1&modestbranding=1&rel=0"
                title={vData.part1Title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p className="text-center text-white mt-4 font-medium">{vData.part1Title}</p>
        </motion.div>

        {/* Playlist Grid */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">
            {vData.continueText}
          </h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {vData.playlist.map((video) => (
              <motion.a
                key={video.videoId}
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group relative rounded-lg overflow-hidden bg-[#1C1917] hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {/* YouTube Thumbnail */}
                <div className="relative bg-[#1C1917] aspect-video flex items-center justify-center overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                    alt={`Part ${video.part}: ${video.title}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Overlay + Play Icon */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <Play
                      className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 fill-white"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-3">
                  <p className="text-xs font-semibold text-[#52B788] uppercase tracking-wide">
                    Part {video.part}
                  </p>
                  <p className="text-sm font-medium text-white mt-1 line-clamp-2">
                    {video.title}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.p
          className="text-center text-[#9CA3AF] text-sm mt-16 pt-8 border-t border-[#2D3E35]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {vData.channelNote}
        </motion.p>
      </div>
    </section>
  );
}
