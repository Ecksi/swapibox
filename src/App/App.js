import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import TextCrawl from '../TextCrawl/TextCrawl';
import { fetchPeople, fetchPlanets, fetchVehicles } from '../ApiCalls/ApiCalls';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      people: '',
      planets: '',
      vehicles: '',
      favorites: []
    };
   
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData (event) {
    event.preventDefault();
    if (event.target.innerText === 'People') {
      return this.peopleData();
    } else if (event.target.innerText === 'Planets') {
      return this.planetData();
    } else if (event.target.innerText === 'Vehicles') {
      return this.vehicleData();
    } else if (event.target.innerText.split(' ')[0] === 'Favorites') {
      return this.showFavorites();
    }
  }

  async peopleData () {
    this.setState({
      people: await fetchPeople(),
      planets: '',
      vehicles: ''
    });
  }

  async planetData () {
    this.setState({
      people: '',
      planets: await fetchPlanets(),
      vehicles: ''
    });
  }

  async vehicleData () {
    this.setState({
      people: '',
      planets: '',
      vehicles: await fetchVehicles()
    });
  }

  showFavorites = () => {
    this.setState({
      people: '',
      planets: '',
      vehicles: ''
    });
  }

  addToFavorites = (card) => {
    this.setState({
      favorites: [card, ...this.state.favorites]
    });
  }

  removeFromFavorites = (card) => {
    const getIndex = this.state.favorites.findIndex(favorite => favorite.id === card.id);

    this.state.favorites.splice(getIndex, 1);

    this.setState ({
      favorites: [...this.state.favorites]
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.fetchData}>People</button>
        <button onClick={this.fetchData}>Planets</button>
        <button onClick={this.fetchData}>Vehicles</button>
        <button onClick={this.fetchData}>Favorites {this.state.favorites.length}</button>
        <CardContainer 
          people={this.state.people}
          planets={this.state.planets}
          vehicles={this.state.vehicles}
          favorites={this.state.favorites}
          addFavorite={this.addToFavorites}
          removeFavorite={this.removeFromFavorites}
        />
        <TextCrawl />
      </div>
    );
  }
}

export default App;
