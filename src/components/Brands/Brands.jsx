import React from "react";
import "swiper/css";
import "animate.css";
import "./Brands.css";
import "swiper/css/navigation";
// Brands logos
import leylac from "../../Assets/logo/leylac_square.png";
import burger from "../../Assets/logo/1312burger_square.png";
import fredmondy from "../../Assets/logo/fredmondy_square.png";
import hisaralti from "../../Assets/logo/hisaralti_square.png";
import lobik from "../../Assets/logo/lobik_square.png";
import mucmer from "../../Assets/logo/mucmer_square.png";
import mufa from "../../Assets/logo/mufa_square.png";
import pion from "../../Assets/logo/pion_square.png";
import reyhan from "../../Assets/logo/reyhan_square.png";
import sefa from "../../Assets/logo/sefa_square.png";
import solo from "../../Assets/logo/solo_square.png";
import chuha from "../../Assets/logo/chuha_square.png";
import soon from "../../Assets/logo/soon_square.png";
import Mheader from "../HomePage/Header/Mheader";

function BrandSection() {
  const images = [
    leylac,
    burger,
    fredmondy,
    hisaralti,
    lobik,
    mucmer,
    mufa,
    pion,
    reyhan,
    sefa,
    solo,
    chuha,
    soon,
  ];

  const style = {
    position: "relative",
    width: "100%",
    height: "300px",
    fontSize: "13px",
    backgroundPosition: "center",
    backgroundImage:
      "url(https://cdn.turkishairlines.com/m/67d29f0e11396150/original/Web_3-jpg.jpg)",
    backgroundSize: "cover",
    zIndex: "0",
    transition: "opacity 0.5s ease",
    marginTop: "6%",
  };

  return (
    <>
      <Mheader />
      <div className="Header" style={style}>
        <div className="overlay"></div>

        <div className="logox">
          <h1
            className="text-center"
            style={{
              display: "inline-block",
              position: "relative",
              color: "#fff",
            }}
          >
            Markalarımız
            <span className="title-divider"></span>
          </h1>
        </div>
      </div>
      <div className="brandx">
        <div className="rowx " style={{ justifyContent: "center" }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="mx-2"
              /*onClick={ Add some logic }*/
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default BrandSection;
