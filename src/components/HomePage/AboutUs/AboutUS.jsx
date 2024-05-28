import React from "react";
import "./AboutUs.css";
import AboutImg from "../../../Assets/images/soon.png";
import TransHook from "../../../hook/locale/trans-hook";

const AboutUS = () => {
  const [, , t] = TransHook();
  return (
    <div className="container">
      <div className="aboutUs">
        <div className="AboutUs-img">
          <img src={AboutImg} alt="" />
        </div>
        <div className="AboutUs-Text">
          <h2 className="text-uppercase">Hakkımızda</h2>
          <p style={{ fontSize: "18px" }}>
            Soon Kitchen hibrit cloud kitchen konseptli bir restoran
            startupıdır. Bünyesinde bulunan 12 markası ile sektördeki
            tecrübesini yenilikçi yaklaşımlar ve çözümler üretmek üzere
            güncelleyen teknolojik bir gıda işletmesidir. Verimli mutfaklar
            tasarlarken, gelen ya da paket sipariş eden müşterilerinin
            memnuniyetlerini arttırmayı amaçlamaktadır. Bu kapsamda Soon Kitchen
            konseptini daha iyi tanımlayacak ve gelecek vizyonunu ortaya koyacak
            sorular ve cevaplar eşliğinde sistemimizi daha yakından
            tanıyabiliriz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
