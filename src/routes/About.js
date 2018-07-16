import React, { Component } from 'react';

import PropType from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { hideHeader } from '../actions';

class About extends Component {
  componentWillMount() {
    this.props.hideHeader();
  }

  render() {
    return (
      <React.Fragment>
        <div className="text-container">
        <img src={require('../img/gallery/portrait-lauren.jpg')} alt="portrait lauren" className="about-portrait" />
        <h1 className="about-headline1">FIND THE HARE </h1>
        <h2 className="about-headline2"> is a self-portrait photography project by the artist Lauren Turton.</h2>
        <div className="about-paragraph">Growing up in the suburbs of Dayton. Ohio, while spending the weekends frolicking in the rivers
        - and mountains of West Virignia, Turton always had curiosity and a
        passion for anything involving the art world.
        </div><br/>

        <h2 className="about-headline2">In 2010, Turton was introduced to self-portrait photographers and
        took an interest in the originality and challenge of the art form.
        </h2>
        <div className="about-paragraph">In
        her ﬁrst attempt at self-portait work, Turton took off her clothes in an abandoned warehouse while setting up her tripod and
        camera and documented herself running through the dark space.
        Later, while editing the photographs, she realized her essence in the
        images was more aligned with that of a hare than a human. This
        spawned a new found journey into an animal / human symbiosis.
        </div><br/>

        <h2 className="about-headline2">Turton loves to document her life and travels through self-portraits
        and currently resides in San Diego, California.
        </h2>
        <div className="about-paragraph">She has a boutique
        consulting agency, You’re Pretty Magic. which specializes in
        event marketing. advertising and creative services. She is also a
        project manager for Ianice Dodge Inc., an event production
        company. Lauren has a love for house music, her dog Luckie and
        all things unconventional and strange.
        </div><br/>

        <h2 className="about-headline2">The project Find The Hare is her form of self-expression.</h2>
        <div className="about-paragraph">When traveling with the rabbit mask she can transform into
        another character without feeling self-conscious. Figuring out
        where to place the camera is fascinating to Turton and she loves
        ﬁnding ways to create a successful self-portrait. Find The Hare
        is a project of fun and amusement for Lauren to challenge herself
        as an artist, to capture beauty in interesting places and live the fail
        tale of becoming something other than herself.
        </div><br/>
        </div>
      </React.Fragment>
    );

  }

};

About.propTypes = {
  hideHeader: PropType.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ hideHeader }, dispatch)
};



export default connect(null, mapDispatchToProps)(About);