import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegistrationSection() {
  const [error, setError] = useState({
    status: false,
    message: "",
  });

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      errorMessage.name == "" &&
      errorMessage.surname == "" &&
      errorMessage.username == "" &&
      errorMessage.email == "" &&
      errorMessage.password == "" &&
      errorMessage.confirmPassword == "" &&
      !(values.name == "") &&
      !(values.surname == "") &&
      !(values.username == "") &&
      !(values.email == "") &&
      !(values.password == "") &&
      !(values.confirmPassword == "") &&
      values.password == values.confirmPassword
    ) {
      let data = e.target;
      let uapp = "";
      if (data.uapp.checked) {
        uapp = "1";
      }
      axios
        .post("http://localhost:3001/auth", {
          name: data.name.value,
          surname: data.surname.value,
          username: data.username.value,
          email: data.email.value,
          password: data.password.value,
          uapp: uapp,
        })
        .then((res) => {
          if (!res.data.error) {
            navigate("/login");
            window.scrollTo(0, 0);
          } else {
            setError({
              status: true,
              message: res.data.error,
            });
          }
        });
    }
  };

  const config = {
    name: {
      required: true,
      minlength: 1,
      maxlength: 30,
      firstcapitalletter: true,
      onlyletters: true,
    },
    surname: {
      required: true,
      minlength: 1,
      maxlength: 50,
      firstcapitalletter: true,
      onlyletters: true,
    },
    username: {
      required: true,
      username: true,
      minlength: 4,
      maxlength: 25,
    },
    email: {
      required: true,
      email: true,
      minlength: 5,
      maxlength: 50,
    },
    password: {
      required: true,
      password: true,
      minlengthpassword: 8,
      maxlengthpass: 25,
    },
    confirmPassword: {
      required: true,
      matching: "password",
    },
    uapp: {
      checkedfield: true,
    },
  };

  const [values, setValues] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    name: [],
    surname: [],
    username: [],
    email: [],
    password: [],
    confirmPassword: [],
  });

  const onChange = (e) => {
    setErrorMessage({ ...errorMessage, [e.target.name]: [] });
    let errors = [];
    setValues({ ...values, [e.target.name]: e.target.value });

    if (config[e.target.name].required) {
      if (e.target.value === "") {
        errors.push(<li key="1">Polje je prazno</li>);
      }
    }

    if (config[e.target.name].username) {
      if (!validateUsername(e.target.value)) {
        errors.push(<li key="2">Neispravno korisničko ime</li>);
      }
    }

    if (config[e.target.name].email) {
      if (!validateEmail(e.target.value)) {
        errors.push(<li key="3">Neispravna Email adresa</li>);
      }
    }

    if (
      e.target.value.length < config[e.target.name].minlength ||
      e.target.value.length > config[e.target.name].maxlength
    ) {
      errors.push(
        <li key="4">
          Polje mora sadržavati minimalno {config[e.target.name].minlength} i
          maksimalno {config[e.target.name].maxlength} znakova
        </li>
      );
    }

    if (config[e.target.name].matching) {
      let matchingEl = document.querySelector(
        `input[name="${config[e.target.name].matching}"]`
      );

      if (e.target.value !== matchingEl.value) {
        errors.push(<li key="5">Lozinke se ne podudaraju</li>);
      }
    }

    if (config[e.target.name].firstcapitalletter) {
      if (
        !(e.target.value.charAt(0) === e.target.value.charAt(0).toUpperCase())
      ) {
        errors.push(<li key="6">Neispravan unos</li>);
      }
    }

    if (config[e.target.name].onlyletters) {
      if (!validateLetters(e.target.value)) {
        errors.push(<li key="7">Polje mora sadržavati samo slova</li>);
      }
    }

    if (config[e.target.name].password) {
      if (
        e.target.value.length < config[e.target.name].minlengthpassword &&
        !(e.target.value.length == 0)
      ) {
        errors.push(
          <li key="8">
            Lozinka prekratka, mora sadržavati minimalno{" "}
            {config[e.target.name].minlengthpassword} znakova
          </li>
        );
      } else if (
        e.target.value.length > config[e.target.name].maxlengthpassword
      ) {
        errors.push(
          <li key="9">
            Lozinka preduga, mora sadržavati maksimalno{" "}
            {config[e.target.name].maxlengthpassword} znakova
          </li>
        );
      } else if (
        !validatePassword(e.target.value) &&
        !(e.target.value.length == 0)
      ) {
        errors.push(<li key="10">Neispravna lozinka</li>);
      } else if (
        !validateCapital(e.target.value) &&
        !validateNumber(e.target.value) &&
        !(e.target.value.length == 0)
      ) {
        errors.push(
          <li key="11">
            Lozinka preslaba, mora sadržavati minimalno jedno veliko slovo i
            jedan broj
          </li>
        );
      } else if (
        !validateCapital(e.target.value) &&
        !(e.target.value.length == 0)
      ) {
        errors.push(
          <li key="12">Lozinka mora sadržavati minimalno jedno veliko slovo</li>
        );
      } else if (
        !validateNumber(e.target.value) &&
        !(e.target.value.length == 0)
      ) {
        errors.push(
          <li key="13">Lozinka mora sadržavati minimalno jedan broj</li>
        );
      }
    }

    setErrorMessage({ ...errorMessage, [e.target.name]: errors });
  };

  const validateLetters = (field) => {
    if (/^[A-Za-z\s]*$/.test(field)) {
      return true;
    }

    return false;
  };

  const validateUsername = (username) => {
    if (/^[A-Za-z][A-Za-z0-9_]*$/.test(username)) {
      return true;
    }

    return false;
  };

  const validateEmail = (email) => {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return true;
    }

    return false;
  };

  const validateCapital = (password) => {
    if (/(?=.*?[A-Z]).*/.test(password)) {
      return true;
    }

    return false;
  };

  const validateNumber = (password) => {
    if (/\d/.test(password)) {
      return true;
    }

    return false;
  };

  const validatePassword = (password) => {
    if (/^[a-zA-Z0-9!@#$%^&*]+$/.test(password)) {
      return true;
    }

    return false;
  };

  const showPassword = () => {
    document.querySelector(".registration-form-content #password").type =
      "text";
    document.querySelector(
      ".registration-password-show-icon-wrapper"
    ).style.display = "none";
    document.querySelector(
      ".registration-password-hide-icon-wrapper"
    ).style.display = "block";
  };

  const hidePassword = () => {
    document.querySelector(".registration-form-content #password").type =
      "password";
    document.querySelector(
      ".registration-password-hide-icon-wrapper"
    ).style.display = "none";
    document.querySelector(
      ".registration-password-show-icon-wrapper"
    ).style.display = "block";
  };

  const showConfirmPassword = () => {
    document.querySelector(
      ".registration-form-content #confirm-password"
    ).type = "text";
    document.querySelector(
      ".registration-confirm-password-show-icon-wrapper"
    ).style.display = "none";
    document.querySelector(
      ".registration-confirm-password-hide-icon-wrapper"
    ).style.display = "block";
  };

  const hideConfirmPassword = () => {
    document.querySelector(
      ".registration-form-content #confirm-password"
    ).type = "password";
    document.querySelector(
      ".registration-confirm-password-hide-icon-wrapper"
    ).style.display = "none";
    document.querySelector(
      ".registration-confirm-password-show-icon-wrapper"
    ).style.display = "block";
  };

  return (
    <section className="registration-section">
      <div className="container">
        <div className="registration-wrapper">
          <div className="registration-form">
            <div className="registration-form-wrapper">
              <p className="registration-main-text">Registriraj se</p>
              <p className="registration-secondary-text">
                Unesite svoje podatke kako biste se registrirali na Edusify
              </p>
              <form
                className="registration-form-content"
                onSubmit={onSubmit}
                method="post"
              >
                <div className="registration-full-name-fields">
                  <div>
                    <label>Ime *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John"
                      onChange={onChange}
                    />
                    <ul className="form-validation">{errorMessage.name}</ul>
                  </div>
                  <div>
                    <label>Prezime *</label>
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      placeholder="Doe"
                      onChange={onChange}
                    />
                    <ul className="form-validation">{errorMessage.surname}</ul>
                  </div>
                </div>
                <div className="registration-username-field">
                  <label>Korisničko ime *</label>
                  <input
                    type="username"
                    id="username"
                    name="username"
                    placeholder="Korisničko ime"
                    onChange={onChange}
                  />
                  <ul className="form-validation">{errorMessage.username}</ul>
                </div>
                <div className="registration-email-field">
                  <label>E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    onChange={onChange}
                  />
                  <ul className="form-validation">{errorMessage.email}</ul>
                </div>
                <div className="registration-password-fields">
                  <div>
                    <label>Lozinka *</label>
                    <div className="registration-password-wrapper">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="********"
                        onChange={onChange}
                      />
                      <a
                        className="registration-password-show-icon-wrapper"
                        onClick={showPassword}
                      >
                        <img src="img/show.png" />
                      </a>
                      <a
                        className="registration-password-hide-icon-wrapper"
                        onClick={hidePassword}
                      >
                        <img src="img/hide.png" />
                      </a>
                    </div>
                    <ul className="form-validation">{errorMessage.password}</ul>
                  </div>
                  <div>
                    <label>Potvrdi lozinku *</label>
                    <div className="registration-confirm-password-wrapper">
                      <input
                        type="password"
                        id="confirm-password"
                        name="confirmPassword"
                        placeholder="********"
                        onChange={onChange}
                      />
                      <a
                        className="registration-confirm-password-show-icon-wrapper"
                        onClick={showConfirmPassword}
                      >
                        <img src="img/show.png" />
                      </a>
                      <a
                        className="registration-confirm-password-hide-icon-wrapper"
                        onClick={hideConfirmPassword}
                      >
                        <img src="img/hide.png" />
                      </a>
                    </div>
                    <ul className="form-validation">
                      {errorMessage.confirmPassword}
                    </ul>
                  </div>
                </div>
                <div className="checkmark">
                  <input type="checkbox" id="uapp" name="uapp" />
                  <label className="ua-pp-text" htmlFor="uapp">
                    Prihvaćam Edusifyove{" "}
                    <a
                      className="ua-pp-highlighted-text"
                      onClick={() => {
                        navigate("/privacy-policy");
                        window.scrollTo(0, 0);
                      }}
                    >
                      {" "}
                      Uvjete korištenja
                    </a>{" "}
                    i{" "}
                    <a
                      className="ua-pp-highlighted-text"
                      onClick={() => {
                        navigate("/privacy-policy");
                        window.scrollTo(0, 0);
                      }}
                    >
                      Pravila privatnosti
                    </a>
                    .
                  </label>
                </div>
                <input
                  id="registration-submit"
                  type="submit"
                  value="Registriraj se"
                />
                {error.status && (
                  <span className="form-validation-submit">
                    {error.message}
                  </span>
                )}
              </form>
              <div className="registration-line">
                <hr className="registration-hr-line" />
                <p className="registration-text-or">or</p>
                <hr className="registration-hr-line" />
              </div>
              <div className="google-registration">
                <div className="g-signin2" data-onsuccess="onSignIn"></div>
              </div>
              <div className="registration-sign-up">
                <a
                  className="registration-sign-up-btn"
                  onClick={() => {
                    navigate("/login");
                    window.scrollTo(0, 0);
                  }}
                >
                  Već posjedujete račun?&ensp;
                  <span className="registration-sign-up-btn-color">
                    Prijavi se
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

export default RegistrationSection;
