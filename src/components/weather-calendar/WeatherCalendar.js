import React, { Component } from 'react';

export default class WeatherCalendar extends Component {
  render() {
    console.log('weather events', this.props.weatherEvents);
    return (
      <div>
        <ul>
          <li>{JSON.stringify(this.props.weatherEvents)}</li>
        </ul>
      </div>
    );
  }
}
