/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import HeadarImg from "../../../Assets/images/bowl-1842294_1280.jpg";
import logo from "../../../Assets/logo/logo (2).png" 
import "./Header.css";
const ImageLogo = () => {
  return (
    <div className="imgDiv">
      <img src={HeadarImg} alt="image" />
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
    </div>
  );
};

export default ImageLogo;
