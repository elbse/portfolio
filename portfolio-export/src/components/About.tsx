import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Python",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Django",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Laravel",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Java",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Git",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "Languages", value: "6" },
  { label: "Frameworks", value: "5" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="about" className="border-t border-white/[0.07] px-6 py-28 md:px-12">
      {/* Label */}
      <div className={`mb-16 flex items-center gap-4 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
        <span className="font-['Geist_Mono'] text-[10px] tracking-[0.3em] uppercase text-white/25">01</span>
        <div className="h-px flex-1 bg-white/[0.07]" />
        <span className="font-['Geist_Mono'] text-[10px] tracking-[0.3em] uppercase text-white/25">About</span>
      </div>

      <div className="grid gap-20 md:grid-cols-2">
        {/* Left */}
        <div className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="mb-8 font-['Geist'] text-4xl font-[800] leading-tight tracking-tight text-white md:text-5xl">
            Crafting digital<br />
            <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)", color: "transparent" }}>
              experiences
            </span>
          </h2>
          <div className="space-y-4 font-['Geist'] text-sm leading-relaxed text-white/40">
            <p>Computer Science student at the University of Mindanao. I build websites that are clear, performant, and feel good to use.</p>
            <p>I learn best by shipping real projects. Currently focused on modern frontend architecture, practical backend systems, and exploring the edges of AI/ML.</p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <div key={s.label}
                className={`border border-white/[0.08] p-4 transition-all duration-500 hover:border-white/25`}
                style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="font-['Geist'] text-2xl font-[800] tracking-tight text-white">{s.value}</div>
                <div className="mt-1 font-['Geist_Mono'] text-[10px] tracking-[0.15em] uppercase text-white/30">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — skills */}
        <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="mb-6 font-['Geist_Mono'] text-[10px] tracking-[0.3em] uppercase text-white/25">Stack</div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                data-hover
                className="group flex cursor-default items-center gap-2 border border-white/[0.08] px-3.5 py-2.5 transition-all duration-200 hover:border-white/30 hover:bg-white/[0.04]"
                style={{ transitionDelay: visible ? `${i * 30}ms` : "0ms",
                         opacity: visible ? 1 : 0,
                         transform: visible ? "none" : "translateY(10px)",
                         transition: `opacity 0.4s ${i * 30}ms, transform 0.4s ${i * 30}ms, border-color 0.2s, background 0.2s` }}>
                <img src={skill.icon} alt={skill.name} className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity"
                  style={skill.name === "GitHub" || skill.name === "Django" ? { filter: "invert(1) brightness(0.7)" } : undefined} />
                <span className="font-['Geist_Mono'] text-[11px] text-white/50 group-hover:text-white/80 transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
