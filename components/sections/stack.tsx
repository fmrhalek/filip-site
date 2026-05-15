"use client";

import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";

const STACK = [
  {
    label: "INFRA-AS-CODE",
    items: ["Terraform", "Pulumi", "Helm", "Ansible"],
  },
  {
    label: "CLOUD",
    items: [
      "Azure",
      "AKS",
      "App Service",
      "Functions",
      "Storage",
      "SQL",
      "KeyVault",
      "Service Bus",
      "Container Apps",
    ],
  },
  {
    label: "ORCHESTRATION",
    items: ["Kubernetes", "GitOps", "Argo"],
  },
  {
    label: "CI / CD",
    items: ["GitLab CI", "GitHub Actions", "self-hosted runners"],
  },
  {
    label: "DATA",
    items: [
      "Azure SQL",
      "MySQL",
      "PostgreSQL",
      "ClickHouse",
      "Cosmos DB",
      "Redis",
    ],
  },
  {
    label: "OBSERVABILITY",
    items: ["Datadog", "New Relic", "Azure Monitor", "Application Insights"],
  },
  {
    label: "SECURITY",
    items: ["KeyVault", "Azure RBAC", "Managed Identities", "Policy"],
  },
  {
    label: "LANGUAGES",
    items: ["Bash", "Python", "TypeScript", "YAML (lots)", "Go (learning)"],
  },
];

export function Stack() {
  return (
    <Section
      id="stack"
      num="04"
      title="Stack"
      rightLabel={`${STACK.length} domains`}
    >
      <ul className="text-sm md:text-base">
        {STACK.map((row, i) => (
          <Reveal key={row.label} delay={i * 0.04}>
            <li className="group grid grid-cols-[110px_1fr] gap-4 border-b border-bone/5 py-3 transition-colors md:grid-cols-[220px_1fr] md:gap-8 md:py-4 hover:bg-bone/[0.02]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-bone/40 transition-colors group-hover:text-accent md:text-xs">
                {row.label}
              </span>
              <span className="flex flex-wrap gap-x-3 gap-y-1 text-bone/85">
                {row.items.map((item, idx) => (
                  <span key={idx}>
                    {item}
                    {idx < row.items.length - 1 && (
                      <span className="ml-3 text-bone/25">·</span>
                    )}
                  </span>
                ))}
              </span>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
