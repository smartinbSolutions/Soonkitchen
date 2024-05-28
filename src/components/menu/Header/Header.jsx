import React, { useState, useEffect } from "react";
import "./Header.css";
import { IoLocationSharp } from "react-icons/io5";
import logo from "../../../Assets/logo/Soon Kitchen Logo White.png";
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

        <div className="logo">
          <a href="../../">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="soonText">
          <h2>Hybrid Cloud Kitchen</h2>
        </div>
      </div>
    </>
  );
};

export default Header;
