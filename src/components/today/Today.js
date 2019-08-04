import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

export default class Today extends Component {
  state = {
    cosmicInfo: {},
    moonInfo: {},
    weatherInfo: {},
    cosmicShowing: false,
    moonShowing: false,
    weatherShowing: false
  };

  today = async () => {
    let result = await axios.get('http://localhost:5000/today');
    return result.data;
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

  async componentDidMount() {
    let allOfTodaysInfo = await this.today();
    console.log(allOfTodaysInfo.cosmic);
    this.setState({
      cosmicInfo: allOfTodaysInfo.cosmic,
      moonInfo: allOfTodaysInfo.moon,
      weatherInfo: allOfTodaysInfo.weather
    });
  }

  render() {
    return (
      <div>
        {/* cosmic */}
        <div>
          {this.state.cosmicShowing ? (
            <p onClick={this.handleClickCosmic}>{this.state.cosmicInfo.name}</p>
          ) : (
            <img
              src="https://image.flaticon.com/icons/png/512/275/275246.png"
              onClick={this.handleClickCosmic}
            />
          )}
          {/* <Link>See More</Link> */}
        </div>

        {/* moon */}
        <div>
          {this.state.moonShowing ? (
            <p onClick={this.handleClickMoon}>{this.state.moonInfo.name}</p>
          ) : (
            <img
              src="https://png.pngtree.com/png-vector/20190215/ourlarge/pngtree-vector-moon-icon-png-image_516458.jpg"
              onClick={this.handleClickMoon}
            />
          )}
          {/* <Link>See More</Link> */}
        </div>

        {/* weather */}
        <div>
          {console.log(this.state.weatherInfo)}
          {this.state.weatherShowing ? (
            <p onClick={this.handleClickWeather}>
              {this.state.weatherInfo.weather}
            </p>
          ) : (
            <img
              src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-2-512.png"
              onClick={this.handleClickWeather}
            />
          )}
          {/* <Link>See More</Link> */}
        </div>
      </div>
    );
  }
}
