import React from "react";
import { Container } from "react-bootstrap";
import './Statics.css';



const staticList = [
    { id : 1 ,  Numb:25, Text :"cook"},
    { id : 2 , Numb:32, Text :"Brand"},
    { id : 3 , Numb:70, Text : "Recipe"},
    { id : 4 , Numb:33, Text : "Staff"}
]

const Statics = () => {
    return (
        <Container>
            <div className="statics">
                { staticList.map((item) => (
                    <div className="static" key={item.id}>
                        <h1>{item.Numb}</h1>
                        <h2>{item.Text}</h2>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Statics;