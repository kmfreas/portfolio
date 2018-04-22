import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';
import content from '../markdown/projects.md';
import marked from 'marked';

export class Projects extends Component {
  state = {
    markdown: '',
  }
  componentWillMount() {
    fetch(content)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          markdown: marked(text),
        });
      });
  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <main className="content portfolio" dangerouslySetInnerHTML={{__html: this.state.markdown}}>
        </main>
      </Fragment>
    )
  }
};

export default Projects;
