import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import dataEn from "../../locale/En.json";
import dataTr from "../../locale/Tr.json";

const resources = {
  en: {
    translation: dataEn,
  },
  tr: {
    translation: dataTr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "tr",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
