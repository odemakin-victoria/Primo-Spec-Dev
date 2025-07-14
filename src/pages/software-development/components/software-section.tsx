"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import arrowCircle from "../../../../public/assets/images/white-round-arrow.svg"; // Replace with your actual image path

const SoftwareDevelopmentSection = () => {
  return (
    <section className="w-full px-4 md:px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative">
        {/* Left Column */}
        <motion.div
          className="bg-[#002A33] col-span-12 md:col-span-5 rounded-3xl p-10 text-white min-h-[400px] flex flex-col items-center justify-center text-center shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold leading-snug">
            Software Development
          </h2>
          <p className="text-2xl font-medium mt-2">
            We provide outsourcing solutions
          </p>

          <div className="mt-6">
            <Image
              src={arrowCircle}
              alt="Arrow Circle"
              className="w-[80px] h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Vertical Line Divider */}

        {/* Right Column */}
        <div className="col-span-12 md:col-span-7 flex flex-col w-full pl-0 md:pl-10 relative">
          {/* Section 1 */}
          <div className="pb-6 mb-6 border-b border-gray-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
          <h3 className="text-xl font-bold mb-2 text-[#003F4D]">
                  Web Development
                </h3>
          <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
                  We build scalable and secure websites tailored to your business needs, with a focus on performance and user experience.
                </p>
              </div>
              <div>
          <h3 className="text-xl font-bold mb-2 text-[#003F4D]">
                  Mobile Development
                </h3>
          <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
                  Our team creates user-friendly mobile apps for iOS and Android to enhance customer engagement and usability.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="pb-6 mb-6 border-b border-gray-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
          <h3 className="text-xl font-bold mb-2 text-[#003F4D]">
                  Data Analysis
                </h3>
          <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
                  We uncover actionable insights from your data to support smarter business decisions.
                </p>
              </div>
              <div>
          <h3 className="text-xl font-bold mb-2 text-[#003F4D]">
                  UI/UX Design
                </h3>
          <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
                  Our designers craft intuitive interfaces and seamless experiences for your digital products.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="pb-6 border-b border-gray-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
          <h3 className="text-xl font-bold mb-2 text-[#003F4D]">
                  Business Intelligence
                </h3>
          <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
                  Empower your decisions with dashboards and reporting tools powered by deep business insight.
                </p>
              </div>
              <div>
          <h3 className="text-xl font-bold mb-2 text-[#003F4D]">
                  Branding & Custom Software
                </h3>
          <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
                  We develop tailored software and consistent branding that aligns with your business vision and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareDevelopmentSection;
