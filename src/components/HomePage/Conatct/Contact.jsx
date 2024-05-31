import React from "react";
import { Container } from "react-bootstrap";
import call from "../../../Assets/images/call.png";
import location from "../../../Assets/images/placeholder.png";
import gmail from "../../../Assets/images/gmail.png";
import branches from "../../../Assets/images/branches.png";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <Container id="contact">
      <div className="Contact">
        <div className="Contact-Methods">
          <div className="Contact-box">
            <img src={call} alt="" />
            <p>
              <a
                href="tel:08502422627"
                style={{ textDecoration: "none", color: "#979797" }}
              >
                +90 850 242 26 27
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
                info@soonkitchen.co
              </a>
            </p>
          </div>
          <div className="Contact-box">
            <img src={branches} alt="" />
            <p onClick={() => navigate("/branches")}>Branches</p>
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
