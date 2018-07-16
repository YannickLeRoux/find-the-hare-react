import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showHeader } from '../actions/HeaderActions';

import HomeGallery from '../components/HomeGallery';
import '../App.css';

class Home extends Component {

  componentWillMount() {
    this.props.showHeader();
  }

  render() {
    return (
      <React.Fragment>
        <HomeGallery />
      </React.Fragment>
    );

  }

};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ showHeader }, dispatch)
};



export default connect(null,mapDispatchToProps)(Home);