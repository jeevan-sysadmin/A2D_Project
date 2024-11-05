// src/pages/InfoBoxesPage.js
import React from 'react';
import './InfoBoxesPage.css'; // Import CSS for styling

const InfoBoxesPage = () => {
  return (
    <div className="info-boxes-page">
      <h1 className="page-title">--------@ A2D PC Factory -------------</h1>
      <h2 className="subtitle">How Things Work</h2>
      <h3 className="customer-persona-title">BUILDING CUSTOMER PERSONA</h3>
      <p className="customer-persona-description">
        Building a customer persona is an essential step for our sales team to
        provide tailored PC solutions. A customer persona is a detailed
        representation of our ideal customer based on real data and insights
        gathered through direct interactions. By developing a comprehensive 
        understanding of our customers, we can better address their specific 
        needs, preferences, and pain points.
      </p>
      
      <div className="info-boxes-container">
        <div className="info-box">
          <h2>On Site Upto</h2>
          <p>1 Year Warranty</p>
        </div>
        <div className="info-box">
          <h2>In-House</h2>
          <p>48 Hours Testing</p>
        </div>
        <div className="info-box">
          <h2>Know The</h2>
          <p>Performance</p>
        </div>
        <div className="info-box">
          <h2>Pan India</h2>
          <p>Free Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBoxesPage;
