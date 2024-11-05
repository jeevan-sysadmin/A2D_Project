import React from 'react';
import './InfoBoxes.css'; // Import CSS for styling

const InfoBoxes = ({ title, description }) => {
  return (
    <div className="info-box">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default InfoBoxes;
