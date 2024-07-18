import React, { useEffect, useState } from "react";
import {
  useAddBrandMutation,
  useUpdateBrandMutation,
} from "../../../RTK/API/BrandsApi";
import { XCircle } from "react-bootstrap-icons";

const AddBrandForm = ({ brand, onCancel }) => {
  const [brandName, setBrandName] = useState("");
  const [brandDesc, setBrandDesc] = useState("");
  const [brandLogo, setBrandLogo] = useState("");
  const [logoPreview, setLogoPreview] = useState(null);
  const [
    AddBrand,
    { data: NewBrandData, isLoading: isAdding, error: NewBrandError },
  ] = useAddBrandMutation();
  const [
    updataBraand,
    { data: updatedBrandData, isLoading: isUpdating, error: updatedBrandError },
  ] = useUpdateBrandMutation();

  const urlToFile = async (url, filename, mimeType) => {
    try {
      const res = await fetch(url);
      const buffer = await res.arrayBuffer();
      return new File([buffer], filename, { type: mimeType });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (brand) {
      try {
        setBrandName(brand?.name);
        setBrandDesc(brand?.desc);
        setLogoPreview(brand?.logo);
        if (brand.logo) {
          urlToFile(brand?.logo, "logo.png", "image/png").then((file) => {
            setBrandLogo(file);
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, [brand]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBrandLogo(file);
      setLogoPreview(URL.createObjectURL(file)); // Generate preview URL
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", brandName);
    formData.append("desc", brandDesc);
    formData.append("logo", brandLogo);

    // // Debugging logs to check FormData contents
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    try {
      if (brand) {
        await updataBraand({ id: brand._id, formData });
      } else {
        await AddBrand(formData);
      }
      // Handle success, e.g., reset form
      setBrandName("");
      setBrandDesc("");
      setBrandLogo(null);
      setLogoPreview(null);
      onCancel(); // Close the form after successful submission
    } catch (error) {
      // Handle error
      console.error("Failed to add brand:", error.message);
    }
  };
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  return (
    <form onSubmit={handleSubmit} className="AddBrandForm">
      <h4>{brand ? "updata Brand" : "Add Brand"}</h4>
      <input
        type="text"
        value={brandName}
        onChange={(e) => setBrandName(e.target.value)}
        placeholder="Enter brand name"
        required
      />
      <input
        type="text"
        value={brandDesc}
        onChange={(e) => setBrandDesc(e.target.value)}
        placeholder="Enter brand Desc"
      />
      {logoPreview && (
        <img
          src={logoPreview}
          alt="Logo Preview"
          style={{ width: "100px", height: "100px" }}
        />
      )}
      <input
        type="file"
        onChange={(e) => handleFileChange(e)}
        accept="image/*"
      />

      <button
        type="submit"
        className="btn btn-primary"
        disabled={isAdding || isUpdating}
      >
        {brand ? "updata Brand" : "Add Brand"}
      </button>
      <XCircle color="#0355ec" size={30} className="exit" onClick={onCancel} />
      {(isAdding || isUpdating) && <p>Submitting brand...</p>}
      {NewBrandError && <p>{NewBrandError?.message}</p>}
      {updatedBrandError && <p>{updatedBrandError?.message}</p>}
    </form>
  );
};

export default AddBrandForm;
