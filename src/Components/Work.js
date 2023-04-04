import "./WorkCardStyle.css";
import React from "react";
import pro1 from "../images/project1.png";
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <>
      <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          <div className="project-card">
            <img src={pro1} alt="image" />
            <h2 className="project-title">Project Title</h2>
            <div className="pro-details">
              <p>
                Quis eu amet sunt in culpa non consectetur nisi veniam. Dolor
                est non ea anim non. Ipsum ullamco nostrud qui nostrud elit
                occaecat id. Consectetur duis ullamco ex cupidatat amet aliqua
                cillum do non laboris tempor. Nisi est sint consequat commodo
                aliquip quis veniam. Enim fugiat eu minim nostrud aliquip ea
                fugiat mollit ullamco quis do..
              </p>
              <div className="pro-btn">
                <NavLink to="url.com" className="btn">
                  View
                </NavLink>
                <NavLink to="url.com" className="btn">
                  Source
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
