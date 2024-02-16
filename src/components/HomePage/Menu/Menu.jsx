import React from "react";
import "./OurMenu.css";
import MenuImg from "../../../Assets/images/soon2.png";
import MenuImg2 from "../../../Assets/images/chicken3.png";



const Menu = () => {
    return (
        <div className="container">
            <div className="ourMenu" >
       
                <div className="ourMenu_content">
                    <h1>SOON KITCHEN</h1>
                    <h2>MENU</h2>
                    <img src={MenuImg2} alt=""/>
                </div>

                <div className="ourMenu_img" >
                    <img src={MenuImg} alt="" />
                </div>
           
            </div>
        </div>

    )
}

export default Menu