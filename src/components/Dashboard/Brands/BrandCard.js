import React, { useState } from "react";
import "./BrandCard.css";
import { useNavigate } from "react-router-dom";
import { ArchiveFill } from "react-bootstrap-icons";
import { Button, Modal } from "react-bootstrap";
import defaultLogo from "../../../Assets/logo/logoyuvarlak.png";
import { useDeleteBrandMutation } from "../../../RTK/API/BrandsApi";

const BrandCard = ({ Brand, onEdit }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [deleteBrand, { isLoading, isError }] = useDeleteBrandMutation();
  const handleShow = () => {
    navigate(`/Dashboard/BrandDetails/${Brand?._id}`);
  };

  const handleDelete = async () => {
    try {
      await deleteBrand(Brand?._id);
      setShowModal(false);
    } catch (error) {
      console.error("Failed to delete Brand:", error);
    }
  };
  // Check if Brand.logo is a valid image URL
  const isValidLogo = (logo) => {
    // Replace this with your logic to check if 'logo' is a valid URL for an image
    return logo && logo !== "https://nooncar.com:8001/brandSoon/";
  };
  return (
    <div className="label_card">
      <div className="post-img">
        <img
          src={isValidLogo(Brand?.logo) ? Brand?.logo : defaultLogo}
          alt=""
          className="img-fluid"
        />
      </div>

      <h2 className="title">{Brand?.name}</h2>
      <p>{Brand?.desc.substring(0, 30) || "No Description For this Brand"}</p>

      <div className="read-more ">
        <button className="btn btn-primary" onClick={() => onEdit(Brand)}>
          update
        </button>
        <button className="btn btn-primary" onClick={() => handleShow()}>
          Show
        </button>
      </div>
      <span
        className="delete_Button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <ArchiveFill color="#ff4d4d" size={16} />
      </span>

      {/* <!-- Modal --> */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this Brand?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleDelete} disabled={isLoading}>
            {isLoading ? "Deleting..." : "Confirm Delete"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BrandCard;
