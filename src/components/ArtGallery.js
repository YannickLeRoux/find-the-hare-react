import React, { Component } from 'react';
import gallery from '../js/Gallery';
import '../css/Gallery.css';

class ArtGallery extends Component {
  componentDidMount() {
    gallery();

  }
  render() {
    return (
      <React.Fragment>
        <div className="overlay">
          <div className="overlay-inner">
            <button className="closeit">× Close</button>
            <img className="overlay-img" alt=""/>
          </div>
        </div>
        <section className="gallery">
        </section>
      </React.Fragment>

    );
  }
}

export default ArtGallery;