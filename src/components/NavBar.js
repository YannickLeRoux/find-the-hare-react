import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';


const NavBar = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar">
        { console.log(props.location.pathname)}

        <ul className="navbar-nav">
          <li className="nav-item" role="presentation"><NavLink className="nav-link" activeClassName="active" to='/'>HOME</NavLink></li>
          <li className="nav-item" role="presentation"><NavLink className="nav-link" activeClassName="active" to='/art'>ART</NavLink></li>
          <li className="nav-item" role="presentation"><NavLink className="nav-link" activeClassName="active" to='/about'>ABOUT</NavLink></li>
          <li className="nav-item" role="presentation"><NavLink className="nav-link" activeClassName="active" to='/contact'>CONTACT</NavLink></li>
        </ul>
      </nav>

    </React.Fragment>
  );
};

export default withRouter(NavBar);