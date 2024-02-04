import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { db } from "../firebase.js";


const ScheduleMeeting = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [meetingScheduled, setMeetingScheduled] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setMeetingScheduled(false); // Reset meeting status when date changes
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleScheduleMeeting = async () => {
    try {
      // Add meeting to Firebase
      await db.collection('meetings').add({
        date: selectedDate.toISOString(),
        time: selectedTime,
      });

      setMeetingScheduled(true);
    } catch (error) {
      console.error('Error scheduling meeting:', error);
    }
  };

  return (
    <div>
      <h2>Schedule a Meeting</h2>
      <div>
        <label>Select Date:</label>
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>
      {selectedDate && (
        <div>
          <label>Select Time:</label>
          <input
            type="time"
            value={selectedTime}
            onChange={handleTimeChange}
          />
        </div>
      )}
      <button onClick={handleScheduleMeeting}>Schedule Meeting</button>
      {meetingScheduled && (
        <div>
          <p>
            Meeting Scheduled on: {selectedDate.toDateString()} at {selectedTime}.
          </p>
          <p>
            We will notify our caretakers, see you soon!
          </p>
        </div>
      )}
    </div>
  );
};

export default ScheduleMeeting;
