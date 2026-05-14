import React from 'react';
import './ScrollIndicator.css';

const ScrollIndicator = () => {
  return (
    <div className="scroll-indicator-container">
      <span className="scroll-text">SCROLL</span>
      <div className="scroll-line-wrapper">
        <div className="scroll-line"></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
