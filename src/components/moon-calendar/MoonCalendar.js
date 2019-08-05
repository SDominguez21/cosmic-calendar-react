import React, { Component } from 'react';

export default class MoonCalendar extends Component {
  render() {
    console.log('moon events', this.props.moonEvents);
    // map function
    return (
      <div>
        <ul>
          <li>{JSON.stringify(this.props.moonEvents)}</li>
        </ul>
      </div>
    );
  }
}
