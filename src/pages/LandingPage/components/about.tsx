import React from "react";
import { motion } from "framer-motion";
import About1 from "../../../../public/assets/images/techCity.svg";
import About2 from "../../../../public/assets/images/techcabal.svg";
import About3 from "../../../../public/assets/images/medium.svg";
import About4 from "../../../../public/assets/images/naira-metircs.svg";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <motion.section
      className="w-full bg-white px-6 sm:px-10 md:px-16 py-16 flex flex-col items-center text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003F4D] mb-12">
        Read About Us
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl w-full">
        {[About1, About2, About3, About4].map((imgSrc, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="flex items-center justify-center overflow-hidden  p-4 bg-white"
          >
            <Image
              src={imgSrc}
              alt={`About Image ${index + 1}`}
              className="object-contain w-[200px] h-auto transition-transform duration-500 ease-in-out"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AboutUs;
