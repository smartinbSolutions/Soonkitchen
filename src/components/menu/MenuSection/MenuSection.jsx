import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { allLabel, data, logos } from "../../../data.js";
import "animate.css";
import wow from "wowjs";
import SwiperCore from "swiper/core";
import "./MenuSection.css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Container } from "reactstrap";

function Menusection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState(1);
  const [Count, setCount] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  SwiperCore.use([Navigation]);
  const filterByCategory = (cat) => {
    setSelectedCategory(cat);
  };
  const filterByBrand = (cat) => {
    setSelectedBrand(cat.id);
    // setSelectedCategory("all");
    setCount(cat.id);
  };

  const filteredLabels = allLabel.filter((label) => {
    return data.some(
      (item) => item.brand === selectedBrand && item.cat === label.name
    );
  });

  useEffect(() => {
    const wowInstance = new wow.WOW();
    wowInstance.init();
    setWindowWidth(window.innerWidth);
  }, [selectedBrand]);

  const slidesPerView = windowWidth < 640 ? 2 : 4;
  return (
    <>
      <div className="menu-section">
        <div className="brand-card">
          <div className="swiper-Card">
            <Swiper slidesPerView={slidesPerView} navigation>
              {logos.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className={`${selectedBrand === item.id && "active-btn"}`}
                  onClick={() => filterByBrand(item)}
                >
                  <div className="brand-cardd">
                    <img
                      src={item.img}
                      width={100}
                      height={50}
                      style={{ objectFit: "cover" }}
                      alt={`Brand ${item.id}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="tabs-content">
        <div className={`tab`}>
          <div className="buttons meun-cat">
            <Swiper
              slidesPerView={slidesPerView}
              style={{ color: "#000" }}
              className="tab-buttons wow bounceInDown"
            >
              {filteredLabels.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className={`menu-menu-cat tab-btn ${
                    selectedCategory === item.name && "active-btn"
                  } `}
                  onClick={() => filterByCategory(item.name)}
                >
                  <h2>{item.name}</h2>
                  <p className="item">{item.name}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <Container>
            <div className="ss">
              {data.map((item, index) => {
                return (
                  <>
                    {(selectedCategory === "lol" ||
                      selectedCategory === "all" ||
                      selectedCategory === item.cat) &&
                    item.brand === selectedBrand ? (
                      <div className="product-card">
                        <div className="pr-card">
                          {" "}
                          <div className="pr-info">
                            <h1>{item.name}</h1>
                            <p>{item.info}</p>
                          </div>
                          <div className="pr-price">
                            <h2>{item.price}</h2>
                          </div>
                        </div>
                        <div className="center-img">
                          <img
                            className="product-img"
                            src={item.img}
                            alt="ssss"
                          />
                        </div>
                      </div>
                    ) : null}
                  </>
                );
              })}
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Menusection;
