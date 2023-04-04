import React from "react";
import { Link } from "react-router-dom";
import "./HeroImgStyle.css";
import IntroImg from "../images/portfolio.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={IntroImg} alt="IntroImg" className="into-img" />
      </div>
      <div className="content">
        <p>Hi, I am John Doe </p>
        <h1>React Developer</h1>
        <div className="links">
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
