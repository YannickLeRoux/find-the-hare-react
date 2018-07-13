import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ArrowBack extends Component {

    render() {
        return (
            <NavLink to='/home'>
            <div className="back-arrow">
            <i className="fas fa-angle-left"></i>
            <span> Back to Homepage</span>
            </div>
            </NavLink>
        );
    }
};

export default ArrowBack;