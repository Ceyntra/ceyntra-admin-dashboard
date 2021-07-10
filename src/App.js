import './App.css';
import React  from 'react'
import Login from './Login';
import Dashboard from './pages/Dashboard';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import NavBar from './components/navbar/NavBar';

// Pages
import Traveller from './pages/Traveller';
import Places from './pages/Places';
import Service from './pages/Service';
import Hotel from './pages/Hotel';
import Taxi from './pages/Taxi';
import Guide from './pages/Guide';
import Message from './pages/Message';
import Profile from './pages/Profile';


function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={Login} />
            <Route path='/home'>
              <NavBar url={window.location.pathname}/>
              <Switch>
                  <Route exact path='/home' component={Dashboard} />
                  <Route exact path='/home/travellers' component={Traveller} />
                  <Route path='/home/places' component={Places} />
                  <Route path='/home/services' component={Service} />
                  <Route path='/home/hotels' component={Hotel} />
                  <Route path='/home/taxi' component={Taxi} />
                  <Route path='/home/guide' component={Guide} />
                  <Route path='/home/message' component={Message} />
                  <Route path='/home/profile' component={Profile} />
              </Switch>
            </Route>
          </div>
        </Router>
    </div>
  );
}

export default App;
