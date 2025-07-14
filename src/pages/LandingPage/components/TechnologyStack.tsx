import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

import sql from "../../../../public/assets/images/sql.svg";
import mysql from "../../../../public/assets/images/mySql.svg";
import microsoft from "../../../../public/assets/images/microsoft.svg";
import js from "../../../../public/assets/images/js.svg";
import react from "../../../../public/assets/images/react.svg";
import oracle from "../../../../public/assets/images/oracle.svg";
import docker from "../../../../public/assets/images/docker.svg";
import angular from "../../../../public/assets/images/angular.svg";
import netCore from "../../../../public/assets/images/netCore.svg";
import node from "../../../../public/assets/images/node.svg";
import aws from "../../../../public/assets/images/aws.svg";
import flutter from "../../../../public/assets/images/flutter.svg";

const techImages = [
  sql,
  mysql,
  node,
  js,
  react,
  oracle,
  docker,
  flutter,
  angular,
  netCore,
  node,
  aws,
];

const TechnologyStack: React.FC = () => {
  return (
    <motion.section
      className="w-full bg-[#002A33] px-4 md:px-6 py-10 flex flex-col items-center justify-between text-center gap-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      transition={{ staggerChildren: 0.3 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-white font-bold text-[32px] md:text-[48px] leading-[120%]"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.2, duration: 0.6 } },
        }}
      >
        <Typewriter
          words={["Our Technology Stack:"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={50}
          delaySpeed={3000}
        />
      </motion.h2>

      {/* Image Grid */}
      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1 w-full px-1 sm:px-2">
        {techImages.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative group w-full aspect-square flex items-center justify-center"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#002A33] bg-opacity-80 group-hover:bg-opacity-0 transition-opacity duration-500 z-10" />

            {/* Image */}
            <Image
              src={img}
              alt={`Tech ${i}`}
              width={150}
              height={150}
              className="object-contain z-0 transition-all duration-500"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TechnologyStack;
