"use client";

import ecommerceCTAImage from "@/assets/cta-background.jpg";
import { motion } from "framer-motion";

export const ScaleProCTA = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-24"
      style={{
        backgroundImage: `url(${ecommerceCTAImage.src})`,
      }}
      id="cta"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="container relative z-10 text-center">
        <motion.h2
          className="text-3xl md:text-[54px] font-bold leading-tight bg-gradient-to-b from-white to-gray-300 text-transparent bg-clip-text"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to Skyrocket Your E-Commerce Sales?
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-[22px] leading-[30px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Don’t miss out on our{" "}
          <span className="font-bold">FREE 30-minute audit call</span>. We’ll
          analyze your store, pinpoint the gaps, and share strategies to help
          you achieve
          <span className="font-bold"> 300% more sales in just 40 days.</span>
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="btn-primary text-lg px-6 py-3">
            Book Your Free Audit Call Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};
