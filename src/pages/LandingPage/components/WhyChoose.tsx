import { motion } from "framer-motion";
import React from "react";
import { FaRocket, FaUsers, FaShieldAlt, FaCode, FaSyncAlt, FaGlobe } from "react-icons/fa";
import { useState, useEffect } from "react";
import Image from "next/image";
import arrowCircle from "../../../../public/assets/images/white-round-arrow.svg"

const strengths = [
  { icon: <FaRocket />, title: "Cutting-Edge Solutions", desc: "We deliver scalable, modern tech." },
  { icon: <FaUsers />, title: "Client-Centric", desc: "Focused on your success." },
  { icon: <FaShieldAlt />, title: "Reliable Infrastructure", desc: "Secure and stable by design." },
  { icon: <FaCode />, title: "Skilled Talent", desc: "Engineers with proven expertise." },
  { icon: <FaSyncAlt />, title: "Agile Delivery", desc: "Fast, flexible and iterative." },
  { icon: <FaGlobe />, title: "Global Reach", desc: "Worldwide presence and delivery." },
];

const WhyChoosePrimoSpec = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.section
      className="w-full bg-white px-6 md:px-16 py-20 flex flex-col items-center justify-center gap-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
    >
     

      <div className={`w-full flex ${isMobile ? "flex-col" : "lg:flex-row gap-8 items-start"}`}>
        {/* Left Card */}
        <motion.div
          className="bg-[#002A33] w-full lg:w-[500px] rounded-3xl p-10 text-white min-h-[400px] flex flex-col items-center justify-center text-center shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-3xl font-bold leading-snug">
            Empowering Innovation
            <br />
            <span className="text-2xl font-medium">One Line of Code at a Time</span>
          </div>
          <div className="mt-6">
            <Image
              src={arrowCircle}
              alt="Sort"
              className="w-[80px] h-auto object-contain"
            />
          </div>
        </motion.div>


        {/* Right Grid of Cards */}
        <div
          className={`flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:mt-0`}
        >
          {strengths.map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#F3F8F7] rounded-2xl p-6 py-14 text-black shadow-md hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <motion.div
                className="mb-4 text-[#00191F] text-3xl bg-[#80BECC] w-14 h-14 flex items-center justify-center rounded-full mx-auto"
                whileHover={{ rotate: 20, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="font-semibold text-lg mb-2 text-center">{item.title}</h3>
							          <p className="text-[14px] md:text-[16px] text-[#00191F] font-light leading-relaxed mb-8">
								
								{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChoosePrimoSpec;
