import React from "react";
import Mheader from "./../components/HomePage/Header/Mheader";
import Footer from "./../components/ulity/Footer";

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
      <form className="container bg-white mt-5 franchise-container">
        <div className="row mb-3">
          <div className="col-lg-6 col-12 mb-3">
            <label htmlFor="name" className="form-label">
              Ad
            </label>
            <input type="text" id="name" className="form-control" />
          </div>
          <div className="col-lg-6 col-12 mb-3">
            <label htmlFor="lastName" className="form-label">
              Soyad
            </label>
            <input type="text" id="lastName" className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 col-12 mb-3">
            <label htmlFor="email" className="form-label">
              E-posta
            </label>
            <input type="email" id="email" className="form-control" />
          </div>
          <div className="col-lg-6 col-12 mb-3">
            <label htmlFor="phone" className="form-label">
              Telefon
            </label>
            <input type="number" id="phone" className="form-control" />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Mesaj
          </label>
          <textarea
            rows={4}
            className="form-control"
            id="message"
            placeholder="Merhaba, size yazmamın sebebi ..."
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Gönder
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default FranchisePage;
