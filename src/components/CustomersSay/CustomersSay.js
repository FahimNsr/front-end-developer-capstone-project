import React, { memo } from 'react';
import './CustomersSay.css';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    rating: 5,
    review: 'Little Lemon is my favorite restaurant in Chicago! The food is always fresh and delicious.',
    image: '/images/Mario and Adrian A.jpg'
  },
  {
    id: 2,
    name: 'Jane Smith',
    rating: 5,
    review: 'Amazing Mediterranean cuisine with a modern twist. Highly recommend the Greek Salad!',
    image: '/images/Mario and Adrian b.jpg'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    rating: 4,
    review: 'Great atmosphere and excellent service. The bruschetta is to die for!',
    image: '/images/restaurant chef B.jpg'
  },
  {
    id: 4,
    name: 'Sarah Williams',
    rating: 5,
    review: 'The best restaurant experience I\'ve had in a while. Will definitely come back!',
    image: '/images/restaurant.jpg'
  }
];

const renderStars = (rating) => {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating);
};

function CustomersSay() {

  return (
    <section className="customers-say">
      <div className="customers-say-container">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial) => (
            <article key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <div className="testimonial-customer">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="customer-image"
                  loading="lazy"
                  decoding="async"
                />
                <span className="customer-name">{testimonial.name}</span>
              </div>
              <p className="testimonial-review">{testimonial.review}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(CustomersSay);

