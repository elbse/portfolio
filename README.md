# Charisse Priego — Portfolio

A personal developer portfolio built with React, TypeScript, Tailwind CSS, and Vite. Features a pure black aesthetic with Geist and Geist Mono typography, kinetic UI animations, and a fully responsive layout.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Bundler | Vite 8 |
| Styling | Tailwind CSS v3 |
| Typography | Geist + Geist Mono (Google Fonts) |
| Icons | Lucide React |
| Language | TypeScript 6 |

---

## Features

- **Custom cursor** — a dual-element cursor (dot + lagging ring) that expands on hover over interactive elements
- **Typewriter effect** — cycles through developer role titles in the hero with realistic typing and deletion
- **Scroll-triggered reveals** — every section animates in via `IntersectionObserver` with staggered delays
- **Marquee strip** — continuous looping text banner above the contact section
- **Outline typography** — CSS `-webkit-text-stroke` hollow text effect as a visual signature
- **Grid background** — subtle 72px CSS grid with radial fade overlay in the hero
- **Floating orb** — soft glow element with a looping `float` keyframe animation
- **Animated scroll indicator** — a sliding line in the hero that loops downward

---

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx        # Typewriter, grid bg, entrance animations
│   ├── About.tsx       # Stats grid, skill chips, scroll reveal
│   ├── Projects.tsx    # Hover-reveal project list with slide-in bar
│   └── Contacts.tsx    # Marquee strip, contact link rows
├── App.tsx             # Layout, nav, custom cursor logic
├── main.tsx            # React entry point
└── index.css           # Geist font import, Tailwind, animation keyframes
```

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other commands

```bash
npm run build      # Production build (outputs to /dist)
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
```

---

## Customization

All personal content lives directly in the component files — no config files or CMS needed.

**Name and intro text** — `src/App.tsx` (nav brand) and `src/components/Hero.tsx`

**Typewriter roles** — edit the `ROLES` array at the top of `Hero.tsx`:
```ts
const ROLES = ["Frontend Developer", "React Enthusiast", "UI/UX Explorer", "CS Student"];
```

**About text and stats** — `src/components/About.tsx`

**Skills list** — the `skills` array in `About.tsx`; each entry takes a `name` and an icon URL from [devicons](https://devicon.dev)

**Projects** — the `projects` array in `Projects.tsx`; each entry has `idx`, `title`, `description`, `work`, and `tags`

**Contact links** — the `links` array in `Contacts.tsx`

**Colors** — the design is intentionally monochrome. Core values are in `index.css`:
```css
--bg: #000000;
--fg: #ffffff;
--fg-muted: rgba(255,255,255,0.45);
--border: rgba(255,255,255,0.1);
```

---

## Deployment

```bash
npm run build
```

The `/dist` folder is a self-contained static build. Deploy it to any static host:

- **Vercel** — connect the repo; Vercel auto-detects Vite
- **Netlify** — drag and drop the `/dist` folder, or connect via Git
- **GitHub Pages** — use the [`vite-plugin-gh-pages`](https://www.npmjs.com/package/vite-plugin-gh-pages) package

---

## License

This project is personal and not licensed for reuse. Feel free to use it as inspiration for your own portfolio.

---

*Built by [Charisse Priego](https://github.com/elbse)*
