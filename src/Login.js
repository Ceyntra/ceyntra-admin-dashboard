import React from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "./service/axios";
import { LoginContext } from "./states/LoginContext";

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

  return (
    <div>
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
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
