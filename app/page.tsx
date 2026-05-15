import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Manifesto } from "@/components/sections/manifesto";
import { Works } from "@/components/sections/works";
import { Horizontal } from "@/components/sections/horizontal";
import { Numbers } from "@/components/sections/numbers";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Manifesto />
      <Works />
      <Horizontal />
      <Numbers />
      <Footer />
    </main>
  );
}
