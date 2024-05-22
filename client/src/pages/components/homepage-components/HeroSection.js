import React from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-wrapper">
          <div className="main-text-wrapper">
            <h1 className="main-text">
              Učenje nikad nije bilo lakše prije Edusifya
            </h1>
            <h3 className="secondary-text">
              Uđite u novu eru modernog obrazovanja
            </h3>
            <div className="nav-menu-login hero-main-btns">
              <a
                className="nav-link-registration start-now-btn"
                onClick={() => {
                  navigate("/signup");
                  window.scrollTo(0, 0);
                }}
              >
                <div>Započnite sada</div>
              </a>
              <a
                className="hero-more-about-us-btn"
                onClick={() => {
                  navigate("/about");
                  window.scrollTo(0, 0);
                }}
              >
                <div>Više o nama</div>
              </a>
            </div>
          </div>
          <img className="hero-main-img" src="img/hero-section-img.webp" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
