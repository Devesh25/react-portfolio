import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImage2 from "../Components/HeroImage2";
import AboutMe from "../Components/AboutMe";

const About = () => {
  return (
    <>
      <Navbar />
      <HeroImage2 heading="ABOUT" text="I AM A React Developer" />
      <AboutMe />
      <Footer />
    </>
  );
};

export default About;
