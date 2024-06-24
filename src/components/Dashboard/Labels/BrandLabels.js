import React, { useEffect, useState } from "react";
import { Plus } from "react-bootstrap-icons";
import "./Labels.css";
import { useGetLabelsQuery } from "../../../RTK/API/LabelsApi";
import { useUpdateBrandMutation } from "../../../RTK/API/BrandsApi";
import defaultLogo from "../../../Assets/logo/logoyuvarlak.png";
import { useParams } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";

const BrandLabels = ({ labels }) => {
  const { id } = useParams();
  const [selectedLabels, setSelectedLabels] = useState([]);
  const { data: AllLabels } = useGetLabelsQuery();
  const [updateBrandLabels] = useUpdateBrandMutation();

  useEffect(() => {
    if (labels) {
      const initialLabelIDs = labels.map((label) => ({
        label: label.name,
        value: label._id,
      }));

      setSelectedLabels(initialLabelIDs);
    }
  }, [labels]);

  useEffect(() => {
    console.log(selectedLabels);
  }, [selectedLabels]);

  const handleSubmit = () => {
    const formData = new FormData();
    selectedLabels.forEach((label) => {
      formData.append("labels", label.value);
    });

    updateBrandLabels({ id, formData })
      .unwrap()
      .then((response) => {
        // Handle success
        console.log("Update successful:", response);
        // Optionally update local state or perform additional actions upon successful update
      })
      .catch((error) => {
        // Handle error
        console.error("Update failed:", error);
      });
  };
  return (
    <div className="Labels">
      <ul>
        {labels?.map((label, index) => (
          <li key={index} className="d-flex">
            <img src={label?.icon || defaultLogo} alt="" />
            <p className="m-0">{label?.name}</p>
          </li>
        ))}
      </ul>
      <div className="col-4 label_select">
        <button onClick={handleSubmit}>
          <Plus color="#ff0000" size={24} />
        </button>
        <Multiselect
          options={
            AllLabels?.data?.map((label) => ({
              label: label.name,
              value: label._id,
            })) || []
          }
          selectedValues={selectedLabels}
          onSelect={(selectedList) => setSelectedLabels(selectedList)}
          onRemove={(selectedList) => setSelectedLabels(selectedList)}
          displayValue="label"
          placeholder="Select labels"
        />
      </div>
    </div>
  );
};
export default BrandLabels;
