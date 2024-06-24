import React, { useEffect, useState } from "react";
import "./BrandsInfo.css";

const BrandInfo = ({ brand }) => {
  const [BrandInfo, SetBrandInfo] = useState({});
  console.log(brand);
  useEffect(() => {
    if (brand) {
      SetBrandInfo(brand?.data);
    }
  }, [brand]);
  return (
    <div className="OneBrand d-flex flex-wrap">
      <div className="BrandInfo">
        <img src={BrandInfo?.logo} alt="BrandLogo" />
        {/* <h2>{BrandInfo?.name}</h2> */}
      </div>
      <div className="BrandStatic">
        <p>{`Labels : ${BrandInfo?.labels?.length || "No Labels"}`}</p>
        <p>{`Recipes : ${BrandInfo?.recipe?.length || "No Recipes"}`}</p>
      </div>
    </div>
  );
};

export default BrandInfo;
