import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  test('Renders the BookingForm heading', () => {
    const mockAvailableTimes = ['17:00', '18:00', '19:00'];
    const mockDispatch = jest.fn();
    
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
  });

  test('Renders all form fields', () => {
    const mockAvailableTimes = ['17:00', '18:00', '19:00'];
    const mockDispatch = jest.fn();
    
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    
    // Check for all form labels
    expect(screen.getByText("Choose date")).toBeInTheDocument();
    expect(screen.getByText("Choose time")).toBeInTheDocument();
    expect(screen.getByText("Number of guests")).toBeInTheDocument();
    expect(screen.getByText("Occasion")).toBeInTheDocument();
    expect(screen.getByText("Submit reservation")).toBeInTheDocument();
  });
});

