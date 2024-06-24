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

SwiperCore.use([Navigation]);

function Menusection() {
  const { data: BrandsData } = useGetBrandsQuery();
  const [Brands, setBrands] = useState([]);
  const [SelectedBrand, setSelectedBrand] = useState({});
  const [Recipes, setRecipes] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [animationClass, setAnimationClass] = useState(""); // New state for animation class

  // Function to initialize brands and recipes
  useEffect(() => {
    if (BrandsData?.data) {
      setBrands(BrandsData?.data);
      const firstBrand = BrandsData?.data[0];
      setSelectedBrand(firstBrand);
      getFirstRecipes(firstBrand);
    }
  }, [BrandsData]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to handle brand selection and filter recipes
  const handleLogoDesc = (id) => {
    const selectedBrand = Brands.find((item) => item._id === id);
    setSelectedBrand(selectedBrand);
    console.log(SelectedBrand);
    setAnimationClass("fade-up");
    getFirstRecipes(selectedBrand);
  };

  // Function to fetch recipes based on category name
  const GetCategoryRecipes = (Cat_name) => {
    console.log("SelectedBrand:", SelectedBrand);
    console.log("Category Name:", Cat_name);

    const recipes = SelectedBrand?.recipe?.filter(
      (recipe) =>
        recipe?.labelsName.trim().toLowerCase() ===
        Cat_name.trim().toLowerCase()
    );

    console.log("Filtered Recipes:", recipes);

    setAnimationClass("fade-up");
    setRecipes(recipes);
  };

  // Function to fetch all recipes for the selected brand
  const GetAllCategoryRecipes = () => {
    setAnimationClass("fade-up");
    setRecipes(SelectedBrand?.recipe);
  };

  // Function to fetch the first category recipes when the page loads
  const getFirstRecipes = (brand) => {
    if (brand?.recipe) {
      const recipes = brand?.recipe;
      if (recipes && recipes.length > 0) {
        setRecipes(recipes);
      } else {
        setRecipes([]);
      }
    }
  };

  useEffect(() => {
    // Remove the animation class after the animation ends
    const timeout = setTimeout(() => setAnimationClass(""), 1000); // 1000ms matches the animation duration
    return () => clearTimeout(timeout);
  }, [Recipes]); // Run this effect whenever Recipes change

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
            {Brands.map((item, index) => (
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
        <div className={`Brand_Desc`}>
          <p>{SelectedBrand?.desc}</p>
        </div>
        <div className="Brand_Cat">
          <Swiper slidesPerView={slidesPerView}>
            <SwiperSlide onClick={GetAllCategoryRecipes}>
              <div className={`cat_Card `}>
                <span>
                  <img src={CatImg} alt="Cat_Img" />
                </span>
                <p>All</p>
              </div>
            </SwiperSlide>
            {SelectedBrand?.labels?.map((item, index) => (
              <SwiperSlide
                key={index}
                onClick={() => GetCategoryRecipes(item?.name)}
              >
                <div className={`cat_Card`}>
                  <span>
                    <img
                      src={item.icon || CatImg2}
                      alt={item.name || "Category Image"}
                      onError={(e) => {
                        e.target.onerror = null; // Prevent looping
                        e.target.src = CatImg2; // Fallback image
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
          {Recipes.map((item, index) => (
            <div key={index} className={`Recipe_Card ${animationClass}`}>
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
                  value={item?.rate || "5"}
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
        </div>
      </div>
    </div>
  );
}

export default Menusection;
