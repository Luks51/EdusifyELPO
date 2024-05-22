import React from "react";
import { useNavigate } from "react-router-dom";

function WhoWeAreSection() {
  const navigate = useNavigate();
  return (
    <section className="who-we-are-section">
      <div className="container">
        <div className="who-we-are-wrapper">
          <div className="who-we-are-text">
            <div className="who-we-are-main-text-wrapper">
              <h3 className="who-we-are-main-text">Zaborav predrasuda</h3>
            </div>
            <div className="who-we-are-secondary-text-wrapper">
              <p className="who-we-are-secondary-text">
                Vidimo se kao puno više od običnog studija, kao obitelj
                istomišljenika, ljubaznih i talentiranih ljudi koji vole
                surađivati i zajedno stvarati sjajne stvari.
              </p>
            </div>
            <div className="who-we-are-btn-team">
              <a
                className="who-we-are-btn"
                onClick={() => {
                  navigate("/about");
                  window.scrollTo(0, 0);
                }}
              >
                Tim
              </a>
            </div>
          </div>
          <div className="who-we-are-numbers-content-wrapper">
            <div className="who-we-are-numbers">
              <div className="who-we-are-numbers-wrapper">
                <div className="who-we-are-numbers-content">
                  <p className="who-we-are-numbers-content-bigger-text">4</p>
                  <p className="who-we-are-numbers-content-smaller-text">
                    Osnivači - studenti informatike
                  </p>
                </div>
              </div>
              <div className="who-we-are-numbers-wrapper">
                <div className="who-we-are-numbers-content">
                  <p className="who-we-are-numbers-content-bigger-text">1</p>
                  <p className="who-we-are-numbers-content-smaller-text">
                    Zemlje
                  </p>
                </div>
              </div>
            </div>
            <div className="who-we-are-numbers">
              <div className="who-we-are-numbers-wrapper">
                <div className="who-we-are-numbers-content">
                  <p className="who-we-are-numbers-content-bigger-text">2024</p>
                  <p className="who-we-are-numbers-content-smaller-text">
                    Osnovani
                  </p>
                </div>
              </div>
              <div className="who-we-are-numbers-wrapper">
                <div className="who-we-are-numbers-content">
                  <p className="who-we-are-numbers-content-bigger-text">5</p>
                  <p className="who-we-are-numbers-content-smaller-text">
                    Industrije
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreSection;
