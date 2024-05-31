import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "animate.css";
import SwiperCore from "swiper/core";
import "../menu/MenuSection/MenuSection.css";
import "./Brands.css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import useGetData from "../../hook/api/useGetData";

function BrandSection() {
  const { data: BrandsData } = useGetData();
  const [Brands, setBrands] = useState([]);
  const [SelectedBrand, setSelectedBrand] = useState({});
  const [Recipeis, setRecipeis] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  SwiperCore.use([Navigation]);

  // Get Selected Brand Name and Desc
  const handleLogoDesc = (id) => {
    const selectedBrand = Brands.find((item) => item._id === id);
    setSelectedBrand(selectedBrand);
    if (selectedBrand) {
      console.log(selectedBrand);
      console.log(selectedBrand?.name);
      console.log(selectedBrand?.desc);
    } else {
      console.log("Brand not found");
    }
  };
  // Get Category Recipes
  const GetCategoryRecipeis = (Cat_name) => {
    const recipes = SelectedBrand?.recipe?.filter(
      (recipe) => recipe.labelsName === Cat_name
    );
    setRecipeis(recipes);
  };

  // Get the First Category Recipes When Page Load
  const getFirstRecipes = () => {
    const label = Brands[0]?.labels[0]?.name;
    if (label) {
      const recipes = SelectedBrand?.recipe?.filter(
        (recipe) => recipe.labelsName === label
      );
      // If there are matching recipes, update the state and log the results
      if (recipes && recipes.length > 0) {
        setRecipeis(recipes);
        console.log("Filtered recipes:", recipes);
      } else {
        console.log("No matching recipes found.");
      }
    } else {
      console.log("Label not found.");
    }
  };

  // Load states with info For first Time Load
  useEffect(() => {
    setBrands(BrandsData?.data);
    setSelectedBrand(BrandsData?.data[0]);
    if (Brands) getFirstRecipes();
    setWindowWidth(window.innerWidth);
  }, [BrandsData, Brands]);

  const slidesPerView = windowWidth < 640 ? 3 : 5;
  return (
    <>
      <div className="BrandsSwiper">
        <Swiper slidesPerView={slidesPerView} navigation>
          {Brands &&
            Brands?.map((item, index) => (
              <SwiperSlide
                key={index}
                onClick={() => {
                  handleLogoDesc(item?._id);
                }}
              >
                <div className="Brand_Card">
                  <img src={item.logo} alt={`Brand ${item?._id}`} />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="Brand_Desc">
        <h6>{SelectedBrand?.name}</h6>
        <p>{SelectedBrand?.desc}</p>
      </div>
      <div className="Brand_Cat">
        <Swiper slidesPerView={4}>
          {SelectedBrand?.labels?.map((item, index) => (
            <SwiperSlide
              key={index}
              onClick={() => GetCategoryRecipeis(item?.name)}
            >
              <p>{item?.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="Brand_Menu">
        {Recipeis?.map((item, index) => (
          <div key={index} className="Recipe_Card">
            <h1>{item?.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default BrandSection;
