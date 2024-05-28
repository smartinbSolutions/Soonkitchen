/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useRef } from "react";
import React from "react";
import "./Mheader.css";
import logo from "../../../Assets/logo/Soon Kitchen Logo.png";

import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import SwitchLang from "../../ulity/SwitchLang";
import TransHook from "../../../hook/locale/trans-hook";




const Mheader = () => {
  const [, , t]=TransHook()
  const navLinks = [
    {
      display: `${t("home")}`,
      url: "#",
    },
    {
      display: `${t("aboutUs")}`,
      url: "#",
    },
    {
      display: `${t("Markalarımız")}`,
      url: "../../Brands",
    },
    {
      display: `${t("joinUs")}`,
      url: "#",
    },
    {
      display: `${t("contact")}`,
      url: "#",
    },
  ];
  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  return (
    <header className="header fonts">
      <Container>
        <div className="navigation">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="nav__menu" ref={menuRef}>
            <div className="nav__list__wrapper d-flex align-items-center gap-5">
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <Link to={item.url}>{item.display}</Link>
                  </li>
                ))}
              </ul>
              {/* <SwitchLang /> */}
            </div>
          </div>

          <div className="mobile__menu" onClick={menuToggle}>
            <span>
              <i className="fas fa-list"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Mheader;
