import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { LenisProvider } from "@/components/lenis-provider";
import { Cursor } from "@/components/cursor";
import { ErrorBoundary } from "@/components/error-boundary";
import { MotionShell } from "@/components/motion-shell";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const jbm = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orbit Studio — Design that refuses to blend in",
  description:
    "A design studio building unforgettable digital products for brands that refuse to blend in.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrument.variable} ${jbm.variable}`}
    >
      <body className="font-sans">
        <ErrorBoundary>
          <MotionShell>
            <LenisProvider>
              <Cursor />
              {children}
            </LenisProvider>
          </MotionShell>
        </ErrorBoundary>
      </body>
    </html>
  );
}
