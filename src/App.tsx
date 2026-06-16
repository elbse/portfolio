import { useEffect } from "react";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  useEffect(() => {
    const dot  = document.createElement("div");
    const ring = document.createElement("div");
    dot.className  = "cursor-dot";
    ring.className = "cursor-ring";
    document.body.append(dot, ring);

    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left  = mx + "px";
      dot.style.top   = my + "px";
    };
    const tick = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top  = ry + "px";
      requestAnimationFrame(tick);
    };
    tick();
    document.addEventListener("mousemove", onMove);

    const addHover = () => {
      document.querySelectorAll("a,button,[data-hover]").forEach(el => {
        el.addEventListener("mouseenter", () => ring.classList.add("hovered"));
        el.addEventListener("mouseleave", () => ring.classList.remove("hovered"));
      });
    };
    addHover();
    const mo = new MutationObserver(addHover);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      mo.disconnect();
      dot.remove(); ring.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 z-50 w-full border-b border-white/[0.07] bg-black/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
          <a href="#" className="font-['Geist_Mono'] text-sm font-medium tracking-tight text-white">
            Cha.
          </a>
          <div className="flex items-center gap-8">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center gap-1.5 font-['Geist_Mono'] text-xs text-white/40 transition-colors hover:text-white"
              >
                <span className="text-white/20">{String(i + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl">
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contacts />
      </main>
    </div>
  );
}