import React from "react";
import { Container } from "react-bootstrap";
import M_img from '../../../Assets/images/kindpng_694225.png'
import img1 from '../../../Assets/images/delvery.png'
import img2 from '../../../Assets/images/spoon.png'
import img3 from '../../../Assets/images/meal.png'
import './Service.css'
const Services = () => {
    return(
        <Container>
            <div className="services">
                <h2>our services</h2>
                <h1>Why you should choose us</h1>
                <div className="services1">
                    <div className="service_content">
                        <div className="service1">
                            <img src={img1} alt=""/>
                            <div>
                                <h2>Door Deliver</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur 
                                    adipisicing elit. Dolores recusandae</p>
                            </div>
                        </div>
                        <div className="service1">
                            <div>
                                <h2>Door Deliver</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur 
                                    adipisicing elit. Dolores recusandae</p>
                            </div>
                            <img src={img2} alt=""/>
                        </div>
                    </div>
                    <div className="service_img">
                        <img src={M_img} alt=""/>
                    </div>
                    <div className="service_content">
                    <div className="service1">
                            <img src={img1} alt=""/>
                            <div>
                                <h2>Door Deliver</h2>
                                <p>Lorem ipsum, dolor diuji dsfd sit amet consectetur 
                                    adipisicing elit. Dolores recusandae</p>
                            </div>
                            
                        </div>
                        <div className="service1">
                             <div>
                                <h2>Door Deliver</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur 
                                    adipisicing elit. Dolores recusandae</p>
                            </div>
                            <img src={img3} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Services;