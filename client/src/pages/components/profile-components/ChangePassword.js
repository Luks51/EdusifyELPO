import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";

function ChangePassword() {
  const { auth, setAuth } = useContext(AuthContext);
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  const [success, setSuccess] = useState({
    status: false,
    message: "",
  });

  const saveChanges = () => {
    if (
      errorMessage.password == "" &&
      errorMessage.confirmPassword == "" &&
      !(values.oldPassword == "") &&
      !(values.password == "") &&
      !(values.confirmPassword == "")
    ) {
      const data = {
        oldPassword: values.oldPassword,
        password: values.password,
      };
      axios
        .put("http://localhost:3001/auth/changepassword", data, {
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
            setSuccess({ status: false });
            setError({
              status: true,
              message: res.data.error,
            });
          }
        });
    }
  };

  const [values, setValues] = useState({
    oldPassword: "",
    password: "",
    confirmPassword: "",
  });

  const config = {
    oldPassword: {
      required: true,
      password: true,
      minlengthpassword: 8,
      maxlengthpass: 25,
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
  };

  const [errorMessage, setErrorMessage] = useState({
    oldPassword: [],
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

  const showOldPassword = () => {
    document.querySelector(".change-password-wrapper #oldPassword").type =
      "text";
    document.querySelector(
      ".change-old-password-show-icon-wrapper"
    ).style.display = "none";
    document.querySelector(
      ".change-old-password-hide-icon-wrapper"
    ).style.display = "block";
  };

  const hideOldPassword = () => {
    document.querySelector(".change-password-wrapper #oldPassword").type =
      "password";
    document.querySelector(
      ".change-old-password-hide-icon-wrapper"
    ).style.display = "none";
    document.querySelector(
      ".change-old-password-show-icon-wrapper"
    ).style.display = "block";
  };

  const showNewPassword = () => {
    document.querySelector(".change-password-wrapper #password").type = "text";
    document.querySelector(".change-password-show-icon-wrapper").style.display =
      "none";
    document.querySelector(".change-password-hide-icon-wrapper").style.display =
      "block";
  };

  const hideNewPassword = () => {
    document.querySelector(".change-password-wrapper #password").type =
      "password";
    document.querySelector(".change-password-hide-icon-wrapper").style.display =
      "none";
    document.querySelector(".change-password-show-icon-wrapper").style.display =
      "block";
  };

  const showNewConfirmPassword = () => {
    document.querySelector(".change-password-wrapper #confirmPassword").type =
      "text";
    document.querySelector(
      ".change-confirm-password-show-icon-wrapper"
    ).style.display = "none";
    document.querySelector(
      ".change-confirm-password-hide-icon-wrapper"
    ).style.display = "block";
  };

  const hideNewConfirmPassword = () => {
    document.querySelector(".change-password-wrapper #confirmPassword").type =
      "password";
    document.querySelector(
      ".change-confirm-password-hide-icon-wrapper"
    ).style.display = "none";
    document.querySelector(
      ".change-confirm-password-show-icon-wrapper"
    ).style.display = "block";
  };

  return (
    <section className="profile-account-section">
      <div className="container">
        <div className="profile-data-wrapper">
          <div className="profile-data-wrapper-content">
            <div className="profile-data-wrapper-single-item">
              <div className="profile-data-inputs">
                <p className="profile-data-wrapper-single-item-text-label">
                  Stara lozinka
                </p>
                <div className="change-password-wrapper">
                  <input
                    type="password"
                    id="oldPassword"
                    name="oldPassword"
                    onChange={onChange}
                  />
                  <a
                    className="change-old-password-show-icon-wrapper"
                    onClick={showOldPassword}
                  >
                    <img src="img/show.png" />
                  </a>
                  <a
                    className="change-old-password-hide-icon-wrapper"
                    onClick={hideOldPassword}
                  >
                    <img src="img/hide.png" />
                  </a>
                </div>
              </div>
            </div>
            <div className="profile-data-wrapper-single-item">
              <div className="profile-data-inputs">
                <p className="profile-data-wrapper-single-item-text-label">
                  Nova lozinka
                </p>

                <div className="change-password-wrapper">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={onChange}
                  />
                  <a
                    className="change-password-show-icon-wrapper"
                    onClick={showNewPassword}
                  >
                    <img src="img/show.png" />
                  </a>
                  <a
                    className="change-password-hide-icon-wrapper"
                    onClick={hideNewPassword}
                  >
                    <img src="img/hide.png" />
                  </a>
                </div>
                <ul className="form-validation">{errorMessage.password}</ul>
              </div>
            </div>
            <div className="profile-data-wrapper-single-item">
              <div className="profile-data-inputs">
                <p className="profile-data-wrapper-single-item-text-label">
                  Potvrdi novu lozinku
                </p>
                <div className="change-password-wrapper">
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={onChange}
                  />
                  <a
                    className="change-confirm-password-show-icon-wrapper"
                    onClick={showNewConfirmPassword}
                  >
                    <img src="img/show.png" />
                  </a>
                  <a
                    className="change-confirm-password-hide-icon-wrapper"
                    onClick={hideNewConfirmPassword}
                  >
                    <img src="img/hide.png" />
                  </a>
                </div>
                <ul className="form-validation">
                  {errorMessage.confirmPassword}
                </ul>
              </div>
            </div>
            {error.status && (
              <span className="form-validation-submit">{error.message}</span>
            )}
            <a className="profile-data-make-changes-btn" onClick={saveChanges}>
              Promijeni lozinku
            </a>
            {success.status && (
              <span className="form-validation-success">{success.message}</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChangePassword;
