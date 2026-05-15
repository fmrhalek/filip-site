"use client";

import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";

type Role = {
  when: string;
  duration: string;
  company: string;
  title: string;
  engagement: string;
  place: string;
  bullets: string[];
  tags: string[];
};

const ROLES: Role[] = [
  {
    when: "2025 — now",
    duration: "1 yr 3 mo",
    company: "Packeta Group",
    title: "Cloud Engineer",
    engagement: "Contractor · živnostník · hybrid",
    place: "Prague",
    bullets: [
      "Cloud platform engineering across the Packeta group on Azure.",
      "Author and maintainer of an internal Azure Terraform module library (30+ modules) and IaC scaffolding conventions used by ~50 product projects.",
      "AKS, App Service, Azure SQL, KeyVault, Service Bus, GitLab CI runners, multi-tenant tooling.",
    ],
    tags: ["Azure", "Terraform", "Cloud Computing"],
  },
  {
    when: "2024 — 2025",
    duration: "1 yr 2 mo",
    company: "ČEZ",
    title: "DevOps Engineer",
    engagement: "Contractor · part-time · hybrid",
    place: "Prague",
    bullets: [
      "DevOps for enterprise SAP-adjacent platforms. Jenkins pipelines, Git workflows, release engineering for Java / JavaScript / SAP Fiori applications.",
    ],
    tags: ["Jenkins", "Git", "SAP Fiori", "Java", "JavaScript"],
  },
  {
    when: "2022 — 2023",
    duration: "1 yr 1 mo",
    company: "Lundegaard",
    title: "DevOps Specialist",
    engagement: "Contractor · part-time · on-site",
    place: "Prague",
    bullets: [
      "DevOps & infrastructure on Linux, Docker, container-based delivery for client projects.",
    ],
    tags: ["Linux", "Docker", "DevOps"],
  },
  {
    when: "2019 — 2022",
    duration: "3 yrs 6 mo",
    company: "BOOTIQ (BiQ Group)",
    title: "DevOps Specialist",
    engagement: "Contractor · part-time",
    place: "Prague",
    bullets: [
      "Cloud delivery on AWS and Heroku. Terraform for infrastructure, CircleCI and GitHub for CI/CD across multiple client teams.",
      "Where the Terraform habit started.",
    ],
    tags: ["AWS", "Terraform", "Heroku", "CircleCI", "GitHub"],
  },
];

const EDUCATION = [
  {
    when: "now",
    school: "VŠE Prague",
    program: "MSc · Information Systems Development",
    detail: "in progress",
  },
  {
    when: "before",
    school: "VŠE Prague",
    program: "BSc · Applied Informatics",
    detail: "completed",
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      num="05"
      title="Experience"
      rightLabel={`${ROLES.length} engagements`}
    >
      <ol className="relative space-y-12 md:space-y-16">
        <div
          aria-hidden
          className="pointer-events-none absolute left-[122px] top-2 bottom-2 hidden w-px bg-bone/10 md:block"
        />
        {ROLES.map((r, i) => (
          <Reveal key={`${r.company}-${i}`} delay={i * 0.05}>
            <li className="grid grid-cols-1 gap-3 md:grid-cols-[120px_1fr] md:gap-12">
              <div className="md:pt-1">
                <p className="text-[10px] uppercase tracking-[0.3em] text-bone/60 md:text-xs">
                  {r.when}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-bone/30 md:text-xs">
                  {r.duration}
                </p>
              </div>
              <div className="relative md:pl-8">
                <span
                  aria-hidden
                  className="absolute left-[-5px] top-2 hidden h-2.5 w-2.5 rounded-full bg-accent md:block"
                />
                <div className="mb-1 flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-bold tracking-tight md:text-xl">
                    {r.company}
                  </h3>
                  <span className="hidden text-[10px] uppercase tracking-[0.3em] text-bone/40 md:inline md:text-xs">
                    {r.place}
                  </span>
                </div>
                <p className="mb-1 text-sm text-bone/70 md:text-base">
                  {r.title}
                </p>
                <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-bone/40 md:text-xs">
                  {r.engagement}
                </p>
                <ul className="mb-4 space-y-2 text-sm leading-relaxed text-bone/80 md:text-base">
                  {r.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="text-bone/30">└─</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-bone/15 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-bone/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.1}>
        <div className="mt-20 border-t border-bone/10 pt-10 md:mt-28 md:pt-14">
          <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-bone/40 md:text-xs">
            Education
          </p>
          <ul className="space-y-3 text-sm md:text-base">
            {EDUCATION.map((e) => (
              <li
                key={e.program}
                className="grid grid-cols-[60px_1fr] gap-4 md:grid-cols-[120px_1fr] md:gap-12"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-bone/40 md:text-xs">
                  {e.when}
                </span>
                <span>
                  <span className="text-bone/90">{e.school}</span>
                  <span className="text-bone/40"> — {e.program}</span>
                  <span className="ml-2 text-[10px] uppercase tracking-[0.2em] text-bone/30 md:text-xs">
                    [ {e.detail} ]
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
