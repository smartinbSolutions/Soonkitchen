import { useTranslation } from "react-i18next";

const TransHook = () => {
  const { t, i18n } = useTranslation();

  const changeEn = () => {
    i18n.changeLanguage("en");
  };
  const changeTr = () => {
    i18n.changeLanguage("tr");
  };

  return [changeEn, changeTr, t];
};

export default TransHook;
