"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import logoImage from "../../../../public/assets/images/com-logo (2).jpg";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Our Services", hasDropdown: true },
  // { label: "Our Projects", href: "/projects" },
  { label: "Hire a Developer", href: "/hire-a-developer" },
  { label: "Contact Us", href: "/contact-us" },
];

const serviceDropdownItems = [
  { title: "Software Development", href: "/software-development" },
  { title: "Product Development", href: "/product-development" },
  {
    title: "Tech, Client & Managed Services",
    href: "/tech-managed-services",
  },
  { title: "Developer & Talent Scouting", href: "/hire-a-developer" },
];

const Header: React.FC = () => {
  const [activeNav, setActiveNav] = useState("");
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownTimer, setDropdownTimer] = useState<NodeJS.Timeout | null>(
    null
  );
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const router = useRouter();

  const handleToggle = () => setMobileNavOpen(!isMobileNavOpen);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimer) clearTimeout(dropdownTimer);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setShowDropdown(false);
    }, 200);
    setDropdownTimer(timer);
  };

  const handleNavigation = (href: string | undefined) => {
    if (href) router.push(href);
  };

  return (
    <header
      className={`w-full h-[64px] px-4 md:px-[40px] flex justify-between items-center fixed top-0 z-50 bg-white transition-shadow duration-300 ${
        hasShadow ? "shadow-md" : ""
      }`}
    >
      {/* Logo + Text */}
      <div className="flex items-center gap-3">
        <Image
          src={logoImage}
          alt="Sort"
          className="w-[80px] h-auto object-contain"
        />
        <div className="leading-3 ml-[-25px]">
          <p className="text-[#007E99] font-bold text-lg">PrimoSpec</p>
          <p className="text-[#002A33] text-sm font-light -mt-1">
            Nigeria Limited
          </p>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 items-center relative">
        {navItems.map((item) => (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => item.hasDropdown && handleMouseEnter()}
            onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
          >
            <button
              onClick={() => {
                setActiveNav(item.label);
                handleNavigation(item.href);
              }}
              className={`relative transition-all duration-200 border-b-2 pb-1 ${
                activeNav === item.label
                  ? "text-[#003F4D] font-bold "
                  : "text-[#2B3F44] font-light border-transparent hover:text-[#007E99] hover:font-bold "
              }`}
            >
              {item.label}
              {item.hasDropdown && (
                <FaChevronDown className="inline ml-1 text-sm" />
              )}
            </button>

            {/* Dropdown */}
            {item.hasDropdown && showDropdown && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-lg z-50 py-2 px-4">
                {serviceDropdownItems.map((service, i) => (
                  <div
                    key={i}
                    className="py-2 border-b last:border-b-0 border-gray-200 hover:text-orange-500 cursor-pointer"
                    onClick={() => handleNavigation(service.href)}
                  >
                    <p className="text-[#2B3F44] font-light border-transparent hover:text-[#007E99] hover:font-bold">
                      {service.title}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <FaBars
          className="text-2xl cursor-pointer hover:text-[#007E99] transition"
          onClick={handleToggle}
        />
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isMobileNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-3 z-50 md:hidden text-left"
          >
            {navItems.map((item) => (
              <div key={item.label} className="flex flex-col">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveNav(item.label);
                    if (item.hasDropdown) {
                      setMobileDropdownOpen(!mobileDropdownOpen);
                    } else {
                      handleNavigation(item.href);
                    }
                  }}
                  className="text-[16px] text-[#007E99] text-left font-semibold hover:underline underline-offset-4 decoration-red-600 transition-all mr-4 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <FaChevronDown className="inline ml-2 text-sm" />
                  )}
                </motion.button>

                {item.hasDropdown && mobileDropdownOpen && (
                  <div className="pl-4 mt-2">
                    {serviceDropdownItems.map((service, i) => (
                      <div
                        key={i}
                        className="py-2 border-b last:border-b-0 border-gray-200 hover:text-orange-500 cursor-pointer"
                        onClick={() => handleNavigation(service.href)}
                      >
                        <p className="text-[#2B3F44] font-light border-transparent hover:text-[#007E99] hover:font-bold">
                          {service.title}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
