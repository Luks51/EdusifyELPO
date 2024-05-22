import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ForgotPasswordSection() {
  const [error, setError] = useState({
    status: false,
    message: "",
  });

  const [success, setSuccess] = useState({
    status: false,
    message: "",
  });

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!(emailValue == "")) {
      axios
        .post("http://localhost:3001/auth/forgot-password", {
          email: emailValue,
        })
        .then((res) => {
          if (!res.data.error) {
            setError({ status: false });
            setSuccess({
              status: true,
              message: res.data.success,
            });
          } else {
            setSuccess({ status: false });
            setError({
              status: true,
              message: res.data.error,
            });
          }
        });
    }
  };

  const [emailValue, setEmailValue] = useState("");

  const onChange = (e) => {
    setEmailValue(e.target.value);
  };

  return (
    <div>
      <section className="forgot-password-section">
        <div className="container">
          <form
            className="forgot-password-form-content"
            onSubmit={onSubmit}
            method="post"
          >
            <p className="forgot-password-main-text">Zaboravljena lozinka</p>
            <div className="forgot-password-content-fields">
              <label>E-mail *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                onChange={onChange}
              />
              <input
                id="forgot-password-submit"
                type="submit"
                value="Pošalji"
              />
              <div className="registration-sign-up">
                <a
                  className="forgot-password-login-btn"
                  onClick={() => {
                    navigate("/login");
                    window.scrollTo(0, 0);
                  }}
                >
                  Vrati se na prijavu?&ensp;
                  <span className="forgot-password-login-btn-color">
                    Prijavi se
                  </span>
                </a>
              </div>
              {error.status && (
                <span className="form-validation-submit">{error.message}</span>
              )}
              {success.status && (
                <span className="form-validation-success">
                  {success.message}
                </span>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ForgotPasswordSection;
