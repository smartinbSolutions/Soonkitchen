import React from "react";
import { Container } from "react-bootstrap";
import "./Statics.css";

const staticList = [
  { id: 1, Numb: 7, Text: "Cook" },
  { id: 2, Numb: 13, Text: "Brand" },
  { id: 3, Numb: 166, Text: "Recipe" },
  { id: 4, Numb: 45, Text: "Staff" },
];

const Statics = () => {
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
