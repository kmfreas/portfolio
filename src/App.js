import React, { Component } from 'react';
import './App.css';
import 'normalize.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </div>
      </Router>
    );
  }
}

export default App;
