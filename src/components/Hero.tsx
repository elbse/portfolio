import { useEffect, useRef, useState } from "react";

const ROLES = ["Frontend Developer", "React Enthusiast", "UI/UX Explorer", "CS Student"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const tickRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* typewriter */
  useEffect(() => {
    const target = ROLES[roleIdx];
    if (!deleting && displayed.length < target.length) {
      tickRef.current = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      tickRef.current = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      tickRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
    return () => { if (tickRef.current) clearTimeout(tickRef.current); };
  }, [displayed, deleting, roleIdx]);

  /* entrance */
  useEffect(() => { setTimeout(() => setVisible(true), 80); }, []);

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24 pb-20 md:px-12">

      {/* Animated grid background */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Radial fade overlay */}
      <div className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, #000 100%)" }}
      />

      {/* Floating orb */}
      <div className="pointer-events-none absolute right-[8%] top-[20%] h-[360px] w-[360px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <style>{`@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-24px)} }`}</style>

      <div className={`relative z-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Eyebrow */}
        <div className="mb-8 flex items-center gap-4"
          style={{ animation: visible ? "fadeUp 0.6s 0.1s both" : "none" }}>
          <div className="h-px w-10 bg-white/30" style={{ animation: visible ? "lineGrow 0.8s 0.2s both" : "none" }} />
          <span className="font-['Geist_Mono'] text-xs tracking-[0.2em] text-white/40 uppercase">
            Available for work
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" style={{ animation: "pulse 2s infinite" }} />
        </div>
        <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>

        {/* Name */}
        <h1 className="mb-2 text-[clamp(3.5rem,9vw,7.5rem)] font-[800] leading-[0.92] tracking-[-0.03em] text-white"
          style={{ animation: visible ? "fadeUp 0.7s 0.15s both" : "none" }}>
          Charisse
        </h1>
        <h1 className="mb-8 text-[clamp(3.5rem,9vw,7.5rem)] font-[800] leading-[0.92] tracking-[-0.03em]"
          style={{
            animation: visible ? "fadeUp 0.7s 0.22s both" : "none",
            WebkitTextStroke: "1px rgba(255,255,255,0.35)",
            color: "transparent",
          }}>
          Priego
        </h1>

        {/* Typewriter role */}
        <div className="mb-10 flex items-center gap-3 font-['Geist_Mono'] text-base text-white/50 md:text-lg"
          style={{ animation: visible ? "fadeUp 0.6s 0.3s both" : "none" }}>
          <span className="text-white/20">//</span>
          <span>{displayed}</span>
          <span className="h-5 w-0.5 bg-white/60" style={{ animation: "blink 1s step-end infinite" }} />
        </div>
        <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>

        {/* Description */}
        <p className="mb-12 max-w-lg font-['Geist'] text-sm leading-relaxed text-white/40"
          style={{ animation: visible ? "fadeUp 0.6s 0.38s both" : "none" }}>
          Building clean, performant web experiences. Exploring React, Tailwind, Python & Laravel.
          CS student at the University of Mindanao.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4"
          style={{ animation: visible ? "fadeUp 0.6s 0.46s both" : "none" }}>
          <a href="#projects"
            className="group relative overflow-hidden border border-white bg-white px-6 py-3 font-['Geist_Mono'] text-xs font-medium tracking-[0.12em] uppercase text-black transition-all hover:bg-transparent hover:text-white">
            <span className="relative z-10">View Work</span>
          </a>
          <a href="#contact"
            className="group border border-white/20 px-6 py-3 font-['Geist_Mono'] text-xs font-medium tracking-[0.12em] uppercase text-white/50 transition-all hover:border-white/60 hover:text-white">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-6 flex items-center gap-3 md:left-12"
        style={{ animation: visible ? "fadeIn 1s 0.9s both" : "none" }}>
        <div className="relative h-10 w-px bg-white/10">
          <div className="absolute top-0 h-4 w-px bg-white/60"
            style={{ animation: "scrollLine 2s ease-in-out infinite" }} />
        </div>
        <span className="font-['Geist_Mono'] text-[10px] tracking-widest text-white/25 uppercase">Scroll</span>
      </div>
      <style>{`@keyframes scrollLine { 0%{top:0;opacity:1} 100%{top:100%;opacity:0} }`}</style>

      {/* Corner stat */}
      <div className="absolute bottom-10 right-6 text-right md:right-12"
        style={{ animation: visible ? "fadeIn 1s 1s both" : "none" }}>
        <div className="font-['Geist'] text-[2.5rem] font-[800] leading-none text-white/[0.04]">2025</div>
      </div>
    </section>
  );
}
