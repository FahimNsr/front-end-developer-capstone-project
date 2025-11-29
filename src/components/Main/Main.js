import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import BookingPage from '../../pages/BookingPage/BookingPage';
import ConfirmedBooking from '../../pages/ConfirmedBooking/ConfirmedBooking';
import { initializeTimes, updateTimes } from '../../utils/timesReducer';
import './Main.css';

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/reservations" 
          element={<BookingPageWrapper availableTimes={availableTimes} dispatch={dispatch} />} 
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

function BookingPageWrapper({ availableTimes, dispatch }) {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (window.submitAPI && typeof window.submitAPI === 'function') {
      const success = window.submitAPI(formData);
      console.log(success);
      if (success) {
        navigate('/confirmed');
      }
    } else {
      // Fallback: navigate anyway if API not available
      navigate('/confirmed');
    }
  };

  return (
    <BookingPage 
      availableTimes={availableTimes} 
      dispatch={dispatch} 
      submitForm={submitForm}
    />
  );
}

export default Main;

