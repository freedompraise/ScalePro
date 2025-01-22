"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  GlobeAltIcon,
  FunnelIcon,
  PresentationChartBarIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

export function EcommerceSolutions() {
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
      id="ecomsolutions"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center items-center">
            <div className="tag border-[#222]/10 text-black">
              How ScalePro Helps E-Commerce Thrive
            </div>
          </div>
          <h2 className="section-title mt-5">
            Comprehensive Solutions for E-Commerce Success
          </h2>
          <p className="section-description mt-5">
            ScalePro offers tailored solutions to help e-commerce businesses
            grow, thrive, and dominate the market.
          </p>
        </div>

        <div className="services-grid mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <motion.div
            className="card flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-6"
            style={{ translateY }}
          >
            <GlobeAltIcon className="h-16 w-16 text-blue-600 mb-4" />
            <h3 className="font-bold text-black text-lg">
              Custom E-Commerce Stores
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Build conversion-focused stores designed to maximize sales.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="card flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-6"
            style={{ translateY }}
          >
            <FunnelIcon className="h-16 w-16 text-blue-600 mb-4" />
            <h3 className="font-bold text-black text-lg">
              Sales Funnel Optimization
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Map out every stage of the customer journey for better ROI.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            className="card flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-6"
            style={{ translateY }}
          >
            <PresentationChartBarIcon className="h-16 w-16 text-blue-600 mb-4" />
            <h3 className="font-bold text-black text-lg">
              Targeted Ads Management
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Run hyper-focused Google and Facebook campaigns to attract the
              right buyers.
            </p>
          </motion.div>

          {/* Service 4 */}
          <motion.div
            className="card flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-6"
            style={{ translateY }}
          >
            <ShoppingCartIcon className="h-16 w-16 text-blue-600 mb-4" />
            <h3 className="font-bold text-black text-lg">
              High-Ticket Closures
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Provide professional closers to help secure big-ticket sales.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
