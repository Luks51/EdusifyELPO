import React from "react";
import { useNavigate } from "react-router-dom";

function StartNowSection() {
  const navigate = useNavigate();
  return (
    <section className="start-now-section">
      <div className="start-now-wrapper">
        <div className="start-now-blurred-box"></div>
        <div className="container">
          <div className="start-now-content-wrapper">
            <h3 className="start-now-main-text">Otvorite vrata vašem znanju</h3>
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
  );
}

export default StartNowSection;
