/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useRef } from "react";
import React from "react";
import "./Mheader.css";
import logo from "../../../Assets/logo/logo (2).png";

import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import SwitchLang from "../../ulity/SwitchLang";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },
  {
    display: "Brands",
    url: "../../Brands",
  },
  {
    display: "Recipes",
    url: "#",
  },
  {
    display: "Contect",
    url: "#",
  },
];
const Mheader = () => {
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
              <SwitchLang />
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
