"use client";

import struggleStatsImage from "@/assets/struggle-stats.png";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const WhyBusinessesStruggle = () => {
  const sectionRef = useRef(null);
  useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#F9FAFB] to-[#E3E8F1] py-24 overflow-x-clip"
      id="theproblem"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center items-center">
            <div className="tag border-[#222]/10 text-black">
              Why Most Businesses Struggle
            </div>
          </div>
          <h2 className="section-title mt-5">
            Most Businesses Are Failing - Don&apos;t Be One of Them
          </h2>
          <p className="section-description mt-5">
            The numbers don&apos;t lie. Businesses are losing out daily, and
            here&apos;s why:
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
                customers won&apos;t trust a business without a professional
                online presence.
              </li>
              <li>
                <span className="font-bold text-black">50%</span> of local
                businesses close within the first five years due to poor
                marketing strategies.
              </li>
            </ul>
            <p className="mt-5 text-md text-[#010d3e]">
              If you&apos;re spending money on ads and campaigns that don&apos;t
              work, while your competitors dominate the market, you're not alone
              - but you can&apos;t afford to ignore this any longer.
            </p>
          </div>
          <div className="image-content md:w-1/2 flex justify-center relative">
            <Image
              src={struggleStatsImage}
              alt="Statistics showing business struggles"
              className="rounded-xl shadow-lg w-8/12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
