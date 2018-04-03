import React, { Component, Fragment } from 'react';
import { Route } from 'react-router';
import { ConnectedRouter as Router } from 'react-router-redux';
import Navigation from './navigation/Navigation';
import { Recipes, Ingredients } from './views';

class App extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Fragment>
          <Navigation />
          <div className="container">
            <Route exact path="/" component={Recipes} />
            <Route path="/ingredients" component={Ingredients} />
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
