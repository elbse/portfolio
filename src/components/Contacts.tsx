import { useEffect, useRef, useState } from "react";
import { Mail, GitBranch, Link2, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email", handle: "charissepriego0140@gmail.com", href: "mailto:charissepriego0140@gmail.com", Icon: Mail },
  { label: "GitHub", handle: "github.com/elbse", href: "https://github.com/elbse", Icon: GitBranch },
  { label: "LinkedIn", handle: "linkedin.com/in/charissepriego", href: "https://linkedin.com/in/charissepriego", Icon: Link2 },
];

/* Marquee text */
const MARQUEE = ["Open to work ·", "Let's build something ·", "Available for projects ·", "Say hello ·"];

export default function Contacts() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const marqueeText = Array(6).fill(MARQUEE).flat().join("  ");

  return (
    <section ref={ref} id="contact" className="border-t border-white/[0.07]">
      {/* Marquee strip */}
      <div className="overflow-hidden border-b border-white/[0.07] py-3">
        <div className="flex whitespace-nowrap"
          style={{ animation: "marquee 22s linear infinite" }}>
          {[...Array(2)].map((_, i) => (
            <span key={i} className="font-['Geist_Mono'] text-[10px] tracking-[0.25em] uppercase text-white/15 px-8">
              {marqueeText}
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>

      <div className="px-6 py-28 md:px-12">
        <div className={`mb-16 flex items-center gap-4 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
          <span className="font-['Geist_Mono'] text-[10px] tracking-[0.3em] uppercase text-white/25">04</span>
          <div className="h-px flex-1 bg-white/[0.07]" />
          <span className="font-['Geist_Mono'] text-[10px] tracking-[0.3em] uppercase text-white/25">Contact</span>
        </div>

        <div className="max-w-3xl">
          <h2 className={`mb-6 font-['Geist'] text-5xl font-[800] leading-[0.95] tracking-tight text-white md:text-7xl transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Let's<br />
            <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)", color: "transparent" }}>
              connect.
            </span>
          </h2>
          <p className={`mb-16 max-w-md font-['Geist'] text-sm leading-relaxed text-white/35 transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}>
            Open to new opportunities, collaborations, or just a chat about code and ideas.
          </p>

          <div className="space-y-0">
            {links.map(({ label, handle, href, Icon }, i) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                data-hover
                className="group flex items-center justify-between border-t border-white/[0.07] py-6 transition-all last:border-b hover:bg-white/[0.02]"
                style={{
                  opacity:   visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(16px)",
                  transition: `opacity 0.5s ${i * 100 + 300}ms, transform 0.5s ${i * 100 + 300}ms`,
                }}>
                <div className="flex items-center gap-5">
                  <Icon className="h-4 w-4 text-white/20 group-hover:text-white/70 transition-colors" />
                  <div>
                    <p className="font-['Geist_Mono'] text-[10px] tracking-[0.2em] uppercase text-white/20 mb-1">{label}</p>
                    <p className="font-['Geist'] text-base font-[500] text-white/50 group-hover:text-white transition-colors">{handle}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/15 transition-all duration-200 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="border-t border-white/[0.07] px-6 py-6 md:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between font-['Geist_Mono'] text-[10px] tracking-[0.2em] uppercase text-white/15">
          <span>Charisse Priego © 2025</span>
          <span>React · Tailwind · Geist</span>
        </div>
      </footer>
    </section>
  );
}