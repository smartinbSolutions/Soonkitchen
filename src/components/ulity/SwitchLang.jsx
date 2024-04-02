import React from "react";
import { useRef } from "react";
import "./SwitchLang.css";
import { useTranslation } from "react-i18next";

const SwitchLang = () => {
  const langSwitchRef = useRef();
  const handleClick = () => {
    langSwitchRef.current.classList.toggle("changed");
  };

  const { t, i18n } = useTranslation();
  const changelang = (e) => {
    // Access the data-value attribute
    const lang = e.target.getAttribute("data-value");

    i18n.changeLanguage(lang);

    // Check if the element with id "selectedlang" exists before setting its text content
    const selectedLangElement = document.getElementById("selectedlang");

    if (selectedLangElement) {
      selectedLangElement.textContent = lang.toUpperCase();
    }
  };

  return (
    <>
      <div ref={langSwitchRef} className="lang_switch" onClick={handleClick}>
        <div
          className="lang_switch__text pl"
          data-value="tr"
          onClick={changelang}
        >
          TR
        </div>
        <div
          className="lang_switch__text en"
          data-value="en"
          onClick={changelang}
        >
          EN
        </div>
        <div className="lang_switch__blobs"></div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ display: "none" }}
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default SwitchLang;
