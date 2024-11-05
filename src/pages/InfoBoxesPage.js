// src/pages/InfoBoxesPage.js
import React from 'react';
import './InfoBoxesPage.css';
import warrantyLogo from '../assets/logo/1year.png'; // Import the warranty logo
import Hours from '../assets/logo/48.png'; // Import the hours logo
import order from '../assets/logo/order.png'; // Import the order logo
import free from '../assets/logo/free.png'; // Import the order logo




const InfoBoxesPage = () => {
  return (
    <div className="info-boxes-container">
      <div className="info-box">
      <img src={warrantyLogo} alt="1 Year Warranty Logo" className="warranty-logo" />
        <h2>On Site Upto 1 Year</h2>
        <h3>Warranty</h3>
      </div>
      <div className="info-box">
      <img src={Hours} alt="1 Year Hours Logo" className="warranty-logo" />
        <h2>In-House 48 Hours</h2>
        <h3>Testing</h3>
      </div>
      <div className="info-box">
      <img src={order} alt="1 Year order Logo" className="warranty-logo" />
        <h2>Know The Performance</h2>
        <h3>Place the order</h3>
      </div>
      <div className="info-box">
      <img src={free} alt="1 Year free Logo" className="warranty-logo" />
        <h2>Pan India Free</h2>
        <h3>Delivery</h3>
      </div>
    </div>
  );
};

export default InfoBoxesPage;
