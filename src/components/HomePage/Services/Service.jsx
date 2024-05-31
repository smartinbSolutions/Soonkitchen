import React from "react";
import { Container } from "react-bootstrap";
import M_img from "../../../Assets/images/kindpng_694225.png";
import img1 from "../../../Assets/images/delvery.png";
import img2 from "../../../Assets/images/spoon.png";
import img3 from "../../../Assets/images/meal.png";
import "./Service.css";
import TransHook from "./../../../hook/locale/trans-hook";

const Services = () => {
  const [, , t] = TransHook();
  const services1 = [
    {
      title: "Paket Servis",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores recusandae",
      image: img1,
      order: 1,
    },
    {
      title: "Salon Servisi",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores recusandae",
      image: img2,
      order: 2,
    },
  ];
  const services2 = [
    {
      title: "Açık Mutfak",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores recusandae",
      image: img3,
      order: 1,
    },
    {
      title: "Hızlı & Lezzetli",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores recusandae",
      image: img2,
      order: 2,
    },
  ];

  return (
    <Container>
      <div className="services">
        <h2 className="text-uppercase">{t("ourServices")}</h2>
        <h1>{t("whyUs")}</h1>
        <div className="services1">
          <div className="service_content">
            {services1.map((service, i) => {
              return (
                <div className="service1" key={i}>
                  {service.order === 1 ? (
                    <img src={service.image} alt="" />
                  ) : null}
                  <div>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                  {service.order === 2 ? (
                    <img src={service.image} alt="" />
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="service_img">
            <img src={M_img} alt="" />
          </div>
          <div className="service_content">
            {services2.map((service, i) => {
              return (
                <div className="service1" key={i}>
                  {service.order === 2 ? (
                    <img src={service.image} alt="" />
                  ) : null}
                  <div>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                  {service.order === 1 ? (
                    <img src={service.image} alt="" />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
