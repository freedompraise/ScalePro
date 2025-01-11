"use client";

import backgroundImage from "@/assets/cta-background.jpg"; // Placeholder for visually striking background image
import { motion } from "framer-motion";

export const ReadyToScaleCTA = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-24"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div> {/* Overlay */}
      <div className="container relative z-10 text-center">
        <motion.h2
          className="text-3xl md:text-[54px] font-bold leading-tight bg-gradient-to-b from-white to-gray-300 text-transparent bg-clip-text"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to Scale Your Business?
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-[22px] leading-[30px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The only thing you need is to click the button below and book a{" "}
          <span className="font-bold">FREE 30-minute audit call</span>. We’ll
          look at your business and give you a free consultation to show you how
          to scale effectively.
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
