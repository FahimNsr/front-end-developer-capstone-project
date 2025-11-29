import React, { memo } from 'react';
import './Chicago.css';

function Chicago() {
  return (
    <section className="chicago" aria-labelledby="chicago-heading">
      <div className="chicago-container">
        <div className="chicago-content">
          <div className="chicago-text">
            <h2 id="chicago-heading">Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              Little Lemon is owned by two Italian brothers, Mario and Adrian, 
              who moved to the United States to pursue their shared dream of owning 
              a restaurant.
            </p>
            <p>
              To craft the menu, Mario relies on family recipes and his experience 
              as a chef in Italy. Adrian does all the marketing for the restaurant 
              and led the effort to expand the menu beyond classic Italian to 
              incorporate additional cuisines from the Mediterranean region.
            </p>
          </div>
          <div className="chicago-images">
            <img 
              src="/images/Mario and Adrian A.jpg" 
              alt="Mario and Adrian, owners of Little Lemon restaurant" 
              className="chicago-image chicago-image-1"
              loading="lazy"
              decoding="async"
              width="300"
              height="300"
            />
            <img 
              src="/images/Mario and Adrian b.jpg" 
              alt="Mario and Adrian cooking in the Little Lemon kitchen" 
              className="chicago-image chicago-image-2"
              loading="lazy"
              decoding="async"
              width="300"
              height="300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Chicago);

