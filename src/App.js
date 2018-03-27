import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Recipes from './recipes/Recipes';

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navigation />
          <Route exact path="/" component={Recipes} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
export default App;
