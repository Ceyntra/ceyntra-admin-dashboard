import React from "react";
import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "./service/axios";
import { LoginContext } from "./states/LoginContext";
import "./css/login.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import loginImage from "./assets/images/login.svg";

import ceyntraLogo from "./ceyntra1.png";

// function
function Login() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const emailValidator =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordValidator =
    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loginError, setloginError] = useState(null);
  const history = useHistory();

  // login function
  var login = async (e) => {
    e.preventDefault();
    console.log(emailValidator.test(email));

    if (emailValidator.test(email)) {
      if (passwordValidator.test(password)) {
        setloginError(null);
        await axios
          .post("/login", {
            email: email,
            password: password,
          })
          .then((res1) => {
            var response = res1.data;
            if (response == "emailOrPasswordIsIncorrect") {
              setloginError("emailOrPasswordIsIncorrect");
            } else if (response == "userNotFound") {
              setloginError("userNotFound");
            } else {
              axios
                .post(`/encryptDetails`, {
                  userId: response,
                })
                .then((res2) => {
                  sessionStorage.setItem("token", res2.data);
                  history.push("/home");
                });
            }
          });
      } else {
        if (password.length < 8) {
          setloginError("Please provide password at least 8 characters!");
        } else {
          setloginError(
            "Password must contain a special charater, a number, a uppercase letter and lowercase letter!"
          );
        }
      }
    } else {
      setloginError("Please Enter valid email address!");
    }
  };

  return (
    <div className="loginPage-container">
      {/* <h1>ballalal</h1>
      <h1>Login page</h1>

      {loginError != null ? (
        <div>{loginError}</div>
      ) : (
        <div>
          <h1>sdjfsk</h1>
        </div>
      )}
      <input
        type="text"
        name=""
        id=""
        autoComplete="true"
        placeholder="enter username or email"
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        name=""
        id=""
        placeholder="enter password"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={login}>Login</button> */}

      <div className="login-left">
        <div className="login-signIn-container">
          <div className="ceyntra-logo-container">
            <img className="ceyntra-logo" src={ceyntraLogo} alt="" srcset="" />
          </div>

          <div className="login-header">Ceyntra Admin</div>
          <div className="login-sub-header">
            Enter your email and password to sign in
          </div>

          {loginError != null ? (
            <div className="login-error">{loginError}</div>
          ) : (
            <div>
              <h1></h1>
            </div>
          )}

          <form onSubmit={login} action="">
            <div className="login-email-container">
              <div className="login-email-text">Email</div>
              <div className="login-email-input-container">
                <input
                  placeholder="Email"
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

            <div className="login-password-container">
              <div className="login-password-text">Password</div>
              <div className="login-password-input-container">
                <input
                  className="login-password-input"
                  type="text"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  name=""
                  id=""
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="login-remember-me-container">
              <FormControlLabel
                control={
                  <Switch
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
              />

              <div className="login-remember-me-text">Remember me</div>
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
              SignIn
            </Button>
          </form>

          <div className="login-forget-password">
            <span className="login-forget">Forget password </span>{" "}
            <span className="login-clickHere">Click here</span>
          </div>

          <div className="login-password-container"></div>
        </div>
      </div>
      <div className="login-right">
        <img className="login-img" src={loginImage} alt="" srcset="" />
      </div>
    </div>
  );
}

export default Login;
