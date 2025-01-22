import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

// Marketing components
import { ReadyToScaleCTA } from "@/sections/CTAMark";
import { HeroMark } from "@/sections/HeroMark";
import { ScaleProSolutionMark } from "@/sections/SolutionMark";
import { WhyBusinessesStruggle } from "@/sections/ProblemMark";

// E-commerce components
import { ScaleProCTA } from "@/sections/CTAEcom";
import { HeroEcommerce } from "@/sections/HeroEcom";
import { EcommerceSolutions } from "@/sections/SolutionEcom";
import { WhyEcommerceFails } from "@/sections/ProblemEcom";

// Dynamic metadata function
export async function generateMetadata({
  searchParams,
}: {
  searchParams: { mode?: string };
}) {
  const variant = searchParams.mode || "promotion";

  return {
    title:
      variant === "promotion"
        ? "Scale Pro Solutions | Marketing Agency"
        : "Scale Pro Solutions | E-Commerce Services",
    description:
      variant === "promotion"
        ? "Let Us Handle Your Marketing While You Focus on Running Your Business."
        : "Empowering E-Commerce Businesses with Comprehensive Solutions for Success.",
  };
}

function VariantRenderer() {
  const searchParams = useSearchParams();
  const variant = searchParams.get("mode") || "promotion"; // Default to "promotion"

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
