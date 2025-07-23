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
import ProductDevelopmentSection from "./components/software-section";
import ProductListSection from "./components/product-list";

const ProductDevelopmentPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductDevelopmentSection />
      {/* <OurValueSection />
      <OutsourcingSection />
      <TalentResourcesSection /> */}

      {/* <TechnologyStack /> */}
      <ProductListSection />
{/* <TestimonialSection/> */}
<ContactUs/>
      <Footer />
    </>
  );
};

export default ProductDevelopmentPage;
