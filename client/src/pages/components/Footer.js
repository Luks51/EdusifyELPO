import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../img/edusify-logo.png";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-padding-global">
        <div className="container">
          <div className="footer-content">
            <a
              className="footer-content-logo"
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
            >
              <img className="footer-logo" src={logo} />
            </a>
            <div className="footer-content-edusify">
              <p className="footer-content-heading">Edusify</p>
              <a
                className="footer-content-link"
                onClick={() => {
                  navigate("/about");
                  window.scrollTo(0, 0);
                }}
              >
                Zašto Edusify?
              </a>
              <a
                className="footer-content-link"
                onClick={() => {
                  navigate("/features");
                  window.scrollTo(0, 0);
                }}
              >
                Funkcije
              </a>
            </div>
            <div className="footer-content-explore">
              <p className="footer-content-heading">Istraži</p>
              <a
                className="footer-content-link"
                onClick={() => {
                  navigate("/learn");
                  window.scrollTo(0, 0);
                }}
              >
                Učenje
              </a>
              <a
                className="footer-content-link"
                onClick={() => {
                  navigate("/faq");
                  window.scrollTo(0, 0);
                }}
              >
                FAQ's
              </a>
            </div>
            <div className="footer-content-company">
              <p className="footer-content-heading">Poduzeće</p>
              <a
                className="footer-content-link"
                onClick={() => {
                  navigate("/about");
                  window.scrollTo(0, 0);
                }}
              >
                O nama
              </a>
              <a
                className="footer-content-link"
                onClick={() => {
                  navigate("/contact");
                  window.scrollTo(0, 0);
                }}
              >
                Kontaktiraj nas
              </a>
            </div>
            <div className="footer-content-social-media">
              <p className="footer-content-heading">Društvene mreže</p>
              <a
                className="footer-social-media-icon"
                href="https://www.instagram.com/edusify/"
                target="_blank"
              >
                <img src="../img/instagram.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="copyright-wrapper">
            <div className="privacy-policy-terms-and-conditions">
              <a
                className="privacy-policy"
                onClick={() => {
                  navigate("/privacy-policy");
                  window.scrollTo(0, 0);
                }}
              >
                Pravila privatnosti
              </a>
              <a
                className="terms-and-conditions"
                onClick={() => {
                  navigate("/privacy-policy");
                  window.scrollTo(0, 0);
                }}
              >
                Uvjeti i odredbe
              </a>
            </div>
            <p className="copyright-text">Sva prava pridržava Edusify © 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
