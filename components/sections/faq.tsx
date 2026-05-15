"use client";

import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";

const ITEMS = [
  {
    q: "What's your day rate?",
    a: "On request — depends on scope, length, and tech stack. For a clean answer, drop me an email with a one-paragraph project description and I'll come back with a number.",
  },
  {
    q: "Will you take short engagements?",
    a: "Generally no — I aim for 3+ months. Exceptions: a clear-scope discovery week (~1 wk paid) or a defined deliverable like a Terraform module audit (~2 wks).",
  },
  {
    q: "Employment, payroll, or IČO?",
    a: "IČO / živnostník invoicing. I'm a registered Czech sole trader (IČO 09535560, VAT-registered). For EU clients this is the simplest path; for non-EU we can talk.",
  },
  {
    q: "Hybrid, remote, or on-site?",
    a: "Hybrid out of Prague is the default. Occasional on-site for kickoffs or workshops. Fully remote is possible for the right team and timezone.",
  },
  {
    q: "Would you ever take a full-time role?",
    a: "Right now, no — contractor capacity only. I'm happy with multi-day-per-week commitments and long-running engagements, but not headcount.",
  },
];

export function FAQ() {
  return (
    <Section
      id="faq"
      num="06"
      title="FAQ"
      rightLabel={`${ITEMS.length} questions`}
    >
      <ul className="divide-y divide-bone/10 border-y border-bone/10">
        {ITEMS.map((item, i) => (
          <Reveal key={item.q} delay={i * 0.05}>
            <li className="grid grid-cols-1 gap-2 py-8 md:grid-cols-[1fr_2fr] md:gap-12 md:py-10">
              <h3 className="text-base font-bold leading-snug tracking-tight md:text-lg">
                <span className="mr-3 text-accent">→</span>
                {item.q}
              </h3>
              <p className="text-sm leading-relaxed text-bone/75 md:text-base">
                {item.a}
              </p>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
