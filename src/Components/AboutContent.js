import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <>
      <div className="about">
        <h2>About Content Component</h2>
        <Link to={"/contact"}>
          <button className="btn">Contact</button>
        </Link>
      </div>
    </>
  );
};

export default AboutContent;
