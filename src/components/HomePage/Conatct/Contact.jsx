import React from "react";
import { Container } from "react-bootstrap";
import call from "../../../Assets/images/call.png";
import location from "../../../Assets/images/placeholder.png";
import gmail from "../../../Assets/images//gmail.png";
import delivery from "../../../Assets/images/delivery.png";
import "./Contact.css";

const Contact = () => {
  return (
    <Container>
      <div className="Contact">
        <div className="Contact-Methods">
          <div className="Contact-box">
            <img src={call} alt="" />
            <p>+850 242 26 27</p>
          </div>
          <div className="Contact-box">
            <img src={gmail} alt="" />
            <p>info@soonKitchen.com</p>
          </div>
          <div className="Contact-box">
            <img src={delivery} alt="" />
            <p>+850 242 26 27</p>
          </div>
          <div className="Contact-box">
            <img src={location} alt="" />
            <p>Turkey , GaziAntep</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
