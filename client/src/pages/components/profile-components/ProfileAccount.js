import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";

function ProfileAccount() {
  const { auth, setAuth } = useContext(AuthContext);
  const [updateProfile, setUpdateProfile] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  const [success, setSuccess] = useState({
    status: false,
    message: "",
  });

  const makeChanges = () => {
    setUpdateProfile(true);
  };

  const saveChanges = () => {
    if (
      errorMessage.name == "" &&
      errorMessage.surname == "" &&
      errorMessage.username == "" &&
      errorMessage.email == "" &&
      !(values.name == "") &&
      !(values.surname == "") &&
      !(values.username == "") &&
      !(values.email == "")
    ) {
      const data = {
        name: values.name,
        surname: values.surname,
        username: values.username,
        email: values.email,
        id: auth.id,
      };
      axios
        .put("http://localhost:3001/auth/user", data, { withCredentials: true })
        .then((res) => {
          if (!res.data.error) {
            setAuth({
              id: auth.id,
              name: values.name,
              surname: values.surname,
              username: values.username,
              email: values.email,
              status: true,
            });
            setUpdateProfile(false);
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
  };

  const [values, setValues] = useState({
    name: auth.name,
    surname: auth.surname,
    username: auth.username,
    email: auth.email,
  });

  const [errorMessage, setErrorMessage] = useState({
    name: [],
    surname: [],
    username: [],
    email: [],
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

  return (
    <section className="profile-account-section">
      <div className="container">
        <div className="profile-data-wrapper">
          <div className="profile-data-wrapper-content">
            <div className="profile-data-wrapper-single-item">
              <p className="profile-data-wrapper-single-item-text-label">Ime</p>
              {!updateProfile ? (
                <p className="profile-data-wrapper-single-item-text">
                  {auth.name}
                </p>
              ) : (
                <div className="profile-data-inputs">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={auth.name}
                    onChange={onChange}
                  />
                  <ul className="form-validation">{errorMessage.name}</ul>
                </div>
              )}
            </div>
            <div className="profile-data-wrapper-single-item">
              <p className="profile-data-wrapper-single-item-text-label">
                Prezime
              </p>

              {!updateProfile ? (
                <p className="profile-data-wrapper-single-item-text">
                  {auth.surname}
                </p>
              ) : (
                <div className="profile-data-inputs">
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    defaultValue={auth.surname}
                    onChange={onChange}
                  />
                  <ul className="form-validation">{errorMessage.surname}</ul>
                </div>
              )}
            </div>
            <div className="profile-data-wrapper-single-item">
              <p className="profile-data-wrapper-single-item-text-label">
                Korisničko ime
              </p>
              {!updateProfile ? (
                <p className="profile-data-wrapper-single-item-text">
                  {auth.username}
                </p>
              ) : (
                <div className="profile-data-inputs">
                  <input
                    type="username"
                    id="username"
                    name="username"
                    defaultValue={auth.username}
                    onChange={onChange}
                  />
                  <ul className="form-validation">{errorMessage.username}</ul>
                </div>
              )}
            </div>
            <div className="profile-data-wrapper-single-item">
              <p className="profile-data-wrapper-single-item-text-label">
                Email
              </p>
              {!updateProfile ? (
                <p className="profile-data-wrapper-single-item-text">
                  {auth.email}
                </p>
              ) : (
                <div className="profile-data-inputs">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={auth.email}
                    onChange={onChange}
                  />
                  <ul className="form-validation">{errorMessage.email}</ul>
                </div>
              )}
            </div>
            {error.status && (
              <span className="form-validation-submit">{error.message}</span>
            )}
            {!updateProfile ? (
              <a
                className="profile-data-make-changes-btn"
                onClick={makeChanges}
              >
                Napravi promjene
              </a>
            ) : (
              <a
                className="profile-data-make-changes-btn"
                onClick={saveChanges}
              >
                Spremi promjene
              </a>
            )}
            {success.status && (
              <span className="form-validation-success">{success.message}</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileAccount;
