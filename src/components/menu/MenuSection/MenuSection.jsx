import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "animate.css";
import SwiperCore from "swiper/core";
import "./MenuSection.css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import logo from "../../../Assets/logo/Soon Kitchen Logo White.png";
import useGetData from "../../../hook/api/useGetData.js";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";

function Menusection() {
  const { data: BrandsData } = useGetData();
  const [Brands, setBrands] = useState([]);
  const [SelectedBrand, setSelectedBrand] = useState({});
  const [Recipes, setRecipes] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  SwiperCore.use([Navigation]);
  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle brand selection and fetch recipes
  const handleLogoDesc = (id) => {
    const selectedBrand = Brands.find((item) => item._id === id);
    setSelectedBrand(selectedBrand);
    getFirstRecipes(selectedBrand);
  };

  // Fetch recipes based on category name
  const GetCategoryRecipes = (Cat_name) => {
    const recipes = SelectedBrand?.recipe?.filter(
      (recipe) => recipe.labelsName === Cat_name
    );
    setRecipes(recipes);
  };

  // Fetch all recipes for the selected brand
  const GetAllCategoryRecipes = () => {
    setRecipes(SelectedBrand?.recipe);
  };

  // Fetch the first category recipes when the page loads
  const getFirstRecipes = (brand) => {
    if (brand?.labels) {
      const recipes = brand?.recipe;
      if (recipes && recipes.length > 0) {
        setRecipes(recipes);
        console.log("Filtered recipes:", recipes);
      } else {
        console.log("No matching recipes found.");
      }
    } else {
      console.log("Label not found.");
    }
  };

  // Set brands and initialize the first brand and recipes on data load
  useEffect(() => {
    if (BrandsData?.data) {
      setBrands(BrandsData?.data);
      console.log(BrandsData?.data);
      const firstBrand = BrandsData?.data[0];
      setSelectedBrand(firstBrand);
      getFirstRecipes(firstBrand);
    }
  }, [BrandsData]);

  const slidesPerView = windowWidth < 640 ? 3 : 5;

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
        <div className="BrandsSwiper ">
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
        <div className="Brand_Desc">
          <p>{SelectedBrand?.desc}</p>
        </div>
        <div className="Brand_Cat">
          <Swiper slidesPerView={3}>
            <SwiperSlide onClick={GetAllCategoryRecipes}>
              <p>All</p>
            </SwiperSlide>
            {SelectedBrand?.labels?.map((item, index) => (
              <SwiperSlide
                key={index}
                onClick={() => GetCategoryRecipes(item.name)}
              >
                <p>{item.name}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="Brand_Menu">
          {Recipes.map((item, index) => (
            <div key={index} className="Recipe_Card">
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
                  value={item?.rate}
                  emptyIcon={<FontAwesomeIcon icon={faRegularStar} />}
                  fullIcon={<FontAwesomeIcon icon={faSolidStar} />}
                  color="#d3d3d3" // Color for empty stars
                  activeColor="#ffd700" // Color for filled stars
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
