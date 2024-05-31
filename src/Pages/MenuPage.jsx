import React from "react";
import Menusection from "../components/menu/MenuSection/MenuSection";
import MenuFooter from "../components/menu/Footer/MenuFooter";

const MenuPage = () => {
  return (
    <>
      {/* <Mheader /> */}
      <div className="Menu_Page">
        <Menusection />
        <MenuFooter />
      </div>
    </>
  );
};

export default MenuPage;
