// Mock react-router-dom to avoid dependency issues
jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div data-testid="browser-router">{children}</div>,
  Routes: ({ children }) => <div data-testid="routes">{children}</div>,
  Route: ({ element }) => <div data-testid="route">{element}</div>,
  Link: ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>,
  useNavigate: () => jest.fn(),
}));

import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders the Little Lemon application', () => {
    render(<App />);
    
    // Check that the app structure is rendered
    const appElement = document.querySelector('.App');
    expect(appElement).toBeInTheDocument();
  });

  test('renders header component', () => {
    render(<App />);
    
    // Check for header element
    const headerElement = document.querySelector('header');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders footer component', () => {
    render(<App />);
    
    // Check for footer element
    const footerElement = document.querySelector('footer');
    expect(footerElement).toBeInTheDocument();
    
    // Check for footer text within footer element
    const footerText = screen.getByText(/© 2024 Little Lemon Restaurant/i);
    expect(footerText).toBeInTheDocument();
  });
});
