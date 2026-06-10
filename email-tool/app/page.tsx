"use client";

import { useState, useEffect } from "react";
import { Copy, Check, Download, Mail, Zap, Globe, RefreshCw, HelpCircle, ChevronRight, ChevronLeft, X } from "lucide-react";
import { generateEmail, EmailType, Language, Tone } from "@/lib/emails";

const EMAIL_TYPES = [
  { id: "cold_outreach", label: "Cold Outreach", icon: "📧", desc: "First contact with a school" },
  { id: "followup", label: "Follow-Up", icon: "🔁", desc: "Didn't hear back?" },
  { id: "government", label: "Government / Formal", icon: "🏛️", desc: "Official school authority" },
  { id: "parent_circular", label: "Parent Circular", icon: "👨‍👩‍👧", desc: "Letter to parents" },
  { id: "thank_you", label: "Thank You", icon: "🙏", desc: "After approval" },
  { id: "partnership", label: "Partnership", icon: "🤝", desc: "NGO / trust collaboration" },
];

const LANGS = [
  { id: "en", label: "English", flag: "🇬🇧" },
  { id: "mr", label: "मराठी", flag: "🇮🇳" },
  { id: "hi", label: "हिंदी", flag: "🇮🇳" },
];

const TONES = [
  { id: "formal", label: "Formal", desc: "Official, respected" },
  { id: "warm", label: "Warm", desc: "Friendly, human" },
  { id: "urgent", label: "Urgent", desc: "Time-sensitive" },
];

const TOUR_STEPS = [
  {
    title: "Jai Shree Mataji 🙏",
    content: "Welcome! Jai Shree Mataji. This tool is dedicated to helping you draft polite, professional, and science-backed outreach letters to school authorities for proposing free meditation programs.",
    targetId: null
  },
  {
    title: "1. Select Template Type",
    content: "Choose from Cold Outreach, Follow-Ups, Parent Circulars, or formal Government requests.",
    targetId: "tour-email-type"
  },
  {
    title: "2. Set Language & Tone",
    content: "Draft instantly in English, Marathi, or Hindi, and set the appropriate communication tone.",
    targetId: "tour-options"
  },
  {
    title: "3. Input School Info",
    content: "Enter the principal's name, school name, and city. These details are merged directly into the template.",
    targetId: "tour-fields"
  },
  {
    title: "4. Generate Draft",
    content: "Click this button to compile the draft with peer-reviewed scientific citations (e.g. King's College London, AIIMS) and government order approvals.",
    targetId: "tour-generate"
  },
  {
    title: "5. Review, Share & Copy",
    content: "Once generated, you can copy the subject or body, download it as a text file, or open it directly in WhatsApp or Gmail.",
    targetId: "tour-preview"
  }
];

function Field({ label, value, onChange, placeholder, type = "text" }: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder: string; type?: string;
}) {
  return (
    <div>
      <label className="text-xs text-[#6B7280] block mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2.5 rounded-lg border border-[#E5E5E0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#52B788]"
      />
    </div>
  );
}

