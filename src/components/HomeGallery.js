import React from 'react';
import HomeGalleryImage from './HomeGalleryImage';
import gallery from '../js/Gallery';


const HomeGallery = () => {
        return (
            <div className="homegallery">
            <div className="homegallery__image-container img1">
                <HomeGalleryImage className="img1" source={ require('../img/gallery/photo1.jpg') } />
            </div>
            <div className="homegallery__image-container img2">
                <HomeGalleryImage className="img2" source={ require('../img/gallery/photo2.jpg') } />
            </div>
            <div className="homegallery__image-container img3">
                <HomeGalleryImage className="img3" source={ require('../img/gallery/photo3.jpg') } />
            </div>

            </div>
        );
    };

export default HomeGallery;