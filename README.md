# filip-mrhalek-site

Personal site for **Filip Mrhálek** — Platform & DevOps Engineer.

## Aesthetic

"Engineering field notebook." Near-black graphite (`#0B0D0F`) background, warm
bone foreground (`#E6E2D8`), single terminal-mint accent (`#7FE3CB`). Set
entirely in **JetBrains Mono** with a faint blueprint grid backdrop. Restrained
motion — fade-up on viewport enter, blinking terminal cursor accents.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS
- Framer Motion (the only motion library — no GSAP, no Lenis)
- `next/font/google` → JetBrains Mono

## Sections

1. **Hero** — terminal-prompt identity card
2. **About** — three short paragraphs
3. **Stack** — mono key/value grid of tech you work with
4. **Experience** — vertical timeline (currently 1 real role + placeholder)
5. **Selected work** — 4 case-study cards
6. **Contact** — link list + sign-off

## Running locally

```bash
cd ~/Work/web/filip
npm install
npm run dev   # http://localhost:3001
```

(Port 3001 to avoid clashing with the motion-site demo on 3000.)

## What you should edit

| File | Edit when… |
|---|---|
| `components/sections/about.tsx` (`PARAS`) | You want to rewrite the intro paragraphs |
| `components/sections/stack.tsx` (`STACK`) | You add/remove tech you actually work with |
| `components/sections/experience.tsx` (`ROLES`) | You add your LinkedIn-style career history |
| `components/sections/projects.tsx` (`PROJECTS`) | You want to swap in real public projects |
| `components/sections/contact.tsx` (`LINKS`) | You add a LinkedIn URL or change your email |
| `tailwind.config.ts` | You want to change the palette |
| `app/layout.tsx` (`metadata`) | You want to tweak SEO title/description |

## Placeholders (clearly marked)

- LinkedIn URL — labeled `[ placeholder ]` in Contact
- Pre-Packeta role — labeled `/ placeholder` in Experience

## Deployment

This is a static-friendly Next.js app. `npx vercel` from this directory
deploys in ~90 seconds. Then point your **Wedos** domain via CNAME to the
Vercel target the dashboard gives you.
