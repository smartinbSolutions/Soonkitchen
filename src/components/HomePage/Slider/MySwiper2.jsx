// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderData } from "../../../Assets/Fake_Data/slider";
// Import Swiper styles
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

import "./MySwiper2.css";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Container } from "react-bootstrap";

const MySwiper2 = () => {
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        // navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000, // Specify the delay in milliseconds between slides
          disableOnInteraction: false, // Allow user interaction to stop autoplay
        }}
        fade={{ speed: 3000 }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper2"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="content">
              <h1>Welcome</h1>
              <h2>{slide.title}</h2>
              <p>{slide.desc}</p>
              <Link to="../../Brands">
                <button>our Brands</button>
              </Link>
            </div>
            <div className="image">
              <img src={slide.imgUrl} alt={`Nature ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default MySwiper2;
