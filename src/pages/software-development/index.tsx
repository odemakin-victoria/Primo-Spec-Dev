"use client";

import React from "react";
import Footer from "../LandingPage/components/Footer";
import TechnologyStack from "../LandingPage/components/TechnologyStack";
import Header from "../LandingPage/components/Layout";
import HeroSection from "./components/hero-section";
import SoftwareDevelopmentSection from "./components/software-section";
import DeveloperListSection from "../hire-a-developer/components/developer-list";
import ContactUs from "../LandingPage/components/ContactUs";
import TestimonialSection from "../LandingPage/components/TestimonialSection";

const SoftwareDevelopmentPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <SoftwareDevelopmentSection />
      {/* <OurValueSection />
      <OutsourcingSection />
      <TalentResourcesSection /> */}

      <TechnologyStack />
      <DeveloperListSection />
<TestimonialSection/>
<ContactUs/>
      <Footer />
    </>
  );
};

export default SoftwareDevelopmentPage;
