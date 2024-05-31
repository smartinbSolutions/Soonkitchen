import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BrandSlider.css";
import muchmer from "../../../Assets/logos-color/muchmer.png";
import burger1312 from "../../../Assets/logos-color/burger1312.png";
import fredmondy from "../../../Assets/logos-color/fredmondy.png";
import ghuha from "../../../Assets/logos-color/ghuha.png";
import hisaralti from "../../../Assets/logos-color/hisaralti.png";
import leylaq from "../../../Assets/logos-color/leylaq.png";
import lobik from "../../../Assets/logos-color/lobik.png";
import mufa from "../../../Assets/logos-color/mufa.png";
import pion from "../../../Assets/logos-color/pion.png";
import reyhan from "../../../Assets/logos-color/reyhan.png";
import sefa from "../../../Assets/logos-color/sefa.png";
import solo from "../../../Assets/logos-color/solo.png";
import soon from "../../../Assets/logos-color/soon.png";

const Partners = () => {
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 640 && windowWidth > 575) {
        setSlidesToShow(3);
      } else if (windowWidth <= 575) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(6);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const logos = [
    muchmer,
    burger1312,
    fredmondy,
    ghuha,
    hisaralti,
    leylaq,
    lobik,
    mufa,
    pion,
    reyhan,
    sefa,
    solo,
    soon,
  ];

  return (
    <div className="mainContainer w-100" id="our-partnerss">
      <Slider {...settings} className="slider-1 m-0 p-0 w-100">
        {logos.map((image, i) => {
          return (
            <div
              key={i}
              className="container HelloMerhaba "
              style={{ objectFit: "cover" }}
            >
              <img className="imagee" alt={image.toString()} src={image} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Partners;
