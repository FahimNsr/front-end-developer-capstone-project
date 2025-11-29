import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav({ isMenuOpen, closeMenu }) {
  const handleLinkClick = () => {
    // Close menu when a link is clicked (mobile only)
    if (window.innerWidth < 998) {
      closeMenu();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleLinkClick();
    }
  };

  return (
    <>
      {/* Mobile menu overlay */}
      <div 
        className={`nav-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      
      <nav 
        id="main-navigation"
        className={isMenuOpen ? 'open' : ''}
        aria-label="Main navigation"
      >
        <ul>
          <li>
            <Link to="/" onClick={handleLinkClick} onKeyDown={handleKeyDown} aria-label="Navigate to Home page">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick} onKeyDown={handleKeyDown} aria-label="Navigate to About page">
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={handleLinkClick} onKeyDown={handleKeyDown} aria-label="Navigate to Menu page">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/reservations" onClick={handleLinkClick} onKeyDown={handleKeyDown} aria-label="Navigate to Reservations page">
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/order" onClick={handleLinkClick} onKeyDown={handleKeyDown} aria-label="Navigate to Order Online page">
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={handleLinkClick} onKeyDown={handleKeyDown} aria-label="Navigate to Login page">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default memo(Nav);

