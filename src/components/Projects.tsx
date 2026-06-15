import { useEffect, useRef, useState } from "react";
import { ExternalLink, GitBranch } from "lucide-react";

const tagIcons: Record<string, string> = {
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Laravel":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  "MySQL":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Python":       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "NLP":          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
};

const projects = [
  {
    idx: "01", title: "ChangChang Inventory System",
    description: "Role-based inventory platform with clean dashboards and clear stock tracking.",
    work: "Frontend", tags: ["Tailwind CSS", "Laravel"],
    code: "https://github.com/loftyyyy/ChangChangIntegratedInventoryAndSalesSystem",
    live: "",
  },
  {
    idx: "02", title: "Love & Styles Rental System",
    description: "Rental management app for handling reservations, products, and customer records.",
    work: "Frontend + Backend", tags: ["Laravel", "Tailwind CSS", "MySQL"],
    code: "https://github.com/loftyyyy/LSRSV2",
    live: "https://lsrs-2a3261dcc58d.herokuapp.com/",
  },
  {
    idx: "03", title: "Bitcoin Sentiment Analysis",
    description: "Sentiment dashboard analysing trends from cryptocurrency-related text data.",
    work: "Backend", tags: ["Python", "NLP"],
    code: "https://github.com/loftyyyy/LSRSV2",
    live: "https://lsrs-2a3261dcc58d.herokuapp.com/",
  },
  {
    idx: "04", title: "Second Gear Marketplace",
    description: "Buy/sell car marketplace concept with modern UI and advanced filtering.",
    work: "Frontend", tags: ["Tailwind CSS"],
    code: "https://github.com/loftyyyy/LSRSV2",
    live: "https://lsrs-2a3261dcc58d.herokuapp.com/",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="projects" className="border-t border-white/[0.07] px-6 py-28 md:px-12">
      <div className={`mb-16 flex items-center gap-4 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
        <span className="font-['Geist_Mono'] text-[10px] tracking-[0.3em] uppercase text-white/25">02</span>
        <div className="h-px flex-1 bg-white/[0.07]" />
        <span className="font-['Geist_Mono'] text-[10px] tracking-[0.3em] uppercase text-white/25">Projects</span>
      </div>

      <h2 className={`mb-2 font-['Geist'] text-4xl font-[800] tracking-tight text-white md:text-5xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        Selected work
      </h2>
      <p className={`mb-16 font-['Geist_Mono'] text-xs text-white/25 transition-all duration-700 delay-150 ${visible ? "opacity-100" : "opacity-0"}`}>
        — things I've built
      </p>

      <div className="space-y-0">
        {projects.map((p, i) => (
          <div
            key={p.idx}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            data-hover
            className="group relative grid grid-cols-[3rem_1fr] gap-6 border-t border-white/[0.07] py-8 transition-all duration-300 last:border-b md:grid-cols-[3rem_1fr_8rem] md:items-center md:gap-10"
            style={{
              opacity:   visible ? 1 : 0,
              transform: visible ? "none" : "translateY(20px)",
              transition: `opacity 0.5s ${i * 80}ms, transform 0.5s ${i * 80}ms`,
              background: hovered === i ? "rgba(255,255,255,0.02)" : "transparent",
            }}
          >
            {/* Hover bar */}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-white transition-all duration-300"
              style={{ transform: hovered === i ? "scaleY(1)" : "scaleY(0)", transformOrigin: "top" }} />

            <span className="font-['Geist_Mono'] text-sm font-medium text-white/15 group-hover:text-white/40 transition-colors pt-1">
              {p.idx}
            </span>

            <div>
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="font-['Geist'] text-xl font-[700] tracking-tight text-white/80 group-hover:text-white transition-colors md:text-2xl">
                  {p.title}
                </h3>
                <span className="font-['Geist_Mono'] text-[10px] tracking-[0.15em] uppercase text-white/25">
                  {p.work}
                </span>
              </div>
              <p className="mt-2 font-['Geist'] text-sm leading-relaxed text-white/35">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span key={tag}
                    className="inline-flex items-center gap-1.5 border border-white/[0.07] px-2.5 py-1 font-['Geist_Mono'] text-[10px] tracking-wide text-white/30">
                    {tagIcons[tag] && <img src={tagIcons[tag]} alt={tag} className="h-3 w-3 opacity-60" />}
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden flex-col items-end gap-2 md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {p.code && (
                <a href={p.code} target="_blank" rel="noreferrer"
                  className="flex items-center gap-1.5 font-['Geist_Mono'] text-[10px] tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors">
                  <GitBranch className="h-3.5 w-3.5" />Code
                </a>
              )}
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer"
                  className="flex items-center gap-1.5 font-['Geist_Mono'] text-[10px] tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors">
                  <ExternalLink className="h-3.5 w-3.5" />Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}