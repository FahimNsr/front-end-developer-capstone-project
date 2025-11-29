import React, { useReducer, lazy, Suspense } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { initializeTimes, updateTimes } from '../../utils/timesReducer';
import './Main.css';

// Lazy load pages for better performance
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const BookingPage = lazy(() => import('../../pages/BookingPage/BookingPage'));
const ConfirmedBooking = lazy(() => import('../../pages/ConfirmedBooking/ConfirmedBooking'));

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

  return (
    <main>
      <Suspense fallback={<div className="loading-fallback" aria-live="polite" aria-label="Loading page">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/reservations" 
            element={<BookingPageWrapper availableTimes={availableTimes} dispatch={dispatch} />} 
          />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </Suspense>
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

