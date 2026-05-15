import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Imprint — Filip Mrhálek",
  description:
    "Provider information (Impressum) for filip-mrhalek.cz — registered Czech sole trader.",
};

const ROWS: { label: string; value: string }[] = [
  { label: "Registered name", value: "Bc. Filip Mrhálek" },
  { label: "Trade name", value: "Filip Mrhálek — independent contractor" },
  { label: "Legal form", value: "Sole trader (živnostník / OSVČ)" },
  { label: "IČO", value: "09535560" },
  { label: "DIČ", value: "CZ9906250277 (VAT registered)" },
  {
    label: "Registered office",
    value: "V lesíčku 665/1, Smíchov, 150 00 Praha 5, Czech Republic",
  },
  { label: "Registered with", value: "Živnostenský rejstřík ČR" },
  { label: "Registered since", value: "22 September 2020" },
  { label: "NACE", value: "62.0 — IT consultancy and related activities" },
  { label: "Contact email", value: "filip.mrhalek@gmail.com" },
];

export default function ImprintPage() {
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
          [ §80 Civil Code · §31 Trade Act ]
        </p>
        <h1 className="text-4xl font-bold tracking-[-0.03em] md:text-6xl">
          Imprint
        </h1>
        <p className="mt-4 text-sm text-bone/55 md:text-base">
          Provider information / Údaje o provozovateli
        </p>
      </header>

      <dl className="divide-y divide-bone/10 border-y border-bone/10">
        {ROWS.map((r) => (
          <div
            key={r.label}
            className="grid grid-cols-1 gap-2 py-5 md:grid-cols-[220px_1fr] md:gap-12 md:py-6"
          >
            <dt className="text-[10px] uppercase tracking-[0.25em] text-bone/45 md:text-xs">
              {r.label}
            </dt>
            <dd className="text-sm text-bone/90 md:text-base">{r.value}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-12 max-w-2xl text-xs leading-relaxed text-bone/45 md:text-sm">
        Information published under §31 of the Czech Trade Act
        (Živnostenský zákon č. 455/1991 Sb.) and §80 of the Civil Code. All
        registration data is also available on{" "}
        <a
          href="https://ares.gov.cz/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-bone/70 underline-offset-4 hover:underline"
        >
          ARES
        </a>
        , the public business registry of the Czech Republic.
      </p>
    </main>
  );
}
