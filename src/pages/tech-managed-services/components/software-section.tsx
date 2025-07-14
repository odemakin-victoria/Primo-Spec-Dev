"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import arrowCircle from "../../../../public/assets/images/white-round-arrow.svg";

const ManagedServicesSection = () => {
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
            Tech & Managed Services
          </h2>
          <p className="text-2xl font-medium mt-2">
            Scalable solutions, expert guidance, and 24/7 support to power your digital ecosystem.
          </p>
          <div className="mt-6">
            <Image
              src={arrowCircle}
              alt="Arrow Circle"
              className="w-[80px] h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Right Column */}
        <div className="col-span-12 md:col-span-7 flex flex-col w-full pl-0 md:pl-10 relative">
          {/* Section 1 */}
          <div className="pb-6 mb-6 border-b border-gray-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#003F4D]">Flexible Engagement Models</h3>
                <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
                  We offer project-based, dedicated team, and retainer models — adaptable to your unique business needs and operational style.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#003F4D]">Outcome-Based Pricing</h3>
                <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
                  Our pricing aligns with measurable success metrics to ensure you get results-driven value, not just time and materials.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="pb-6 mb-6 border-b border-gray-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#003F4D]">Transparent Reporting</h3>
                <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
                  Stay informed with real-time dashboards, milestone updates, and performance metrics throughout your project lifecycle.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#003F4D]">24/7 Technical Support</h3>
                <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
                  Round-the-clock monitoring and rapid-response troubleshooting to minimize downtime and keep systems running efficiently.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="pb-6 border-b border-gray-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#003F4D]">IT Consulting</h3>
                <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
                  Leverage strategic insights on infrastructure, cloud migration, cybersecurity, and digital transformation to stay competitive.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#003F4D]">Backup & Disaster Recovery</h3>
                <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
                  We protect your critical data with automated backups and comprehensive recovery plans that are regularly tested and updated.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#003F4D]">Post-Project Support</h3>
                <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed">
                  Beyond deployment, we provide tailored onboarding, training, and continuous improvement support to maximize product adoption.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#003F4D]">Analytics & Performance Tracking</h3>
                <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed">
                  Drive smarter decisions with live performance metrics and analytics dashboards integrated across your platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagedServicesSection;
