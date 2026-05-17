const footerLinks = [
  { label: "Research", href: "#research" },
  { label: "Benefits", href: "#benefits" },
  { label: "For Schools", href: "#schools" },
  { label: "Contact", href: "#contact" },
];

const institutions = [
  "King's College London",
  "National Institutes of Health, USA",
  "University of Exeter, UK",
  "Delhi University",
  "Philadelphia University",
  "Washington University",
  "Belapur Medical Research Center, India",
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F2A1E] text-white">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-[#2D6A4F]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-full bg-[#2D6A4F] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#52B788]" />
              </div>
              <span className="font-serif text-base font-semibold text-white">
                Sahaja Yoga Science
              </span>
            </div>
            <p className="text-[#B7E4C7] text-sm leading-relaxed max-w-xs">
              Science-backed meditation for schools. 100% free. Non-religious. Government approved.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["100% Free", "Non-Religious", "Govt. Approved"].map((b) => (
                <span key={b} className="text-xs px-3 py-1 rounded-full bg-[#1a3d2b] text-[#B7E4C7] border border-[#2D6A4F]">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-base font-semibold mb-5 text-white">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[#B7E4C7] hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Institutions */}
          <div>
            <h3 className="font-serif text-base font-semibold mb-5 text-white">Research Institutions</h3>
            <ul className="space-y-2">
              {institutions.map((inst) => (
                <li key={inst} className="text-[#B7E4C7] text-sm flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#C9A84C] flex-shrink-0" />
                  {inst}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7280] text-sm">
            © 2024 Sahaja Yoga Science. Research compiled for educational purposes.
          </p>
          <p className="text-[#6B7280] text-xs">
            All research citations available upon request.
          </p>
        </div>
      </div>
    </footer>
  );
}
