"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundDown } from "react-icons/io";
import HireDeveloper from "../../../../public/assets/images/hire-developer.jpg";

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
      <section className="relative w-full min-h-screen  bg-white hidden lg:flex items-center">
        <div className="container mx-auto px-6 md:px-20 flex items-center justify-between">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-2xl pr-8"
          >
            <h1 className="font-bold text-[36px] leading-snug mb-4 text-[#003F4D]">
              Hire Top-Tier Developers <br />{" "}
              <span className="text-[#006980]">Power Your Vision.</span>
            </h1>

            <p className="text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
              At PrimoSpec, we connect you with highly skilled, pre-vetted{" "}
              developers who are ready to integrate seamlessly with your team. 
              Whether you're building a product from scratch, scaling an existing 
              solution, or augmenting your in-house team, we provide the right 
              talent to bring your ideas to life—fast, reliable, and tailored 
              to your unique needs.
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
            className="flex-1 flex justify-end"
          >
            <img
              src={HireDeveloper.src}
              alt="Hire a Developer"
              className="max-w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="relative w-full min-h-screen mt-24 bg-white lg:hidden flex flex-col items-center px-6">
        {/* Image - Top on Mobile */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md mb-8"
        >
          <img
            src={HireDeveloper.src}
            alt="Hire a Developer"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text Content - Bottom on Mobile */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-2xl text-center"
        >
          <h1 className="font-bold text-[28px] xs:text-[32px] leading-snug mb-4 text-[#003F4D]">
            Hire Top-Tier Developers <br />{" "}
            <span className="text-[#006980]">Power Your Vision.</span>
          </h1>

          <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
            At PrimoSpec, we connect you with highly skilled, pre-vetted{" "}
            developers who are ready to integrate seamlessly with your team. 
            Whether you're building a product from scratch, scaling an existing 
            solution, or augmenting your in-house team, we provide the right 
            talent to bring your ideas to life—fast, reliable, and tailored 
            to your unique needs.
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