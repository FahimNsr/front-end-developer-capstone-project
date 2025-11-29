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
    
    // Check for footer text
    const footerText = screen.getByText(/Little Lemon/i);
    expect(footerText).toBeInTheDocument();
  });
});
