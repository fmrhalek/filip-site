"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Project = {
  id: string;
  client: string;
  title: string;
  tags: string[];
  year: string;
  bg: string;
  variant: number;
};

const PROJECTS: Project[] = [
  {
    id: "01",
    client: "Folksam",
    title: "Insurance, reimagined.",
    tags: ["Brand", "Web"],
    year: "2026",
    bg: "#FF4A1C",
    variant: 0,
  },
  {
    id: "02",
    client: "Reservoir Audio",
    title: "Acoustic spatial sound.",
    tags: ["Identity", "Motion"],
    year: "2025",
    bg: "#0A0908",
    variant: 1,
  },
  {
    id: "03",
    client: "Loam Earth",
    title: "Soil, intelligently.",
    tags: ["Product", "Web"],
    year: "2025",
    bg: "#7C6A3C",
    variant: 2,
  },
  {
    id: "04",
    client: "Halo Type",
    title: "A foundry born of friction.",
    tags: ["Type", "Web"],
    year: "2024",
    bg: "#DBD3BE",
    variant: 3,
  },
];

function ArtTile({ variant, bg }: { variant: number; bg: string }) {
  // four distinct geometric compositions, each anchored by accent color
  const compositions = [
    // 01 — bold circle on grid
    <svg
      key="0"
      viewBox="0 0 100 100"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="100" height="100" fill={bg} />
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={`v${i}`}
          x1={i * 8.33}
          y1="0"
          x2={i * 8.33}
          y2="100"
          stroke="#0A0908"
          strokeWidth="0.15"
          opacity="0.25"
        />
      ))}
      <circle cx="50" cy="52" r="26" fill="#F5F1EA" />
      <circle cx="50" cy="52" r="9" fill="#0A0908" />
      <text
        x="6"
        y="14"
        fontFamily="monospace"
        fontSize="3"
        fill="#0A0908"
        opacity="0.6"
      >
        01 / FOLKSAM
      </text>
    </svg>,
    // 02 — equalizer bars on dark
    <svg
      key="1"
      viewBox="0 0 100 100"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="100" height="100" fill={bg} />
      {[
        [12, 30, 40],
        [20, 18, 64],
        [28, 38, 24],
        [36, 10, 80],
        [44, 28, 44],
        [52, 14, 72],
        [60, 32, 36],
        [68, 8, 84],
        [76, 26, 48],
        [84, 18, 64],
      ].map(([x, y, h], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width="1.2"
          height={h}
          fill={i % 3 === 0 ? "#FF4A1C" : "#F5F1EA"}
        />
      ))}
      <text
        x="6"
        y="14"
        fontFamily="monospace"
        fontSize="3"
        fill="#F5F1EA"
        opacity="0.6"
      >
        02 / RESERVOIR
      </text>
    </svg>,
    // 03 — stacked offset cards
    <svg
      key="2"
      viewBox="0 0 100 100"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="100" height="100" fill={bg} />
      <rect x="14" y="20" width="56" height="56" fill="#F5F1EA" />
      <rect
        x="24"
        y="30"
        width="56"
        height="56"
        fill="#0A0908"
        opacity="0.85"
      />
      <rect
        x="34"
        y="40"
        width="56"
        height="56"
        fill="#FF4A1C"
        opacity="0.95"
      />
      <text
        x="6"
        y="14"
        fontFamily="monospace"
        fontSize="3"
        fill="#F5F1EA"
        opacity="0.7"
      >
        03 / LOAM
      </text>
    </svg>,
    // 04 — concentric type specimen
    <svg
      key="3"
      viewBox="0 0 100 100"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="100" height="100" fill={bg} />
      <circle
        cx="50"
        cy="52"
        r="38"
        fill="none"
        stroke="#0A0908"
        strokeWidth="0.3"
      />
      <circle
        cx="50"
        cy="52"
        r="28"
        fill="none"
        stroke="#0A0908"
        strokeWidth="0.3"
      />
      <circle
        cx="50"
        cy="52"
        r="18"
        fill="none"
        stroke="#0A0908"
        strokeWidth="0.3"
      />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontFamily="serif"
        fontStyle="italic"
        fontSize="22"
        fill="#FF4A1C"
      >
        Aa
      </text>
      <text
        x="6"
        y="14"
        fontFamily="monospace"
        fontSize="3"
        fill="#0A0908"
        opacity="0.6"
      >
        04 / HALO
      </text>
    </svg>,
  ];
  return compositions[variant % compositions.length];
}

function ProjectRow({ p, index }: { p: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const reversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className="grid grid-cols-12 items-end gap-y-6 gap-x-4 md:gap-x-8"
    >
      <div
        className={`col-span-12 md:col-span-7 ${
          reversed ? "md:order-2 md:col-start-6" : ""
        }`}
        data-cursor="hover"
      >
        <motion.div
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={inView ? { clipPath: "inset(0% 0 0 0)" } : {}}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[16/11] w-full overflow-hidden"
        >
          <motion.div
            initial={{ scale: 1.18 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="h-full w-full"
          >
            <ArtTile variant={p.variant} bg={p.bg} />
          </motion.div>
        </motion.div>
      </div>

      <div
        className={`col-span-12 flex flex-col gap-6 md:col-span-5 ${
          reversed ? "md:order-1 md:col-start-1" : ""
        }`}
      >
        <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50 md:text-xs">
          <span>{p.id}</span>
          <span>{p.year}</span>
        </div>
        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50 md:text-xs">
            {p.client}
          </p>
          <h3 className="font-display text-3xl leading-[1.02] tracking-[-0.02em] md:text-5xl lg:text-6xl">
            {p.title}
          </h3>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-ink/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Works() {
  return (
    <section className="bg-bone px-6 py-28 md:px-12 md:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex items-end justify-between md:mb-32">
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-accent md:text-xs">
              [ Selected work / 002 ]
            </p>
            <h2 className="font-display text-5xl leading-[0.95] tracking-[-0.03em] md:text-8xl">
              Recent
              <br />
              <span className="italic font-light text-accent">orbits</span>
            </h2>
          </div>
          <p className="hidden font-mono text-xs uppercase tracking-[0.3em] text-ink/40 md:block">
            2024 — 2026 / 18 projects
          </p>
        </div>
        <div className="space-y-28 md:space-y-40">
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
