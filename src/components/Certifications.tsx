import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Cpu, Database, ShieldCheck, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Certification {
  idx: string;
  title: string;
  issuer: string;
  date: string;
  type: "issued" | "expires";
  icon: LucideIcon;
  accent: string;       // tailwind text/border color for the icon glyph + ring
  credentialUrl?: string;
}

const certifications: Certification[] = [
  {
    idx: "01",
    title: "AI Fundamentals: Foundations for Understanding AI",
    issuer: "IBM SkillsBuild",
    date: "Mar 26, 2026",
    type: "issued",
    icon: Cpu,
    accent: "text-sky-300",
  },
  {
    idx: "02",
    title: "Data Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Apr 1, 2026",
    type: "issued",
    icon: BarChart3,
    accent: "text-rose-300",
  },
  {
    idx: "03",
    title: "Data Science Essentials With Python",
    issuer: "Cisco",
    date: "May 17, 2026",
    type: "issued",
    icon: BarChart3,
    accent: "text-cyan-300",
  },
  {
    idx: "04",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "Mar 24, 2026",
    type: "issued",
    icon: ShieldCheck,
    accent: "text-emerald-300",
  },
  {
    idx: "05",
    title: "IT Specialist - Cybersecurity",
    issuer: "Certiport, a Pearson VUE business",
    date: "May 21, 2031",
    type: "expires",
    icon: ShieldCheck,
    accent: "text-indigo-300",
  },
  {
    idx: "06",
    title: "IT Specialist - Databases",
    issuer: "Certiport, a Pearson VUE business",
    date: "May 16, 2030",
    type: "expires",
    icon: Database,
    accent: "text-amber-300",
  },
];

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="certifications" className="border-t border-white/[0.07] px-6 py-28 md:px-12">
      {/* Section divider */}
      <div className={`mb-16 flex items-center gap-4 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
        <span className="font-['Geist_Mono'] text-[10px] tracking-[0.3em] uppercase text-white/25">03</span>
        <div className="h-px flex-1 bg-white/[0.07]" />
        <span className="font-['Geist_Mono'] text-[10px] tracking-[0.3em] uppercase text-white/25">Certifications</span>
      </div>

      <h2 className={`mb-2 font-['Geist'] text-4xl font-[800] tracking-tight text-white md:text-5xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        Credentials
      </h2>
      <p className={`mb-16 font-['Geist_Mono'] text-xs text-white/25 transition-all duration-700 delay-150 ${visible ? "opacity-100" : "opacity-0"}`}>
        — {certifications.length} verified badges
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-px bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => {
          const Icon = cert.icon;
          return (
            <div
              key={cert.idx}
              data-hover
              className="group relative flex flex-col bg-black p-7 transition-colors duration-300 hover:bg-white/[0.02]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(20px)",
                transition: `opacity 0.5s ${i * 70}ms, transform 0.5s ${i * 70}ms, background 0.3s`,
              }}
            >
              {/* Index + status row */}
              <div className="mb-6 flex items-center justify-between">
                <span className="font-['Geist_Mono'] text-[11px] text-white/20 group-hover:text-white/40 transition-colors">
                  {cert.idx}
                </span>
                <span className="flex items-center gap-1.5 font-['Geist_Mono'] text-[9px] tracking-[0.15em] uppercase text-white/25">
                  <span className="h-1 w-1 rounded-full bg-emerald-400/70" />
                  Verified
                </span>
              </div>

              {/* Badge icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center border border-white/[0.08] bg-white/[0.02] transition-all duration-300 group-hover:scale-105 group-hover:border-white/20">
                <Icon className={`h-7 w-7 ${cert.accent} opacity-80 transition-opacity group-hover:opacity-100`} strokeWidth={1.5} />
              </div>

              {/* Title + issuer */}
              <h3 className="mb-1.5 font-['Geist'] text-base font-[700] leading-snug tracking-tight text-white/85 group-hover:text-white transition-colors">
                {cert.title}
              </h3>
              <p className="mb-4 font-['Geist_Mono'] text-[11px] text-white/35">{cert.issuer}</p>

              {/* Date */}
              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="font-['Geist_Mono'] text-[10px] tracking-wide text-white/25">
                  {cert.type === "issued" ? "Issued " : "Expires "}{cert.date}
                </span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 font-['Geist_Mono'] text-[10px] tracking-wide text-white/30 opacity-0 transition-all duration-200 group-hover:opacity-100 hover:text-white"
                  >
                    View
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
              </div>

              {/* Corner accent on hover */}
              <div className="pointer-events-none absolute left-0 top-0 h-6 w-px bg-white scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
            </div>
          );
        })}
      </div>
    </section>
  );
}