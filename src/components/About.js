import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';
import content from '../markdown/about.md';
import marked from 'marked';
// import profile from '../img/me.jpg';

export class About extends Component {
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
        {/* <img src={profile} alt=""/> */}
        <main className="content" dangerouslySetInnerHTML={{__html: this.state.markdown}}>
        </main>
      </Fragment>
    )
  }
};

export default About;
