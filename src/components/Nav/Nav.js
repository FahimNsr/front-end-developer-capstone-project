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
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={handleLinkClick}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/reservations" onClick={handleLinkClick}>
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/order" onClick={handleLinkClick}>
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={handleLinkClick}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default memo(Nav);

