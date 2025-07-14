"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundDown } from "react-icons/io";
import HireDeveloper from "../../../../public/assets/images/product-bg.webp";

const HeroSection: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:victoriaodemakin@gmail.com";
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById("services");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        className="relative w-full min-h-screen bg-cover bg-right bg-no-repeat hidden lg:flex    items-center"
        style={{
          backgroundImage: `url(${HireDeveloper.src})`,
        }}
      >
        {/* Overlay to darken or lighten for readability */}

        {/* Content on top */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 md:px-20 max-w-3xl"
        >
          <h1 className="font-bold md:text-[36px] xs:text-[54px] leading-snug mb-4 text-[#003F4D]">
            Software  <br />{" "}
            <span className="text-[#006980]">Developement.</span>
          </h1>

          <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
From business analysis to UI/UX, product branding to deployment — we deliver custom software solutions that are designed to solve real-world problems and scale with your business.          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleEmailClick}
              className="border hover:border-[#2B93AA] font-medium bg-[#2B93AA] text-white px-8 py-3 rounded-full transition duration-300 hover:bg-transparent hover:text-[#2B93AA]"
            >
              Let's Talk
            </button>
            <div
              className="flex flex-row items-center justify-start mt-2 cursor-pointer"
              onClick={scrollToNext}
            >
              <span className="text-[#003F4D] font-medium text-[16px] md:text-[18px]">
                Explore Our Services
              </span>
              <motion.div
                animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="ml-1"
              >
                <IoIosArrowRoundDown className="w-6 h-6 text-[#2B93AA]" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        className="relative w-full min-h-screen bg-cover bg-right bg-no-repeat lg:hidden flex items-center"
        style={{
          backgroundImage: `url(${HireDeveloper.src})`,
        }}
      >
        {/* Overlay to darken or lighten for readability */}
        <div className="absolute inset-0 bg-white/70 md:bg-white/60" />

        {/* Content on top */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 md:px-20 max-w-3xl"
        >
            <h1 className="font-bold  text-[54px] leading-snug mb-4 text-[#003F4D]">
            Product <br />{" "}
            <span className="text-[#006980]">Development.</span>
          </h1>
           <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
           We help you innovate, make better decisions, and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleEmailClick}
              className="border hover:border-[#2B93AA] font-medium bg-[#2B93AA] text-white px-8 py-3 rounded-full transition duration-300 hover:bg-transparent hover:text-[#2B93AA]"
            >
              Let's Talk
            </button>
            <div
              className="flex flex-row items-center justify-start mt-2 cursor-pointer"
              onClick={scrollToNext}
            >
              <span className="text-[#003F4D] font-medium text-[16px] md:text-[18px]">
                Explore Our Services
              </span>
              <motion.div
                animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="ml-1"
              >
                <IoIosArrowRoundDown className="w-6 h-6 text-[#2B93AA]" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
