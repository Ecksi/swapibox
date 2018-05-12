import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import TextCrawl from '../TextCrawl/TextCrawl';
import { fetchPeople, fetchPlanets, fetchVehicles } from '../ApiCalls/ApiCalls';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.fetchData}>People</button>
        <button onClick={this.fetchData}>Planets</button>
        <button onClick={this.fetchData}>Vehicles</button>
        <button>Favorites</button>
        <CardContainer 
          people={this.state.people}
          planets={this.state.planets}
          vehicles={this.state.vehicles}
        />
        <TextCrawl />
      </div>
    );
  }
}

export default App;
