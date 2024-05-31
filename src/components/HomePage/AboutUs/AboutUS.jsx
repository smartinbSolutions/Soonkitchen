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
          <h2 className="text-uppercase">{t("aboutUs")}</h2>
          <p style={{ fontSize: "18px" }}>{t("about")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
