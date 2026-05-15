"use client";

import { motion } from "framer-motion";

export function AvailabilityBar() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="sticky top-0 z-40 border-b border-accent/25 bg-graphite/85 backdrop-blur-md"
    >
      <div className="flex items-center justify-between gap-4 px-6 py-2.5 text-[10px] uppercase tracking-[0.3em] md:px-12 md:text-xs">
        <span className="inline-flex items-center gap-2.5 text-accent">
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="hidden sm:inline">
            Open for new engagements
          </span>
          <span className="sm:hidden">Open</span>
        </span>
        <a
          href="mailto:filip.mrhalek@gmail.com"
          className="group inline-flex items-center gap-2 text-bone/70 transition-colors hover:text-accent"
        >
          <span className="hidden md:inline">filip.mrhalek@gmail.com</span>
          <span className="md:hidden">Book a call</span>
          <span
            aria-hidden
            className="inline-block transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>
    </motion.div>
  );
}
