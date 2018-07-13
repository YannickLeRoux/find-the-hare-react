import React, { Component } from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';

import { connect } from 'react-redux';

import Frame from '../components/Frame';
import Canvas from '../components/Canvas';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import ArrowBack from '../components/ArrowBack';

import Home from '../routes/Home';
import About from '../routes/About';
import Art from '../routes/Art';
import Contact from '../routes/Contact';

class RootComponent extends Component {

  render() {

    const Main = () => (
      <Switch>
        <Route exact activeClassName="active" path="/" component={Home} />
        <Route exact activeClassName="active" path="/art" component={Art} />

        <Route exact activeClassName="active" path="/about" component={About} />
        <Route exact activeClassName="active" path="/contact" component={Contact} />
      </Switch>
    );

    return(
    <BrowserRouter>
      <Frame>
        <Canvas />
        { this.props.isHeaderVisible && <Header /> }
        { !this.props.isHeaderVisible && <ArrowBack />}
        <Main />
        <NavBar />
      </Frame>
    </BrowserRouter>

    );
  }
}

const mapStateToProps =(state) => {
  return { isHeaderVisible: state.header.isHeaderVisible }
}

export default connect(mapStateToProps)(RootComponent);
