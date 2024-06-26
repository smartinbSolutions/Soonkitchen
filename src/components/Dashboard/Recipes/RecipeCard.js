import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import kalLogo from "../../../Assets/logoImage/calories.png";
import MoneyLogo from "../../../Assets/logoImage/money-bag.png";
import { Modal } from "react-bootstrap";

const RecipeCard = ({ recipe, brand, onCancel, show }) => {
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    if (recipe) {
      const total = recipe?.ingredients?.reduce((sum, item) => {
        return sum + (parseFloat(item.calories) || 0);
      }, 0);
      setTotalCalories(total);
    }
  }, [recipe]);
  return (
    <div>
      <Modal
        show={show}
        onHide={onCancel}
        centered
        className="Recipe_card_Modal"
      >
        <Modal.Body>
          <div className="Recipe_container">
            <div className="Recipe_Details_Card">
              <div className="Recipe_info">
                <h1>{brand?.name}</h1>
                <div className="details">
                  <h2>{recipe?.name}</h2>
                  <ReactStars
                    count={5}
                    size={16}
                    isHalf={true}
                    value={recipe?.rate || 5}
                    emptyIcon={<FontAwesomeIcon icon={faRegularStar} />}
                    fullIcon={<FontAwesomeIcon icon={faSolidStar} />}
                    color="#d3d3d3"
                    activeColor="#ffd700"
                  />
                  <p>{recipe?.desc}</p>
                  <ul>
                    {recipe?.ingredients?.map((item, index) => (
                      <li key={index}>
                        {item?.name} - {item?.weight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="cal_pri">
                  <div className="kal">
                    <img src={kalLogo} alt="" />
                    <span>{totalCalories} kalories</span>
                  </div>
                  <div className="kal">
                    <img src={MoneyLogo} alt="" id="MoneyLogo" />
                    <span id="price">{recipe?.price} tl</span>
                  </div>
                </div>
              </div>
              <div className="Recipe_images">
                <Swiper
                  slidesPerView={1}
                  pagination={true}
                  modules={Pagination}
                  className="mySwiper"
                >
                  {recipe?.images?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <img src={item} alt={`Brand ${item}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <ArrowLeftCircleFill
              className="Go_back"
              size={40}
              onClick={onCancel}
            />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RecipeCard;
