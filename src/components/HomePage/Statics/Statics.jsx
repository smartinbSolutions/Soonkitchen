import React from "react";
import { Container } from "react-bootstrap";
import "./Statics.css";
import TransHook from "./../../../hook/locale/trans-hook";

const Statics = () => {
  const [, , t] = TransHook();
  const staticList = [
    { id: 1, Numb: 1, Text: t("Mutfak") },
    { id: 2, Numb: 13, Text: t("brand") },
    { id: 3, Numb: 166, Text: t("recipe") },
    { id: 4, Numb: 35, Text: t("staff") },
  ];

  return (
    <Container>
      <div className="statics">
        {staticList.map((item) => (
          <div className="static" key={item.id}>
            <h1>{item.Numb}</h1>
            <h2>{item.Text}</h2>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Statics;
