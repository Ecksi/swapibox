import React, { Component } from 'react';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import TextCrawl from '../TextCrawl/TextCrawl';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonContainer />
        <TextCrawl />
      </div>
    );
  }
}

export default App;
