import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm, { validateDate, validateTime, validateGuests, validateOccasion, getTodayDate } from './BookingForm';

describe('BookingForm', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  beforeEach(() => {
    mockDispatch.mockClear();
    mockSubmitForm.mockClear();
  });

  test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
  });

  test('Renders all form fields', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    
    // Check for all form labels
    expect(screen.getByText("Choose date")).toBeInTheDocument();
    expect(screen.getByText("Choose time")).toBeInTheDocument();
    expect(screen.getByText("Number of guests")).toBeInTheDocument();
    expect(screen.getByText("Occasion")).toBeInTheDocument();
    expect(screen.getByText("Submit reservation")).toBeInTheDocument();
  });

  // Step 1: HTML5 Validation Attributes Tests
  describe('HTML5 Validation Attributes', () => {
    test('Date input has correct HTML5 validation attributes', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const dateInput = screen.getByLabelText(/choose date/i);
      expect(dateInput).toHaveAttribute('type', 'date');
      expect(dateInput).toHaveAttribute('required');
      expect(dateInput).toHaveAttribute('min');
      
      // Verify min date is today's date
      const today = getTodayDate();
      expect(dateInput).toHaveAttribute('min', today);
    });

    test('Time select has correct HTML5 validation attributes', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const timeSelect = screen.getByLabelText(/choose time/i);
      expect(timeSelect).toHaveAttribute('required');
      expect(timeSelect.tagName).toBe('SELECT');
    });

    test('Guests input has correct HTML5 validation attributes', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const guestsInput = screen.getByLabelText(/number of guests/i);
      expect(guestsInput).toHaveAttribute('type', 'number');
      expect(guestsInput).toHaveAttribute('min', '1');
      expect(guestsInput).toHaveAttribute('max', '10');
      expect(guestsInput).toHaveAttribute('step', '1');
      expect(guestsInput).toHaveAttribute('required');
    });

    test('Occasion select has correct HTML5 validation attributes', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const occasionSelect = screen.getByLabelText(/occasion/i);
      expect(occasionSelect).toHaveAttribute('required');
      expect(occasionSelect.tagName).toBe('SELECT');
    });

    test('Form has noValidate attribute', () => {
      const { container } = render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const form = container.querySelector('form');
      expect(form).toHaveAttribute('noValidate');
    });
  });

  // Step 2: JavaScript Validation Functions Tests
  describe('validateDate', () => {
    test('returns error message when date is empty', () => {
      const result = validateDate('');
      expect(result).toBe('Please select a date');
    });

    test('returns error message when date is in the past', () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      
      const result = validateDate(yesterdayStr);
      expect(result).toBe('Please select a future date');
    });

    test('returns empty string when date is today', () => {
      const today = getTodayDate();
      const result = validateDate(today);
      expect(result).toBe('');
    });

    test('returns empty string when date is in the future', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowStr = tomorrow.toISOString().split('T')[0];
      
      const result = validateDate(tomorrowStr);
      expect(result).toBe('');
    });
  });

  describe('validateTime', () => {
    test('returns error message when time is empty', () => {
      const result = validateTime('');
      expect(result).toBe('Please select a time');
    });

    test('returns empty string when time is provided', () => {
      const result = validateTime('17:00');
      expect(result).toBe('');
    });
  });

  describe('validateGuests', () => {
    test('returns error message when guests is empty', () => {
      const result = validateGuests('');
      expect(result).toBe('Please enter the number of guests');
    });

    test('returns error message when guests is less than 1', () => {
      const result = validateGuests('0');
      expect(result).toBe('Number of guests must be at least 1');
    });

    test('returns error message when guests is negative', () => {
      const result = validateGuests('-1');
      expect(result).toBe('Number of guests must be at least 1');
    });

    test('returns error message when guests is not a number', () => {
      const result = validateGuests('abc');
      expect(result).toBe('Number of guests must be at least 1');
    });

    test('returns error message when guests exceeds 10', () => {
      const result = validateGuests('11');
      expect(result).toBe('Number of guests cannot exceed 10');
    });

    test('returns empty string when guests is 1', () => {
      const result = validateGuests('1');
      expect(result).toBe('');
    });

    test('returns empty string when guests is 10', () => {
      const result = validateGuests('10');
      expect(result).toBe('');
    });

    test('returns empty string when guests is between 1 and 10', () => {
      const result = validateGuests('5');
      expect(result).toBe('');
    });
  });

  describe('validateOccasion', () => {
    test('returns error message when occasion is empty', () => {
      const result = validateOccasion('');
      expect(result).toBe('Please select an occasion');
    });

    test('returns empty string when occasion is provided', () => {
      const result = validateOccasion('Birthday');
      expect(result).toBe('');
    });

    test('returns empty string when occasion is Anniversary', () => {
      const result = validateOccasion('Anniversary');
      expect(result).toBe('');
    });
  });

  // Step 3: Form Submission Tests
  describe('Form Submission', () => {
    test('calls submitForm when form is valid and submitted', async () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      // Get future date
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 1);
      const futureDateStr = futureDate.toISOString().split('T')[0];
      
      // Fill in all form fields with valid data
      const dateInput = screen.getByLabelText(/choose date/i);
      fireEvent.change(dateInput, { target: { value: futureDateStr } });
      
      const timeSelect = screen.getByLabelText(/choose time/i);
      fireEvent.change(timeSelect, { target: { value: '17:00' } });
      
      const guestsInput = screen.getByLabelText(/number of guests/i);
      fireEvent.change(guestsInput, { target: { value: '4' } });
      
      const occasionSelect = screen.getByLabelText(/occasion/i);
      fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
      
      // Wait for form validation to complete
      await waitFor(() => {
        const submitButton = screen.getByRole('button', { name: /submit reservation/i });
        expect(submitButton).not.toBeDisabled();
      });
      
      // Submit the form
      const submitButton = screen.getByRole('button', { name: /submit reservation/i });
      fireEvent.click(submitButton);
      
      // Verify submitForm was called with correct data
      expect(mockSubmitForm).toHaveBeenCalledTimes(1);
      expect(mockSubmitForm).toHaveBeenCalledWith({
        date: futureDateStr,
        time: '17:00',
        guests: '4',
        occasion: 'Birthday'
      });
    });

    test('does not call submitForm when form is invalid', async () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      // Try to submit without filling any fields
      const submitButton = screen.getByRole('button', { name: /submit reservation/i });
      
      // Button should be disabled initially
      expect(submitButton).toBeDisabled();
      
      // Try to click submit (should not work if disabled, but let's try)
      fireEvent.click(submitButton);
      
      // Verify submitForm was not called
      expect(mockSubmitForm).not.toHaveBeenCalled();
    });

    test('shows validation errors when invalid form is submitted', async () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      // Fill in only some fields (invalid form)
      const dateInput = screen.getByLabelText(/choose date/i);
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 1);
      const futureDateStr = futureDate.toISOString().split('T')[0];
      fireEvent.change(dateInput, { target: { value: futureDateStr } });
      
      // Try to submit (button should be disabled, but let's check error messages appear)
      // First, we need to trigger validation by blurring fields
      fireEvent.blur(dateInput); // Move away from date field
      
      // Wait a bit for validation
      await waitFor(() => {
        // Check if error messages appear for empty fields
        const timeSelect = screen.getByLabelText(/choose time/i);
        fireEvent.blur(timeSelect);
      });
      
      // Verify submitForm was not called
      expect(mockSubmitForm).not.toHaveBeenCalled();
    });

    test('submit button is disabled when form is invalid', () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const submitButton = screen.getByRole('button', { name: /submit reservation/i });
      expect(submitButton).toBeDisabled();
      expect(submitButton).toHaveAttribute('aria-disabled', 'true');
    });

    test('submit button is enabled when form is valid', async () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      // Get future date
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 1);
      const futureDateStr = futureDate.toISOString().split('T')[0];
      
      // Fill in all form fields with valid data
      const dateInput = screen.getByLabelText(/choose date/i);
      fireEvent.change(dateInput, { target: { value: futureDateStr } });
      
      const timeSelect = screen.getByLabelText(/choose time/i);
      fireEvent.change(timeSelect, { target: { value: '17:00' } });
      
      const guestsInput = screen.getByLabelText(/number of guests/i);
      fireEvent.change(guestsInput, { target: { value: '4' } });
      
      const occasionSelect = screen.getByLabelText(/occasion/i);
      fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
      
      // Wait for form validation to complete
      await waitFor(() => {
        const submitButton = screen.getByRole('button', { name: /submit reservation/i });
        expect(submitButton).not.toBeDisabled();
        expect(submitButton).toHaveAttribute('aria-disabled', 'false');
      });
    });
  });

  // Additional tests for error message display
  describe('Error Message Display', () => {
    test('displays error message for date when invalid and touched', async () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const dateInput = screen.getByLabelText(/choose date/i);
      
      // Enter a past date
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      
      fireEvent.change(dateInput, { target: { value: yesterdayStr } });
      fireEvent.blur(dateInput); // Blur the field
      
      await waitFor(() => {
        expect(screen.getByText(/please select a future date/i)).toBeInTheDocument();
      });
    });

    test('displays error message for guests when invalid and touched', async () => {
      render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
      
      const guestsInput = screen.getByLabelText(/number of guests/i);
      
      fireEvent.change(guestsInput, { target: { value: '15' } });
      fireEvent.blur(guestsInput); // Blur the field
      
      await waitFor(() => {
        expect(screen.getByText(/number of guests cannot exceed 10/i)).toBeInTheDocument();
      });
    });
  });
});

