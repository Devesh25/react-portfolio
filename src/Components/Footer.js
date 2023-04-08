import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h6>
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              ></FaHome>
              124 Daron Center,81754
            </h6>

            <div className="phone">
              <h6>
                <FaPhone
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                ></FaPhone>
                1-2323-343-23
              </h6>
            </div>

            <div className="email">
              <h6>
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                ></FaMailBulk>
                info@gmail.com
              </h6>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>About the Company</h4>
          <p>
            Sunt eu non duis do in aute. Proident id labore deserunt laborum
            labore. Ullamco sint amet et ullamco. Nulla officia eu qui aliquip
            mollit nostrud et nostrud. Officia ea do culpa excepteur officia.Ea
            cillum ex esse incididunt eu et velit ipsum id reprehenderit do
            ullamco pariatur. Est enim do voluptate sunt occaecat deserunt
            ullamco. Velit laborum sint enim reprehenderit qui non nisi dolor
            aliquip. Qui anim occaecat cillum reprehenderit esse nisi quis culpa
            laboris dolor velit. Eiusmod nulla officia voluptate incididunt
            nisi. Do veniam consequat reprehenderit anim.
          </p>
          <div className="social">
            <FaFacebookF
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            ></FaFacebookF>
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            ></FaTwitter>
            <FaLinkedinIn
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            ></FaLinkedinIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
