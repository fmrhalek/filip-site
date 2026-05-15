"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-44px)] flex-col justify-between px-6 pb-10 pt-16 md:px-12 md:pb-14 md:pt-20">
      {/* top meta */}
      <motion.p
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-[10px] uppercase tracking-[0.3em] text-bone/40 md:text-xs"
      >
        Filip Mrhálek — independent platform engineer · est. 2020
      </motion.p>

      {/* identity */}
      <div className="my-12 max-w-5xl md:my-0">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-5 text-sm text-accent md:mb-7 md:text-base"
        >
          <span className="text-bone/30">$ </span>whoami
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl font-bold leading-[0.95] tracking-[-0.045em] md:text-7xl lg:text-[7.5rem]"
        >
          Filip
          <br />
          Mrhálek
          <span className="text-accent">.</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="mt-8 text-2xl font-bold leading-tight tracking-[-0.02em] text-bone/85 md:mt-10 md:text-4xl lg:text-5xl"
        >
          Platform engineer{" "}
          <span className="text-bone/55 italic">for hire</span>
          <span className="text-accent">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.15 }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-bone/70 md:mt-8 md:text-base"
        >
          I build cloud infrastructure that product teams stop noticing. Azure-leaning,
          Terraform-shaped, contracting out of Prague — currently with{" "}
          <span className="text-bone/95">Packeta</span>, previously{" "}
          <span className="text-bone/95">ČEZ</span>, Lundegaard, BOOTIQ.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row md:mt-12"
        >
          <a
            href="mailto:filip.mrhalek@gmail.com?subject=Project%20inquiry"
            className="group inline-flex items-center justify-center gap-3 border border-accent bg-accent px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.25em] text-graphite transition-colors hover:bg-graphite hover:text-accent md:text-xs"
          >
            Book a call
            <span
              aria-hidden
              className="inline-block transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-3 border border-bone/25 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.25em] text-bone/90 transition-colors hover:border-accent hover:text-accent md:text-xs"
          >
            See services
            <span
              aria-hidden
              className="inline-block transition-transform group-hover:translate-y-0.5"
            >
              ↓
            </span>
          </a>
        </motion.div>
      </div>

      {/* footer line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.7 }}
        className="flex items-end justify-between text-[10px] uppercase tracking-[0.3em] text-bone/40 md:text-xs"
      >
        <span>Prague — 50.0755°N · CET</span>
        <span className="inline-flex items-center gap-2">
          scroll
          <span className="inline-block h-3 w-[6px] animate-blink bg-accent" />
        </span>
      </motion.div>
    </section>
  );
}
