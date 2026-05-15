"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export function Cursor() {
  // raw motion values — no spring on position, so the cursor tracks 1:1
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setHover(
        !!t?.closest('[data-cursor="hover"], a, button, [role="button"]'),
      );
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden mix-blend-difference [@media(pointer:fine)]:block"
      style={{ x, y, willChange: "transform" }}
    >
      <motion.div
        animate={{
          scale: hover ? 2.6 : 1,
          backgroundColor: hover ? "#FF4A1C" : "#F5F1EA",
        }}
        transition={{ type: "spring", stiffness: 380, damping: 28, mass: 0.4 }}
        className="-ml-1.5 -mt-1.5 h-3 w-3 rounded-full"
      />
    </motion.div>
  );
}
