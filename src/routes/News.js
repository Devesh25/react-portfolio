import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Data from "../Components/Data";
import HeroImage2 from "../Components/HeroImage2";

const News = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2
        heading="News Data"
        text="Below We Have News Data Fetched From Api"
      />

      <Data />
      <Footer />
    </div>
  );
};

export default News;
