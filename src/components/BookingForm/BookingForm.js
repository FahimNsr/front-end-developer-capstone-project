import React, { useState, useEffect, useCallback } from 'react';
import './BookingForm.css';

// Validation functions (pure functions, defined outside component)
export const validateDate = (dateValue) => {
  if (!dateValue) {
    return 'Please select a date';
  }
  const selectedDate = new Date(dateValue);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (selectedDate < today) {
    return 'Please select a future date';
  }
  return '';
};

export const validateTime = (timeValue) => {
  if (!timeValue) {
    return 'Please select a time';
  }
  return '';
};

export const validateGuests = (guestsValue) => {
  if (!guestsValue) {
    return 'Please enter the number of guests';
  }
  const numGuests = parseInt(guestsValue, 10);
  if (isNaN(numGuests) || numGuests < 1) {
    return 'Number of guests must be at least 1';
  }
  if (numGuests > 10) {
    return 'Number of guests cannot exceed 10';
  }
  return '';
};

export const validateOccasion = (occasionValue) => {
  if (!occasionValue) {
    return 'Please select an occasion';
  }
  return '';
};

// Get today's date in YYYY-MM-DD format for min date validation
export const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

function BookingForm({ availableTimes, dispatch, submitForm }) {
  // State variables for form fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');

  // State for validation errors
  const [errors, setErrors] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });

  // State to track which fields have been touched/interacted with
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
    occasion: false
  });

  // State to track if form is valid
  const [isFormValid, setIsFormValid] = useState(false);

  // Validate all fields
  const validateForm = useCallback(() => {
    const newErrors = {
      date: validateDate(date),
      time: validateTime(time),
      guests: validateGuests(guests),
      occasion: validateOccasion(occasion)
    };
    setErrors(newErrors);
    
    // Form is valid if all error messages are empty
    const formValid = Object.values(newErrors).every(error => error === '');
    setIsFormValid(formValid);
    
    return formValid;
  }, [date, time, guests, occasion]);

  // Validate form whenever any field changes
  useEffect(() => {
    validateForm();
  }, [validateForm]);

  // Mark field as touched when user leaves it
  const handleBlur = (fieldName) => {
    setTouched(prev => ({
      ...prev,
      [fieldName]: true
    }));
  };

  // Handle date change and dispatch state update
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    // Dispatch the state change with the newly selected date
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  // Handle field changes with validation
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched when user tries to submit
    setTouched({
      date: true,
      time: true,
      guests: true,
      occasion: true
    });
    
    // Final validation before submission
    if (validateForm()) {
      const formData = { date, time, guests, occasion };
      submitForm(formData);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          onBlur={() => handleBlur('date')}
          min={getTodayDate()}
          required
          aria-describedby={touched.date && errors.date ? "date-error" : undefined}
          aria-invalid={touched.date && errors.date ? "true" : "false"}
          className={touched.date && errors.date ? "error" : ""}
        />
        {touched.date && errors.date && (
          <span id="date-error" className="error-message" role="alert">
            {errors.date}
          </span>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={handleTimeChange}
          onBlur={() => handleBlur('time')}
          required
          aria-describedby={touched.time && errors.time ? "time-error" : undefined}
          aria-invalid={touched.time && errors.time ? "true" : "false"}
          className={touched.time && errors.time ? "error" : ""}
        >
          <option value="">Select a time</option>
          {availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>
        {touched.time && errors.time && (
          <span id="time-error" className="error-message" role="alert">
            {errors.time}
          </span>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          step="1"
          value={guests}
          onChange={handleGuestsChange}
          onBlur={() => handleBlur('guests')}
          placeholder="1-10"
          required
          aria-describedby={touched.guests && errors.guests ? "guests-error" : undefined}
          aria-invalid={touched.guests && errors.guests ? "true" : "false"}
          className={touched.guests && errors.guests ? "error" : ""}
        />
        {touched.guests && errors.guests && (
          <span id="guests-error" className="error-message" role="alert">
            {errors.guests}
          </span>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={handleOccasionChange}
          onBlur={() => handleBlur('occasion')}
          required
          aria-describedby={touched.occasion && errors.occasion ? "occasion-error" : undefined}
          aria-invalid={touched.occasion && errors.occasion ? "true" : "false"}
          className={touched.occasion && errors.occasion ? "error" : ""}
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {touched.occasion && errors.occasion && (
          <span id="occasion-error" className="error-message" role="alert">
            {errors.occasion}
          </span>
        )}
      </div>

      <button 
        type="submit" 
        className="submit-button"
        disabled={!isFormValid}
        aria-disabled={!isFormValid}
        aria-label="On Click"
      >
        Submit reservation
      </button>
    </form>
  );
}

export default BookingForm;

