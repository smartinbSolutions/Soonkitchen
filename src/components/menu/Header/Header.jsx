import React from "react";
import "./Header.css";
import logo from "../../../Assets/logo/Soon Kitchen Logo White.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="overlay"></div>

      <div className="logo">
        <a href="../../">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="soonText">
        <h2>Hybrid Cloud Kitchen</h2>
      </div>
    </div>
  );
};

export default Header;
