import React, { useState, useEffect } from "react";
import "./Header.css";
import { IoLocationSharp } from "react-icons/io5";
import logo from "../../../Assets/logo/son.png";
import { FaClock } from "react-icons/fa6";

const Header = () => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("dc"); // Burada log çıktısını görebilmelisiniz
      const scrollThreshold = 1;
      const shouldHide = window.scrollY > scrollThreshold;
      setShouldHideHeader(shouldHide);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClassName = shouldHideHeader ? "Header hidden" : "Header";

  return (
    <>
      <div className={headerClassName}>
        <div className="overlay"></div>
        <ul>
          <li>
            <span>
              <IoLocationSharp className="icons" />
            </span>
            Restaurant St, Delicious City, London 9578, UK
          </li>
          <li>
            <span>
              <FaClock className="icons" />
            </span>{" "}
            Daily : 8.00 am to 10.00 pm
          </li>
        </ul>
        <div className="logo">
          <a href="../../">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="soonText">
          <h1>SOON KITCHEN</h1>
          <p>MULTI BRANDS RESTURANT</p>
        </div>
      </div>
    </>
  );
};

export default Header;
