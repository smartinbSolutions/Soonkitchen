import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDeleteLabelMutation } from "../../../RTK/API/LabelsApi";
import defaultLogo from "../../../Assets/logo/logoyuvarlak.png";
import { ArchiveFill } from "react-bootstrap-icons";
const LabelCard = ({ Label, onEdit }) => {
  const [showModal, setShowModal] = useState(false);
  const [deletelabel, { isLoading, isError }] = useDeleteLabelMutation();
  const handleDelete = async () => {
    try {
      await deletelabel(Label?._id);
      setShowModal(false);
    } catch (error) {
      console.error("Failed to delete Label:", error);
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
          src={isValidLogo(Label?.icon) ? Label?.icon : defaultLogo}
          alt=""
          className="img-fluid"
        />
      </div>
      <h2 className="title">{Label?.name}</h2>

      <button className="btn btn-primary" onClick={() => onEdit(Label)}>
        update
      </button>
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
        <Modal.Body>Are you sure you want to delete this Label?</Modal.Body>
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

export default LabelCard;
