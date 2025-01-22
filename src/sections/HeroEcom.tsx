"use client";

import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import ecomVideo from "@/assets/ecom-video.mp4";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export function HeroEcommerce() {
  const heroRef = useRef(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  useMotionValueEvent(translateY, "change", (latestValue) =>
    console.log(latestValue)
  );

  const handleCTAClick = () => {
    router.push("#cta");
  };

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_100%_50%_at_top_right,#183ec2,#eaeefe_100%)] overflow-x-clip"
      id="welcome"
    >
      <div className="container flex flex-col items-center gap-4">
        {/* Text Content */}
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-tr from-black to-[#001e80] text-transparent bg-clip-text mt-6">
            Boost Your E-Commerce Sales by 300% in Just 40 Days!
          </h1>
          <p className="text-xl text-[#010d3e] tracking-tight mt-6">
            Let ScalePro help you optimize your store and skyrocket your sales.
          </p>
          <div className="mt-[10px]">
            <button
              className="btn btn-text inline-flex items-center gap-2"
              onClick={handleCTAClick}
            >
              <span>Get Your Free Store Audit</span>
              <ArrowDownTrayIcon className="h-5 w-5 rotate-90" />
            </button>
          </div>
        </div>

        {/* Video Content */}
        <div className="w-full max-w-[800px] relative rounded-xl shadow-lg overflow-hidden bg-black">
          <div className="aspect-w-16 aspect-h-9 bg-black">
            <video
              src={ecomVideo}
              className="w-full h-full object-cover rounded-xl"
              controls
              preload="metadata"
              poster="/placeholder-thumbnail.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
