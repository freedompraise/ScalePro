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
import { Suspense } from "react";

function VariantRenderer() {
  const searchParams = useSearchParams();
  const variant = searchParams.get("mode") || "promotion"; // Default to "marketing"

  if (variant === "promotion") {
    return (
      <>
        <HeroMark />
        <WhyBusinessesStruggle />
        <ScaleProSolutionMark />
        <ReadyToScaleCTA />
      </>
    );
  }

  if (variant === "retail") {
    return (
      <>
        <HeroEcommerce />
        <WhyEcommerceFails />
        <EcommerceSolutions />
        <ScaleProCTA />
      </>
    );
  }

  return <p className="text-center py-24">Invalid variant specified.</p>;
}

export default function Home() {
  return (
    <>
      <Header />
      <Suspense fallback={<p className="text-center py-24">Loading...</p>}>
        <VariantRenderer />
      </Suspense>
      <Footer />
    </>
  );
}
