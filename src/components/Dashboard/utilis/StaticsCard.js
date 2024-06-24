import React from "react";
import { EmojiLaughingFill } from "react-bootstrap-icons";
import "./utilis.css";

const StaticsCard = ({ name, number }) => {
  return (
    <div className="StaticCard col-3">
      <h2>{name}</h2>
      <div>
        <EmojiLaughingFill color="#1680e4" />
        <h2>{number}</h2>
      </div>
    </div>
  );
};

export default StaticsCard;
