import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="header-container">
        <div className="header-logo-wrapper">
          <Link to="/" aria-label="Little Lemon - Home" className="logo-link">
            <img 
              src="/images/Logo.svg" 
              alt="Little Lemon Logo"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </Link>
          <button
            className="hamburger-menu-button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
          >
            <div className="icon-container">
              {/* Hamburger Icon */}
              <svg 
                width="35" 
                height="25" 
                viewBox="0 0 35 25" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={`hamburger-icon ${isMenuOpen ? 'hidden' : ''}`}
              >
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M1.34615 0C0.6027 0 0 0.621833 0 1.38889C0 2.15594 0.6027 2.77778 1.34615 2.77778H33.6538C34.3972 2.77778 35 2.15594 35 1.38889C35 0.621833 34.3972 0 33.6538 0H1.34615ZM0 12.5C0 11.7329 0.6027 11.1111 1.34615 11.1111H33.6538C34.3972 11.1111 35 11.7329 35 12.5C35 13.2671 34.3972 13.8889 33.6538 13.8889H1.34615C0.6027 13.8889 0 13.2671 0 12.5ZM0 23.6111C0 22.8442 0.6027 22.2222 1.34615 22.2222H33.6538C34.3972 22.2222 35 22.8442 35 23.6111C35 24.3781 34.3972 25 33.6538 25H1.34615C0.6027 25 0 24.3781 0 23.6111Z" 
                  fill="currentColor"
                />
              </svg>
              
              {/* Cross/Close Icon */}
              <svg 
                width="35" 
                height="35" 
                viewBox="0 0 35 35" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={`close-icon ${isMenuOpen ? 'visible' : 'hidden'}`}
              >
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M17.5 15.7574L26.1213 7.13604C26.5118 6.74552 27.145 6.74552 27.5355 7.13604C27.926 7.52657 27.926 8.15973 27.5355 8.55026L18.9142 17.1716L27.5355 25.7929C27.926 26.1834 27.926 26.8166 27.5355 27.2071C27.145 27.5976 26.5118 27.5976 26.1213 27.2071L17.5 18.5858L8.87868 27.2071C8.48816 27.5976 7.85499 27.5976 7.46447 27.2071C7.07394 26.8166 7.07394 26.1834 7.46447 25.7929L16.0858 17.1716L7.46447 8.55026C7.07394 8.15973 7.07394 7.52657 7.46447 7.13604C7.85499 6.74552 8.48816 6.74552 8.87868 7.13604L17.5 15.7574Z" 
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
        </div>
        <Nav isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
      </div>
    </header>
  );
}

export default memo(Header);

