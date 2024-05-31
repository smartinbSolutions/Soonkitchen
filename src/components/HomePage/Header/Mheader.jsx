import { useRef } from "react";
import React from "react";
import "./Mheader.css";
import logo from "../../../Assets/logo/Soon Kitchen Logo.png";

import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import TransHook from "../../../hook/locale/trans-hook";

const Mheader = () => {
  const [, , t] = TransHook();
  const navLinks = [
    {
      display: `${t("home")}`,
      url: "/",
    },
    {
      display: `${t("aboutUs")}`,
      url: "/",
    },
    {
      display: `${t("Markalarımız")}`,
      url: "../../Brands",
    },
    {
      display: `Franchise`,
      url: "/franchise",
    },
    {
      display: `İletişim`,
      url: "/",
    },
  ];
  const menuRef = useRef();
  const menuToggle = () =>
    menuRef.current.classList.toggle("mheader-active__menu");

  return (
    <header className="mheader">
      <Container>
        <div className="mheader-navigation">
          <div className="mheader-logo">
            <img src={logo} alt="" />
          </div>

          <div className="mheader-nav__menu" ref={menuRef}>
            <div className="mheader-nav__list__wrapper d-flex align-items-center gap-5">
              <ul className="mheader-nav__list">
                {navLinks.map((item, index) => (
                  <li className="mheader-nav__item" key={index}>
                    <Link to={item.url}>{item.display}</Link>
                  </li>
                ))}
              </ul>
              {/* <SwitchLang /> */}
            </div>
          </div>

          <div className="mheader-mobile__menu" onClick={menuToggle}>
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
