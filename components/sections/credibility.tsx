"use client";

import { Reveal } from "@/components/reveal";

const STATS = [
  { value: "06", label: "years contracting" },
  { value: "04", label: "long engagements" },
  { value: "30+", label: "terraform modules in prod" },
];

const CLIENTS = ["Packeta", "ČEZ", "Lundegaard", "BOOTIQ"];

export function Credibility() {
  return (
    <section className="relative border-y border-bone/10">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* stats row */}
        <div className="grid grid-cols-3 gap-px bg-bone/10">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="bg-graphite">
              <div className="px-4 py-10 md:px-8 md:py-14">
                <p className="font-bold leading-none tabular-nums text-5xl tracking-[-0.04em] md:text-7xl">
                  {s.value}
                </p>
                <p className="mt-4 text-[10px] uppercase leading-tight tracking-[0.25em] text-bone/45 md:mt-6 md:text-xs">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* past clients strip */}
        <div className="border-t border-bone/10 py-10 md:py-14">
          <Reveal>
            <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-bone/40 md:mb-8 md:text-xs">
              [ past engagements ]
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-3 md:gap-x-10">
              {CLIENTS.map((c, i) => (
                <div
                  key={c}
                  className="flex items-baseline gap-x-5 md:gap-x-10"
                >
                  <span className="text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                    {c}
                  </span>
                  {i < CLIENTS.length - 1 && (
                    <span className="text-2xl text-accent md:text-4xl lg:text-5xl">
                      ·
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
