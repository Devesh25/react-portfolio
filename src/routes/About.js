import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImage2 from "../Components/HeroImage2";

const About = () => {
  return (
    <>
      <Navbar />
      <HeroImage2 heading="ABOUT" text="I AM A React Developer" />
      <Footer />
    </>
  );
};

export default About;
