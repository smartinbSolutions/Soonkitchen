import React from "react";
import { Container } from "react-bootstrap";
import call from "../../../Assets/images/call.png";
import location from "../../../Assets/images/placeholder.png";
import gmail from "../../../Assets/images/gmail.png";
import branches from "../../../Assets/images/branches.png";
import delivery from "../../../Assets/images/delivery.png";
import "./Contact.css";

const Contact = () => {
  return (
    <Container>
      <div className="Contact">
        <div className="Contact-Methods">
          <div className="Contact-box">
            <img src={call} alt="" />
            <p>
              <a
                href="tel:08502422627"
                style={{ textDecoration: "none", color: "#979797" }}
              >
                +850 242 26 27
              </a>
            </p>
          </div>
          <div className="Contact-box">
            <img src={gmail} alt="" />
            <p>
              <a
                href="mailto:info@soonKitchen.co"
                style={{ textDecoration: "none", color: "#979797" }}
              >
                info@soonKitchen.co
              </a>
            </p>
          </div>
          <div className="Contact-box">
            <img src={branches} alt="" />
            <p>Branches</p>
          </div>
          <div className="Contact-box">
            <img src={location} alt="" />
            <p>MAHMUTBEY - İSTANBUL</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
