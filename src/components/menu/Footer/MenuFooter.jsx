import React from "react";
import "./MenuFooter.css"; // Import your CSS file for styling
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
const MenuFooter = () => {
  return (
    <footer className="Menu_Footer">
      <div className="Menu_SosialMidiaIcons">
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

      <div className="Menu_FooterBottom">
        <p>
          Copyright &copy; Designed by{" "}
          <a className="company" href="http://www.smartinb.com" target="blank">
            {" "}
            Smartinb
          </a>
        </p>
      </div>
    </footer>
  );
};

export default MenuFooter;
