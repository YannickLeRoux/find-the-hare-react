import React, { Component } from 'react';

import PropType from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { showHeader } from '../actions';

import ContactForm from '../components/ContactForm';

class Contact extends Component {
  componentWillMount() {
    this.props.showHeader();
  }
  render() {

    return (
      <React.Fragment>
        <div className="text-container">
          <h2>Contact Lauren: </h2>
          <ContactForm />
        </div>
      </React.Fragment>
    );
  }

};


Contact.propTypes = {
  showHeader: PropType.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ showHeader }, dispatch)
};



export default connect(null, mapDispatchToProps)(Contact);