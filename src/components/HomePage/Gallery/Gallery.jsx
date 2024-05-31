import React from "react";
import "./Gallery.css";
import TransHook from "../../../hook/locale/trans-hook";
import Slider from "react-slick";

import photo1 from "../../../Assets/images/photo1.jpg";
import photo2 from "../../../Assets/images/photo2.jpg";
import photo3 from "../../../Assets/images/photo3.jpg";
import photo4 from "../../../Assets/images/photo4.jpg";
import photo5 from "../../../Assets/images/photo5.jpg";
import photo6 from "../../../Assets/images/photo6.jpg";
import photo7 from "../../../Assets/images/photo7.jpg";
import photo8 from "../../../Assets/images/photo8.jpg";
import photo9 from "../../../Assets/images/photo9.jpg";
import photo10 from "../../../Assets/images/photo10.jpg";
import photo11 from "../../../Assets/images/photo11.jpg";
import photo12 from "../../../Assets/images/photo12.jpg";
import photo13 from "../../../Assets/images/photo13.jpg";
import photo14 from "../../../Assets/images/photo14.jpg";

export default function Gallery() {
  const [, , t] = TransHook();
  const images = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
  ];
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      /* Logic to do something when slide changes */
    },
  };
  return (
    <div className="gallery-section">
      <h1>Have a look at our gallery</h1>
      <h4 className="section-title">Customers took these pictures</h4>
      <Slider {...settings}>
        {images.map((image, i) => {
          return <img key={i} src={image} alt={`Gallery image ${i}`} />;
        })}
      </Slider>
    </div>
  );
}
