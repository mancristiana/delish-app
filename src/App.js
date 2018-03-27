import React, { Component } from 'react'
import logo from './assets/logo.svg';
import './App.css';
import { Button } from 'mdbreact';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Navigation from './Navigation';

const Home = () => (
  <div>
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <h1 className="app-title">Welcome to React</h1>
    </header>
    <h2>Home</h2>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
           <Button color="primary">Primary</Button>
    </p>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}
export default App