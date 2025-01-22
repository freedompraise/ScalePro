"use client";

import ecommerceStatsImage from "@/assets/ecommerce-stats.png";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const WhyEcommerceFails = () => {
  const sectionRef = useRef(null);
  useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#f8f9fc] to-[#eef2f8] py-24 overflow-hidden"
      id="ecommerce-problems"
    >
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading text-center">
          <div className="flex justify-center items-center">
            <div className="tag border-[#222]/10 text-black">
              Why Most E-Commerce Stores Fail
            </div>
          </div>
          <h2 className="section-title mt-5">
            Most E-Commerce Stores Don’t Survive - Here’s Why
          </h2>
          <p className="section-description mt-5 text-gray-700">
            E-commerce has great potential, but these common pitfalls hold most
            businesses back:
          </p>
        </div>

        {/* Content Area */}
        <div className="relative mt-10 flex flex-col-reverse md:flex-row items-center">
          {/* Text Content */}
          <div className="text-content md:w-1/2">
            <ul className="list-disc mt-5 pl-5 text-[#010d3e] space-y-4">
              <li>
                <span className="font-bold text-black">70%</span> of e-commerce
                stores fail due to poor marketing strategies.
              </li>
              <li>
                <span className="font-bold text-black">80%</span> of ad budgets
                are wasted on ineffective campaigns.
              </li>
              <li>
                <span className="font-bold text-black">90%</span> of customers
                abandon their carts due to a lack of trust or poor user
                experience.
              </li>
              <li>
                <span className="font-bold text-black">50%</span> of sales are
                lost because stores fail to follow up on leads effectively.
              </li>
            </ul>
            <p className="mt-5 text-md text-[#010d3e]">
              These numbers show just how challenging it is to thrive in the
              e-commerce world. Without the right strategies, scaling your store
              can feel impossible.
            </p>
          </div>

          {/* Image Content */}
          <div className="image-content md:w-1/2 flex justify-center relative">
            <Image
              src={ecommerceStatsImage}
              alt="Statistics showing why e-commerce stores fail"
              className="rounded-xl shadow-lg w-8/12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
