"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import arrowCircle from "../../../../public/assets/images/white-round-arrow.svg"
const DeveloperListSection = () => {
  return (
    <section
      className="bg-white px-4 py-16 md:px-16 text-[#2B3F44]"
      style={{ backgroundImage: "url('/assets/images/bg-pattern.svg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003F4D]">
          Talent Resources
        </h2>
          <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
          Discover how we support organizations with the right blend of technical and leadership talents to drive success.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
       {/* Column 1 */}
       <motion.div
          className="bg-[#002A33] w-full rounded-3xl p-10 text-white min-h-[400px] flex flex-col items-center justify-center text-center shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-3xl font-bold leading-snug">
            Developers Outsourcing
            <br />
            <span className="text-2xl font-medium">
Access top-tier developers to bring your ideas to life while you focus on growth. Boost productivity, save time, and stay ahead.            </span>
          </div>
          <div className="mt-6">
            <Image
              src={arrowCircle}
              alt="Sort"
              className="w-[80px] h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Column 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
          className="bg-white p-6 rounded-lg shadow-md text-left"
        >
         
          <h3 className="text-xl font-bold mb-2 text-[#003F4D]">Talents Recruitment</h3>
          <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
            We match organizations with exceptional talent through active recruitment strategies including profiling, sourcing, screening, and onboarding — for both individual and bulk hiring.
          </p>
          <div className="inline-block bg-[#55A9BB] text-[#00191F] rounded-full px-4 py-1 text-sm font-semibold">
            Non-Tech Roles
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
        
          <h3 className="text-xl font-bold mb-2 text-[#003F4D]">Technology Resourcing</h3>
          <ul className="text-left text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed list-disc list-inside space-y-2">
            {[
              "Frontend Engineers",
              "Backend Engineers",
              "Solution Architect",
              "Mobile Engineers",
              "DevOps Engineer & SRE",
              "Automation Engineer",
              "QA Engineer",
              "Data Engineer",
              "RPA Developer",
              "Product Managers"
            ].map((role, index) => (
              <li key={index} className="hover:text-[#007E99] transition-colors duration-200">{role}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default DeveloperListSection;