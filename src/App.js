import "./App.css";
import React from "react";
import Login from "./Login";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import TopBar from "./components/navbar/TopBar";
import Traveller from "./pages/Traveller";
import Places from "./pages/Places";
import TravelPlaces from "./pages/TravelPlaces";
import Service from "./pages/Service";
import Hotel from "./pages/Hotel";
import HotelList from "./pages/HotelList";
import Taxi from "./pages/Taxi";
import Guide from "./pages/Guide";
import Message from "./pages/Message";
import Profile from "./pages/Profile";
import { AppBar } from "@material-ui/core";
import Forbidden from "./pages/Forbidden";
import { LoginProvider } from "./states/LoginContext";
import Graph from "./components/dashboard/Graph";
import DistrictHotels from "./pages/DistrictHotels";
import Requests from "./pages/Requests";


function App() {

  return (
    <div className="App">
      <LoginProvider>
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/forbidden" component={Forbidden} />
            <Route path="/home">
              <TopBar />
              <NavBar url={window.location.pathname} />
              <div className="page-content">
                <Switch>
                  <Route exact path="/home" component={Dashboard} />
                  <Route exact path="/home/travellers" component={Traveller} />
                  <Route path="/home/places" component={TravelPlaces} />
                  <Route path="/home/services" component={Service} />
                  <Route exact path="/home/hotels" component={Hotel} />
                  <Route path="/home/hotels/list" component={HotelList} />
                  <Route path="/home/hotels/requests" component={Requests} />
                  <Route path="/home/hotels/:province" component={DistrictHotels} />
                  <Route path="/home/taxis" component={Taxi} />
                  <Route path="/home/guides" component={Guide} />
                  <Route path="/home/messages" component={Message} />
                  <Route path="/home/profile" component={Profile} />
                </Switch>
              </div>
            </Route>
          </div>
        </Router>
      </LoginProvider>
    </div>
  );
}

export default App;
