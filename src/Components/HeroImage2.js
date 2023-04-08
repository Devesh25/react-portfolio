import "./HeroImage2.css";
import React, { Component } from "react";

class HeroImage2 extends Component {
  render() {
    return (
      <>
        <div className="hero-img">
          <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
            <a
              name=""
              id=""
              class="btn btn-primary"
              href="contact"
              role="button"
            >
              CONTACT
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default HeroImage2;
