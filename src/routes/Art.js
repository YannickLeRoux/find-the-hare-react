import React, { Component } from 'react';
import PropType from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { hideHeader, showHeader } from '../actions';

import ArtGallery from '../components/ArtGallery';

class Art extends Component {

  componentWillMount() {
    this.props.hideHeader();
  }

  // componentWillUnmount() {
  //   this.props.showHeader();
  // }


  render() {
    return (
      <React.Fragment>
        <ArtGallery />
      </React.Fragment>
    );

  }

};

Art.propTypes = {
  hideHeader: PropType.func.isRequired,
  showHeader: PropType.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ hideHeader, showHeader }, dispatch)
};



export default connect(null, mapDispatchToProps)(Art);