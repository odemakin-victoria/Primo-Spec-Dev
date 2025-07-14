"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundDown } from "react-icons/io";
import LandingImage from "../../../../public/assets/images/Frame-bng.svg";

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
      className="relative w-full min-h-screen bg-contain bg-right bg-no-repeat hidden lg:flex    items-center"
      style={{
        backgroundImage: `url(${LandingImage.src})`,
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
          Dream It. <span className="text-[#006980]">We Deliver It.</span>
        </h1>
        <h2 className="font-semibold text-[22px] md:text-[28px] md:whitespace-normal md:break-words text-[#002A33] mb-6">
          From Vision to Code — We’re Your Tech Partner.
        </h2>
        <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
          We're more than just a technology company — we’re{" "}
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
        backgroundImage: `url(${LandingImage.src})`,
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
        <h1 className="font-bold text-[36px] md:text-[54px] leading-snug mb-4 text-[#003F4D]">
          Dream It. <span className="text-[#006980]">We Deliver It.</span>
        </h1>
        <h2 className="font-semibold text-[22px] md:text-[28px] text-[#002A33] mb-6">
          From Vision to Code — We’re Your Tech Partner.
        </h2>
        <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
          We're more than just a technology company — we’re{" "}
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
