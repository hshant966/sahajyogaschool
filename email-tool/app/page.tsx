"use client";

import { useState } from "react";
import { Copy, Check, Download, Mail, Zap, Globe, RefreshCw } from "lucide-react";
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

  return (
    <div className="min-h-screen" style={{ background: "#FAFAF7" }}>
      <header style={{ background: "#0F2A1E", borderBottom: "1px solid #2D6A4F" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#52B788", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Mail size={18} color="#0F2A1E" />
            </div>
            <div>
              <h1 style={{ color: "white", fontSize: 18, fontFamily: "DM Serif Display, Georgia, serif", margin: 0 }}>Sahaja Yoga</h1>
              <p style={{ color: "#52B788", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>Email Drafter</p>
            </div>
          </div>
          <span style={{ color: "#B7E4C7", fontSize: 12 }}>Smart outreach · 3 languages · Real research citations</span>
        </div>
      </header>

      <main style={{ maxWidth: 1152, margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 32 }} className="email-grid">
          {/* LEFT */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Email Type */}
            <div>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7280", marginBottom: 10 }}>Email Type</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {EMAIL_TYPES.map((et) => (
                  <button key={et.id} onClick={() => setType(et.id as EmailType)}
                    style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 12,
                      border: type === et.id ? "2px solid #0F2A1E" : "2px solid #E5E5E0",
                      background: type === et.id ? "#0F2A1E" : "white", cursor: "pointer", textAlign: "left" }}>
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
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7280", marginBottom: 8 }}>Language</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {LANGS.map((l) => (
                    <button key={l.id} onClick={() => setLang(l.id as Language)}
                      style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderRadius: 10,
                        border: lang === l.id ? "2px solid #52B788" : "2px solid #E5E5E0",
                        background: lang === l.id ? "#52B788" : "white", cursor: "pointer", fontSize: 13,
                        fontWeight: lang === l.id ? 600 : 400, color: lang === l.id ? "white" : "#1C1917" }}>
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
                        background: tone === t.id ? "#C9A84C" : "white" }}>
                      <p style={{ fontSize: 13, fontWeight: 600, margin: 0, color: tone === t.id ? "#0F2A1E" : "#1C1917" }}>{t.label}</p>
                      <p style={{ fontSize: 11, margin: 0, color: tone === t.id ? "#5C4810" : "#9CA3AF" }}>{t.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Fields */}
            <div>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7280", marginBottom: 10 }}>School Details</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Field label="Principal / Contact Name" value={principalName} onChange={setPrincipalName} placeholder="e.g. Dr. Sharma" />
                <Field label="School Name *" value={schoolName} onChange={setSchoolName} placeholder="e.g. St. Xavier's School" />
                <Field label="City / District" value={city} onChange={setCity} placeholder="e.g. Nashik" />
                <Field label="Number of Students" value={studentCount} onChange={setStudentCount} placeholder="e.g. 1200" />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  <Field label="Your Name" value={senderName} onChange={setSenderName} placeholder="Your name" />
                  <Field label="Your Phone" value={senderPhone} onChange={setSenderPhone} placeholder="Mobile" type="tel" />
                </div>
                <div>
                  <label style={{ fontSize: 12, color: "#6B7280", display: "block", marginBottom: 4 }}>Custom Note (optional)</label>
                  <textarea value={customNote} onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="Any specific detail or personal touch..."
                    rows={2}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: "1px solid #E5E5E0",
                      background: "white", fontSize: 13, fontFamily: "inherit", resize: "none" }} />
                </div>
              </div>
            </div>

            <button onClick={generate}
              style={{ padding: "16px", borderRadius: 14, background: "#0F2A1E", color: "white",
                fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", display: "flex",
                alignItems: "center", justifyContent: "center", gap: 8 }}>
              <Zap size={18} color="#C9A84C" />
              Generate Email
            </button>
          </div>

          {/* RIGHT */}
          <div>
            {!result ? (
              <div style={{ minHeight: 500, background: "white", borderRadius: 20, border: "1px solid #E5E5E0",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: 40, textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#F2F2ED", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mail size={28} color="#52B788" />
                </div>
                <h2 style={{ fontFamily: "DM Serif Display, Georgia, serif", fontSize: 26, color: "#0F2A1E", margin: 0 }}>Ready to Draft</h2>
                <p style={{ color: "#6B7280", fontSize: 14, maxWidth: 300, margin: 0 }}>
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
                        marginLeft: btn.right ? "auto" : undefined }}>
                      {btn.icon}{btn.label}
                    </button>
                  ))}
                </div>

                {/* Subject */}
                <div style={{ background: "white", borderRadius: 16, border: "1px solid #E5E5E0", padding: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7280" }}>Subject Line</span>
                    <button onClick={() => copy("subject")} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 8, border: "1px solid #E5E5E0", background: "white", cursor: "pointer", fontSize: 12 }}>
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
                    <button onClick={() => copy("body")} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 8, border: "1px solid #E5E5E0", background: "white", cursor: "pointer", fontSize: 12 }}>
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
