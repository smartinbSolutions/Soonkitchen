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
import soon from "../../Assets/logo/soon_square.png";

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
    soon,
  ];

  return (
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
  );
}

export default BrandSection;
