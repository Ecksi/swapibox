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
    const response = await fetch('https://swapi.co/api/films/');
    const data = await response.json();
    const textCrawl = data.results[randomNumber];

    this.setState({ textCrawl });
  }

  render() {
    const { title, episode_id, opening_crawl } = this.state.textCrawl;

    return (
      <div className="TextCrawl">
        <section className="star-wars">
          <div className="crawl">
            <div className="title">
              <p>Episode {episode_id}</p>
              <h1>{title}</h1>
            </div>
            <p>{opening_crawl}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default TextCrawl;