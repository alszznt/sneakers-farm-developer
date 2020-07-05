import React from 'react';

import './green-button.css';

const GreenButton = ({ value }) => {

  return (
    <div className = "wrapper-green-button">
        <div className = "green-button">
            <div className = "green-button-icon" />
            <div className = "green-button-text">{ value }</div>
        </div>
    </div>
  );
};

export default GreenButton;
