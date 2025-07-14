"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bgImage from "../../../../public/assets/images/product-drive.svg"; // replace with your actual background image

const OutsourcingSection = () => {
  return (
    <section
      className="relative bg-cover font-outfit bg-center min-h-screen flex items-center justify-center px-4 py-20 text-white"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-6xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-12"
        >
          Driving product development and business expansion
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Talent Outsourcing */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold mb-4">Talent Outsourcing</h3>
            <p className="text-[16px] md:text-[18px] text-[#fff] font-light leading-relaxed mb-8">
              We provide exceptional talents with the right skills to support
              your projects. Our streamlined outsourcing process ensures the
              best fit for your specific business needs.
            </p>
            <button className="border border-[#2b93aa] hover:border-[#2B93AA] font-medium bg-[#2B93AA] text-white px-8 py-3 rounded-full transition duration-300 hover:bg-transparent hover:text-[#2B93AA]">
              Learn More
            </button>
          </motion.div>

          {/* Developer Outsourcing */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold mb-4">
              Developer Outsourcing
            </h3>
            <p className="text-[16px] md:text-[18px] text-[#fff] font-light leading-relaxed mb-8">
              Our vetted software developers are ready to join your team and
              contribute to building scalable, secure, and reliable applications
              tailored to your goals.
            </p>
             <button
            // onClick={handleEmailClick}
            className="border border-[#2b93aa] hover:border-[#2B93AA] font-medium bg-[#2B93AA] text-white px-8 py-3 rounded-full transition duration-300 hover:bg-transparent hover:text-[#2B93AA]"
          >
            Learn More 
          </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OutsourcingSection;
