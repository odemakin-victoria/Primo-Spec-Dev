"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundDown } from "react-icons/io";
import HireDeveloper from "../../../../public/assets/images/Default-Page.jpg";

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
      {/* Desktop Version */}
      <section className="relative w-full min-h-screen bg-white hidden lg:flex items-center">
        <div className="container mx-auto px-6 md:px-20 flex items-center justify-between">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-2xl pr-8"
          >
            
        <h1 className="font-bold md:text-[36px] xs:text-[54px] leading-snug mb-4 text-[#003F4D]">
          Dream It. <span className="text-[#006980]">We Deliver It.</span>
        </h1>
        <h2 className="font-semibold text-[22px] md:text-[28px] md:whitespace-normal md:break-words text-[#002A33] mb-6">
          From Vision to Code — We're Your Tech Partner.
        </h2>


            <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
          We're more than just a technology company — we're{" "}
          <strong>your innovation partner</strong>. From idea to launch, our
          mission is to <em>co-create solutions that matter</em>. Let's build it{" "}
          <strong>together</strong>.
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
                <span className="text-[#003F4D] font-medium text-[18px]">
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

          {/* Image - Right Side */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center items-center"
          >
            <img
              src={HireDeveloper.src}
              alt="Software Development"
              className="w-full max-w-2xl h-96 object-contain rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="relative w-full min-h-screen bg-white lg:hidden flex flex-col items-center px-6 py-8">
        {/* Image - Top on Mobile */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center mb-8 mt-16"
        >
          <img
            src={HireDeveloper.src}
            alt="Software Development"
            className="w-full max-w-lg h-72 object-contain rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text Content - Bottom on Mobile */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-2xl text-center"
        >
          <h1 className="font-bold text-[36px] md:text-[54px] leading-snug mb-4 text-[#003F4D]">
          Dream It. <span className="text-[#006980]">We Deliver It.</span>
        </h1>
        <h2 className="font-semibold text-[22px] md:text-[28px] text-[#002A33] mb-6">
          From Vision to Code — We're Your Tech Partner.
        </h2>
        <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
          We're more than just a technology company — we're{" "}
          <strong>your innovation partner</strong>. From idea to launch, our
          mission is to <em>co-create solutions that matter</em>. Let's build it{" "}
          <strong>together</strong>.
        </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleEmailClick}
              className="border hover:border-[#2B93AA] font-medium bg-[#2B93AA] text-white px-8 py-3 rounded-full transition duration-300 hover:bg-transparent hover:text-[#2B93AA]"
            >
              Let's Talk
            </button>
            <div
              className="flex flex-row items-center justify-center mt-2 cursor-pointer"
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