import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import "./BrandSlider.css";
import logo1 from "../../../Assets/logo-white/1.png";
import logo2 from "../../../Assets/logo-white/2.png";
import logo3 from "../../../Assets/logo-white/3.png";
import logo4 from "../../../Assets/logo-white/4.png";
import logo5 from "../../../Assets/logo-white/5.png";
import logo6 from "../../../Assets/logo-white/6.png";
import logo7 from "../../../Assets/logo-white/7.png";
import logo8 from "../../../Assets/logo-white/8.png";
import logo9 from "../../../Assets/logo-white/9.png";
import logo10 from "../../../Assets/logo-white/10.png";
import logo11 from "../../../Assets/logo-white/11.png";
import logo12 from "../../../Assets/logo-white/12.png";

const Partners = () => {
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 640 && windowWidth > 550) {
        setSlidesToShow(3);
      } else if (windowWidth <= 550) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(5);
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
    speed: 1500,
    autoplaySpeed: 2000,
  };

  return (
    <div className="mainContainer" id="our-partnerss">
      <Container style={{ padding: "2rem !important" }}>
        <Slider {...settings} className="slider-1">
          <div
            className="container HelloMerhaba "
            style={{ objectFit: "cover" }}
          >
            <img className="" alt="" src={logo1} />
          </div>
          <div
            className="container HelloMerhaba"
            style={{ objectFit: "cover" }}
          >
            <img alt="" src={logo2} />
          </div>
          <div
            className="container HelloMerhaba"
            style={{ objectFit: "cover" }}
          >
            <img alt="" src={logo3} />
          </div>
          <div
            className="container HelloMerhaba"
            style={{ objectFit: "cover" }}
          >
            <img alt="" src={logo4} />
          </div>
          <div
            className="container HelloMerhaba"
            style={{ objectFit: "cover" }}
          >
            <img alt="" src={logo5} />
          </div>
          <div
            className="container HelloMerhaba"
            style={{ objectFit: "cover" }}
          >
            <img alt="" src={logo6} />
          </div>
          <div
            className="container HelloMerhaba"
            style={{ objectFit: "cover" }}
          >
            <img alt="" src={logo7} />
          </div>
          <div
            className="container HelloMerhaba"
            style={{ objectFit: "cover" }}
          >
            <img alt="" src={logo8} />
          </div>
          <div
            className="container HelloMerhaba"
            style={{ objectFit: "cover" }}
          >
            <img alt="" src={logo9} />
          </div>
          <div
            className="container HelloMerhaba"
            style={{ objectFit: "cover" }}
          >
            <img alt="" src={logo10} />
          </div>
          <div
            className="container HelloMerhaba"
            style={{ objectFit: "cover" }}
          >
            <img alt="" src={logo11} />
          </div>
          <div
            className="container HelloMerhaba"
            style={{ objectFit: "cover" }}
          >
            <img alt="" src={logo12} />
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Partners;
