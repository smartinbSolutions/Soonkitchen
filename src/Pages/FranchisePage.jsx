import React from "react";
import Mheader from "./../components/HomePage/Header/Mheader";
import Footer from "./../components/ulity/Footer";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const FranchisePage = () => {
  return (
    <div>
      <Mheader />
      <div className="franchise-header">
        <div className="overlay"></div>

        <div className="logo brands-title">
          <h1
            className="text-center"
            style={{
              display: "inline-block",
              position: "relative",
              color: "#fff",
            }}
          >
            Franchise
            <span className="title-divider"></span>
          </h1>
        </div>
      </div>
      <Form className="container bg-white mt-5 franchise-container">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Ad</Form.Label>
            <Form.Control type="text" placeholder="Ad" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Soyad</Form.Label>
            <Form.Control type="text" placeholder="Soyad" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>E-posta</Form.Label>
            <Form.Control type="email" placeholder="E-posta" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Telefon</Form.Label>
            <Form.Control type="phone" placeholder="+90 *** *** ** **" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridMessage">
          <Form.Label>Mesaj</Form.Label>
          <textarea rows={4} placeholder="Merhaba, size yazmamın sebebi ..." />
        </Form.Group>

        <Button variant="primary" type="submit">
          Gönder
        </Button>
      </Form>
      <Footer />
    </div>
  );
};

export default FranchisePage;
