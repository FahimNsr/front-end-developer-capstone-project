import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import BookingPage from '../../pages/BookingPage/BookingPage';
import './Main.css';

// Initialize available times
function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
}

// Update available times based on selected date
function updateTimes(state, action) {
  // For now, return the same available times regardless of the date
  // This will be updated in future steps to filter based on date
  if (action.type === 'UPDATE_TIMES') {
    // Currently returns the same times, but action.date is available for future use
    return state;
  }
  return state;
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
      </Routes>
    </main>
  );
}

export default Main;

