import React from "react";
import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../service/axios";
import { LoginContext } from "../states/LoginContext";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import loginImage from "../assets/images/reset2.svg";
import "../css/forget.css";

import ceyntraLogo from "../ceyntra1.png";

// function
function ResetPassword() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const emailValidator =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loginError, setloginError] = useState(null);
  const history = useHistory();

  return (
    <div className="loginPage-container">
      <div className="login-left">
        <div className="login-signIn-container">
          <div className="ceyntra-logo-container">
            <img className="ceyntra-logo" src={ceyntraLogo} alt="" srcset="" />
          </div>

          <div className="login-header">Reset password</div>
          <div className="login-sub-header">
            Enter your PIN and New password for reset your password.
          </div>

          {loginError != null ? (
            <div className="login-error">{loginError}</div>
          ) : (
            <div>
              <h1></h1>
            </div>
          )}

          <form action="">
            <div className="reset-pin-container">
              <div className="reset-pin-text">PIN</div>
              <div className="reset-pin-input-container">
                <input
                  placeholder="PIN"
                  className="login-email-input"
                  type="text"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="reset-password-container">
              <div className="login-password-text">New Password</div>
              <div className="login-password-input-container">
                <input
                  className="login-password-input"
                  type="text"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  name=""
                  id=""
                  placeholder="New Password"
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{
                width: "100%",
                height: 45,
                background: "linear-gradient(to right, #21D4FD, #2152FF)",
                marginBottom: 20,
                fontWeight: 800,
                fontSize: 16,
              }}
            >
              reset password
            </Button>
          </form>

          <div className="login-forget-password">
            <span className="login-forget">Back to forget password page </span>{" "}
            <span className="login-clickHere">Click here</span>
          </div>
        </div>
      </div>
      <div className="login-right">
        <img className="login-img" src={loginImage} alt="" srcset="" />
      </div>
    </div>
  );
}

export default ResetPassword;
