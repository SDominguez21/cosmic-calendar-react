import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import Home from './components/home/Home.js';
import Navbar from './components/navbar/Navbar.js';
import Signup from './components/signup/Signup.js';
import Login from './components/login/Login.js';
import AllForcasts from './components/all-forcasts/AllForcasts';
import AllMoon from './components/all-moon/AllMoon';
import ForcastDetails from './components/forcast-details/ForcastDetails';
// import AllCosmicEvents from "./components/all-comsic-events/AllaCosmicEvents";ll
import Moment from 'react-moment';
// import AuthService from "./services/AuthService.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfForcasts: [],
      visibleForcast: [],
      listOfMoonEvents: [],
      visibleMoon: [],
      currentlyLoggedIn: null,
      ready: false,
      signupShowing: false,
      loginShowing: false
    };

    // this.service = new AuthService();
  }

  today = async () => {
    console.log('getting todays stuff');
    await axios
      .get('http://localhost:5000/today')
      .then(response => {
        console.log(response.data[1].timestamp);
        return response.data[1].timestamp;
      })
      .catch(() => {
        console.log('err');
      });
  };
  // fetchEvents = async () => {
  //   console.log("for the love of god");
  //   let weather = await axios.get(
  //     `https://api.aerisapi.com/forecasts/miami,fl?filter=daynight&limit=60&format=json&client_id=ubVTEqqaNjJ2GI2wGFHqj&client_secret=DTmrLknIoE2Bk2HOBj6jHKJqcj0CBDK5KhyZTkoR`
  //   );

  //   let moon = await axios.get(
  //     `https://api.aerisapi.com/sunmoon/moonphases?limit=31&miami,fl&from=08/02/2019&format=json&client_id=ubVTEqqaNjJ2GI2wGFHqj&client_secret=DTmrLknIoE2Bk2HOBj6jHKJqcj0CBDK5KhyZTkoR
  //   `
  //   );

  //   let actualWeatherArray = weather.data.response[0].periods;
  //   console.log(actualWeatherArray);

  //   let actualmoon = moon.data.response[0];
  //   console.table(moon.data.response[0])

  //   this.setState({
  //     listOfForcasts: weather.data,
  //     visibleForcast: weather.data,
  //     ready: true
  //   });
  //   this.setState({
  //     listOfMoonEvents: moon.data,
  //     visibleMoon: moon.data,
  //     ready: true
  //   });
  // };

  // Sign up/log in
  getCurrentlyLoggedInUser = () => {
    console.log('FETCHING USER!!!!');
    axios
      .get('http://localhost:5000/api/auth/getcurrentuser', {
        withCredentials: true
      })
      .then(response => {
        console.log('yay really fetching the user now');
        let theUser = response.data;
        this.setState({ currentlyLoggedIn: theUser });
        return theUser;
      })
      .catch(() => {
        this.setState({ currentlyLoggedIn: null });
      });
  };

  toggleForm = whichForm => {
    let theForm;

    if (whichForm === 'signup') {
      theForm = 'signupShowing';
    } else {
      theForm = 'loginShowing';
    }

    this.setState({ [theForm]: !this.state[theForm] });
  };

  componentDidMount() {
    // this.fetchEvents();
    this.today();
    this.getCurrentlyLoggedInUser();
  }

  logout = () => {
    axios
      .post(
        'http://localhost:5000/api/auth/logout',
        {},
        { withCredentials: true }
      )
      .then(response => {
        console.log(response);
        this.getCurrentlyLoggedInUser();
      })
      .catch(err => {
        console.log(err);
      });
  };

  // if I want a search a bar this is where the function would go

  render() {
    console.log('*************', this.state);

    return (
      <div>
        <div>
          <Navbar
            theUser={this.state.currentlyLoggedIn}
            pleaseLogOut={this.logout}
            toggleForm={this.toggleForm}
            getUser={this.getCurrentlyLoggedInUser}
          />

          {this.state.signupShowing && (
            <Signup
              getUser={this.getCurrentlyLoggedInUser}
              toggleForm={this.toggleForm}
            />
          )}

          {this.state.loginShowing && (
            <Login
              getUser={this.getCurrentlyLoggedInUser}
              toggleForm={this.toggleForm}
            />
          )}
        </div>
        <Switch>
          {/* <Route  exact path ="/all-cosmic-events" render = {(props) => <AllCosmicEvents {...props} getData = {this.*MULTIPLE SEEDS*}  />    } /> */}
          <Route
            exact
            path="/all-moon"
            render={props => (
              <AllMoon
                // {...props}
                listOfMoonEvents={this.state.visibleMoon}
                ready={this.state.ready}
              />
            )}
          />
          <Route
            exact
            path="/all-forcasts"
            render={props => (
              <AllForcasts
                {...props}
                listOfForcasts={this.state.visibleForcast}
                ready={this.state.ready}
              />
            )}
          />
          <Route
            exact
            path="/forcast-details/:id"
            render={props => (
              <ForcastDetails
                {...props}
                listOfForcasts={this.state.visibleForcast}
                ready={this.state.ready}
              />
            )}
          />
          <Route
            exact
            path="/home"
            render={props => (
              <Home
                {...props}
                listOfForcasts={this.state.visibleForcast}
                ready={this.state.ready}
              />
            )}
          />
        </Switch>
        <Moment unix>{this.today()}</Moment>
        yay! this is my app
      </div>
    );
  }
}

export default App;
