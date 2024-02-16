// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./GallerySwiper.css";

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";

import img1 from "../../../Assets/images/pexels-anna-tukhfatullina-food-photographerstylist-2693447.jpg";
import img2 from "../../../Assets/images/pexels-daniela-constantini-5591664.jpg";
import img3 from "../../../Assets/images/pexels-volkan-vardar-3887985.jpg";
import img4 from "../../../Assets/images/pexels-valeria-boltneva-1833349.jpg";
export default function GallerySwiper() {
  return (
    <>
      <Swiper
        effect={"cards"}
        modules={[EffectCards, Autoplay]}
        className="myGallerySwiper"
        autoplay={{
          delay: 5000, // Specify the delay in milliseconds between slides
          disableOnInteraction: false, // Allow user interaction to stop autoplay
        }}
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
