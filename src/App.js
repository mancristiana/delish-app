import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation';
import { Recipes, Ingredients } from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navigation />
          <div className="container">
            <Route exact path="/" component={Recipes} />
            <Route path="/ingredients" component={Ingredients} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
