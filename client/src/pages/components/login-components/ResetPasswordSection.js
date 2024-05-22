import React, { useState } from 'react'
import { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import axios from 'axios'

import show from '../../img/show.png'
import hide from '../../img/hide.png'

function ResetPasswordSection() {
    let { id, accessToken } = useParams()
    const { auth, setAuth } = useContext(AuthContext)
    const [error, setError] = useState({
      status: false,
      message: ""
    })

    const [success, setSuccess] = useState({
        status: false,
        message: ""
    })

    const navigate = useNavigate()
  
    const saveChanges = () => {
      if (errorMessage.password == "" &&
          errorMessage.confirmPassword == "" &&
          !(values.password == "") &&
          !(values.confirmPassword  == "")) {
              const data = { password: values.password }
              axios.put(`http://localhost:3001/auth/reset-password/${id}/${accessToken}`, data, { withCredentials:true }).then((res) => {
                  if (!res.data.error) {
                    setError({ status: false })
                    setSuccess({
                        status: true,
                        message: res.data.success
                    })
                    navigate("/login")
                    window.scrollTo(0, 0) 
                  } else {
                        setSuccess({ status: false })
                        setError({
                            status: true,
                            message: res.data.error
                        })
                    }
              })
      }
    }

    const [values, setValues] = useState({
        password: "",
        confirmPassword: ""
    })
  
    const config = {
        'password': {
            required: true,
            password: true,
            minlengthpassword: 8,
            maxlengthpass: 25,
        },
        'confirmPassword': {
            required: true,
            matching: 'password'
        }
  };
  
  const [errorMessage, setErrorMessage] = useState({
      password: [],
      confirmPassword: []
  })
  
  const onChange = (e) => {
      setErrorMessage({ ...errorMessage, [e.target.name]: []})
      let errors = []
      setValues({ ...values, [e.target.name]: e.target.value })
  
      if(config[e.target.name].required) {
          if(e.target.value === "") {
              errors.push(<li key="1">Field is empty</li>)
          }
      }
  
      if(e.target.value.length < config[e.target.name].minlength || e.target.value.length > config[e.target.name].maxlength) {
          errors.push(<li key="4">The field must have a minimum of {config[e.target.name].minlength} and maximum of {config[e.target.name].maxlength} characters</li>)
      }

      if(config[e.target.name].matching) {
        let matchingEl = document.querySelector(`input[name="${config[e.target.name].matching}"]`)

        if(e.target.value !== matchingEl.value) {
            errors.push(<li key="5">Passwords do not match</li>)
        }
      }

      if(config[e.target.name].password) {
        if(e.target.value.length < config[e.target.name].minlengthpassword && !(e.target.value.length == 0)) {
            errors.push(<li key="8">Password to short, must have a minimum of {config[e.target.name].minlengthpassword} characters</li>)
        } else if(e.target.value.length > config[e.target.name].maxlengthpassword) {
            errors.push(<li key="9">Password to long, must have a maximum of {config[e.target.name].maxlengthpassword} characters</li>)
        } else if(!validatePassword(e.target.value) && !(e.target.value.length == 0)) {
            errors.push(<li key="10">Invalid password</li>)
        } else if(!validateCapital(e.target.value) && !validateNumber(e.target.value) && !(e.target.value.length == 0)) {
            errors.push(<li key="11">Password to weak, must contain at least one capital leter and one number</li>)
        } else if(!validateCapital(e.target.value) && !(e.target.value.length == 0)) {
            errors.push(<li key="12">Password must contain at least one capital letter</li>)
        } else if(!validateNumber(e.target.value) && !(e.target.value.length == 0)) {
            errors.push(<li key="13">Password must contain at least one number</li>)
        } 
      }


      setErrorMessage({ ...errorMessage, [e.target.name]: errors})
  
  }

  const validateCapital = (password) => {
    if(/(?=.*?[A-Z]).*/.test(password)) {
        return true;
    }

    return false;
}

    const validateNumber = (password) => {
        if(/\d/.test(password)) {
            return true;
        }

        return false;
    }
  
  const validatePassword = (password) => {
    if(/^[a-zA-Z0-9!@#$%^&*]+$/.test(password)) {
        return true;
    }

    return false;
  }

    const showNewPassword = () => {
        document.querySelector(".reset-password-wrapper #password").type = "text";
        document.querySelector(".change-password-show-icon-wrapper").style.display = "none";
        document.querySelector(".change-password-hide-icon-wrapper").style.display = "block";
    }

    const hideNewPassword = () => {
        document.querySelector(".reset-password-wrapper #password").type = "password";
        document.querySelector(".change-password-hide-icon-wrapper").style.display = "none";
        document.querySelector(".change-password-show-icon-wrapper").style.display = "block";
    }

    const showNewConfirmPassword = () => {
        document.querySelector(".reset-password-wrapper #confirmPassword").type = "text";
        document.querySelector(".change-confirm-password-show-icon-wrapper").style.display = "none";
        document.querySelector(".change-confirm-password-hide-icon-wrapper").style.display = "block";
    }

    const hideNewConfirmPassword = () => {
        document.querySelector(".reset-password-wrapper #confirmPassword").type = "password";
        document.querySelector(".change-confirm-password-hide-icon-wrapper").style.display = "none";
        document.querySelector(".change-confirm-password-show-icon-wrapper").style.display = "block";
    }
  
    return (
      <section className="reset-password-section">
          <div className="container">
              <div className="profile-data-wrapper">
                  <div className="profile-data-wrapper-content">
                    <p className="forgot-password-main-text">
                        Reset Password
                    </p>
                      <div className="reset-password-single-item">
                        <div className="reset-password">
                            <p className="profile-data-wrapper-single-item-text-label">
                                New Password
                            </p>
                            <div className="reset-password-wrapper">
                                <input type="password" id="password" name="password" placeholder="********" onChange={onChange}/>
                                <a className="change-password-show-icon-wrapper" onClick={showNewPassword}>
                                    <img src={show}/>
                                </a>
                                <a className="change-password-hide-icon-wrapper" onClick={hideNewPassword}>
                                    <img src={hide}/>
                                </a>  
                            </div>
                            <ul className="form-validation">{errorMessage.password}</ul>
                        </div>
                      </div>
                      <div className="reset-password-single-item">
                        <div className="reset-password">
                          <p className="profile-data-wrapper-single-item-text-label">
                              Confirm New Password
                          </p>
                          <div className="reset-password-wrapper">
                                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="********" onChange={onChange}/>
                                <a className="change-confirm-password-show-icon-wrapper" onClick={showNewConfirmPassword}>
                                    <img src={show}/>
                                </a>
                                <a className="change-confirm-password-hide-icon-wrapper" onClick={hideNewConfirmPassword}>
                                    <img src={hide}/>
                                </a>  
                            </div>
                            <ul className="form-validation">{errorMessage.confirmPassword}</ul>
                        </div>
                      </div>
                      { error.status &&
                        <span className="form-validation-submit">
                            {error.message}
                        </span>}
                      <a className="profile-data-make-changes-btn" onClick={saveChanges}>
                          Change Password
                      </a>
                      { success.status &&
                        <span className="form-validation-success">
                            {success.message}
                        </span>}
                  </div>
              </div>
          </div>
      </section>
    )
}

export default ResetPasswordSection