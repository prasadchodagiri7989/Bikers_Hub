import React from 'react';
import '../styles/global.css'
const NewArrivals = ({ imageSrc, title, subText }) => {
  return (
    <div className="new-arrivals-box">
      <div className="image-container">
        <img src={imageSrc} alt={title} className="new-arrivals-image" />
        <div className="image-overlay">
          <div className="text-container">
            <h3 className="new-arrivals-title">{title}</h3>
            <p className="new-arrivals-subtext">{subText}</p>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
