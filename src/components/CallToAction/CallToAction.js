import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

function CallToAction() {
  return (
    <section className="call-to-action" aria-labelledby="cta-heading">
      <div className="cta-content">
        <div className="cta-text">
          <h1 id="cta-heading">Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional 
            recipes served with a modern twist.
          </p>
          <Link to="/reservations" aria-label="Reserve a table at Little Lemon restaurant">
            <button className="cta-button" aria-label="Reserve a table">Reserve a Table</button>
          </Link>
        </div>
        <div className="cta-image">
          <img 
            src="/images/restauranfood.jpg" 
            alt="Delicious Mediterranean dishes at Little Lemon restaurant"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width="400"
            height="400"
          />
        </div>
      </div>
    </section>
  );
}

export default memo(CallToAction);

