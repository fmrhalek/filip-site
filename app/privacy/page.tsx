import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy — Filip Mrhálek",
  description:
    "Privacy policy for filip-mrhalek.cz. This site does not collect or process personal data.",
};

const BLOCKS = [
  {
    title: "What this site collects",
    body: "Nothing. No cookies, no analytics, no tracking pixels, no contact forms, no embedded third-party services that profile you. The site is a static brochure.",
  },
  {
    title: "Server logs",
    body: "Standard HTTP request logs (IP, user-agent, requested URL, timestamp) may be retained by the hosting provider for a short period to operate the service. They are not used for analytics or marketing.",
  },
  {
    title: "If you email me",
    body: "Your email and message are handled as ordinary correspondence and are not shared with third parties or used for marketing. I respond, archive the thread, and that's it.",
  },
  {
    title: "External links",
    body: "Some links lead to GitHub, LinkedIn, ARES, and other third-party services. Their privacy practices are governed by their own policies, not this one.",
  },
  {
    title: "Your rights under GDPR",
    body: "You have the right to access, correct, or request deletion of any personal data I hold about you (typically: email correspondence). To exercise these rights, write to the contact below.",
  },
  {
    title: "Contact",
    body: "Filip Mrhálek · filip.mrhalek@gmail.com · IČO 09535560 · Registered in the Czech Republic (see Imprint).",
  },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 md:px-12 md:py-28">
      <Link
        href="/"
        className="mb-12 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-bone/50 transition-colors hover:text-accent md:text-xs"
      >
        ← back to home
      </Link>

      <header className="mb-12 md:mb-16">
        <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-accent md:text-xs">
          [ GDPR · v01 · 2026-05 ]
        </p>
        <h1 className="text-4xl font-bold tracking-[-0.03em] md:text-6xl">
          Privacy
        </h1>
        <p className="mt-4 max-w-xl text-sm text-bone/55 md:text-base">
          Short version: this site doesn't collect anything. Long version below.
        </p>
      </header>

      <div className="space-y-12 border-t border-bone/10 pt-12 md:space-y-14 md:pt-14">
        {BLOCKS.map((b, i) => (
          <section
            key={b.title}
            className="grid grid-cols-1 gap-3 md:grid-cols-[220px_1fr] md:gap-12"
          >
            <h2 className="text-[10px] uppercase tracking-[0.25em] text-bone/45 md:text-xs">
              {String(i + 1).padStart(2, "0")} / {b.title}
            </h2>
            <p className="text-sm leading-relaxed text-bone/85 md:text-base">
              {b.body}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
