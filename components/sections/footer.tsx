"use client";

import { Magnetic } from "@/components/ui/magnetic";
import { SplitText } from "@/components/ui/split-text";

export function Footer() {
  return (
    <footer className="relative flex min-h-[100svh] flex-col justify-between bg-ink px-6 py-10 text-bone md:px-12 md:py-12">
      <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-bone/50 md:text-xs">
        <span>[ Contact / 005 ]</span>
        <span>v01 · 2026</span>
      </div>

      <div className="my-16 md:my-24">
        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-accent md:mb-10 md:text-xs">
          Have a project?
        </p>
        <h2 className="overflow-hidden">
          <SplitText
            inView
            split="char"
            stagger={0.04}
            className="block font-display text-[22vw] leading-[0.85] tracking-[-0.05em] md:text-[14vw]"
          >
            Let&rsquo;s
          </SplitText>
        </h2>
        <h2 className="overflow-hidden">
          <SplitText
            inView
            split="char"
            delay={0.2}
            stagger={0.04}
            className="block font-display text-[22vw] italic font-light leading-[0.85] tracking-[-0.05em] text-accent md:text-[14vw]"
          >
            talk.
          </SplitText>
        </h2>
        <div className="mt-10 md:mt-14">
          <Magnetic strength={0.3}>
            <a
              href="mailto:hello@orbit.studio"
              data-cursor="hover"
              className="group inline-flex items-center gap-3 border-b border-bone/30 pb-2 font-display text-2xl tracking-[-0.01em] transition-colors hover:text-accent md:text-4xl"
            >
              hello@orbit.studio
              <span className="inline-block transition-transform group-hover:translate-x-2">
                →
              </span>
            </a>
          </Magnetic>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 font-mono text-[10px] uppercase tracking-[0.3em] md:grid-cols-4 md:text-xs">
        <div>
          <p className="mb-3 text-bone/40">Studio</p>
          <p>Prague, CZ</p>
          <p>Lisbon, PT</p>
        </div>
        <div>
          <p className="mb-3 text-bone/40">Elsewhere</p>
          <a
            className="block transition-colors hover:text-accent"
            data-cursor="hover"
            href="#"
          >
            Instagram
          </a>
          <a
            className="block transition-colors hover:text-accent"
            data-cursor="hover"
            href="#"
          >
            Are.na
          </a>
          <a
            className="block transition-colors hover:text-accent"
            data-cursor="hover"
            href="#"
          >
            X / Twitter
          </a>
        </div>
        <div>
          <p className="mb-3 text-bone/40">Now</p>
          <p>Booking Q3 / Q4</p>
          <p>2026</p>
        </div>
        <div>
          <p className="mb-3 text-bone/40">Colophon</p>
          <p>Fraunces · Instrument · JBM</p>
          <p>Built on Next.js</p>
        </div>
      </div>
    </footer>
  );
}
