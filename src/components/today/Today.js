import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
      <div>
        {/* cosmic */}
        {/* seeds pending */}
        <div>
          {this.state.cosmicShowing ? (
            <div onClick={this.handleClickCosmic}>
              <p>{this.props.firstCosmic.name}</p>
              {/* <p>{this.props.firstCosmic.}</p> */}
            </div>
          ) : (
            <img
              src="https://image.flaticon.com/icons/png/512/275/275246.png"
              onClick={this.handleClickCosmic}
            />
          )}
          {/* <Link to="">See More</Link> */}
        </div>

        {/* moon */}
        <div>
          {this.state.moonShowing ? (
            <div onClick={this.handleClickMoon}>
              <p>{this.props.firstMoon.name}</p>
            </div>
          ) : (
            <img
              class="moon-eyes"
              src={require('../../moon.png')}
              onClick={this.handleClickMoon}
            />
          )}
          <Link to="/moon-calendar">Moon Calendaer</Link>
        </div>

        {/* weather */}
        <div>
          {console.log(this.state.weatherInfo)}
          {this.state.weatherShowing ? (
            <div onClick={this.handleClickWeather}>
              <p>{this.props.firstWeather.weather}</p>
            </div>
          ) : (
            <img
              src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-2-512.png"
              onClick={this.handleClickWeather}
            />
          )}
          <Link to="/weather-calendar">Weather Calendar</Link>
        </div>
      </div>
    );
  }
}
