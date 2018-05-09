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
    const { title, episode_id, opening_crawl } = this.state.textCrawl;

    return (
      <div className="TextCrawl">
        <h2 className="filmTitle">{title}</h2>
        <h3 className="filmEpisode">Episode {episode_id}</h3>
        <p className="filmCrawl">{opening_crawl}</p>
      </div>
    );
  }
}

export default TextCrawl;