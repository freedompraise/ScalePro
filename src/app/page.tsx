import { ReadyToScaleCTA } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ScaleProSolution } from "@/sections/Solution";
import { WhyBusinessesStruggle } from "@/sections/Problem";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <LogoTicker /> */}
      <WhyBusinessesStruggle />
      <ScaleProSolution />
      <ReadyToScaleCTA />
      <Footer />
    </>
  );
}
