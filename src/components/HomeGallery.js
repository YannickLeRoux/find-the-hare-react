import React, { Component } from 'react';
import HomeGalleryImage from './HomeGalleryImage';


class HomeGallery extends Component {
    render() {
        return (
          <div className="homegallery">
            <div className="homegallery__image-container img1">
              <HomeGalleryImage
                className="img1"
                sourceFront={ require('../img/gallery/photo1.jpg') }
                sourceBack={ require('../img/gallery/photo4.jpg') }
                />
            </div>
            <div className="homegallery__image-container img2">
              <HomeGalleryImage
                className="img2"
                sourceFront={ require('../img/gallery/photo2.jpg') }
                sourceBack={ require('../img/gallery/photo5.jpg') }
                />
            </div>
            <div className="homegallery__image-container img3">
              <HomeGalleryImage
                className="img3"
                sourceFront={ require('../img/gallery/photo3.jpg') }
                sourceBack={ require('../img/gallery/photo7.jpg') }
                />
            </div>

          </div>
        );

    }
}

export default HomeGallery;