import React, { memo } from 'react';
import CallToAction from '../../components/CallToAction/CallToAction';
import Specials from '../../components/Specials/Specials';
import CustomersSay from '../../components/CustomersSay/CustomersSay';
import Chicago from '../../components/Chicago/Chicago';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </div>
  );
}

export default memo(HomePage);

