import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import today from './today.css';

export default class Today extends Component {
  state = {
    cosmicShowing: false,
    moonShowing: false,
    weatherShowing: false
  };

  // on toggle show info functions NOT DRY
  handleClickCosmic = () => {
    this.setState({
      cosmicShowing: !this.state.cosmicShowing
    });
  };

  handleClickMoon = () => {
    this.setState({
      moonShowing: !this.state.moonShowing
    });
  };

  handleClickWeather = () => {
    this.setState({
      weatherShowing: !this.state.weatherShowing
    });
  };

  componentDidMount() {
    console.log(this.props);
    // this.setState({
    //   cosmicInfo: this.props.firstCosmic,
    //   moonInfo: this.props.firstMoon,
    //   weatherInfo: this.props.firstWeather
    // });
  }

  render() {
    console.log('inside of today', this.props);
    return (
      <div className="around- today-container">
        {/* cosmic */}
        {/* seeds pending */}
        <div className="cosmic-container">
          {this.state.cosmicShowing ? (
            <div className="today-stats" onClick={this.handleClickCosmic}>
              <p>{this.props.firstCosmic.name}</p>
              {/* <Link to="">Cosmic Calendar</Link> */}
              {/* <p>{this.props.firstCosmic.}</p> */}
            </div>
          ) : (
            <img
              src="https://image.flaticon.com/icons/png/512/275/275246.png"
              onClick={this.handleClickCosmic}
            />
          )}
        </div>

        {/* moon */}
        <div className="around- moon-container">
          {this.state.moonShowing ? (
            <div className="today-stats" onClick={this.handleClickMoon}>
              <p>{this.props.firstMoon.name}</p>
              <Link to="/moon-calendar">Moon Calendaer</Link>
            </div>
          ) : (
            <img
              className="moon-eyes"
              src={require('../../moon.png')}
              onClick={this.handleClickMoon}
            />
          )}
        </div>

        {/* weather */}
        <div className="around- weather-container">
          {console.log(this.state.weatherInfo)}
          {this.state.weatherShowing ? (
            <div className="today-stats" onClick={this.handleClickWeather}>
              <p>{this.props.firstWeather.weather}</p>
              <Link to="/weather-calendar">Weather Calendar</Link>
            </div>
          ) : (
            <img
              src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-2-512.png"
              onClick={this.handleClickWeather}
            />
          )}
        </div>
      </div>
    );
  }
}
