import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showHeader } from '../actions/HeaderActions';

import HomeGallery from '../components/HomeGallery';
import '../App.css';

const Home = () => {
  return (
    <React.Fragment>
      <HomeGallery />
    </React.Fragment>
  );

};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ showHeader }, dispatch)
};

const mapStateToProps = (state) => {
  return { isHeaderVisible: state.header.isHeaderVisible };
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);