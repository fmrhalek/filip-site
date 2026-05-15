"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TEXT =
  "We craft frictionless digital experiences that outlast the scroll, the screen, and the season — built with the patience of a printmaker and the precision of a watchmaker.";

export function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      const words = wordsRef.current?.querySelectorAll<HTMLSpanElement>(
        "span.word",
      );
      if (!words || !words.length) return;

      // Reduced motion: leave words ink-colored, no pin/scrub
      if (prefersReduced) {
        gsap.set(words, { color: "rgba(10, 9, 8, 1)" });
        return;
      }

      gsap.fromTo(
        words,
        { color: "rgba(10, 9, 8, 0.14)" },
        {
          color: "rgba(10, 9, 8, 1)",
          stagger: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=180%",
            pin: true,
            scrub: 0.5,
          },
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100svh] items-center bg-bone px-6 py-24 md:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.3em] md:mb-16 md:text-xs">
          <p className="text-accent">[ Manifesto / 001 ]</p>
          <p className="text-ink/40 hidden md:block">A note on craft</p>
        </div>
        <div
          ref={wordsRef}
          className="font-display text-3xl leading-[1.08] tracking-[-0.02em] md:text-6xl lg:text-[5.5rem]"
        >
          {TEXT.split(" ").map((word, i) => (
            <span key={i} className="word inline-block">
              {word}
              {" "}
            </span>
          ))}
        </div>
        <div className="mt-12 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 md:mt-20 md:text-xs">
          <p>— signed, the studio</p>
          <p>Prague / Lisbon</p>
        </div>
      </div>
    </section>
  );
}
