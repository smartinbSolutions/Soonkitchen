import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore from "swiper";
import "./MenuSection.css";
import logo from "../../../Assets/logo/Soon Kitchen Logo White.png";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
import CatImg from "../../../Assets/images/diet_561611.png";
import CatImg2 from "../../../Assets/images/hot-pot_3183463.png";
import { Navigation } from "swiper/modules";
import { useGetBrandsQuery } from "../../../RTK/API/BrandsApi.js";
import RecipeCard from "../../Dashboard/Recipes/RecipeCard.js";

SwiperCore.use([Navigation]);

function Menusection() {
  const { data: BrandsData } = useGetBrandsQuery();
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState({});
  const [selectedRecipe, setSelectedRecipe] = useState({});
  const [showRecipeCard, setShowRecipeCard] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (BrandsData?.data) {
      setBrands(BrandsData.data);
      const firstBrand = BrandsData.data[0];
      setSelectedBrand(firstBrand);
      getFirstRecipes(firstBrand);
    }
  }, [BrandsData]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCancel = () => {
    setShowRecipeCard(false);
    console.log(showRecipeCard);
  };

  useEffect(() => {
    console.log("ShowRecipeCard:", showRecipeCard);
  }, [showRecipeCard]);

  const handleLogoDesc = (id) => {
    const selectedBrand = brands.find((item) => item._id === id);
    setSelectedBrand(selectedBrand);
    setAnimationClass("fade-up");
    getFirstRecipes(selectedBrand);
  };

  const getCategoryRecipes = (catName) => {
    const filteredRecipes = selectedBrand?.recipe?.filter(
      (recipe) =>
        recipe?.labelsName.trim().toLowerCase() === catName.trim().toLowerCase()
    );
    setAnimationClass("fade-up");
    setRecipes(filteredRecipes);
  };

  const getAllCategoryRecipes = () => {
    setAnimationClass("fade-up");
    setRecipes(selectedBrand?.recipe);
  };

  const getFirstRecipes = (brand) => {
    const initialRecipes = brand?.recipe || [];
    setRecipes(initialRecipes);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setAnimationClass(""), 1000);
    return () => clearTimeout(timeout);
  }, [recipes]);

  const slidesPerView = windowWidth < 640 ? 4 : 5;

  return (
    <div className="Menu">
      <div className="Menu_sec1">
        <div className="Header">
          <div className="overlay"></div>
          <div className="logo">
            <a href="../../">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="soonText">
            <h2>Hybrid Cloud Kitchen</h2>
          </div>
        </div>
        <div className="BrandsSwiper">
          <Swiper slidesPerView={slidesPerView} navigation>
            {brands.map((item, index) => (
              <SwiperSlide key={index} onClick={() => handleLogoDesc(item._id)}>
                <div className="Brand_Card">
                  <img src={item.logo} alt={`Brand ${item._id}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="container">
        <div className="Brand_Desc">
          <p>{selectedBrand?.desc}</p>
        </div>
        <div className="Brand_Cat">
          <Swiper slidesPerView={slidesPerView}>
            <SwiperSlide onClick={getAllCategoryRecipes}>
              <div className="cat_Card">
                <span>
                  <img src={CatImg} alt="Cat_Img" />
                </span>
                <p>All</p>
              </div>
            </SwiperSlide>
            {selectedBrand?.labels?.map((item, index) => (
              <SwiperSlide
                key={index}
                onClick={() => getCategoryRecipes(item?.name)}
              >
                <div className="cat_Card">
                  <span>
                    <img
                      src={item.icon || CatImg2}
                      alt={item.name || "Category Image"}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = CatImg2;
                        console.error(`Failed to load image: ${item.image}`);
                      }}
                    />
                  </span>
                  <p>{item.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={`Brand_Menu ${animationClass}`}>
          {recipes.map((item, index) => (
            <div
              key={index}
              className={`Recipe_Card ${animationClass}`}
              onClick={() => {
                setSelectedRecipe(item);
                setShowRecipeCard(true);
              }}
            >
              <div className="Recipe_img">
                <img src={item?.images[0]} alt="" />
              </div>
              <div className="Recipe_info">
                <h6>{item?.name}</h6>
                <p>{item?.labelsName}</p>
                <ReactStars
                  count={5}
                  size={16}
                  isHalf={true}
                  value={item?.rate || 5}
                  emptyIcon={<FontAwesomeIcon icon={faRegularStar} />}
                  fullIcon={<FontAwesomeIcon icon={faSolidStar} />}
                  color="#d3d3d3"
                  activeColor="#ffd700"
                />
              </div>
              <div className="price">
                <span>
                  {item?.price} <span id="currency">₺</span>
                </span>
              </div>
            </div>
          ))}

          <RecipeCard
            recipe={selectedRecipe}
            brand={selectedBrand}
            onCancel={handleCancel}
            show={showRecipeCard}
          />
        </div>
      </div>
    </div>
  );
}

export default Menusection;
