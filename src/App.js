import "./App.css";
import React from "react";
import Login from "./Login";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import TopBar from "./components/navbar/TopBar";
import Traveller from "./pages/Traveller";
import Places from "./pages/Places";
import AddNewPlaces from "./pages/AddNewPlaces";
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
import TaxiList from "./pages/TaxiList";
import DistrictTaxis from "./pages/DistrictTaxis";
import GuideList from "./pages/GuideList";
import DistrictGuides from "./pages/DistrictGuides";
import DistrictPlaces from "./pages/DistrictPlaces";

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
                  <Route exact path="/home/places" component={TravelPlaces} />
                  <Route path="/home/places/:province" component={DistrictPlaces} />
                  <Route path="/home/newplace" component={AddNewPlaces} />
                  <Route exact path="/home/hotels" component={Hotel} />
                  <Route path="/home/hotels/list" component={HotelList} />
                  <Route path="/home/hotels/requests" component={Requests} />
                  <Route
                    path="/home/hotels/:province"
                    component={DistrictHotels}
                  />
                  <Route exact path="/home/taxis" component={Taxi} />
                  <Route path="/home/taxis/list" component={TaxiList} />
                  <Route path="/home/taxis/requests" component={Requests} />
                  <Route path="/home/taxis/:province" component={DistrictTaxis} />
                  <Route exact path="/home/guides" component={Guide} />
                  <Route path="/home/guides/list" component={GuideList} />
                  <Route path="/home/guides/requests" component={Requests} />
                  <Route path="/home/guides/:province" component={DistrictGuides} />
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