export default function HomePage() {
  const [type, setType] = useState<EmailType>("cold_outreach");
  const [lang, setLang] = useState<Language>("en");
  const [tone, setTone] = useState<Tone>("formal");
  const [principalName, setPrincipalName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [city, setCity] = useState("");
  const [studentCount, setStudentCount] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [customNote, setCustomNote] = useState("");
  const [result, setResult] = useState<{ subject: string; body: string } | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  // Onboarding Tour States
  const [tourActive, setTourActive] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  const [coords, setCoords] = useState<{ top: number; left: number; width: number; height: number } | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Check if user has seen the tour before
    const hasSeenTour = localStorage.getItem("sahaja_yoga_tour_seen");
    if (!hasSeenTour) {
      setTourActive(true);
    }

    // Set initial window width and track resize
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute element bounding coordinates relative to viewport (fixed coordinates)
  useEffect(() => {
    if (!tourActive) {
      setCoords(null);
      return;
    }
    const targetId = TOUR_STEPS[tourStep].targetId;
    if (!targetId) {
      setCoords(null); // Welcome step is centered
      return;
    }

    const updateCoords = (scrollToo = false) => {
      const el = document.getElementById(targetId);
      if (el) {
        const rect = el.getBoundingClientRect();
        setCoords({
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height
        });
        
        if (scrollToo) {
          // Auto scroll elements to center smoothly only on step load
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    };

    // Delay slightly to handle rendering/transitions
    const timer = setTimeout(() => updateCoords(true), 150);

    const handleResizeOrScroll = () => updateCoords(false);

    window.addEventListener("resize", handleResizeOrScroll);
    window.addEventListener("scroll", handleResizeOrScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResizeOrScroll);
      window.removeEventListener("scroll", handleResizeOrScroll);
    };
  }, [tourStep, tourActive]);

  const startTour = () => {
    setTourStep(0);
    setTourActive(true);
  };

  const closeTour = () => {
    setTourActive(false);
    localStorage.setItem("sahaja_yoga_tour_seen", "true");
  };

  const nextStep = () => {
    if (tourStep < TOUR_STEPS.length - 1) {
      setTourStep(tourStep + 1);
    } else {
      closeTour();
    }
  };

  const prevStep = () => {
    if (tourStep > 0) {
      setTourStep(tourStep - 1);
    }
  };

  const generate = () => {
    setResult(generateEmail({ type, language: lang, tone, principalName, schoolName,
      city, schoolType: "School", studentCount, senderName, senderPhone, customNote }));
  };

  const copy = async (what: string) => {
    if (!result) return;
    const text = what === "all" ? `Subject: ${result.subject}\n\n${result.body}`
      : what === "subject" ? result.subject : result.body;
    await navigator.clipboard.writeText(text);
    setCopied(what);
    setTimeout(() => setCopied(null), 2000);
  };

  const download = () => {
    if (!result) return;
    const blob = new Blob([`Subject: ${result.subject}\n\n${result.body}`], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `sahajayoga-email-${type}.txt`;
    a.click();
  };

  // Tooltip position style on Desktop
  const getTooltipStyle = (): React.CSSProperties => {
    const defaultStyle: React.CSSProperties = {
      transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
    };

    if (!coords) {
      // Centered welcome step styling
      return {
        ...defaultStyle,
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90%",
        maxWidth: "420px"
      };
    }

    const isMobile = windowWidth <= 900;
    if (isMobile) {
      // On mobile, position dynamically above or below the spotlight to prevent collision
      const placeAbove = coords.top > (window.innerHeight || 800) / 2;
      if (placeAbove) {
        return {
          ...defaultStyle,
          top: `${coords.top + window.scrollY - 16}px`,
          left: "50%",
          transform: "translate(-50%, -100%)", // Pulls it directly above the target
          width: "calc(100vw - 32px)",
          maxWidth: "360px"
        };
      } else {
        return {
          ...defaultStyle,
          top: `${coords.top + coords.height + 16 + window.scrollY}px`,
          left: "50%",
          transform: "translateX(-50%)", // Stacks below target
          width: "calc(100vw - 32px)",
          maxWidth: "360px"
        };
      }
    } else {
      // Desktop absolute layout relative to scroll
      const placeRight = TOUR_STEPS[tourStep].targetId !== "tour-preview";
      if (placeRight) {
        return {
          ...defaultStyle,
          top: coords.top + window.scrollY,
          left: coords.left + coords.width + 16 + window.scrollX,
        };
      } else {
        // Step 5 (tour-preview) tooltip overlays on the left side inside the panel to avoid blocking / sidebar overlap
        return {
          ...defaultStyle,
          top: coords.top + window.scrollY + 20,
          left: coords.left + window.scrollX + 20,
        };
      }
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "#FAFAF7", position: "relative" }}>
      
      {/* 1. Full-Screen Backdrop Overlay (Welcome step or fallback) */}
      {tourActive && !coords && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
          background: "rgba(15, 42, 30, 0.4)", backdropFilter: "blur(4px)", zIndex: 1000
        }} />
      )}

      {/* 2. Hardware-Accelerated 4-Panel Cutout blurs around the active spotlight element */}
      {tourActive && coords && (
        <>
          {/* Top segment */}
          <div style={{
            position: "fixed", top: 0, left: 0, width: "100vw", height: coords.top,
            background: "rgba(15, 42, 30, 0.45)", backdropFilter: "blur(4.5px)", zIndex: 1000, pointerEvents: "auto",
            transition: "all 0.25s ease-out"
          }} />
          
          {/* Bottom segment */}
          <div style={{
            position: "fixed", top: coords.top + coords.height, left: 0, width: "100vw", height: `calc(100vh - ${coords.top + coords.height}px)`,
            background: "rgba(15, 42, 30, 0.45)", backdropFilter: "blur(4.5px)", zIndex: 1000, pointerEvents: "auto",
            transition: "all 0.25s ease-out"
          }} />
          
          {/* Left segment */}
          <div style={{
            position: "fixed", top: coords.top, left: 0, width: coords.left, height: coords.height,
            background: "rgba(15, 42, 30, 0.45)", backdropFilter: "blur(4.5px)", zIndex: 1000, pointerEvents: "auto",
            transition: "all 0.25s ease-out"
          }} />
          
          {/* Right segment */}
          <div style={{
            position: "fixed", top: coords.top, left: coords.left + coords.width, width: `calc(100vw - ${coords.left + coords.width}px)`, height: coords.height,
            background: "rgba(15, 42, 30, 0.45)", backdropFilter: "blur(4.5px)", zIndex: 1000, pointerEvents: "auto",
            transition: "all 0.25s ease-out"
          }} />
          
          {/* Spotlight green highlight overlay */}
          <div style={{
            position: "absolute",
            top: coords.top + window.scrollY - 4,
            left: coords.left + window.scrollX - 4,
            width: coords.width + 8,
            height: coords.height + 8,
            borderRadius: 12,
            border: "3.5px solid #52B788",
            boxShadow: "0 0 15px rgba(82, 183, 136, 0.9)",
            zIndex: 1001,
            pointerEvents: "none",
            transition: "all 0.25s ease-out"
          }} />
        </>
      )}

      {/* 3. Walkthrough Tooltip Message Box */}
      {tourActive && (
        <div className="tour-tooltip" style={{
          ...getTooltipStyle(),
          ...(tourStep === 0 ? {
            width: "90%",
            maxWidth: "440px",
            border: "3.5px solid #C9A84C",
            padding: "24px 28px",
            boxShadow: "0 25px 30px -5px rgba(0, 0, 0, 0.45), 0 15px 15px -5px rgba(0, 0, 0, 0.45)",
          } : {})
        }}>
          {tourStep === 0 && (
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
              <div style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                background: "rgba(201, 168, 76, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1.5px solid #C9A84C"
              }}>
                <span style={{ fontSize: 24 }}>🙏</span>
              </div>
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: tourStep === 0 ? "#C9A84C" : "#52B788", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Step {tourStep + 1} of {TOUR_STEPS.length}
            </span>
            <button onClick={closeTour} style={{ border: "none", background: "none", cursor: "pointer", color: "#6B7280", padding: 2 }}>
              <X size={16} />
            </button>
          </div>
          
          <h4 style={{ 
            fontFamily: "DM Serif Display, Georgia, serif", 
            fontSize: tourStep === 0 ? 22 : 18, 
            color: "#0F2A1E", 
            marginBottom: 8, 
            fontWeight: "bold",
            textAlign: tourStep === 0 ? "center" : "left"
          }}>
            {TOUR_STEPS[tourStep].title}
          </h4>
          
          <p style={{ 
            fontSize: 13, 
            lineHeight: 1.6, 
            color: "#4B5563", 
            marginBottom: 20,
            textAlign: tourStep === 0 ? "center" : "left"
          }}>
            {TOUR_STEPS[tourStep].content}
          </p>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button 
              onClick={closeTour} 
              style={{ border: "none", background: "none", color: "#9CA3AF", fontSize: 11, cursor: "pointer", fontWeight: 500 }}
            >
              Skip Walkthrough
            </button>
            
            <div style={{ display: "flex", gap: 8 }}>
              {tourStep > 0 && (
                <button 
                  onClick={prevStep} 
                  style={{ 
                    display: "flex", alignItems: "center", gap: 4, padding: "6px 12px", borderRadius: 8, 
                    border: "1px solid #E5E5E0", background: "white", color: "#4B5563", fontSize: 11, fontWeight: 600, cursor: "pointer"
                  }}
                >
                  <ChevronLeft size={13} /> Back
                </button>
              )}
              <button 
                onClick={nextStep} 
                style={{ 
                  display: "flex", alignItems: "center", gap: 6, padding: tourStep === 0 ? "8px 16px" : "6px 12px", borderRadius: 8, 
                  border: "none", background: tourStep === 0 ? "#C9A84C" : "#0F2A1E", 
                  color: tourStep === 0 ? "#0F2A1E" : "white", fontSize: tourStep === 0 ? 12 : 11, fontWeight: 700, cursor: "pointer"
                }}
              >
                {tourStep === TOUR_STEPS.length - 1 ? "Finish" : tourStep === 0 ? "Begin Tour" : "Next"} <ChevronRight size={13} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header Section */}
      <header style={{ background: "#0F2A1E", borderBottom: "1px solid #2D6A4F" }}>
        <div className="header-container" style={{ maxWidth: 1152, margin: "0 auto", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#52B788", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Mail size={18} color="#0F2A1E" />
            </div>
            <div>
              <h1 style={{ color: "white", fontSize: 18, fontFamily: "DM Serif Display, Georgia, serif", margin: 0 }}>Sahaja Yoga</h1>
              <p style={{ color: "#52B788", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>Email Drafter</p>
            </div>
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button 
              onClick={startTour} 
              style={{
                display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 8,
                border: "1px solid #52B788", background: "rgba(82, 183, 136, 0.1)", color: "#B7E4C7",
                cursor: "pointer", fontSize: 12, fontWeight: 600, transition: "background 0.2s"
              }}
            >
              <HelpCircle size={14} /> Quick Walkthrough
            </button>
            <span className="header-sub" style={{ color: "#B7E4C7", fontSize: 12 }}>Smart outreach · 3 languages</span>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 1152, margin: "0 auto", padding: "40px 24px" }}>
        <div className="email-grid">
          
          {/* LEFT PANEL */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            
            {/* Email Type */}
            <div id="tour-email-type" style={{ transition: "all 0.2s" }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7280", marginBottom: 10 }}>Email Type</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {EMAIL_TYPES.map((et) => (
                  <button key={et.id} onClick={() => setType(et.id as EmailType)}
                    style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 12,
                      border: type === et.id ? "2px solid #0F2A1E" : "2px solid #E5E5E0",
                      background: type === et.id ? "#0F2A1E" : "white", cursor: "pointer", textAlign: "left", width: "100%",
                      transition: "all 0.2s ease-in-out" }}>
                    <span style={{ fontSize: 18 }}>{et.icon}</span>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 600, color: type === et.id ? "white" : "#0F2A1E", margin: 0 }}>{et.label}</p>
                      <p style={{ fontSize: 11, color: type === et.id ? "#B7E4C7" : "#9CA3AF", margin: 0 }}>{et.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Language + Tone */}
            <div id="tour-options" className="options-grid" style={{ transition: "all 0.2s" }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7280", marginBottom: 8 }}>Language</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {LANGS.map((l) => (
                    <button key={l.id} onClick={() => setLang(l.id as Language)}
                      style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderRadius: 10,
                        border: lang === l.id ? "2px solid #52B788" : "2px solid #E5E5E0",
                        background: lang === l.id ? "#52B788" : "white", cursor: "pointer", fontSize: 13,
                        fontWeight: lang === l.id ? 600 : 400, color: lang === l.id ? "white" : "#1C1917", width: "100%", justifyContent: "flex-start",
                        transition: "all 0.2s ease-in-out" }}>
                      {l.flag} {l.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7280", marginBottom: 8 }}>Tone</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {TONES.map((t) => (
                    <button key={t.id} onClick={() => setTone(t.id as Tone)}
                      style={{ padding: "8px 12px", borderRadius: 10, textAlign: "left", cursor: "pointer",
                        border: tone === t.id ? "2px solid #C9A84C" : "2px solid #E5E5E0",
                        background: tone === t.id ? "#C9A84C" : "white", width: "100%",
                        transition: "all 0.2s ease-in-out" }}>
                      <p style={{ fontSize: 13, fontWeight: 600, margin: 0, color: tone === t.id ? "#0F2A1E" : "#1C1917" }}>{t.label}</p>
                      <p style={{ fontSize: 11, margin: 0, color: tone === t.id ? "#5C4810" : "#9CA3AF" }}>{t.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Fields */}
            <div id="tour-fields" style={{ transition: "all 0.2s" }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7280", marginBottom: 10 }}>School Details</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Field label="Principal / Contact Name" value={principalName} onChange={setPrincipalName} placeholder="e.g. Dr. Sharma" />
                <Field label="School Name *" value={schoolName} onChange={setSchoolName} placeholder="e.g. St. Xavier's School" />
                <Field label="City / District" value={city} onChange={setCity} placeholder="e.g. Nashik" />
                <Field label="Number of Students" value={studentCount} onChange={setStudentCount} placeholder="e.g. 1200" />
                <div className="sender-grid">
                  <Field label="Your Name" value={senderName} onChange={setSenderName} placeholder="Your name" />
                  <Field label="Your Phone" value={senderPhone} onChange={setSenderPhone} placeholder="Mobile" type="tel" />
                </div>
                <div>
                  <label style={{ fontSize: 12, color: "#6B7280", display: "block", marginBottom: 4 }}>Custom Note (optional)</label>
                  <textarea value={customNote} onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="Any specific detail or personal touch..."
                    rows={2}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: "1px solid #E5E5E0",
                      background: "white", fontSize: 13, fontFamily: "inherit", resize: "none", transition: "all 0.2s ease-in-out" }} />
                </div>
              </div>
            </div>

            <button id="tour-generate" onClick={generate}
              style={{ padding: "16px", borderRadius: 14, background: "#0F2A1E", color: "white",
                fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", display: "flex",
                alignItems: "center", justifyContent: "center", gap: 8, transition: "all 0.2s ease-in-out" }}>
              <Zap size={18} color="#C9A84C" />
              Generate Email
            </button>
          </div>

          {/* RIGHT PANEL */}
          <div id="tour-preview" style={{ display: "flex", flexDirection: "column", transition: "all 0.2s" }}>
            {!result ? (
              <div style={{ minHeight: 500, background: "white", borderRadius: 20, border: "1px solid #E5E5E0",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: "40px 20px", textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#F2F2ED", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mail size={28} color="#52B788" />
                </div>
                <h2 style={{ fontFamily: "DM Serif Display, Georgia, serif", fontSize: 26, color: "#0F2A1E", margin: 0 }}>Ready to Draft</h2>
                <p style={{ color: "#6B7280", fontSize: 14, maxWidth: 300, margin: "0 auto" }}>
                  Fill in school details and click Generate. Each email includes real research citations and govt. approval data.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
                  {["50+ Studies Cited", "Govt. Approved Data", "3 Languages", "6 Templates"].map((t) => (
                    <span key={t} style={{ padding: "4px 12px", borderRadius: 20, background: "#F2F2ED", fontSize: 12, fontWeight: 500 }}>{t}</span>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {/* Actions */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {[
                    { label: copied === "all" ? "Copied!" : "Copy All", action: () => copy("all"), bg: "#0F2A1E", color: "white", icon: copied === "all" ? <Check size={15}/> : <Copy size={15}/> },
                    { label: "Download", action: download, bg: "white", color: "#1C1917", border: "#E5E5E0", icon: <Download size={15}/> },
                    { label: "WhatsApp", action: () => window.open(`https://wa.me/?text=${encodeURIComponent("Subject: " + result.subject + "\n\n" + result.body)}`, "_blank"), bg: "#25D366", color: "white", icon: <Globe size={15}/> },
                    { label: "Regenerate", action: generate, bg: "white", color: "#1C1917", border: "#E5E5E0", icon: <RefreshCw size={15}/>, right: true },
                  ].map((btn) => (
                    <button key={btn.label} onClick={btn.action}
                      style={{ padding: "8px 14px", borderRadius: 10, background: btn.bg, color: btn.color,
                        border: btn.border ? `1px solid ${btn.border}` : "none", cursor: "pointer",
                        display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 500,
                        marginLeft: btn.right ? "auto" : undefined, transition: "all 0.2s ease-in-out" }}>
                      {btn.icon}{btn.label}
                    </button>
                  ))}
                </div>

                {/* Subject */}
                <div style={{ background: "white", borderRadius: 16, border: "1px solid #E5E5E0", padding: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7280" }}>Subject Line</span>
                    <button onClick={() => copy("subject")} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 8, border: "1px solid #E5E5E0", background: "white", cursor: "pointer", fontSize: 12, transition: "all 0.2s ease-in-out" }}>
                      {copied === "subject" ? <Check size={12}/> : <Copy size={12}/>}
                      {copied === "subject" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <p style={{ fontWeight: 600, color: "#0F2A1E", margin: 0 }}>{result.subject}</p>
                </div>

                {/* Body */}
                <div style={{ background: "white", borderRadius: 16, border: "1px solid #E5E5E0", padding: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7280" }}>Email Body</span>
                    <button onClick={() => copy("body")} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 8, border: "1px solid #E5E5E0", background: "white", cursor: "pointer", fontSize: 12, transition: "all 0.2s ease-in-out" }}>
                      {copied === "body" ? <Check size={12}/> : <Copy size={12}/>}
                      {copied === "body" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <pre style={{ whiteSpace: "pre-wrap", fontSize: 13, lineHeight: 1.7, color: "#1C1917", fontFamily: "DM Sans, sans-serif", margin: 0 }}>
                    {result.body}
                  </pre>
                </div>

                {/* Stats */}
                <div style={{ background: "#0F2A1E", borderRadius: 16, padding: "16px 20px", display: "flex", flexWrap: "wrap", gap: 24 }}>
                  {[
                    { v: result.body.split(/\s+/).length, l: "Words" },
                    { v: "4 refs", l: "Research citations" },
                    { v: "3 orders", l: "Govt. references" },
                    { v: `${Math.ceil(result.body.split(/\s+/).length / 200)} min`, l: "Read time" },
                  ].map((s) => (
                    <div key={s.l}>
                      <p style={{ color: "#C9A84C", fontSize: 20, fontWeight: 700, fontFamily: "DM Serif Display, serif", margin: 0 }}>{s.v}</p>
                      <p style={{ color: "#B7E4C7", fontSize: 11, margin: 0 }}>{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer style={{ borderTop: "1px solid #E5E5E0", background: "white", padding: "20px 24px", textAlign: "center", marginTop: 48 }}>
        <p style={{ color: "#6B7280", fontSize: 13, margin: 0 }}>
          Sahaja Yoga Email Drafter · Free tool ·{" "}
          <a href="https://sahajayogascience.vercel.app" style={{ color: "#52B788" }}>View the science →</a>
        </p>
      </footer>
    </div>
  );
}
