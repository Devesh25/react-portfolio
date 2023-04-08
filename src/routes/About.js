import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImage2 from "../Components/HeroImage2";
import AboutMe from "../Components/AboutMe";

const About = () => {
  return (
    <>
      <Navbar />
      <HeroImage2
        heading="ABOUT"
        text="I AM React front-end Developer. I Create Responsive & Secure Website for My Clients"
      />
      <AboutMe />

      <Footer />
    </>
  );
};

export default About;
