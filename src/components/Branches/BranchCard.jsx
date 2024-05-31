import React from "react";
import "./BranchCard.css";

const BranchCard = ({ img, title, phone, address, mapUrl }) => {
  return (
    <div className="card-wrap">
      <div className={`card-header one`}>
        <img src={img} alt={title} />
      </div>
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        <p className="card-text">{phone}</p>
        <p className="card-text">
          {address === "YAKINDA!" ? <h4>YAKINDA!</h4> : address}
        </p>
        {phone.length > 2 ? (
          <a
            href={mapUrl}
            className="card-btn one"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            YOL TARİFİ
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default BranchCard;
