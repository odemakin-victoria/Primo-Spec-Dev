"use client";

import React from "react";
import Footer from "../LandingPage/components/Footer";
import TechnologyStack from "../LandingPage/components/TechnologyStack";
import Header from "../LandingPage/components/Layout";
import HeroSection from "./components/hero-section";
import ContactUs from "../LandingPage/components/ContactUs";
import TestimonialSection from "../LandingPage/components/TestimonialSection";
import ManagedServicesSection from "./components/software-section";

const SoftwareDevelopmentPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ManagedServicesSection />
      {/* <OurValueSection />
      <OutsourcingSection />
      <TalentResourcesSection /> */}

      {/* <TechnologyStack /> */}
{/* <TestimonialSection/> */}
<ContactUs/>
      <Footer />
    </>
  );
};

export default SoftwareDevelopmentPage;
