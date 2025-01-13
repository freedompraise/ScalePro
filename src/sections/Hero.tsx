"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import marketingVideo from "@/assets/marketing-video.mp4";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  useMotionValueEvent(translateY, "change", (latestValue) =>
    console.log(latestValue)
  );

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_150%_200%_at_top_right,#183ec2,#eaeefe_100%)] overflow-x-clip"
      id="welcome"
    >
      <div className="container">
        <div className="md:flex items-center">
          {/* Left Content */}
          <div className="md:w-[478px]">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
              Attract 300% More Customers in 39 Days Than You Did Last Year
            </h1>
            <p className="text-xl text-[#010d3e] tracking-tight mt-6">
              Let Us Handle Your Marketing While You Focus on Running Your
              Business.
            </p>
            <div className="mt-[30px]">
              <button className="btn btn-text hidden sm:inline-flex items-center gap-2">
                <span>Get a Free Business Consultation</span>
                <ArrowIcon className="h-5 w-5 rotate-90" />
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:mt-0 md:h-[648px] md:flex-1 relative">
            <div className="lg:mt-40 sm:mt-0 relative rounded-xl shadow-lg overflow-hidden w-full max-w-[800px] mx-auto bg-black">
              {/* Video Frame Styled like YouTube */}
              <div className="aspect-w-16 aspect-h-16 bg-black">
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
        </div>
      </div>
    </section>
  );
};
