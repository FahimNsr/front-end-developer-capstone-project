import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="header-container">
        <img src="/images/Logo.svg" alt="Little Lemon Logo" />
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

