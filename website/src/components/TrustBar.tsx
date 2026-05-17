import "./trustbar.css";

const institutions = [
  "King's College London",
  "National Institutes of Health, USA",
  "University of Exeter, UK",
  "Delhi University",
  "Philadelphia University",
  "Washington University",
  "Belapur Medical Research Center, India",
];

export default function TrustBar() {
  return (
    <section className="w-full bg-[#0F2A1E] py-8 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 flex flex-col gap-4">
        {/* Label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-[#B7E4C7]">
          Research Institutions
        </p>

        {/* Scrolling Container */}
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-6 animate-scroll">
            {institutions.map((inst, idx) => (
              <div key={idx} className="flex items-center gap-6 flex-shrink-0">
                <p className="text-sm font-medium text-white whitespace-nowrap">
                  {inst}
                </p>
                {idx < institutions.length - 1 && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                )}
              </div>
            ))}

            {/* Duplicate for seamless scroll */}
            {institutions.map((inst, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-6 flex-shrink-0">
                <p className="text-sm font-medium text-white whitespace-nowrap">
                  {inst}
                </p>
                {idx < institutions.length - 1 && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
