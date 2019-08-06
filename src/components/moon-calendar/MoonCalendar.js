import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
// import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import './moonCalendar.css';

export default class MoonCalendar extends Component {
  render() {
    // console.log('moon events', this.props.moonEvents);

    return (
      <div>
        {/* <ul> */}
        {/* <li> */}
        {/* {this.props.moonEvents.map(mEvent => {
            return <p>{mEvent.name}</p>;
          })} */}
        {/* <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} /> */}
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          weekends={false}
          events={[
            { title: 'event 1', date: '2019-04-01' },
            { title: 'event 2', date: '2019-04-02' }
          ]}
        />
        {/* </li> */}
        {/* </ul> */}
      </div>
    );
  }
}
