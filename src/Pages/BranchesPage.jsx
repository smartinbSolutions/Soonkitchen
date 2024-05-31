import React from "react";
import Footer from "../components/ulity/Footer";
import Mheader from "../components/HomePage/Header/Mheader";
import BranchCard from "./../components/Branches/BranchCard";
import "../components/Branches/BranchCard.css";

const BranchesPage = () => {
  const style = {
    position: "relative",
    width: "100%",
    height: "300px",
    fontSize: "13px",
    backgroundPosition: "center",
    backgroundImage:
      "url(https://cdn.turkishairlines.com/m/67d29f0e11396150/original/Web_3-jpg.jpg)",
    backgroundSize: "cover",
    zIndex: "0",
    transition: "opacity 0.5s ease",
    marginTop: "6%",
  };
  return (
    <div>
      <Mheader />
      <div className="Header" style={style}>
        <div className="overlay"></div>

        <div className="logox">
          <h1
            className="text-center"
            style={{
              display: "inline-block",
              position: "relative",
              color: "#fff",
            }}
          >
            Şubelerimiz
            <span className="title-divider"></span>
          </h1>
        </div>
      </div>
      <div className="branches-container">
        <div className="d-flex branch-card-container">
          <BranchCard
            img={"https://gaosb.org/uploads/editor/3.jpg"}
            phone={"+90 538 417 15 33"}
            address={
              "Batıkent, 9029 Nolu Sk Ekim Plaza Altı No:5, 27100 Şehitkamil/Gaziantep"
            }
            title={"GAZİANTEP"}
            mapUrl={"https://maps.app.goo.gl/zat3sw6VnM5rJY1e7"}
          />
          <BranchCard
            img={
              "https://www.citiesabc.com/wp-content/uploads/2020/04/Istanbul-min.jpg"
            }
            phone={""}
            address={"YAKINDA!"}
            title={"İstanbul"}
            mapUrl={"https://maps.app.goo.gl/zat3sw6VnM5rJY1e7"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BranchesPage;
