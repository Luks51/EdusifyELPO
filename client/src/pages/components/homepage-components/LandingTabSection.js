import React from "react";

function LandingTabSection() {
  return (
    <section className="landing-tab-section">
      <div className="landing-tab-wrapper">
        <div className="blurred-box"></div>
        <div className="container">
          <div className="landing-tab-content-wrapper">
            <img
              className="landing-tab-img"
              src="img/online-learning-img.svg"
            />
            <div className="landing-tab-content-text">
              <h3 className="landing-tab-main-text">Jednostavnije učenje</h3>
              <ul className="landing-tab-secondary-text">
                <li>
                  Edusify omogućuje jednostavno učenje putem vizualnih elemenata
                  i rješavanja zadataka
                </li>
                <li>
                  Naš obrazovni materijal uključuje tisuće ilustracija koje
                  poboljšavaju iskustvo učenja i čine ga zabavnim
                </li>
                <li>
                  Spremamo vaš napredak kako biste se u bilo kojem trenutku
                  mogli vratiti i nastaviti tamo gdje ste stali
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingTabSection;
