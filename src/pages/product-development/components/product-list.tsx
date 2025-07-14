"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import arrowCircle from "../../../../public/assets/images/white-round-arrow.svg";

const ProductListSection = () => {
  return (
    <section
      className="bg-white px-4 py-16 md:px-16 text-[#2B3F44]"
      style={{
        backgroundImage: "url('/assets/images/bg-pattern.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003F4D]">
          Product Branding & Management
        </h2>
        <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
          We combine strategy, creativity, and execution to shape product identities and manage
          their full lifecycle — from concept to market success.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Product Branding */}
        <motion.div
          className="bg-[#002A33] w-full rounded-3xl p-10 text-white min-h-[350px] flex flex-col items-center justify-center text-center shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-3xl font-bold leading-snug">
            Product Branding
            <br />
            <span className="text-xl font-medium mt-4 block text-white/90">
              We build memorable brand identities that resonate with your audience —
              from logo design to brand messaging and packaging that leaves a lasting impression.
            </span>
          </div>
          <div className="mt-6">
            <Image
              src={arrowCircle}
              alt="Branding Arrow"
              className="w-[60px] h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Product Management */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-lg shadow-md text-left"
        >
          <h3 className="text-xl font-bold mb-2 text-[#003F4D]">Product Management</h3>
          <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-6">
            Our product managers ensure every phase — from discovery to delivery — is aligned with
            your vision. We prioritize feature planning, cross-functional collaboration, and
            measurable impact to keep your product evolving and relevant.
          </p>
          <div className="inline-block bg-[#55A9BB] text-[#00191F] rounded-full px-4 py-1 text-sm font-semibold">
            Strategy & Execution
          </div>
        </motion.div>
				    {/* Column 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          viewport={{ once: true }}
          className="bg-white p-6 rounded-lg shadow-md text-left"
        >
        
          <h3 className="text-xl font-bold mb-2 text-[#003F4D]">Product Resourcing</h3>
          <ul className="text-left text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed list-disc list-inside space-y-2">
            {[
              "Business analysis",
              "Data Analysis",
              "UI/UX Design",
              "Graphic Design",
              "Product Branding",
              "Product Managemnet",
              
            ].map((role, index) => (
              <li key={index} className="hover:text-[#007E99] transition-colors duration-200">{role}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductListSection;
