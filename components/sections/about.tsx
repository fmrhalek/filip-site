"use client";

import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";

const PARAS = [
  "Independent platform / DevOps engineer based in Prague. Six years contracting for Czech enterprises — currently building Azure infrastructure at Packeta, previously DevOps at ČEZ, Lundegaard, and BOOTIQ.",
  "I write a lot of Terraform. An opinionated library of 30+ Azure modules now powers ~50 product projects on the same conventions — hierarchical tag inheritance, leaf-level backends, every component scaffolded the same way. Code I'd want to read at 2 a.m. on an incident call.",
  "Day-to-day I move between AKS, App Service, Azure SQL, KeyVault, Service Bus, GitLab CI runners, and the occasional foray into Ansible or ClickHouse. I care more about how a system feels to operate than how clever it looks on a slide.",
];

export function About() {
  return (
    <Section id="about" num="01" title="About" rightLabel="6 yrs · 4 clients →">
      <div className="max-w-3xl space-y-6 text-base leading-relaxed md:text-lg">
        {PARAS.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <p className="text-bone/85">{p}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
