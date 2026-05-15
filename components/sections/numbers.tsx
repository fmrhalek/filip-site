"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const STATS = [
  { value: 47, suffix: "", label: "Projects shipped" },
  { value: 18, suffix: "", label: "Awards & nominations" },
  { value: 12, suffix: "", label: "Countries served" },
  { value: 98, suffix: "%", label: "Client retention" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        node.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

export function Numbers() {
  return (
    <section className="relative border-y border-ink/10 bg-bone px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.3em] md:text-xs">
          <p className="text-accent">[ By the numbers / 004 ]</p>
          <p className="text-ink/40 hidden md:block">As of May 2026</p>
        </div>
        <div className="grid grid-cols-2 gap-y-12 gap-x-6 md:grid-cols-4 md:gap-x-12">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={
                i < STATS.length - 1
                  ? "border-ink/10 md:border-r md:pr-6"
                  : ""
              }
            >
              <div className="font-display text-6xl leading-none tracking-[-0.03em] md:text-8xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/60 md:text-xs">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
