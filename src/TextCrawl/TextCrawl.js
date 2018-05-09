import React, { Component } from 'react';
import './TextCrawl.css';

class TextCrawl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textCrawl: ''
    };
  }
  
  render() {
    return (
      <div>
        <h2></h2>
        <h3></h3>
        <p></p>
      </div>
    );
  }
}

export default TextCrawl;