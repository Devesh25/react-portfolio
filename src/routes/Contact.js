import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImage2 from "../Components/HeroImage2";
import Form from "../Components/Form";

const Contact = () => {
  return (
    <>
      <Navbar />
      <HeroImage2 heading="CONTACT" text="Let's Have a Chat" />
      <Form />
      <Footer />
    </>
  );
};

export default Contact;
