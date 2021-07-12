import React from "react";

import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import Traveller from "./Traveller";
import { useEffect } from "react";
import { useState, useContext } from "react";
import axios from "../service/axios";
import { LoginContext } from "../states/LoginContext";

function Dashboard(props) {
  const [userEmail, setuserEmail] = useState("");
  var history = useHistory();

  // logout function
  var logout = async () => {
    await axios
      .post("/logout", {
        cipherText: sessionStorage.getItem("token"),
      })
      .then((res) => {
        console.log(res.data);
        history.push("/");
        sessionStorage.removeItem("token");
      });
  };

  useEffect(async () => {
    if (sessionStorage.getItem("token") != null) {
      // send user details and get back is userLoggedIn
      await axios
        .post(`/checkLoginStatus`, {
          cipherText: sessionStorage.getItem("token"),
        })
        .then((res) => {
          if (res.data.loginState == "1") {
            // console.log(res.data);
            getLoggedInUser(res.data.userId);
          } else {
            // console.log(res.data);
            history.push("/forbidden");
          }
        });
    } else {
      history.push("/forbidden");
    }
  }, []);

  // get loggedin user details to the frontend
  var getLoggedInUser = async (loggedInUserId) => {
    await axios.get(`/getUser/${loggedInUserId}`).then((res) => {
      setuserEmail(res.data.email);
    });
  };

  return (
    <div>
      <h1>Dashboard page</h1>
      <h1>Welcome {userEmail}</h1>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
