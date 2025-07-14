"use client";

import React from "react";
import { FaUserCheck, FaHandshake, FaBolt, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

const values = [
  {
    icon: <FaUserCheck className="text-[#007E99] text-4xl" />,
    title: "Client-Centric Approach",
    description:
      "We listen, adapt, and deliver solutions tailored to your business goals, ensuring we grow together.",
  },
  {
    icon: <FaHandshake className="text-[#007E99] text-4xl" />,
    title: "Collaborative Partnership",
    description:
      "We work as an extension of your team, fostering transparency and long-term relationships.",
  },
  {
    icon: <FaBolt className="text-[#007E99] text-4xl" />,
    title: "Agility & Speed",
    description:
      "Our flexible structure ensures quick turnarounds without compromising quality or innovation.",
  },
  {
    icon: <FaAward className="text-[#007E99] text-4xl" />,
    title: "Excellence & Integrity",
    description:
      "We hold ourselves to the highest standards, maintaining trust through reliable and consistent delivery.",
  },
];

const OurValueSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }} 
      viewport={{ once: true }}
      className="bg-[#f8f8f8] py-16 px-4 md:px-20"
    >
      <div className="text-center  font-outfit max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-outfit text-[#003F4D] mb-4">
          What We Value
        </h2>
          <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
          At PrimoSpec, our values are the foundation of everything we do. They
          define our culture, guide our actions, and shape the way we work with
          clients, partners, and each other.
        </p>
      </div>

      <div className="grid font-outfit grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition"
          >
            <div className="flex justify-center mb-3">
              {value.icon}
            </div>
            <h4 className="text-xl font-semibold text-[#2B3F44] mb-2">
              {value.title}
            </h4>
          <p className="text-[14px] md:text-[16px] text-[#00191F] font-light leading-relaxed mb-8">
							
							{value.description}</p>
          </motion.div>
        ))}
      </div>
			<div className="flex font-outfit items-center justify-center my-6">
				 <button
              // onClick={handleEmailClick}
              className="border  hover:border-[#2B93AA] font-medium bg-[#2B93AA] text-white px-8 py-3 rounded-full transition duration-300 hover:bg-transparent hover:text-[#2B93AA]"
            >
              Let's Talk
            </button>
			</div>
    </motion.section>
  );
};

export default OurValueSection;
