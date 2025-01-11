"use client";

import struggleStatsImage from "@/assets/struggle-stats.png"; // Placeholder for a dramatic infographic
import warningIcon from "@/assets/warning-icon.png"; // Placeholder for a floating warning or alert icon
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const WhyBusinessesStruggle = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#F9FAFB] to-[#E3E8F1] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center items-center">
            <div className="tag border-[#222]/10 text-black">
              Why Most Businesses Struggle
            </div>
          </div>
          <h2 className="section-title mt-5">
            Most Businesses Are Failing – Don’t Be One of Them
          </h2>
          <p className="section-description mt-5">
            The numbers don’t lie. Businesses are losing out daily, and here’s
            why:
          </p>
        </div>
        <div className="relative mt-10 flex flex-col-reverse md:flex-row items-center">
          <div className="text-content md:w-1/2">
            <ul className="list-disc mt-5 pl-5 text-[#010d3e] space-y-4">
              <li>
                <span className="font-bold text-black">60%</span> of businesses
                waste their marketing budgets on ads that fail to convert.
              </li>
              <li>
                Over <span className="font-bold text-black">70%</span> of small
                businesses struggle to attract high-quality leads in their local
                markets.
              </li>
              <li>
                <span className="font-bold text-black">9 out of 10</span>{" "}
                customers won’t trust a business without a professional online
                presence.
              </li>
              <li>
                <span className="font-bold text-black">50%</span> of local
                businesses close within the first five years due to poor
                marketing strategies.
              </li>
            </ul>
            <p className="mt-5 text-md text-[#010d3e]">
              If you’re spending money on ads and campaigns that don’t work,
              while your competitors dominate the market, you're not alone – but
              you can’t afford to ignore this any longer.
            </p>
          </div>
          <div className="image-content md:w-1/2 flex justify-center relative">
            <Image
              src={struggleStatsImage}
              alt="Statistics showing business struggles"
              className="rounded-xl shadow-lg w-6/12"
            />
            {/* <motion.img
              src={warningIcon.src}
              alt="Warning Icon"
              width={50}
              height={50}
              className="absolute top-0 right-0"
              style={{
                translateY,
              }}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
