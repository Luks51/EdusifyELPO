import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function LoginSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({
    status: false,
    message: "",
  });

  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = { email: email, password: password };
    axios
      .post("http://localhost:3001/auth/login", data, { withCredentials: true })
      .then((res) => {
        if (!res.data.error) {
          setAuth({
            id: res.data.id,
            name: res.data.name,
            surname: res.data.surname,
            username: res.data.username,
            email: res.data.email,
            status: true,
          });
          navigate("/learn");
        } else {
          setError({
            status: true,
            message: res.data.error,
          });
        }
      });
  };

  return (
    <section className="login-section">
      <div className="container">
        <div className="login-wrapper">
          <div className="login-content">
            <div className="login-content-wrapper">
              <p className="login-main-text">
                ⏵Digitalna platforma za{" "}
                <span className="login-form-highlighted-word">učenje</span> na
                daljinu.
              </p>
              <p className="login-main-secondary-text">
                Započnite učiti tamo gdje ste stali
              </p>
              <img className="login-form-img" src="img/login-form-img.svg" />
            </div>
          </div>
          <div className="login-form">
            <div className="login-form-wrapper">
              <p className="login-welcome-back-text">Dobrodošao natrag!</p>
              <p className="login-secondary-text">Započni učiti ponovno</p>
              <form
                className="login-form-content"
                onSubmit={onSubmit}
                method="post"
              >
                <div className="login-email-wrapper">
                  <div className="login-email-icon-wrapper">
                    <img
                      className="login-form-email-icon"
                      src="img/email-icon.png"
                    />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
                <div className="login-password-wrapper">
                  <div className="login-password-icon-wrapper">
                    <img
                      className="login-form-password-icon"
                      src="img/password-icon.png"
                    />
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Najmanje 8 znakova"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>
                <a
                  className="forgot-password"
                  onClick={() => {
                    navigate("/forgot-password");
                    window.scrollTo(0, 0);
                  }}
                >
                  Zaboravljena lozinka?
                </a>
                <input id="login-submit" type="submit" value="Prijavi se" />
                {error.status && (
                  <span className="form-validation-submit">
                    {error.message}
                  </span>
                )}
              </form>
              <div className="login-line">
                <hr className="login-hr-line" />
                <p className="login-text-or">or</p>
                <hr className="login-hr-line" />
              </div>
              <div className="google-login">
                <div className="g-signin2" data-onsuccess="onSignIn"></div>
              </div>
              <div className="login-sign-up">
                <a
                  className="login-sign-up-btn"
                  onClick={() => {
                    navigate("/signup");
                    window.scrollTo(0, 0);
                  }}
                >
                  Ne posjedujete račun?&ensp;
                  <span className="login-sign-up-btn-color">
                    Registriraj se
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginSection;
