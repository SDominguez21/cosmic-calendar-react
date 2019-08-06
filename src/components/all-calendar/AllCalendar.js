import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '@fullcalendar/timegrid/main.css';
import './allCalendar.css';

export default class AllCalendar extends Component {
  // calendarComponentRef = React.createRef();

  render() {
    // console.log('all events', this.props);
    // console.log('*****', this.props.weatherEvents);
    // console.log('%%%%%%%', this.props.moonEvents);
    const sanitizedWeatherEvents = this.props.weatherEvents.map(wEvent => {
      let oneWeather = {};
      // let sanitizedDate = wEvent.dateTimeISO.split('T')[0];
      // oneWeather.date = sanitizedDate;
      oneWeather.date = wEvent.dateTimeISO;
      oneWeather.title = wEvent.weather;
      return oneWeather;
    });

    // do the same thing but and then add as a value to events

    const sanitizedMoonEvents = this.props.moonEvents.map(mEvent => {
      let oneMoon = {};
      oneMoon.date = mEvent.dateTimeISO;
      oneMoon.title = mEvent.name;
      return oneMoon;
    });

    // also mae one for cosmic events

    const allSanitizedEvents = [
      ...sanitizedWeatherEvents,
      ...sanitizedMoonEvents
    ];
    console.log('@@@@', allSanitizedEvents);

    // MUST FIX HANDLE DATE CLICK EX:
    // handleDateClick = () => {
    //   if ('Would you like to add an event to ' + arg.dateStr + ' ?') {
    //     this.setState({
    //       // add new event data
    //       calendarEvents: this.state.calendarEvents.concat({
    //         // creates a new array
    //         title: 'New Event',
    //         start: arg.date,
    //         allDay: arg.allDay
    //       })
    //     });
    //   }
    // };

    return (
      <div>
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          editable={true}
          weekends={true}
          header={{
            left: 'prev,next,today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
          }}
          // ref={this.calendarComponentRef}
          // dateClick={this.handleDateClick}
          // events={[{ sanitizedWeatherEvents }, { sanitizedMoonEvents }]}
          events={allSanitizedEvents}
        />
      </div>
    );
  }
}
