import React, { Component } from 'react';

import Logo from './Logo';
import SocialIcons from './SocialIcons';

class Header extends Component {
    state = {
        display: true
    }

  render() {
      if (this.state.display) {
          return (
              <React.Fragment>
              <Logo/>
              <SocialIcons />
            </React.Fragment>
          );

      }
  }
}

export default Header;
