import React from 'react';


const HomeGalleryImage = ({ sourceFront, sourceBack }) => {
  return (
    <div className="flip-container">
      <div className="flipper">
        <div className="front">
          <img src={ sourceFront } className="homegallery__image" alt="" />
        </div>
        <div className="back">
          <img src={ sourceBack } className="homegallery__image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeGalleryImage;