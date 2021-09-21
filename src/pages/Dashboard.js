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
  const [pageData, setpageData] = useState({});
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

  useEffect(() => {
    getPageData();
  }, []);

  var getPageData = () => {
    axios.get(`/getDashboardDetails`).then((res) => {
      setpageData(res.data);
      console.log(res.data);
    });
  };

  // get loggedin user details to the frontend
  var getLoggedInUser = async (loggedInUserId) => {
    await axios.get(`/getUser/${loggedInUserId}`).then((res) => {
      setuserEmail(res.data.email);
    });
  };

  return (
    <div className="dbContent">
      {console.log(pageData)}
      {/* <h1>Dashboard page</h1>
      <h1>Welcome {userEmail}</h1> */}
      {/* <button onClick={logout}>Logout</button> */}

      <div className="countCard">
        <StatCard
          text="Travellers"
          count={pageData.numOfTravellers}
          icon={<PeopleIcon style={{ color: "white" }} />}
        ></StatCard>
        <StatCard
          text="Hotels"
          count={pageData.numOfHotels}
          icon={<HotelIcon style={{ color: "white" }} />}
        ></StatCard>
        <StatCard
          text="Taxi Drivers"
          count={pageData.numOfTaxiDrivers}
          icon={<LocalTaxiIcon style={{ color: "white" }} />}
        ></StatCard>
        <StatCard
          text="Guides"
          count={pageData.numOfGuides}
          icon={<MapIcon style={{ color: "white" }} />}
        ></StatCard>
      </div>
      <div className="stat">
        <div className="statTopRow">
          <div className="whiteBG leftTopStat">
            <h3>Number of Users</h3>
            <Graph data={pageData.dateMap} />
          </div>

          <div className="whiteBG rightTopStat">
            <h3>Number of Users</h3>
            <GraphPie />
          </div>
        </div>
        <div className="statBottomRow">
          <div className="whiteBG bottom-stat">
            <div className="bottom-topic">
              <h3>New Places</h3>
            </div>

            <div className="place-box">
              {pageData.notAddedPlaces != null ? (
                pageData.notAddedPlaces.map((place) => {
                  return (
                    <NewRequestPlace
                      placeName={place.place_name}
                      placeId={place.place_id}
                      desc={place.description}
                      addedDate={place.added_date_time}
                      latitude={place.latitude}
                      longitude={place.longitude}
                      photo={place.photo}
                      district={place.district}
                      getPageData={getPageData}
                    />
                  );
                })
              ) : (
                <div>Blaaa</div>
              )}
              {/* <NewRequestPlace />
              <NewRequestPlace />
              <NewRequestPlace /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
