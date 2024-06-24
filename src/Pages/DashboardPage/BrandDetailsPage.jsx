import React, { useEffect, useState } from "react";
import Sidenav from "../../components/Dashboard/utilis/Sidenav";
import AdminNavBar from "../../components/Dashboard/utilis/AdminNavBar";
import { useParams } from "react-router-dom";
import { useGetBrandByIdQuery } from "../../RTK/API/BrandsApi";
import BrandInfo from "../../components/Dashboard/Brands/BrandInfo";
import BrandLabels from "../../components/Dashboard/Labels/BrandLabels";
import Recipes from "../../components/Dashboard/Recipes/Recipes";

const BrandDetailsPage = () => {
  const { id } = useParams();
  const [Labels, SetLabels] = useState([]);
  const [BrandRecipes, SetBrandRecipes] = useState([]);
  const { data, isLoading, error } = useGetBrandByIdQuery(id);
  useEffect(() => {
    if (data) {
      SetLabels(data?.data?.labels);
      SetBrandRecipes(data?.data?.recipe);
      console.log(data);
    }
  }, [data]);
  return (
    <div class="d-flex justify-content-between ">
      <div className=" col-2 SideNav_container">
        <Sidenav />
      </div>
      <div className="col-10 Main_content">
        <div className="container">
          <AdminNavBar />
          <section className="BradDetails ">
            <BrandInfo brand={data} />
            <BrandLabels labels={Labels} />
            <Recipes labels={Labels} recipes={BrandRecipes} BrandID={id} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default BrandDetailsPage;
