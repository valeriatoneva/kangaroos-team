import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './Calendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function Calendar() {
  const events = [
    {
      start: moment().toDate(),
      end: moment().add(1, 'days').toDate(),
      title: 'Sample Event',
    },
    // ... add more sample events as desired
  ];

  return (
    <div className="calendar-container">
      <BigCalendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ flex: 1 }}
      />

      {/* Integrated HTML */}
      <div className="e1_4332">
        <div className="e101_2449"></div>
        {/* ... Your provided HTML ... */}
      </div>

      <div className="e3_1488">
        <div className="e3_1493"></div>
      </div>
    </div>
  );
}

export default Calendar;

