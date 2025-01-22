"use client";

import { useSearchParams } from "next/navigation";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

// marketing
import { ReadyToScaleCTA } from "@/sections/CTAMark";
import { HeroMark } from "@/sections/HeroMark";
import { ScaleProSolutionMark } from "@/sections/SolutionMark";
import { WhyBusinessesStruggle } from "@/sections/ProblemMark";

// ecommerce
import { ScaleProCTA } from "@/sections/CTAEcom";
import { HeroEcommerce } from "@/sections/HeroEcom";
import { EcommerceSolutions } from "@/sections/SolutionEcom";
import { WhyEcommerceFails } from "@/sections/ProblemEcom";

export default function Home() {
  const searchParams = useSearchParams();
  const variant = searchParams.get("mode") || "promotion"; // Default to "marketing"

  return (
    <>
      <Header />
      {variant === "promotion" ? (
        <>
          <HeroMark />
          <WhyBusinessesStruggle />
          <ScaleProSolutionMark />
          <ReadyToScaleCTA />
        </>
      ) : variant === "retail" ? (
        <>
          <HeroEcommerce />
          <WhyEcommerceFails />
          <EcommerceSolutions />
          <ScaleProCTA />
        </>
      ) : (
        <p className="text-center py-24">Invalid variant specified.</p>
      )}
      <Footer />
    </>
  );
}
