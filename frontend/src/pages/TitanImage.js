import React from 'react';
import './About.css';

const TitanImage = ({ src, alt }) => {
  return (
    <div className="titan-image-component">
      <img src={src} alt={alt} />
    </div>
  );
};

export default TitanImage;
