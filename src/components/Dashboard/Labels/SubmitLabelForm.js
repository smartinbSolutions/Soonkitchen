import React, { useEffect, useState } from "react";
import {
  useAddLabelMutation,
  useUpdateLabelMutation,
} from "../../../RTK/API/LabelsApi";
import "./Labels.css";
import { XCircle } from "react-bootstrap-icons";

const SubmitLabelForm = ({ label, onCancel }) => {
  const [LabelName, setLabelName] = useState("");
  const [LabelIcon, setLabelIcon] = useState("");
  const [logoPreview, setLogoPreview] = useState(null);
  const [
    updateLabel,
    { data: updatedLabelData, isLoading: isUpdating, error: updateError },
  ] = useUpdateLabelMutation();
  const [
    AddLabel,
    { data: AddedLabelData, isLoading: isAdding, error: AddError },
  ] = useAddLabelMutation();

  const urlToFile = async (url, filename, mimeType) => {
    const res = await fetch(url);
    const buffer = await res.arrayBuffer();
    return new File([buffer], filename, { type: mimeType });
  };

  useEffect(() => {
    if (label) {
      setLabelName(label?.name);
      setLogoPreview(label?.icon);
      if (label?.icon) {
        urlToFile(label?.icon, "icon.png", "image/png").then((file) => {
          setLabelIcon(file);
        });
      }
    }
  }, [label]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLabelIcon(file);
      setLogoPreview(URL.createObjectURL(file)); // Generate preview URL
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prepare FormData
    const formData = new FormData();
    formData.append("name", LabelName);
    formData.append("icon", LabelIcon);
    // Debugging logs to check FormData contents
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    try {
      if (label) {
        await updateLabel({ id: label._id, formData });
      } else {
        await AddLabel(formData);
      }

      // Handle success, e.g., reset form
      setLabelName("");
      setLabelIcon(null);
      setLogoPreview(null);
      onCancel(); // Close the form after successful submission
    } catch (error) {
      // Handle error
      console.error("Failed to add brand:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="AddBrandForm">
      <h4>{label ? "Update Label" : "Add Label"}</h4>
      <input
        type="text"
        value={LabelName}
        onChange={(e) => setLabelName(e.target.value)}
        placeholder="Enter label name"
        required
      />
      {logoPreview && (
        <img
          src={logoPreview}
          alt="Logo Preview"
          style={{ width: "100px", height: "100px" }}
        />
      )}
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <button
        type="submit"
        className="btn btn-primary"
        disabled={isUpdating || isAdding}
      >
        Save
      </button>
      <XCircle color="#0355ec" size={30} className="exit" onClick={onCancel} />
      {(isAdding || isUpdating) && <p>Submitting label...</p>}
      {AddError && <p>{AddError?.message}</p>}
      {updateError && <p>{updateError?.message}</p>}
    </form>
  );
};

export default SubmitLabelForm;
