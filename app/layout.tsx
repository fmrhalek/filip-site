import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ErrorBoundary } from "@/components/error-boundary";
import { MotionShell } from "@/components/motion-shell";
import { LenisProvider } from "@/components/lenis-provider";
import { AvailabilityBar } from "@/components/availability-bar";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mrhalek.cz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Filip Mrhálek — Platform engineer for hire",
    template: "%s · Filip Mrhálek",
  },
  description:
    "Independent platform & DevOps engineer based in Prague. Azure, Terraform, and the boring parts of the cloud done well. Open for new engagements.",
  keywords: [
    "Platform Engineer",
    "DevOps Engineer",
    "Azure",
    "Terraform",
    "Kubernetes",
    "GitLab CI",
    "Prague",
    "Czech Republic",
    "Contractor",
    "Freelance",
    "Cloud Engineer",
    "IaC",
  ],
  authors: [{ name: "Filip Mrhálek", url: SITE }],
  creator: "Filip Mrhálek",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE,
    siteName: "Filip Mrhálek",
    title: "Filip Mrhálek — Platform engineer for hire",
    description:
      "Independent platform & DevOps engineer. Azure, Terraform, contracting out of Prague.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Filip Mrhálek — Platform engineer for hire",
    description:
      "Independent platform & DevOps engineer. Azure, Terraform, contracting out of Prague.",
  },
  robots: { index: true, follow: true },
};

const PERSON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Filip Mrhálek",
  jobTitle: "Platform & DevOps Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Prague",
    addressCountry: "CZ",
  },
  url: SITE,
  sameAs: [
    "https://cz.linkedin.com/in/filip-mrh%C3%A1lek-6131a6238",
    "https://github.com/fmrhalek",
  ],
  knowsAbout: [
    "Azure",
    "Terraform",
    "Kubernetes",
    "DevOps",
    "Platform Engineering",
    "GitLab CI",
    "Cloud Infrastructure",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mono.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSONLD) }}
        />
      </head>
      <body className="bg-graphite font-mono text-bone">
        <ErrorBoundary>
          <MotionShell>
            <LenisProvider>
              <div
                aria-hidden
                className="grid-bg pointer-events-none fixed inset-0 z-0"
              />
              <AvailabilityBar />
              <div className="relative z-10">{children}</div>
            </LenisProvider>
          </MotionShell>
        </ErrorBoundary>
      </body>
    </html>
  );
}
