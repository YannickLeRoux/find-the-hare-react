import React, { Component } from 'react';


import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import './App.css';
import './fonts/font-awesome.min.css';

import RootComponent from './containers/RootComponent';

import { animateSocialIcons, animateCanvas } from './js/myScript';


class App extends Component {

  componentDidMount() {
    animateSocialIcons();
    animateCanvas();
  }

  render() {


    const store = createStore(reducers);

    return (
      <Provider store={ store}>
          <div className="App">
            <RootComponent />
          </div>
      </Provider>
    );
  }
}


export default App;
