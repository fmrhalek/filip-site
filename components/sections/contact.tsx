"use client";

import { Reveal } from "@/components/reveal";

type Link = {
  label: string;
  value: string;
  href: string | null;
  meta?: string;
};

const LINKS: Link[] = [
  {
    label: "Email",
    value: "filip.mrhalek@gmail.com",
    href: "mailto:filip.mrhalek@gmail.com",
    meta: "personal",
  },
  {
    label: "Email (work)",
    value: "filip.mrhalek@packeta.com",
    href: "mailto:filip.mrhalek@packeta.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/filip-mrhálek",
    href: "https://cz.linkedin.com/in/filip-mrh%C3%A1lek-6131a6238",
  },
  {
    label: "GitHub",
    value: "github.com/fmrhalek",
    href: "https://github.com/fmrhalek",
  },
  {
    label: "Located",
    value: "Prague, Czech Republic",
    href: null,
  },
];

const BUSINESS = [
  { label: "Registered name", value: "Bc. Filip Mrhálek" },
  { label: "IČO", value: "09535560" },
  { label: "DIČ", value: "CZ9906250277", meta: "VAT registered" },
  { label: "NACE", value: "62.0 — IT consultancy" },
];

export function Contact() {
  return (
    <footer
      id="contact"
      className="relative border-t border-bone/10 px-6 py-20 md:px-12 md:py-32"
    >
      <Reveal>
        <header className="mb-12 flex items-baseline justify-between md:mb-16">
          <div className="flex items-baseline gap-4 md:gap-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent md:text-xs">
              07
            </span>
            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
              Contact
            </h2>
          </div>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-bone/30 md:inline md:text-xs">
            end of file
          </span>
        </header>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mb-16 md:mb-20">
          <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-bone/40 md:text-xs">
            $ get-in-touch
          </p>
          <h3 className="text-4xl font-bold leading-[0.95] tracking-[-0.04em] md:text-7xl">
            Say hi
            <span className="text-accent">.</span>
          </h3>
          <p className="mt-6 max-w-md text-sm text-bone/70 md:text-base">
            Available for new platform engineering engagements. Long-running
            contracts preferred, hybrid out of Prague.
          </p>
        </div>
      </Reveal>

      {/* contact links */}
      <ul className="mb-20 space-y-1 text-sm md:text-base">
        {LINKS.map((l, i) => (
          <Reveal key={l.label} delay={i * 0.04}>
            <li className="group grid grid-cols-[110px_1fr] gap-4 border-b border-bone/5 py-3 md:grid-cols-[220px_1fr] md:gap-8 md:py-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-bone/40 md:text-xs">
                {l.label}
                {l.meta && (
                  <span className="ml-2 text-bone/25">[{l.meta}]</span>
                )}
              </span>
              {l.href ? (
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    l.href.startsWith("http") ? "noreferrer noopener" : undefined
                  }
                  className="inline-flex items-center gap-3 text-bone/90 transition-colors hover:text-accent"
                >
                  <span>{l.value}</span>
                  <span
                    aria-hidden
                    className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    →
                  </span>
                </a>
              ) : (
                <span className="text-bone/90">{l.value}</span>
              )}
            </li>
          </Reveal>
        ))}
      </ul>

      {/* business / invoicing details */}
      <Reveal>
        <div className="border-t border-bone/10 pt-10 md:pt-14">
          <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-bone/40 md:text-xs">
            $ invoicing
          </p>
          <ul className="grid grid-cols-1 gap-x-12 gap-y-3 text-sm md:grid-cols-2 md:text-base">
            {BUSINESS.map((b) => (
              <li
                key={b.label}
                className="grid grid-cols-[110px_1fr] gap-4 border-b border-bone/5 py-2 md:grid-cols-[180px_1fr]"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-bone/40 md:text-xs">
                  {b.label}
                </span>
                <span className="text-bone/90">
                  {b.value}
                  {b.meta && (
                    <span className="ml-2 text-[10px] uppercase tracking-[0.2em] text-bone/30 md:text-xs">
                      [ {b.meta} ]
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-[11px] leading-relaxed text-bone/35 md:text-xs">
            Registered sole trader (živnostník) since September 2020. Public
            data from the Czech business registry (ARES).
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.4}>
        <div className="mt-20 flex flex-col gap-3 border-t border-bone/10 pt-8 text-[10px] uppercase tracking-[0.3em] text-bone/35 md:flex-row md:items-baseline md:justify-between md:gap-4 md:text-xs">
          <span>© {new Date().getFullYear()} Filip Mrhálek</span>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 md:gap-x-8">
            <a
              href="/imprint"
              className="transition-colors hover:text-accent"
            >
              Imprint
            </a>
            <a
              href="/privacy"
              className="transition-colors hover:text-accent"
            >
              Privacy
            </a>
            <a
              href="https://github.com/fmrhalek"
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-accent"
            >
              GitHub ↗
            </a>
          </nav>
          <span className="inline-flex items-center gap-2">
            built with Next.js · JetBrains Mono
            <span className="inline-block h-3 w-[6px] animate-blink bg-accent" />
          </span>
        </div>
      </Reveal>
    </footer>
  );
}
