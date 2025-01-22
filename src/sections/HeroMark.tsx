"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import marketingVideo from "@/assets/marketing-video.mp4";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export const HeroMark = () => {
  const router = useRouter();
  const heroRef = useRef(null);
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
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_150%_200%_at_top_right,#183ec2,#eaeefe_100%)] overflow-x-clip"
      id="welcome"
    >
      <div className="container flex flex-col items-center gap-4">
        {/* Text Content */}
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
            Attract 300% More Customers in 39 Days Than You Did Last Year
          </h1>
          <p className="text-xl text-[#010d3e] tracking-tight mt-6">
            Let Us Handle Your Marketing While You Focus on Running Your
            Business.
          </p>
          <div className="mt-[10px]">
            <button
              className="btn btn-text inline-flex items-center gap-2"
              onClick={handleCTAClick}
            >
              <span>Get a Free Business Consultation</span>
              <ArrowIcon className="h-5 w-5 rotate-90" />
            </button>
          </div>
        </div>

        {/* Video Content */}
        <div className="w-full max-w-[800px] relative rounded-xl shadow-lg overflow-hidden bg-black">
          <div className="aspect-w-16 aspect-h-9 bg-black">
            <video
              src={marketingVideo}
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
};
