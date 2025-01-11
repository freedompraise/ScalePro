"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Import icons from Heroicons
import {
  HomeIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export const ScaleProSolution = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#E8F1FF] to-[#D9E7FF] py-24 overflow-x-clip"
      id="thesolution"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center items-center">
            <div className="tag border-[#222]/10 text-black">
              How ScalePro Helps You Win
            </div>
          </div>
          <h2 className="section-title mt-5">
            Everything You Need to Dominate Your Market
          </h2>
          <p className="section-description mt-5">
            From crafting a stunning online presence to driving targeted
            traffic, here’s how ScalePro empowers your business:
          </p>
        </div>

        <div className="services-grid mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <motion.div
            className="card flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-6"
            style={{ translateY }}
          >
            <HomeIcon className="h-16 w-16 mb-4" />
            <h3 className="font-bold text-black text-lg">Custom Websites</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Build a website that turns visitors into loyal customers.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="card flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-6"
            style={{ translateY }}
          >
            <UserGroupIcon className="h-16 w-16 mb-4" />
            <h3 className="font-bold text-black text-lg">
              Lead-Generation Campaigns
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Generate high-quality leads tailored to your business.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            className="card flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-6"
            style={{ translateY }}
          >
            <ShoppingBagIcon className="h-16 w-16 mb-4" />
            <h3 className="font-bold text-black text-lg">
              Google & Facebook Ads
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Drive targeted traffic with expert ad campaigns.
            </p>
          </motion.div>

          {/* Service 4 */}
          <motion.div
            className="card flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-6"
            style={{ translateY }}
          >
            <ChartBarIcon className="h-16 w-16 mb-4" />
            <h3 className="font-bold text-black text-lg">SEO Rankings</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Dominate search engine results and increase visibility.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
