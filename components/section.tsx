"use client";

import { Reveal } from "@/components/reveal";

export function Section({
  id,
  num,
  title,
  rightLabel,
  children,
}: {
  id: string;
  num: string;
  title: string;
  rightLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative border-t border-bone/10 px-6 py-20 md:px-12 md:py-28"
    >
      <Reveal>
        <header className="mb-12 flex items-baseline justify-between md:mb-16">
          <div className="flex items-baseline gap-4 md:gap-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent md:text-xs">
              {num}
            </span>
            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
              {title}
            </h2>
          </div>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-bone/30 md:inline md:text-xs">
            {rightLabel ?? `#${id}`}
          </span>
        </header>
      </Reveal>
      {children}
    </section>
  );
}
