// Mock react-router-dom to avoid dependency issues
jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div data-testid="browser-router">{children}</div>,
  Routes: ({ children }) => <div data-testid="routes">{children}</div>,
  Route: ({ element }) => <div data-testid="route">{element}</div>,
  Link: ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>,
  useNavigate: () => jest.fn(),
}));

// Mock lazy-loaded components to avoid Suspense issues in tests
// These mocks must be defined before the Main component imports them
// React.lazy expects a promise, so we return a resolved promise with the component
jest.mock('./pages/HomePage/HomePage', () => {
  const HomePage = () => <div data-testid="home-page">HomePage</div>;
  return {
    __esModule: true,
    default: HomePage,
  };
});

jest.mock('./pages/BookingPage/BookingPage', () => {
  const BookingPage = () => <div data-testid="booking-page">BookingPage</div>;
  return {
    __esModule: true,
    default: BookingPage,
  };
});

jest.mock('./pages/ConfirmedBooking/ConfirmedBooking', () => {
  const ConfirmedBooking = () => <div data-testid="confirmed-booking">ConfirmedBooking</div>;
  return {
    __esModule: true,
    default: ConfirmedBooking,
  };
});

import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders the Little Lemon application', async () => {
    render(<App />);
    
    // Wait for Suspense to resolve
    await waitFor(() => {
      const appElement = document.querySelector('.App');
      expect(appElement).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  test('renders header component', async () => {
    render(<App />);
    
    // Wait for Suspense to resolve and check for header element
    await waitFor(() => {
      const headerElement = document.querySelector('header');
      expect(headerElement).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  test('renders footer component', async () => {
    render(<App />);
    
    // Wait for Suspense to resolve
    await waitFor(() => {
      const footerElement = document.querySelector('footer');
      expect(footerElement).toBeInTheDocument();
    }, { timeout: 3000 });
    
    // Check for footer text within footer element
    const footerText = await screen.findByText(/© 2024 Little Lemon Restaurant/i, {}, { timeout: 3000 });
    expect(footerText).toBeInTheDocument();
  });
});
