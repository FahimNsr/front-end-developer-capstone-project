import React from 'react';
import './BookingPage.css';
import BookingForm from '../../components/BookingForm/BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <div className="booking-page">
      <section className="booking-section">
        <div className="booking-container">
          <h1>Reserve a Table</h1>
          <p>Book your table at Little Lemon restaurant</p>
          <BookingForm 
            availableTimes={availableTimes} 
            dispatch={dispatch} 
            submitForm={submitForm}
          />
        </div>
      </section>
    </div>
  );
}

export default BookingPage;

