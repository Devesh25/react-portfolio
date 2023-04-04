import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImage2 from "../Components/HeroImage2";
import PricingCard from "../Components/PricingCard";
import WorkCard from "../Components/WorkCard";

const Project = () => {
  return (
    <>
      <Navbar />
      <HeroImage2 heading="PROJECTS" text="Some of My Recent Works" />
      <WorkCard />
      <PricingCard />
      <Footer />
    </>
  );
};

export default Project;
