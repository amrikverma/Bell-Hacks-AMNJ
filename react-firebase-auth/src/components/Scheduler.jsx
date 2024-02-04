import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Scheduler = () => {
  const [events, setEvents] = useState([
    {
      title: 'Meeting 1',
      start: new Date(2024, 1, 1, 10, 0),
      end: new Date(2024, 1, 1, 11, 0),
    },
    {
      title: 'Meeting 2',
      start: new Date(2024, 1, 2, 14, 0),
      end: new Date(2024, 1, 2, 15, 0),
    },
  ]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('Event Title:');
    if (title) {
      setEvents([...events, { title, start, end }]);
    }
  };

  return (
    <div>
      <h2>Schedule a Meeting with our Care Takers!</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={handleSelect}
        selectable
        style={{ height: 500 }}
      />
    </div>
  );
};

export default Scheduler;
