import React from "react";
import { useNavigate } from "react-router-dom";

function FeaturesSection() {
  const navigate = useNavigate();
  return (
    <>
      <section className="default-page-hero-section">
        <div className="default-page-background-wrapper">
          <div className="container">
            <div className="default-page-hero-section-wrapper">
              <p className="default-page-hero-main-text">Funkcije</p>
              <p className="default-page-hero-date">
                Pronađite sve funkcije Edusifya ovdje
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="default-page-section">
        <div className="container">
          <div className="default-page-section-wrapper">
            <p className="default-page-section-header">Jednostavnije učenje</p>
            <span className="default-page-section-text">
              Edusify nudi jednostavnije učenje i pristup svim materijalima
              korisnicima širom cijelog školstva.
            </span>
          </div>
          <div className="default-page-section-wrapper">
            <p className="default-page-section-header">Jednostavnost</p>
            <span className="default-page-section-text">
              Edusify je jednostavan za korišćenje i prilagođen svim
              korisnicima.
            </span>
          </div>
          <div className="default-page-section-wrapper">
            <p className="default-page-section-header">Materijali za učenje</p>
            <span className="default-page-section-text">
              Materijali za učenje su uvijek dostupni i mogu biti iz različitih
              podrućja obrazovanja. Svi korisnici širom svijeta ih mogu
              objavljivati.
            </span>
          </div>
          <div className="default-page-section-wrapper">
            <p className="default-page-section-header">
              Postavljanje materijala za učenje
            </p>
            <span className="default-page-section-text">
              Možete postavljati materijale za učenje u bilo koje vrijeme na
              Edusify. Ovi materijali ne moraju biti javni i možete ih koristiti
              privatno. Edusify također može služiti kao mjesto za čuvanje
              bilješki i drugih stvari za učenje.
            </span>
          </div>
        </div>
      </section>
      <section className="start-now-section">
        <div className="start-now-wrapper">
          <div className="start-now-blurred-box"></div>
          <div className="container">
            <div className="start-now-content-wrapper">
              <h3 className="start-now-main-text">
                Otvorite vrata vašem znanju
              </h3>
              <div className="start-now-btn-team">
                <a
                  className="start-now-btn"
                  onClick={() => {
                    navigate("/signup");
                    window.scrollTo(0, 0);
                  }}
                >
                  Započnite
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturesSection;
