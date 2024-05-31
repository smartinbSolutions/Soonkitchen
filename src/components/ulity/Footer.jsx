/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import { Col, Row } from "react-bootstrap";
import image from "../../Assets/logo/soonlogowhite.png";
import { TiLocation } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import TransHook from "./../../hook/locale/trans-hook";

const Footer = () => {
  const [, , t] = TransHook();

  return (
    <div>
      <footer className="footer text-white">
        <Row>
          <Col md={4} sm={12} id="logoAbout">
            <img src={image} width={200} alt="Logo" />
            <p style={{ fontSize: "14px" }}>{t("footerAbout")}</p>
          </Col>
          <Col md={4} sm={12} id="socialCopyright">
            <div className="SocialMediaIcons text-center">
              <a href="https://www.facebook.com/soonkitchen.co">
                <i>
                  <FaFacebook />
                </i>
              </a>
              <a href="https://www.instagram.com/soonkitchen.co/">
                <i>
                  <RiInstagramFill />
                </i>
              </a>
              <a href="https://www.youtube.com/">
                <i>
                  <FaYoutube />
                </i>
              </a>
              <a href="https://linkedin.com/">
                <i>
                  <FaLinkedin />
                </i>
              </a>
              <p id="copyright">
                Copyright &copy; Designed by{" "}
                <a
                  className="company text-white p-0 m-0"
                  href="http://www.smartinb.com"
                  target="blank"
                >
                  Smartinb
                </a>
              </p>
            </div>
          </Col>
          <Col md={4} sm={12} className="pt-5" id="contact">
            <h2
              className="text-center text-uppercase"
              style={{ marginTop: "13px" }}
            >
              {t("contact")}
            </h2>
            <div className="d-flex mt-4">
              <FaPhone />
              &nbsp;
              <p>+90 850 242 26 27</p>
            </div>
            <div className="d-flex">
              <IoIosMail />
              &nbsp;
              <p>info@soonkitchen.co</p>
            </div>
            <div className="d-flex">
              <TiLocation />
              &nbsp;
              <p>MAHMUTBEY MAH. HACI BOSTAN CAD. NO:22/1 BAĞCILAR - İSTANBUL</p>
            </div>
          </Col>
        </Row>
      </footer>
    </div>
  );
};

export default Footer;
