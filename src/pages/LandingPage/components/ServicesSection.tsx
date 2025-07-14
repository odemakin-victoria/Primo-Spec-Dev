import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ServiceImage1 from "../../../../public/assets/images/recruitment-step-1.svg";
import ServiceImage2 from "../../../../public/assets/images/recruitment-step-2.svg";
import ServiceImage3 from "../../../../public/assets/images/recruitment-step-3.svg";
import ServiceImage4 from "../../../../public/assets/images/recruitment-step-4.svg";

const services = [
  {
    title: "Software Development",
    description:
      "Our experienced team harnesses the latest technologies and agile methodologies to create cutting-edge software applications that drive digital transformation.",
    image: ServiceImage1,
  },
  {
    title: "Product Development",
    description:
      "Our product development expertise spans across various industries, enabling us to create intuitive, user-centric, and market-ready solutions that set you apart.",
    image: ServiceImage2,
  },
  {
    title: "Tech, Client & Managed Services",
    description:
      "Get comprehensive technology, client, and managed services to handle your IT needs efficiently. From proactive system monitoring to 24/7 technical support.",
    image: ServiceImage3,
  },
  {
    title: "Developer & Talent Scouting",
    description:
      "Get additional resources for a project or long-term collaboration. Our outsourcing services connect you with skilled professionals who seamlessly integrate into your organization.",
    image: ServiceImage4,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <motion.section
      className="w-full bg-[#F3F8F7] px-6 md:px-[64px] py-[64px] flex flex-col md:flex-row gap-[40px] items-start justify-between"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.3 }}
    >
      {/* Text Content */}
      <motion.div
        className="flex-1"
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
      >
        <div className="space-y-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              className="group flex justify-between items-start gap-6 transition-all duration-300"
            >
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl font-semibold text-[#003F4D] mb-2 transition-all cursor-pointer duration-300 group-hover:text-[#006980] group-hover:scale-105">
                  {service.title}
                </h3>
                <p className="text-[16px] md:text-[18px] text-[#001] font-light leading-relaxed mb-8">
                  {service.description}
                </p>
                {index !== services.length - 1 && (
                  <hr className="my-6 border-t border-gray-300 transition-all" />
                )}
              </div>
              <div className="w-[60px] h-[60px] md:w-[60px] md:h-[60px] transition duration-300 group-hover:scale-110">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-contain transition duration-300 group-hover:brightness-0 group-hover:invert-[50%] group-hover:sepia group-hover:hue-rotate-[330deg] group-hover:saturate-200"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ServicesSection;
