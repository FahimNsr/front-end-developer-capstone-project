import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="cta-content">
        <div className="cta-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional 
            recipes served with a modern twist.
          </p>
          <Link to="/reservations" aria-label="On Click">
            <button className="cta-button" aria-label="On Click">Reserve a Table</button>
          </Link>
        </div>
        <div className="cta-image">
          <img 
            src="/images/restauranfood.jpg" 
            alt="Restaurant food"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}

export default memo(CallToAction);

