"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContactUsImage from "../../../../public/assets/images/contact-us.svg";

const ContactForm = () => {
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleFocus = (field: string) => setActiveField(field);
  const handleBlur = () => setActiveField(null);

  return (
    <section
      className="bg-white text-[#2B3F44] min-h-screen pt-16 px-4 md:px-20 relative flex items-center "
      style={{ backgroundImage: `url(${ContactUsImage.src})`, backgroundPosition: 'right', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}
    >
      <div className="w-full max-w-2xl">
        {/* Header Banner */}
        <div className="text-center py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003F4D]">Let’s Connect With Us</h2>
          <p className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed mb-8">
            At PrimoSpec Nigeria Limited we are committed to delivering cutting-edge technology solutions tailored to meet your unique business needs.
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
                className={`w-full border-0 border-b-2 transition-all focus:outline-none ${
                  activeField === field.name ? "border-[#007E99]" : "border-gray-300"
                } py-2 px-1`}
              />
            </div>
          ))}

       <button
            // onClick={handleEmailClick}
            className="border hover:border-[#2B93AA] font-medium bg-[#2B93AA] text-white px-8 py-3 rounded-full transition duration-300 hover:bg-transparent hover:text-[#2B93AA]"
          >
            Submit Now 
          </button>

        
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
