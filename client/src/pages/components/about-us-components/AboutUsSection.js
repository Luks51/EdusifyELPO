import React from "react";
import { useNavigate } from "react-router-dom";

function AboutUsSection() {
  const navigate = useNavigate();
  return (
    <>
      <section className="our-story-section">
        <div className="container">
          <div className="our-mission">
            <h3 className="our-mission-main-text">Naša misija</h3>
            <p className="our-story-main-secondary-text">
              Naš cilj je stvoriti jednostavnije učenje i omogućiti obrazovanje
              ljudima diljem svijeta. Pridružite nam se i pomozite nam u ovom
              cilju.
            </p>
          </div>
          <div className="our-story">
            <div className="our-story-text-line-wrapper">
              <p className="our-story-main-text">Naša priča</p>
              <div className="white-line-about-us"></div>
            </div>
            <p className="our-story-secondary-text">
              Dobrodošli na našu mrežnu stranicu, gdje vjerujemo da je
              obrazovanje temeljno pravo koje bi trebalo biti dostupno svima,
              bez obzira na njihovu pozadinu ili financijsku situaciju. Naša
              priča počinje jednostavnom idejom: stvoriti platformu koja pruža
              prilike za učenje bilo kome u svijetu, bez obzira gdje jesu ili
              što žele naučiti.
            </p>
            <div className="our-story-secondary-text-break" />
            <p className="our-story-secondary-text">
              Počeli smo s malim, s nekoliko tečajeva i šačicom volontera koji
              su bili strastveni u stvaranju razlike. Ali kako se glas širio i
              pridružilo nam se više ljudi, shvatili smo da imamo potencijal
              stvoriti nešto uistinu posebno. Danas to s ponosom možemo reći
              izrastamo u globalnu zajednicu učenika, edukatora, i pristaše koji
              će dijeliti našu viziju svijeta u kojem obrazovanje je uistinu
              univerzalno. Materijali za učenje pokrivaju širok raspon tema, od
              osnovne pismenosti i računanja do naprednih vještina poput
              kodiranja, znanosti o podacima i poduzetništva.
            </p>
            <div className="our-story-secondary-text-break" />
            <p className="our-story-secondary-text">
              Ali naša je mrežna stranica više od pukog mjesta za učenje. To je
              zajednica učenika, gdje se možete povezati s drugima koji dijele
              svoje interese i strasti te gdje možete pronaći podršku i
              ohrabrenje koje vam je potrebno da postignete svoje ciljeve.
              Vjerujemo u to obrazovanje nije samo stjecanje znanja, već i
              izgradnju odnosa, razvoj vještina i otkrivanje novog mogućnosti.
              Dakle, bez obzira jeste li student koji želi proširiti svoj
              znanje, stručnjak koji želi napredovati u karijeri ili jednostavno
              netko tko voli učiti, pozivamo vas da nam se pridružite zajednicu
              i započnite svoje putovanje učenjem danas. Uz našu mrežnu
              stranicu, mogućnosti su beskrajne, a svijet je na vama da
              istražite.
            </p>
          </div>
        </div>
      </section>
      <section className="our-founder-section">
        <div className="container">
          <div className="our-founder-content">
            <h5 className="our-founder-main-text">Naši osnivači</h5>
            <div className="our-founder-wrapper">
              <img className="ceo-picture" src="./img/david-copak.png" />
              <div className="our-founder-content-wrapper">
                <p className="our-founder-name">David Copak</p>
                <p className="our-founder-title">COO</p>
                <div className="our-founder-social-media-icons-wrapper">
                  <a
                    className="our-founder-social-media-icon"
                    href="https://www.instagram.com/david_copak07/"
                    target="_blank"
                  >
                    <img
                      className="our-founder-social-media-single-icon"
                      src="../img/instagram.png"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="our-founder-wrapper">
              <img className="ceo-picture" src="./img/lana-luketic.png" />
              <div className="our-founder-content-wrapper">
                <p className="our-founder-name">Lana Luketić</p>
                <p className="our-founder-title">CCO</p>
                <div className="our-founder-social-media-icons-wrapper">
                  <a
                    className="our-founder-social-media-icon"
                    href="https://www.instagram.com/lana._7/"
                    target="_blank"
                  >
                    <img
                      className="our-founder-social-media-single-icon"
                      src="../img/instagram.png"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="our-founder-wrapper">
              <img className="ceo-picture" src="./img/mihael-smrcek.png" />
              <div className="our-founder-content-wrapper">
                <p className="our-founder-name">Mihael Smrček</p>
                <p className="our-founder-title">CTO</p>
                <div className="our-founder-social-media-icons-wrapper">
                  <a
                    className="our-founder-social-media-icon"
                    href="https://www.instagram.com/mihaelsmrcek/"
                    target="_blank"
                  >
                    <img
                      className="our-founder-social-media-single-icon"
                      src="../img/instagram.png"
                    />
                  </a>
                  <a
                    className="our-founder-social-media-icon"
                    href="https://www.linkedin.com/in/msmrcek/"
                    target="_blank"
                  >
                    <img
                      className="our-founder-social-media-single-icon"
                      src="../img/linkedin.png"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="our-founder-wrapper">
              <img className="ceo-picture" src="./img/ceo-picture.png" />
              <div className="our-founder-content-wrapper">
                <p className="our-founder-name">Luka Vuković</p>
                <p className="our-founder-title">CEO</p>
                <div className="our-founder-social-media-icons-wrapper">
                  <a
                    className="our-founder-social-media-icon"
                    href="https://www.instagram.com/lukavukovic93/"
                    target="_blank"
                  >
                    <img
                      className="our-founder-social-media-single-icon"
                      src="../img/instagram.png"
                    />
                  </a>
                  <a
                    className="our-founder-social-media-icon"
                    href="https://www.linkedin.com/in/luka-vukovi%C4%87-698803210/"
                    target="_blank"
                  >
                    <img
                      className="our-founder-social-media-single-icon"
                      src="../img/linkedin.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="address-section">
        <div className="container">
          <div className="address-wrapper">
            <div className="address-content">
              <p className="address-name-main-text">Edusify</p>
              <p className="address-info">Zagreb 10000</p>
              <p className="address-country">Hrvatska</p>
              <div className="address-social-media-wrapper">
                <a
                  className="address-social-media"
                  href="https://www.instagram.com/edusify/"
                  target="_blank"
                >
                  <img src="../img/instagram.png" />
                  <p className="address-social-media-single-text">Instagram</p>
                </a>
              </div>
              <div className="address-go-to-contact-wrapper">
                <a
                  className="address-go-to-contact"
                  onClick={() => {
                    navigate("/contact");
                    window.scrollTo(0, 0);
                  }}
                >
                  <p className="address-go-to-contact-text">
                    Budi u kontaktu s nama
                  </p>
                  <div className="address-go-to-contact-btn">
                    <img src="../img/right-arrow.png" />
                  </div>
                </a>
              </div>
            </div>
            <img className="about-us-img" src="../img/about-us-img.svg" />
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
                  Započni
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUsSection;
