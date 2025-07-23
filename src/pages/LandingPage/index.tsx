// src/pages/index.tsx or src/LandingPage.tsx
import React from "react";
import Header from "../LandingPage/components/Layout"; // Adjust the path if needed
import HeroSection from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import PerformanceSection from "./components/PerformanceSection";
import WhyChoosePrimoSpec from "./components/WhyChoose";

import Footer from "./components/Footer";
import TestimonialSection from "./components/TestimonialSection";
import AboutUs from "./components/about";
import TechnologyStack from "./components/TechnologyStack";
import ContactUs from "./components/ContactUs";

const LandingPage: React.FC = () => {
  return (
		<>
		   
      <Header />
			      <HeroSection />

<ServicesSection/>
{/* <PerformanceSection/> */}
{/* <AboutUs/> */}
{/* <TestimonialSection/> */}
<WhyChoosePrimoSpec/>
{/* <TechnologyStack/> */}
<ContactUs/>
<Footer/>


    
		
		</>
 
  );
};

export default LandingPage;
