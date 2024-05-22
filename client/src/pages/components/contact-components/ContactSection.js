import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ContactSection() {
  const { auth, setAuth } = useContext(AuthContext);
  const [error, setError] = useState({
    status: false,
    message: "",
  });

  const [success, setSuccess] = useState({
    status: false,
    message: "",
  });

  const navigate = useNavigate();

  const saveChanges = () => {
    if (
      errorMessage.name == "" &&
      errorMessage.surname == "" &&
      errorMessage.email == "" &&
      errorMessage.textarea == "" &&
      !(values.name == "") &&
      !(values.surname == "") &&
      !(values.email == "") &&
      !(values.textarea == "")
    ) {
      const data = {
        name: values.name,
        surname: values.surname,
        email: values.email,
        textarea: values.textarea,
      };
      axios
        .post("http://localhost:3001/auth/user", data, {
          withCredentials: true,
        })
        .then((res) => {
          if (!res.data.error) {
            setError({ status: false });
            setSuccess({
              status: true,
              message: res.data.success,
            });
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
    email: {
      required: true,
      email: true,
      minlength: 5,
      maxlength: 50,
    },
    textarea: {
      required: true,
      minlength: 5,
      maxlength: 500,
    },
  };

  const [values, setValues] = useState({
    name: auth.name,
    surname: auth.surname,
    email: auth.email,
    textarea: auth.textarea,
  });

  const [errorMessage, setErrorMessage] = useState({
    name: [],
    surname: [],
    email: [],
    textarea: [],
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
          Polje mora imati minimalno {config[e.target.name].minlength} i
          maksimalno {config[e.target.name].maxlength} znakova
        </li>
      );
    }

    if (config[e.target.name].firstcapitalletter) {
      if (
        !(e.target.value.charAt(0) === e.target.value.charAt(0).toUpperCase())
      ) {
        errors.push(<li key="6">Ne ispravan unos</li>);
      }
    }

    if (config[e.target.name].onlyletters) {
      if (!validateLetters(e.target.value)) {
        errors.push(<li key="7">Polje mora sadržavati samo slova</li>);
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

  const validateEmail = (email) => {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return true;
    }

    return false;
  };

  return (
    <>
      <section className="lets-talk-section">
        <div className="container">
          <div className="lets-talk-content">
            <div className="lets-talk-text">
              <h3 className="lets-talk-main-text">Razgovarajmo</h3>
              <p className="lets-talk-secondary-text">
                Naš tim vam stoji na raspolaganju za sva vaša pitanja. Bit ćemo
                više nego sretni pomoći.
              </p>
            </div>
            <img className="lets-talk-img" src="../img/lets-talk-img.svg" />
          </div>
        </div>
      </section>
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-wrapper">
            <div className="contact-form-text">
              <h5 className="contact-form-main-text">Razgovaraj s nama</h5>
              <p className="contact-form-secondary-text">
                Ispunite svoje podatke i pitanje, a mi ćemo pokušati odgovoriti
                ti što je prije moguće.
              </p>
            </div>
            <div className="contact-form-inputs-wrapper">
              <div className="contact-form-inputs">
                <input
                  type="name"
                  id="name"
                  name="name"
                  placeholder="Ime"
                  onChange={onChange}
                />
                <ul className="form-validation">{errorMessage.name}</ul>
                <input
                  type="surname"
                  id="surname"
                  name="surname"
                  placeholder="Prezime"
                  onChange={onChange}
                />
                <ul className="form-validation">{errorMessage.surname}</ul>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={onChange}
                />
                <ul className="form-validation">{errorMessage.email}</ul>
                <textarea
                  id="textarea"
                  name="textarea"
                  placeholder="O čemu biste voljeli razgovarati..."
                  onChange={onChange}
                />
                <ul className="form-validation">{errorMessage.textarea}</ul>
                {error.status && (
                  <span className="form-validation-submit">
                    {error.message}
                  </span>
                )}
                <a className="contact-us-submit" onClick={saveChanges}>
                  Pošalji
                </a>
                {success.status && (
                  <span className="form-validation-success">
                    {success.message}
                  </span>
                )}
              </div>
              <img className="contact-us-img" src="../img/contact-us-img.svg" />
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
                  href="mailto: edusify.contact@gmail.com"
                >
                  <img src="../img/email.png" />
                  <p className="address-social-media-single-text-email">
                    edusify.contact@gmail.com
                  </p>
                </a>
              </div>
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
                  Započnite
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
