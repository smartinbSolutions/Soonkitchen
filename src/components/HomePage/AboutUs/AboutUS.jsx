import React from "react";
import "./AboutUs.css";
import AboutImg from "../../../Assets/images/soon.png";

const AboutUS = () => {
  return (
    <div className="container">
      <div className="aboutUs">
        <div className="AboutUs-img">
          <img src={AboutImg} alt="" />
        </div>
        <div className="AboutUs-Text">
          <h2>WHAT IS</h2>
          <h1>SOON KITCHEN</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            doloribus ut maxime dicta repudiandae consequatur corporis nam
          </p>
          {/* <Link to="../../menu">
                    <button>MENU</button>
                </Link> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
