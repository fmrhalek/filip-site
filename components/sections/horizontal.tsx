"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CAPS = [
  {
    num: "01",
    title: "Strategy",
    body: "Positioning, naming, narrative. We start by understanding the orbit.",
  },
  {
    num: "02",
    title: "Identity",
    body: "Logos, type systems, motion language. A coherent visual world.",
  },
  {
    num: "03",
    title: "Interface",
    body: "Web, app, product UI. Pixel-perfect, accessibility-first.",
  },
  {
    num: "04",
    title: "Motion",
    body: "Scroll choreography, transitions, kinetic type. Movement with meaning.",
  },
  {
    num: "05",
    title: "Build",
    body: "Production-grade engineering in React, Next.js, and beyond.",
  },
];

export function Horizontal() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;
      const getDistance = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] overflow-hidden bg-ink text-bone motion-reduce:h-auto motion-reduce:overflow-visible motion-reduce:py-24"
    >
      <div className="pointer-events-none absolute left-6 top-10 z-10 flex items-baseline justify-between md:left-12 md:top-12 right-6 md:right-12 motion-reduce:static motion-reduce:mb-12 motion-reduce:px-6 md:motion-reduce:px-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent md:text-xs">
          [ Capabilities / 003 ]
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40 md:text-xs motion-reduce:hidden">
          drag · or scroll →
        </p>
      </div>

      <div
        ref={trackRef}
        className="flex h-full items-stretch pl-6 will-change-transform md:pl-12 motion-reduce:h-auto motion-reduce:flex-col motion-reduce:items-stretch motion-reduce:pl-0 motion-reduce:md:pl-0"
      >
        {/* big title panel */}
        <div className="flex h-full shrink-0 items-end pb-20 pr-12 md:pb-28 md:pr-24 motion-reduce:h-auto motion-reduce:px-6 motion-reduce:pb-12 md:motion-reduce:px-12">
          <h2 className="font-display text-7xl leading-[0.88] tracking-[-0.03em] md:text-[10rem]">
            What we
            <br />
            <span className="italic font-light text-accent">make</span>
            <span className="text-accent">.</span>
          </h2>
        </div>

        {CAPS.map((c, i) => (
          <div
            key={c.num}
            className="flex h-full w-[80vw] shrink-0 flex-col justify-between border-l border-bone/10 px-6 py-20 md:w-[44vw] md:px-10 md:py-28 motion-reduce:h-auto motion-reduce:w-full motion-reduce:border-l-0 motion-reduce:border-t motion-reduce:gap-12 motion-reduce:px-6 motion-reduce:py-16 md:motion-reduce:px-12"
          >
            <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40 md:text-xs">
              <span>{c.num} / 05</span>
              {i === CAPS.length - 1 ? <span>End</span> : <span>Next →</span>}
            </div>
            <div>
              <h3 className="mb-6 font-display text-5xl leading-[0.95] tracking-[-0.02em] md:text-7xl">
                {c.title}
              </h3>
              <p className="max-w-sm font-sans text-base leading-relaxed text-bone/70 md:text-lg">
                {c.body}
              </p>
            </div>
          </div>
        ))}
        <div className="w-12 shrink-0" />
      </div>
    </section>
  );
}
