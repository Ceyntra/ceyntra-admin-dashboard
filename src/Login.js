import React from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "./service/axios";
import { LoginContext } from "./states/LoginContext";
import {
  List,
  ListItem,
  Divider,
  ListItemIcon,
  makeStyles,
} from "@material-ui/core";
import "./App.css";

const useStyles = makeStyles({
  ht: {
    height: "100%",
  },
});

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loginError, setloginError] = useState(null);
  const history = useHistory();

  // login function
  var login = async () => {
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
  };

  const classes = useStyles();

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
          <div className="login-header">SignIn</div>
          <div className="login-sub-header">
            Enter your email and password to sign in
          </div>
          <div className="login-email-container">
            <div className="login-email-text">Email</div>
            <div className="login-email-input-container">
              <input
                placeholder="Email"
                className="login-email-input"
                type="text"
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
                name=""
                id=""
                placeholder="Password"
              />
            </div>
          </div>
          <div className="login-password-container"></div>
        </div>
      </div>
      <div className="login-right">dfdf</div>
    </div>
  );
}

export default Login;
