import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundImage from "../../../../public/assets/images/testimonial-bg.svg"; // Replace with your image
import LeftArrow from "../../../../public/assets/images/arrow-circle-left.svg";
import RightArrow from "../../../../public/assets/images/arrow-circle-right.svg";

const testimonials = [
  {
    text: "Their team exceeded all our expectations. The solution delivered was not only robust but also beautifully designed.",
    name: "Jessica Taylor",
    role: "CEO, TechNova Inc.",
  },
  {
    text: "Reliable, professional, and innovative. Their work helped us scale our operations by 300%.",
    name: "Daniel White",
    role: "Head of Digital, FinEdge",
  },
  {
    text: "Our go-to tech partner for any serious project. Always on point with delivery and support.",
    name: "Clara Mensah",
    role: "Product Manager, HealthSync",
  },
];

const TestimonialSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 9 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative w-full h-[600px] text-white overflow-hidden ">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundImage.src})`,
        }}
      />
      <div className="absolute inset-0 bg-[#0e061b] opacity-50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold my-12">What Our Clients Say</h2>

        {/* Testimonial Box */}
        <div className="bg-[#002A33] py-32  p-8  max-w-3xl w-full mb-10 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
							         className="text-[16px] md:text-[18px] text-[#FFF] font-light leading-relaxed mb-8">
            
              “{testimonials[current].text}”
            </motion.p>
          </AnimatePresence>
					  {/* Reviewer Info + Arrows */}
        <div className="flex items-center justify-center my-8 gap-6">
          <button onClick={handlePrev}>
            <Image src={LeftArrow} alt="Previous" width={30} height={30} />
          </button>

          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-semibold">
              {testimonials[current].name}
            </h3>
							          <p className="text-[16px] md:text-[18px] text-[#FFF] font-light leading-relaxed mb-8">
							
							{testimonials[current].role}</p>
          </div>

          <button onClick={handleNext}>
            <Image src={RightArrow} alt="Next" width={30} height={30} />
          </button>
        </div>
        </div>

      
      </div>
    </section>
  );
};

export default TestimonialSection;
