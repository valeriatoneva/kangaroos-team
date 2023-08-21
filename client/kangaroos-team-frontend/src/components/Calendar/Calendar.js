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
    <div style={{ height: '500px' }}>
      <BigCalendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: '100%' }}
      />
    </div>
  );
}

export default Calendar;

