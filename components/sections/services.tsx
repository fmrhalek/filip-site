"use client";

import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";

type Service = {
  id: string;
  name: string;
  tagline: string;
  body: string;
  tools: string[];
};

const SERVICES: Service[] = [
  {
    id: "01",
    name: "Cloud platform engineering",
    tagline: "Designing and running Azure (and AWS) at production scale",
    body: "End-to-end platform design: networking, identity, observability, cost guardrails. From a single greenfield project to multi-tenant platforms supporting dozens of product teams.",
    tools: [
      "Azure",
      "AWS",
      "AKS",
      "App Service",
      "Service Bus",
      "KeyVault",
      "Networking",
      "IAM",
    ],
  },
  {
    id: "02",
    name: "Terraform module libraries",
    tagline: "Opinionated, reusable infrastructure that scales with the team",
    body: "I write Terraform like other people write essays. Module conventions, hierarchical tagging, scaffold-and-go project layouts. Engineers spin up new infrastructure in minutes instead of days — and code I'd want to read on an incident call.",
    tools: ["Terraform", "Helm", "Bicep", "ARM", "Ansible"],
  },
  {
    id: "03",
    name: "CI / CD & GitOps",
    tagline: "From pull request to production with proper guardrails",
    body: "Pipeline design across GitLab CI, GitHub Actions, Jenkins, and CircleCI. Secret hygiene, ephemeral preview environments, ArgoCD-driven GitOps, self-hosted runners that don't fall over on a Monday morning.",
    tools: ["GitLab CI", "GitHub Actions", "Jenkins", "ArgoCD", "CircleCI"],
  },
  {
    id: "04",
    name: "Platform DX & tooling",
    tagline: "The boring helpers that make a team feel fast",
    body: "Internal CLIs, scaffolding tools, golden-path templates, ergonomic auth flows. Less typing, fewer footguns, more time for actual product work. Some of these get released; most just quietly save the team a few hours every week.",
    tools: ["Bash", "Python", "TypeScript", "shell ergonomics", "AI tooling"],
  },
];

const STEPS = [
  {
    num: "01",
    title: "Discovery",
    body: "A short paid scoping engagement. I poke around your repos, talk to your team, write up what's actually going on and what to fix first.",
    duration: "~1 week",
  },
  {
    num: "02",
    title: "Build",
    body: "Heads-down delivery. Modules, pipelines, platform fixes — whatever the discovery surfaced. Weekly check-ins, monthly retros, no surprises.",
    duration: "3–12 months",
  },
  {
    num: "03",
    title: "Handoff",
    body: "Documentation that someone other than me can actually use. A trained-up internal owner. A boring exit, the way it should be.",
    duration: "2 weeks",
  },
];

const ENGAGEMENT = [
  { key: "Capacity", value: "2 clients at a time" },
  { key: "Length", value: "3–12 months typical" },
  { key: "Location", value: "Hybrid from Prague" },
  { key: "Rate", value: "On request" },
];

export function Services() {
  return (
    <Section
      id="services"
      num="02"
      title="Services"
      rightLabel="open for engagements →"
    >
      {/* engagement model strip */}
      <Reveal>
        <div className="mb-12 grid grid-cols-2 gap-px bg-bone/10 md:mb-16 md:grid-cols-4">
          {ENGAGEMENT.map((e) => (
            <div key={e.key} className="bg-graphite px-4 py-5 md:px-6 md:py-6">
              <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-bone/40 md:text-xs">
                {e.key}
              </p>
              <p className="text-sm font-bold text-bone/95 md:text-base">
                {e.value}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* services cards */}
      <div className="grid grid-cols-1 gap-px bg-bone/10 md:grid-cols-2">
        {SERVICES.map((s, i) => (
          <Reveal key={s.id} delay={(i % 2) * 0.08} className="bg-graphite">
            <article className="group flex h-full flex-col p-6 transition-colors hover:bg-bone/[0.025] md:p-10">
              <div className="mb-6 flex items-baseline justify-between md:mb-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent md:text-xs">
                  {s.id} / 04
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-bone/40 md:text-xs">
                  service
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight transition-colors group-hover:text-accent md:text-2xl">
                {s.name}
              </h3>
              <p className="mb-5 text-sm text-bone/60 md:text-base">
                {s.tagline}
              </p>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-bone/80 md:text-base">
                {s.body}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tools.map((t) => (
                  <span
                    key={t}
                    className="border border-bone/15 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-bone/55"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* how i work */}
      <div className="mt-16 border-t border-bone/10 pt-12 md:mt-24 md:pt-16">
        <Reveal>
          <div className="mb-10 flex items-baseline justify-between md:mb-14">
            <h3 className="text-lg font-bold tracking-tight md:text-2xl">
              How I work
            </h3>
            <span className="hidden text-[10px] uppercase tracking-[0.3em] text-bone/30 md:inline md:text-xs">
              3 steps · no surprises
            </span>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-px bg-bone/10 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.08} className="bg-graphite">
              <div className="h-full p-6 md:p-10">
                <p className="mb-6 text-4xl font-bold leading-none tracking-[-0.04em] text-accent md:mb-10 md:text-6xl">
                  {s.num}
                </p>
                <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-bone/40 md:text-xs">
                  {s.duration}
                </p>
                <h4 className="mb-3 text-xl font-bold tracking-tight md:text-2xl">
                  {s.title}
                </h4>
                <p className="text-sm leading-relaxed text-bone/75 md:text-base">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* mid-page CTA */}
      <Reveal>
        <div className="mt-16 flex flex-col items-start gap-4 border-t border-bone/10 pt-10 md:mt-20 md:flex-row md:items-center md:justify-between md:pt-12">
          <p className="text-base text-bone/75 md:text-lg">
            Got something gnarly to build?{" "}
            <span className="text-bone/95">
              I have one spot opening soon.
            </span>
          </p>
          <a
            href="mailto:filip.mrhalek@gmail.com?subject=Project%20inquiry"
            className="group inline-flex items-center gap-3 border border-accent bg-accent px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.25em] text-graphite transition-colors hover:bg-graphite hover:text-accent md:text-xs"
          >
            Start a conversation
            <span
              aria-hidden
              className="inline-block transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
