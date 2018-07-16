import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ArrowBack extends Component {

    render() {
        return (

            <NavLink to='/'>
            <div className="back-arrow">
            <i className="fas fa-angle-left"></i>
            <img src={ require('../img/logo/1-FTH-LogoW-TEXT-9x9.png') }
            style={{ width:'30px'}} />
            <span> Back to Homepage</span>
            </div>
            </NavLink>
        );
    }
};

export default ArrowBack;