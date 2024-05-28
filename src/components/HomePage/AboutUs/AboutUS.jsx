import React from "react";
import "./AboutUs.css";
import AboutImg from "../../../Assets/images/soon.png";
import TransHook from "../../../hook/locale/trans-hook";

const AboutUS = () => {
  const [, , t] = TransHook();
  return (
    <div className="container">
      <div className="aboutUs">
        <div className="AboutUs-img">
          <img src={AboutImg} alt="" />
        </div>
        <div className="AboutUs-Text">
          {/* <h2>WHAT IS</h2> */}
          <h1>{t("aboutUs")}</h1>
          <p>{t("aboutUsText")}</p>
          {/* <Link to="../../menu">
                    <button>MENU</button>
                </Link> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
