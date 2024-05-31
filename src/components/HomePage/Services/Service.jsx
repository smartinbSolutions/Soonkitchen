import React from "react";
import { Container } from "react-bootstrap";
import M_img from "../../../Assets/images/slider1.png";
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
        "Lezzetli yemeklerimiz hızlı ve sıcak şekilde kapınıza teslim edilir.",
      image: img1,
      order: 1,
    },
    {
      title: "Salon Servisi",
      description:
        "Rahat ve şık bir ortamda, profesyonel servis ile unutulmaz yemek keyfi.",
      image: img2,
      order: 2,
    },
  ];
  const services2 = [
    {
      title: "Açık Mutfak",
      description:
        "Şeffaf açık mutfak konseptimizle, yemeklerimizin hazırlanışını izleyin.",
      image: img3,
      order: 1,
    },
    {
      title: "Hızlı & Lezzetli",
      description:
        "En kaliteli malzemelerle hızlı ve lezzetli yemekler sunuyoruz.",
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
