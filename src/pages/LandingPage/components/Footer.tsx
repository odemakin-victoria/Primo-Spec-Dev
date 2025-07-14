import React from "react";
import logoImage from "../../../../public/assets/images/com-logo (2).jpg";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-white bg-[#007E99] px-6 md:px-10 py-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Main Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          {/* Contact Us Column */}
          <div className="flex flex-col gap-4">
            {/* Logo and Company Name */}
            <div className="flex items-center gap-3">
              <Image
                src={logoImage}
                alt="PrimoSpec Logo"
                className="w-[60px] h-auto object-contain"
              />
              <div className="leading-4">
                <p className="text-white font-bold text-lg">PrimoSpec</p>
                <p className="text-[#002A33] text-sm font-light -mt-1">
                  Nigeria Limited
                </p>
              </div>
            </div>

            <div className="mt-4">

              <h3 className="font-semibold text-base mb-1">Contact Us</h3>
							      
							          <p className="text-[12px] mt-2 md:text-[13px] text-[#fff] font-light leading-relaxed">
								info@primospeclimited.com</p>
							          <p className="text-[12px] mt-2 md:text-[13px] text-[#fff] font-light leading-relaxed">
								+2348023622970</p>

              <div className="flex gap-4 mt-3">
                <FaFacebookF className="cursor-pointer hover:text-[#002A33] transition duration-300" />
                <FaInstagram className="cursor-pointer hover:text-[#002A33] transition duration-300" />
                <FaTwitter className="cursor-pointer hover:text-[#002A33] transition duration-300" />
                <FaLinkedinIn className="cursor-pointer hover:text-[#002A33] transition duration-300" />
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-base">Services</h3>
            {[
              "Software Development",
              "Product Development",
              "Tech, Clients & Managed Services",
              "Cloud & DevOps Engineering",
              "Developer & Talent Outsourcing",
            ].map((item, idx) => (
              <p
                key={idx}
                className="hover:text-[#002A33] transition duration-300 cursor-pointer text-[12px] md:text-[13px] text-[#fff] font-light leading-relaxed"
              >

                {item}
              </p>
            ))}
          </div>

          {/* Support and Legal Links Column */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h3 className="font-semibold text-base mb-2">Support</h3>
              <div className="flex flex-col gap-2">
                <p className="hover:text-[#002A33] transition duration-300 cursor-pointer text-[12px] md:text-[13px] text-[#fff] font-light leading-relaxed">
                  About Us
                </p>
                <p className="hover:text-[#002A33] transition duration-300 cursor-pointer text-[12px] md:text-[13px] text-[#fff] font-light leading-relaxed">
                  Blog
                </p>
                <p className="hover:text-[#002A33] transition duration-300 cursor-pointer text-[12px] md:text-[13px] text-[#fff] font-light leading-relaxed">
                  FAQs
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2">Legal Links</h3>
              <div className="flex flex-col gap-2">
                <p className="hover:text-[#002A33] transition duration-300 cursor-pointer text-[12px] md:text-[13px] text-[#fff] font-light leading-relaxed">
                  Terms of Use
                </p>
                <p className="hover:text-[#002A33] transition duration-300 cursor-pointer text-[12px] md:text-[13px] text-[#fff] font-light leading-relaxed">
                  Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-xs text-center md:text-right  md:text-[13px] text-[#fff] font-light leading-relaxed">
          <p>© 2025 PrimoSpec Nigeria Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
