import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Doctors from "../components/Doctors";
import ContactForm from "../components/ContactForm";

const Home = () => (
  <>
    <HeroSection />
    <Services />
    <Doctors />
    <ContactForm />
  </>
);

export default Home;