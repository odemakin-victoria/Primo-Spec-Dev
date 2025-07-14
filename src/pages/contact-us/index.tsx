"use client";

import React from "react";
import Footer from "../LandingPage/components/Footer";
import TechnologyStack from "../LandingPage/components/TechnologyStack";
import TestimonialSection from "../LandingPage/components/TestimonialSection";
import Header from "../LandingPage/components/Layout";
import ContactForm from "./form/contact-form";
import ContactUs from "../LandingPage/components/ContactUs";

const ContactUsPage = () => {
  return (
 	<>
		   
      <Header />
<ContactForm/>
<TestimonialSection/>
<TechnologyStack/>
<ContactUs/>

<Footer/>


    
		
		</>
  );
};

export default ContactUsPage;