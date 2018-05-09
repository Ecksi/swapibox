import React, { Component } from 'react';
import './TextCrawl.css';

class TextCrawl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textCrawl: ''
    };
  }

  componentDidMount = async () => {
    const randomNumber = Math.floor((Math.random() * 7));
    const url = 'https://swapi.co/api/films/';
    const response = await fetch(url);
    const data = await response.json();
    const textCrawl = data.results[randomNumber];
  
    this.setState({ textCrawl });
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