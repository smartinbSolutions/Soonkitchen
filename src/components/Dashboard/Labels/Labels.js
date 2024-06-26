import React, { useState } from "react";
import { useGetLabelsQuery } from "../../../RTK/API/LabelsApi";
import Sidenav from "../utilis/Sidenav";
import AdminNavBar from "../utilis/AdminNavBar";
import LabelCard from "./LabelCard";
import SubmitLabelForm from "./SubmitLabelForm";
import { Plus } from "react-bootstrap-icons";

const Labels = () => {
  const [selectedLabel, setselectedLabel] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const { data: Labels, error, isLoading } = useGetLabelsQuery();

  const handleEdit = (brand) => {
    setselectedLabel(brand);
    setFormVisible(true);
  };
  const handleAdd = () => {
    setselectedLabel(null);
    setFormVisible(true);
  };

  return (
    <div>
      <div className="SideNav_container">
        <Sidenav />
      </div>
      <div className="Main_content">
        <div className="D_container">
          <AdminNavBar />
          <section>
            <div className="mt-3 d-flex justify-content-between">
              <h4>Soon Kitchen Labels</h4>
              <button className="btn btn-primary" onClick={handleAdd}>
                Add label
                <Plus color="#fff" size={24} />
              </button>
            </div>
            <div className="Brands_container d-flex flex-wrap">
              {Labels?.data?.map((label) => (
                <LabelCard key={label._id} Label={label} onEdit={handleEdit} />
              ))}
            </div>
          </section>

          {isFormVisible && (
            <SubmitLabelForm
              onCancel={() => setFormVisible(false)}
              label={selectedLabel}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Labels;
