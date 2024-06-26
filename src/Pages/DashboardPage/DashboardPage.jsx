import React from "react";
import Sidenav from "../../components/Dashboard/utilis/Sidenav";
import AdminNavBar from "../../components/Dashboard/utilis/AdminNavBar";
import StaticsCard from "../../components/Dashboard/utilis/StaticsCard";
import { useGetBrandsQuery } from "../../RTK/API/BrandsApi";
import { useGetRecipesQuery } from "../../RTK/API/RecipesApi";
import { useGetLabelsQuery } from "../../RTK/API/LabelsApi";

const DashboardPage = () => {
  const { data: brands } = useGetBrandsQuery();
  const { data: Recipes } = useGetRecipesQuery();
  const { data: labels } = useGetLabelsQuery();
  return (
    <div class="">
      <div className=" SideNav_container">
        <Sidenav />
      </div>
      <div className="Main_content">
        <div className="D_container">
          <AdminNavBar />
          <div className="Statics d-flex justify-content-between ">
            <StaticsCard name={"Brands"} number={brands?.data?.length} />
            <StaticsCard name={"Labels"} number={labels?.data?.length} />
            <StaticsCard name={"Recipes"} number={Recipes?.data?.length} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
