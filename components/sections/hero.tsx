"use client";

import { motion } from "framer-motion";
import { SplitText } from "@/components/ui/split-text";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between px-6 pb-10 pt-24 md:px-12 md:pt-32">
      {/* status bar */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="grid grid-cols-2 items-start gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60 md:grid-cols-4 md:text-xs"
      >
        <div>
          <p className="text-ink/30">[ Index ]</p>
          <p>Orbit Studio</p>
        </div>
        <div>
          <p className="text-ink/30">[ Coords ]</p>
          <p>50.0755° N / 14.4378° E</p>
        </div>
        <div className="hidden md:block">
          <p className="text-ink/30">[ Issue ]</p>
          <p>№ 014 — Spring 2026</p>
        </div>
        <div className="text-right md:text-left">
          <p className="text-ink/30">[ Status ]</p>
          <p className="inline-flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Booking Q3 / Q4
          </p>
        </div>
      </motion.div>

      {/* MASSIVE TYPE */}
      <div className="relative -mx-1 my-12 md:my-0">
        <h1 className="font-display leading-[0.82] tracking-[-0.05em]">
          <span className="block text-[22vw] md:text-[15vw]">
            <SplitText split="char" stagger={0.035}>
              Orbit
            </SplitText>
          </span>
          <span className="block text-[22vw] italic font-light text-accent md:text-[15vw]">
            <SplitText split="char" delay={0.25} stagger={0.035}>
              studio
            </SplitText>
          </span>
        </h1>
        {/* tiny meta over the type */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="absolute right-0 top-2 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 md:block"
        >
          [ Vol. 01 / Type set in Fraunces ]
        </motion.span>
      </div>

      {/* bottom row */}
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40">
            [ Mission ]
          </p>
          <p className="font-display text-xl leading-[1.15] text-ink/85 md:text-2xl">
            <SplitText delay={1.0}>
              A design studio building unforgettable digital products for brands
              that refuse to blend in.
            </SplitText>
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.9 }}
          className="flex items-end gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50"
        >
          <span>Scroll</span>
          <div className="relative h-12 w-px overflow-hidden bg-ink/15">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-accent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
