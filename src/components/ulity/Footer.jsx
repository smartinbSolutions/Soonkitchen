/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css"; // Import your CSS file for styling
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="SosialMidiaIcons">
          <a href="https://www.facebook.com/soonkitchen.co">
            <i>
              <FaFacebook />
            </i>
          </a>
          <a href="https://www.instagram.com/soonkitchen.co/">
            <i>
              <RiInstagramFill />
            </i>
          </a>
          <a href="https://twitter.com/">
            <i>
              <FaXTwitter />
            </i>
          </a>
          <a href="https://www.tiktok.com/">
            <i>
              <FaTiktok />
            </i>
          </a>
        </div>

        <div className="FooterBottom">
          <p>
            Copyright &copy; Designed by{" "}
            <a
              className="company"
              href="http://www.smartinb.com"
              target="blank"
            >
              {" "}
              Smartinb
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
