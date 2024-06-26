import React, { useState } from "react";
import {
  useAddBrandMutation,
  useGetBrandsQuery,
} from "../../../RTK/API/BrandsApi";
import BrandCard from "./BrandCard";
import Sidenav from "../utilis/Sidenav";
import AdminNavBar from "../utilis/AdminNavBar";
import AddBrandForm from "./AddBrandForm";
import { Plus } from "react-bootstrap-icons";

const AdminBrands = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const { data: brands, error, isLoading } = useGetBrandsQuery();

  const handleEdit = (brand) => {
    setSelectedBrand(brand);
    setFormVisible(true);
    console.log(isFormVisible);
  };
  const handleAdd = () => {
    setSelectedBrand(null);
    setFormVisible(true);
  };
  // console.log(brands);
  return (
    <div class="">
      <div className="SideNav_container">
        <Sidenav />
      </div>
      <div className="Main_content">
        <div className="D_container">
          <AdminNavBar />

          <section>
            <div className="mt-3 d-flex justify-content-between">
              <h2>Soon Kitchen Brands</h2>
              <button className="btn btn-primary" onClick={handleAdd}>
                Add Brand
                <Plus color="#fff" size={24} />
              </button>
            </div>

            <div className="Brands_container d-flex flex-wrap">
              {brands?.data?.map((brand) => (
                <BrandCard key={brand._id} Brand={brand} onEdit={handleEdit} />
              ))}
            </div>
          </section>
          {/* Add Brand Module */}
          {isFormVisible && (
            <AddBrandForm
              onCancel={() => setFormVisible(false)}
              brand={selectedBrand}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminBrands;
