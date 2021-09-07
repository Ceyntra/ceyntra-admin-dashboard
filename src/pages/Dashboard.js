import React from "react";

import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import Traveller from "./Traveller";
import { useEffect } from "react";
import { useState, useContext } from "react";
import axios from "../service/axios";
import { LoginContext } from "../states/LoginContext";

import "../css/dashboard.css";
import StatCard from "../components/dashboard/statCard";
import HotelIcon from "@material-ui/icons/Hotel";
import MapIcon from "@material-ui/icons/Map";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import PeopleIcon from "@material-ui/icons/People";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import barChart from "../assets/images/bar-chart.png";
import pieChart from "../assets/images/piechrt.PNG";
import barchart from "../assets/images/barchart.png";
import NewRequestPlace from "../components/places/newRequestPlace";
import Graph from "../components/dashboard/Graph";
import GraphPie from "../components/dashboard/GraphPie";

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

  // useEffect(async () => {
  //   if (sessionStorage.getItem("token") != null) {
  //     // send user details and get back is userLoggedIn
  //     await axios
  //       .post(`/checkLoginStatus`, {
  //         cipherText: sessionStorage.getItem("token"),
  //       })
  //       .then((res) => {
  //         if (res.data.loginState == "1") {
  //           // console.log(res.data);
  //           getLoggedInUser(res.data.userId);
  //         } else {
  //           // console.log(res.data);
  //           history.push("/forbidden");
  //         }
  //       });
  //   } else {
  //     history.push("/forbidden");
  //   }
  // }, []);

  // get loggedin user details to the frontend
  var getLoggedInUser = async (loggedInUserId) => {
    await axios.get(`/getUser/${loggedInUserId}`).then((res) => {
      setuserEmail(res.data.email);
    });
  };

  return (
    <div className="dbContent">
      {/* <h1>Dashboard page</h1>
      <h1>Welcome {userEmail}</h1> */}
      {/* <button onClick={logout}>Logout</button> */}

      <div className="countCard">
        <StatCard
          text="Travellers"
          count="13,532"
          icon={<PeopleIcon style={{ color: "white" }} />}
        ></StatCard>
        <StatCard
          text="Hotels"
          count="315"
          icon={<HotelIcon style={{ color: "white" }} />}
        ></StatCard>
        <StatCard
          text="Taxi Drivers"
          count="135"
          icon={<LocalTaxiIcon style={{ color: "white" }} />}
        ></StatCard>
        <StatCard
          text="Guides"
          count="225"
          icon={<MapIcon style={{ color: "white" }} />}
        ></StatCard>
      </div>
      <div className="stat">
        <div className="statLeft">
          <div className="whiteBG leftStat">
            <h3>Number of Users</h3>
            <Graph />
          </div>
          <div className="whiteBG">
            <h3>New Places</h3>
            <NewRequestPlace />
            <NewRequestPlace />
            <NewRequestPlace />
          </div>
        </div>
        <div className="statRight">
          <div className="whiteBG rightStat">
            <h3>Number of Users</h3>
            <GraphPie />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
