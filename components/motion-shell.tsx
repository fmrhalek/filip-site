"use client";

import { MotionConfig } from "framer-motion";

/**
 * Global Framer Motion config — honors `prefers-reduced-motion` so all
 * framer-motion animations across the app become instant for users who
 * opt out of motion.
 */
export function MotionShell({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  );
}
