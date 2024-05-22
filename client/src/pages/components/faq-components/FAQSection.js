import React from "react";
import { useNavigate } from "react-router-dom";

function FAQSection() {
  const navigate = useNavigate();
  return (
    <>
      <section className="default-page-hero-section">
        <div className="default-page-background-wrapper faq">
          <div className="container">
            <div className="default-page-hero-section-wrapper">
              <p className="default-page-hero-main-text">
                Često postavljana pitanja
              </p>
              <p className="default-page-hero-date">
                Pronađite svoje pitanje ovdje
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="default-page-section">
        <div className="container">
          <div className="default-page-section-wrapper">
            <p className="default-page-section-header">
              Kako započeti koristiti Edusfiy?
            </p>
            <span className="default-page-section-text">
              Edusify možete jednostavno početi koristiti registracijom na
              mrežnoj stranici. Nakon registracije, imate pristup svim
              materijalima koje postavljaju korisnici. Također dobivate pristup
              učitavanju materijala.
            </span>
          </div>
          <div className="default-page-section-wrapper">
            <p className="default-page-section-header">Kako radi Edusify?</p>
            <span className="default-page-section-text">
              Edusify radi na principu financiranja školstva ili privatnih
              obrazovnih ustanova tako da na inovativan način omogući svakom
              pojedincu jednostavnije obrazovanje.
            </span>
          </div>
          <div className="default-page-section-wrapper">
            <p className="default-page-section-header">Plaćamo li Edusify?</p>
            <span className="default-page-section-text">
              Edusify plaća vaša obrazovna ustanova. Vi nećete snositi nikakve
              dodatne troškove.
            </span>
          </div>
          <div className="default-page-section-wrapper">
            <p className="default-page-section-header">
              Postoje li neka ograničenja na Edusifyu?
            </p>
            <span className="default-page-section-text">
              Nema posebnih ograničenja osim za kršenje naših Uvjeta i Uvjeti,
              koje možete pročitati na našim stranicama.
            </span>
          </div>
          <div className="default-page-section-wrapper">
            <p className="default-page-section-header">
              Sigurnost podataka na Edusifyu?
            </p>
            <span className="default-page-section-text">
              Vaše podatke u potpunosti štitimo i ne zlorabimo niti ih šaljemo
              bilo gdje. Oni ostaju samo za potrebe naše mrežne stranice. Možeš
              čitati više u Privatnosti i Pravilima.
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

export default FAQSection;
