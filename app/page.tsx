import { Hero } from "@/components/sections/hero";
import { Credibility } from "@/components/sections/credibility";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { CaseStudies } from "@/components/sections/case-studies";
import { Stack } from "@/components/sections/stack";
import { Experience } from "@/components/sections/experience";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Credibility />
      <About />
      <Services />
      <CaseStudies />
      <Stack />
      <Experience />
      <FAQ />
      <Contact />
    </main>
  );
}
