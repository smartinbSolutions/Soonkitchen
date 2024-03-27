import React from "react";
import Mheader from "../components/HomePage/Header/Mheader";
import MySwiper2 from "../components/HomePage/Slider/MySwiper2";
import AboutUS from "../components/HomePage/AboutUs/AboutUS";
import Statics from "../components/HomePage/Statics/Statics";
import BrandSlider from "../components/HomePage/BrandSlider/BrandSlider";
import Services from "../components/HomePage/Services/Service";
import Video from "../components/HomePage/Video/Video";
import Contact from "../components/HomePage/Conatct/Contact";
import Gallery from "../components/HomePage/Gallery/Gallery";
import Footer from "../components/ulity/Footer";

const HomePage = () => {
  return (
    <div>
      <Mheader />
      <MySwiper2 />
      <BrandSlider />
      <AboutUS />
      <Statics />
      <Video />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
