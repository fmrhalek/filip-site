"use client";

import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";

type Case = {
  period: string;
  client: string;
  sector: string;
  title: string;
  body: string;
  metrics: { value: string; label: string }[];
  stack: string[];
};

const CASES: Case[] = [
  {
    period: "2025 — now",
    client: "Packeta Group",
    sector: "Logistics · E-commerce",
    title: "Azure platform for a European logistics group",
    body: "Built and maintained an internal Terraform module library and IaC scaffold conventions used across the platform. Hierarchical tag inheritance, leaf-level backends, consistent project layouts. New infrastructure spins up in minutes instead of days.",
    metrics: [
      { value: "30+", label: "Terraform modules" },
      { value: "50+", label: "Product projects" },
      { value: "1 yr+", label: "Active" },
    ],
    stack: ["Azure", "Terraform", "AKS", "App Service", "GitLab CI"],
  },
  {
    period: "2024 — 2025",
    client: "ČEZ",
    sector: "Energy · Enterprise",
    title: "Release engineering for SAP-adjacent platforms",
    body: "DevOps capacity for SAP Fiori and Java / JavaScript application delivery. Jenkins pipelines, Git workflows, and the boring release engineering work that keeps an enterprise unblocked.",
    metrics: [
      { value: "14 mo", label: "Engagement" },
      { value: "JVM + JS", label: "Stacks shipped" },
      { value: "Hybrid", label: "Cadence" },
    ],
    stack: ["Jenkins", "Git", "SAP Fiori", "Java", "JavaScript"],
  },
  {
    period: "2019 — 2023",
    client: "Lundegaard · BOOTIQ",
    sector: "Agency · SaaS delivery",
    title: "Multi-client AWS + Heroku delivery from two Czech agencies",
    body: "Where the Terraform habit started. DevOps capacity rotated across multiple client teams — AWS infrastructure, CircleCI pipelines, Heroku deployments, Docker. Fast iteration, many simultaneous projects.",
    metrics: [
      { value: "4+ yrs", label: "Combined" },
      { value: "Multi-client", label: "Cadence" },
      { value: "Cloud-first", label: "Stack" },
    ],
    stack: ["AWS", "Terraform", "CircleCI", "Heroku", "Docker"],
  },
];

const TESTIMONIALS = [
  { placeholder: true },
  { placeholder: true },
];

export function CaseStudies() {
  return (
    <Section
      id="work"
      num="03"
      title="Selected work"
      rightLabel={`${CASES.length} case studies`}
    >
      {/* case study cards */}
      <div className="space-y-10 md:space-y-12">
        {CASES.map((c, i) => (
          <Reveal key={c.client} delay={i * 0.06}>
            <article className="group grid grid-cols-1 gap-6 border border-bone/10 p-6 transition-colors hover:border-accent/30 md:grid-cols-[200px_1fr] md:gap-10 md:p-10">
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-accent md:text-xs">
                  {c.period}
                </p>
                <p className="text-lg font-bold tracking-tight md:text-xl">
                  {c.client}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-bone/40 md:text-xs">
                  {c.sector}
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold leading-tight tracking-tight transition-colors group-hover:text-accent md:text-2xl">
                  {c.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-bone/80 md:text-base">
                  {c.body}
                </p>
                <div className="mb-6 grid grid-cols-3 gap-px bg-bone/10">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="bg-graphite px-3 py-4">
                      <p className="font-bold leading-none tabular-nums tracking-[-0.02em] text-xl md:text-2xl">
                        {m.value}
                      </p>
                      <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-bone/40 md:text-xs">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.stack.map((t) => (
                    <span
                      key={t}
                      className="border border-bone/15 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-bone/55"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* testimonials */}
      <div className="mt-20 border-t border-bone/10 pt-12 md:mt-28 md:pt-16">
        <Reveal>
          <div className="mb-10 flex items-baseline justify-between md:mb-12">
            <h3 className="text-lg font-bold tracking-tight md:text-2xl">
              Testimonials
            </h3>
            <span className="hidden text-[10px] uppercase tracking-[0.3em] text-bone/30 md:inline md:text-xs">
              quotes to come
            </span>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {TESTIMONIALS.map((_, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <blockquote className="relative h-full border border-dashed border-bone/15 p-6 md:p-10">
                <span
                  aria-hidden
                  className="absolute -top-3 left-6 bg-graphite px-2 text-[10px] uppercase tracking-[0.3em] text-bone/30 md:left-10 md:text-xs"
                >
                  [ placeholder · slot {i + 1} ]
                </span>
                <p className="mb-6 text-base italic leading-relaxed text-bone/40 md:text-lg">
                  &ldquo;A short, specific quote from someone who hired Filip —
                  e.g. an engineering manager or CTO. Two or three lines,
                  concrete outcome, real voice. Replace this block when ready.&rdquo;
                </p>
                <footer className="text-[10px] uppercase tracking-[0.3em] text-bone/40 md:text-xs">
                  <p className="text-bone/60">— Name</p>
                  <p>Role · Company</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
