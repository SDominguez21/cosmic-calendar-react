import React from "react";
import "./App.css";
// import Moment from 'react-moment';
import Navbar from "./components/navbar/Navbar.js";
import Home from "./components/home/Home";
// import Signup from './components/signup/Signup.js';
// import Login from './components/login/Login.js';
import AuthService from "./services/AuthService.js";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfForcasts: [],
      listOfSunandMoonEvents: [],
      currentlyLoggedIn: null,
      ready: false,
      signupShowing: false,
      loginShowing: false
    };

    this.service = new AuthService();
  }

  getAllEvents = async () => {
    let tides = await axios.get(`https://api.aerisapi.com/forecasts/:auto?&format=json&filter=day&limit=7&client_id=ubVTEqqaNjJ2GI2wGFHqj&client_secret=DTmrLknIoE2Bk2HOBj6jHKJqcj0CBDK5KhyZTkoR
    ` /*, {withCredentials: true}*/);

    let sunandmoon = await axios.get(`https://api.aerisapi.com/sunmoon/:auto?&from=07/30/2019&to=07/31/2019&format=json&client_id=ubVTEqqaNjJ2GI2wGFHqj&client_secret=DTmrLknIoE2Bk2HOBj6jHKJqcj0CBDK5KhyZTkoR
    `);

    this.setState({
      listOfForcasts: tides.data,
      ready: true
    });
    this.setState({
      listOfSunandMoonEvents: sunandmoon.data,
      ready: true
    });
  };

  getCurrentlyLoggedInUser = () => {
    this.service
      .currentUser()
      .then(theUser => {
        this.setState({ currentlyLoggedIn: theUser });
      })
      .catch(() => {
        this.setState({ currentlyLoggedIn: null });
      });
  };

  toggleForm = whichForm => {
    let theForm;

    if (whichForm === "signup") {
      theForm = "signupShowing";
    } else {
      theForm = "loginShowing";
    }

    this.setState({ [theForm]: !this.state[theForm] });
  };

  componentDidMount() {
    this.getAllEvents();
    this.getCurrentlyLoggedInUser();
  }

  render() {
    console.log("*************", this.state);

    return (
      <div>
        <Home />
        
      {/*         
      {this.state.signupShowing && 
        <Signup getUser = {this.getCurrentlyLoggedInUser}
        toggleForm = {this.toggleForm}
         />
      }

      {this.state.loginShowing && 
        <Login getUser = {this.getCurrentlyLoggedInUser}
        toggleForm = {this.toggleForm}
        />
      } */}

        <Switch>
          {/* <Route exact path="/" render={Home} /> */}
          {/* <Route exact path="" render={} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
