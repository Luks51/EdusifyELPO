import React, { useState } from "react";
import ProfileAccount from "./ProfileAccount";
import ChangePassword from "./ChangePassword";
import MyProjects from "./MyProjects";

function NavProfile() {
  const [link, setLink] = useState(1);

  const SeeProjects = () => {
    setLink(1);
  };

  const ChangeProfile = () => {
    setLink(2);
  };

  const ChangePasswordLink = () => {
    setLink(3);
  };

  return (
    <>
      <section className="nav-profile">
        <div className="container">
          <div className="nav-profile-wrapper">
            <h5 className="nav-profile-main-text">Račun</h5>
            <p className="nav-profile-secondary-text">
              Podesite postavke računa dolje niže
            </p>
            <div className="nav-profile-links-wrapper">
              {link == 1 ? (
                <a className="nav-profile-link-selected">Moji materijali</a>
              ) : (
                <a className="nav-profile-link" onClick={SeeProjects}>
                  Moji materijali
                </a>
              )}
              {link == 2 ? (
                <a className="nav-profile-link-selected">Profil</a>
              ) : (
                <a className="nav-profile-link" onClick={ChangeProfile}>
                  Profil
                </a>
              )}
              {link == 3 ? (
                <a className="nav-profile-link-selected">Lozinka</a>
              ) : (
                <a className="nav-profile-link" onClick={ChangePasswordLink}>
                  Lozinka
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
      {link == 1 && <MyProjects />}
      {link == 2 && <ProfileAccount />}
      {link == 3 && <ChangePassword />}
    </>
  );
}

export default NavProfile;
