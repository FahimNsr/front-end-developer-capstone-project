import React from 'react';
import './ConfirmedBooking.css';

function ConfirmedBooking() {
  return (
    <div className="confirmed-booking">
      <section className="confirmation-section" aria-labelledby="confirmation-heading">
        <div className="confirmation-container">
          <h1 id="confirmation-heading">Booking Confirmed!</h1>
          <p>Your reservation has been successfully confirmed.</p>
          <p>We look forward to serving you at Little Lemon!</p>
        </div>
      </section>
    </div>
  );
}

export default ConfirmedBooking;

