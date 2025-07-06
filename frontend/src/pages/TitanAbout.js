import React from 'react';
import './About.css';

const TitanAbout = ({ name, description, visible }) => {
  return (
    <div className={`titan-about-component ${visible ? 'show' : ''}`}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TitanAbout;
