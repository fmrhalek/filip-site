# Motion Site — Orbit Studio (starter)

An Awwwards-leaning marketing/portfolio site starter built with high-end motion design.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** for styling, with a custom palette (bone/ink/accent)
- **Lenis** smooth scroll
- **GSAP + ScrollTrigger** for pinned/scrubbed scroll choreography
- **Framer Motion** for declarative animations, springs, magnetic cursor
- **Fraunces / Instrument Sans / JetBrains Mono** via `next/font/google`

## Aesthetic direction

Editorial brutalism × kinetic type — warm off-white (`#F5F1EA`) with deep ink and a single acid orange accent (`#FF4A1C`), variable serif display set against mono captions. Subtle film-grain overlay throughout.

## Sections

1. **Hero** — split-character reveal on load, status bar, animated scroll indicator
2. **Marquee** — infinite ticker of capabilities (CSS keyframe)
3. **Manifesto** — sticky-pinned word-by-word color reveal (GSAP scrub)
4. **Works** — alternating project grid, clip-path image reveals, parallax scale
5. **Capabilities** — horizontal scroll with GSAP pin
6. **Numbers** — count-up stats on viewport enter
7. **Footer** — kinetic “Let's talk”, magnetic mailto link

## Running locally

```bash
cd ~/Work/web/motion-site
npm install
npm run dev
# open http://localhost:3000
```

## Customizing

- **Brand & copy** — search for `Orbit Studio`, `orbit.studio`, `hello@orbit.studio`
- **Palette** — `tailwind.config.ts` (`bone`, `ink`, `accent`) and `:root` in `globals.css`
- **Fonts** — `app/layout.tsx`
- **Projects** — `components/sections/works.tsx` (`PROJECTS`)
- **Manifesto text** — `components/sections/manifesto.tsx` (`TEXT`)
- **Stats** — `components/sections/numbers.tsx` (`STATS`)

## Deployment

This is a static-friendly Next.js app. Recommended host: **Vercel** (one click).
Also works on Cloudflare Pages, Netlify, or Azure Static Web Apps.

For your **Wedos** domain: add a `CNAME` (or `A`) record pointing to the host's
target after you add the custom domain in the host's dashboard.
