"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import productDevImg from "../../../../public/assets/images/landing-circle.svg";
import ServiceImage1 from "../../../../public/assets/images/recruitment-step-1.svg";
import ServiceImage2 from "../../../../public/assets/images/recruitment-step-2.svg";
import ServiceImage3 from "../../../../public/assets/images/recruitment-step-3.svg";
import ServiceImage4 from "../../../../public/assets/images/recruitment-step-4.svg";
import ServiceImage5 from "../../../../public/assets/images/recruitment-step-5.svg";

const services = [
  {
    title: "Ideation and Research",
    description:
      "We begin every project by understanding your vision, identifying market opportunities, and researching user needs. This foundation shapes innovative concepts and ensures your product solves real problems.",
    image: ServiceImage1,
  },
  {
    title: "Design",
    description:
      "Our design team transforms ideas into intuitive, engaging interfaces. We focus on user experience (UX) and visual design to craft wireframes and prototypes that bring your product to life.",
    image: ServiceImage2,
  },
  {
    title: "Development",
    description:
      "Using modern technologies and agile methodologies, our developers build scalable, high-performing software solutions. We ensure clean code, strong architecture, and smooth integration with existing systems.",
    image: ServiceImage3,
  },
  {
    title: "Testing",
    description:
      "Quality is at the heart of our process. We conduct rigorous testing — functional, usability, performance, and security — to ensure your product is bug-free, reliable, and ready for launch.",
    image: ServiceImage4,
  },
  {
    title: "Launch and Evaluation",
    description:
      "We support your go-to-market strategy with a seamless launch process. Post-launch, we monitor performance, gather feedback, and iterate where needed to continuously improve the product.",
    image: ServiceImage5,
  },
];

const ProductDevelopmentSection = () => {
  return (
    <section className="w-full px-4 md:px-16 py-16 bg-white">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12 mb-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={productDevImg}
            alt="Product Development"
            className="w-full max-w-[500px] object-contain mx-auto"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl lg:text-2xl font-semibold text-[#003F4D] mb-4">
            Our Development Approach
          </h3>
          <p className="text-[16px] md:text-[18px] text-[#001] font-light leading-relaxed">
            We follow a structured and user-focused product development strategy that starts with
            understanding your business needs and customer expectations. Our process involves
            research, ideation, prototyping, testing, and continuous iteration to ensure your
            product is functional, scalable, and aligned with your goals. By collaborating closely
            with stakeholders at every phase, we deliver solutions that are both technically sound
            and business-driven.
          </p>
        </motion.div>
      </div>

      {/* Services List */}
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
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              className="group flex items-start justify-between gap-4 md:gap-6"
            >
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl font-semibold text-[#003F4D] mb-2 group-hover:text-[#006980] group-hover:scale-105 transition-all duration-300 cursor-pointer">
                  {service.title}
                </h3>
                <p className="text-[16px] md:text-[18px] text-[#001] font-light leading-relaxed">
                  {service.description}
                </p>
                {index !== services.length - 1 && (
                  <hr className="my-6 border-t border-gray-300" />
                )}
              </div>
              <div className="w-[60px] h-[60px] shrink-0">
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
    </section>
  );
};

export default ProductDevelopmentSection;
