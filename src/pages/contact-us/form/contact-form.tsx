"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactUsImage from "../../../../public/assets/images/Contact-Us.jpg";

const ContactForm = () => {
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleFocus = (field: string) => setActiveField(field);
  const handleBlur = () => setActiveField(null);

  return (
    <>
      {/* Desktop Version */}
      <section className="relative w-full min-h-screen  bg-white hidden lg:flex items-center">
        <div className="container mx-auto px-6 md:px-20 flex items-center justify-between">
          {/* Form Content - Left Side */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-2xl pr-8"
          >
            {/* Header Banner */}
            <div className="text-left py-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003F4D] mb-4">
                Let's Connect With Us
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
                At PrimoSpec Nigeria Limited we are committed to delivering cutting-edge 
                technology solutions tailored to meet your unique business needs.
              </p>
            </div>

            {/* Contact Form */}
            <form className="space-y-8">
              {[
                { name: "name", type: "text", placeholder: "Full Name" },
                { name: "email", type: "email", placeholder: "Email" },
                { name: "phone", type: "tel", placeholder: "Phone Number" },
                { name: "subject", type: "text", placeholder: "Subject" },
              ].map((field) => (
                <div key={field.name} className="relative">
                  <label
                    className={`absolute top-[-1.5rem] text-sm transition-all duration-200 ${
                      activeField === field.name ? "text-[#007E99] font-bold" : "text-gray-400"
                    }`}
                  >
                    {field.placeholder}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    onFocus={() => handleFocus(field.name)}
                    onBlur={handleBlur}
                    className={`w-full border-0 border-b-2 transition-all focus:outline-none bg-transparent ${
                      activeField === field.name ? "border-[#007E99]" : "border-gray-300"
                    } py-2 px-1`}
                  />
                </div>
              ))}

              <button
                type="submit"
                className="border hover:border-[#2B93AA] font-medium bg-[#2B93AA] text-white px-8 py-3 rounded-full transition duration-300 hover:bg-transparent hover:text-[#2B93AA]"
              >
                Submit Now 
              </button>
            </form>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-end"
          >
            <img
              src={ContactUsImage.src}
              alt="Contact Us"
              className="max-w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="bg-white text-[#2B3F44] min-h-screen pt-16 lg:hidden flex flex-col items-center px-4">
        {/* Image - Top on Mobile */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md mb-8"
        >
          <img
            src={ContactUsImage.src}
            alt="Contact Us"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Form Content - Bottom on Mobile */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-2xl"
        >
          {/* Header Banner */}
          <div className="text-center py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003F4D] mb-4">
              Let's Connect With Us
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
              At PrimoSpec Nigeria Limited we are committed to delivering cutting-edge 
              technology solutions tailored to meet your unique business needs.
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-8">
            {[
              { name: "name", type: "text", placeholder: "Full Name" },
              { name: "email", type: "email", placeholder: "Email" },
              { name: "phone", type: "tel", placeholder: "Phone Number" },
              { name: "subject", type: "text", placeholder: "Subject" },
            ].map((field) => (
              <div key={field.name} className="relative">
                <label
                  className={`absolute top-[-1.5rem] text-sm transition-all duration-200 ${
                    activeField === field.name ? "text-[#007E99] font-bold" : "text-gray-400"
                  }`}
                >
                  {field.placeholder}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  onFocus={() => handleFocus(field.name)}
                  onBlur={handleBlur}
                  className={`w-full border-0 border-b-2 transition-all focus:outline-none bg-transparent ${
                    activeField === field.name ? "border-[#007E99]" : "border-gray-300"
                  } py-2 px-1`}
                />
              </div>
            ))}

            <div className="flex justify-center">
              <button
                type="submit"
                className="border hover:border-[#2B93AA] font-medium bg-[#2B93AA] text-white px-8 py-3 rounded-full transition duration-300 hover:bg-transparent hover:text-[#2B93AA]"
              >
                Submit Now 
              </button>
            </div>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default ContactForm;