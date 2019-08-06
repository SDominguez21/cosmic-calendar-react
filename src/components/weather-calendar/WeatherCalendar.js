import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './weatherCalendar.css';

export default class WeatherCalendar extends Component {
  render() {
    console.log('weather events', this.props.weatherEvents);
    return (
      <div>
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          weekends={false}
          events={[
            { title: 'event 1', date: '2019-04-01' },
            { title: 'event 2', date: '2019-04-02' }
          ]}
        />
        {/* <ul>
          <li>
            {JSON.stringify(this.props.weatherEvents)}
            {this.props.weqatherEvents.map(wEvent => {
              return <p>{wEvent.name}</p>;
            })}
          </li>
        </ul> */}
      </div>
    );
  }
}
