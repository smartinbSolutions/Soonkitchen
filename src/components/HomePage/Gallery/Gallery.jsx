import React from "react";
import GallerySwiper from "../Slider/GallerrSwiper";
import { Container } from "reactstrap";
import './Gallery.css'

export default function Gallery (){
    return(
        <Container>
            <div className="Gallery">
                <div className="content">
                    <h1>our Gallery</h1>
                    <h2>explore our beatifull resturant</h2>
                </div>
                <GallerySwiper/>
            </div>
        </Container>
    )
}