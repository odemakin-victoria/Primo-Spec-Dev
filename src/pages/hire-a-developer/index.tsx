"use client";

import React from "react";
import Footer from "../LandingPage/components/Footer";
import TechnologyStack from "../LandingPage/components/TechnologyStack";
import TestimonialSection from "../LandingPage/components/TestimonialSection";
import Header from "../LandingPage/components/Layout";
import ContactForm from "./form/contact-form";
import HeroSection from "./components/hero-section";
import PerformanceSection from "../LandingPage/components/PerformanceSection";
import OurValueSection from "./components/our-value";
import OutsourcingSection from "./components/talent-source";
import TalentResourcesSection from "./components/talent-resource";
import DeveloperListSection from "./components/developer-list";

const HirePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <PerformanceSection />
      <OurValueSection />
      <OutsourcingSection />
      <TalentResourcesSection />

      <TechnologyStack />
      <DeveloperListSection />

      <Footer />
    </>
  );
};

export default HirePage;
