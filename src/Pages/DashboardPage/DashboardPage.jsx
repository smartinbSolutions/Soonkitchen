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
    <div class="d-flex justify-content-between ">
      <div className=" col-2 SideNav_container">
        <Sidenav />
      </div>
      <div className="col-10 Main_content">
        <div className="container">
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
