import React from 'react';

const Frame = (props) => {
        return (
            <div className="main-container">
            {props.children}
            </div>
        )
    };

export default Frame;