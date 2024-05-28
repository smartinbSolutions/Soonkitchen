/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import { Col, Row } from "react-bootstrap";
import image from "../../Assets/logo/soonlogowhite.png";
import { TiLocation } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-white">
        <Row>
          <Col md={3} sm={12} id="logoAbout">
            <img src={image} width={200} alt="Logo" />
            <p style={{ fontSize: "14px" }}>
              Soon Kitchen hibrit cloud kitchen konseptli bir restoran
              startupıdır. Bünyesinde bulunan 12 markası ile sektördeki
              tecrübesini yenilikçi yaklaşımlar ve çözümler üretmek üzere
              güncelleyen teknolojik bir gıda işletmesidir. Verimli mutfaklar
              tasarlarken, gelen ya da paket sipariş eden müşterilerinin
              memnuniyetlerini arttırmayı amaçlamaktadır.
            </p>
          </Col>
          <Col md={6} sm={12} id="socialCopyright">
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
              <a href="https://twitter.com/">
                <i>
                  <FaXTwitter />
                </i>
              </a>
              <a href="https://www.tiktok.com/">
                <i>
                  <FaTiktok />
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
          <Col md={3} sm={12} className="pt-5" id="contact">
            <h2 className="text-center">İLETİŞİM</h2>
            <div className="d-flex mt-4 pt-1">
              <FaPhone />
              &nbsp;
              <p>+850 242 26 27</p>
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
