import React from "react";
import GallerySwiper from "../Slider/GallerrSwiper";
import { Container } from "reactstrap";
import "./Gallery.css";

export default function Gallery() {
  return (
    <Container>
      <div className="Gallery">
        <div className="content">
          <h1>Galerimiz</h1>
          <h2>Güzel restoranımızı keşfedin</h2>
        </div>
        <GallerySwiper />
      </div>
    </Container>
  );
}
