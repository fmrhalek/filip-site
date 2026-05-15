"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  split?: "word" | "char";
  /** if true, only animate once the element scrolls into view */
  inView?: boolean;
};

export function SplitText({
  children,
  className,
  delay = 0,
  stagger,
  split = "word",
  inView = false,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.3 });
  const shouldAnimate = inView ? visible : true;

  const items =
    split === "word" ? children.split(" ") : Array.from(children);
  const s = stagger ?? (split === "char" ? 0.025 : 0.06);

  return (
    <span ref={ref} className={className}>
      {items.map((item, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{
            marginRight: split === "word" ? "0.22em" : undefined,
            paddingBottom: "0.08em",
          }}
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={shouldAnimate ? { y: 0 } : { y: "110%" }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * s,
            }}
            style={{ willChange: "transform" }}
          >
            {item === " " ? " " : item}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
