import React, { Component } from 'react';
import { Link } from "react-router-dom";


export class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="home__header">
          <span>
            Krez
          </span>
          <span>
            Freas
          </span>
          <span>
            Front end developer
          </span>
        </h1>
        <div className="home__bottom">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <a href="https://github.com/kmfreas" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    )
  }
};

export default Home;
