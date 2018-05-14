import React, { Component } from 'react';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import CardContainer from '../CardContainer/CardContainer';
import TextCrawl from '../TextCrawl/TextCrawl';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import fetchData from '../ApiCalls/ApiCalls';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      loading: false,
      loadScreen: ''
    };
   
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData (event) {
    event.preventDefault();
    const targetClass = event.target.classList[0].split('Button')[0];

    this.setState({
      loading: true,
      loadScreen: targetClass
    });

    if (targetClass === 'people') {
      this.peopleData();
    } else if (targetClass === 'planets') {
      this.planetData();
    } else if (targetClass === 'vehicles') {
      this.vehicleData();
    } else if (targetClass === 'favorites') {
      this.favoritesData();
    }
  }

  async peopleData () {
    this.setState({
      people: await fetchData('people'),
      planets: [],
      vehicles: [],
      loading: false
    });
  }

  async planetData () {
    this.setState({
      people: [],
      planets: await fetchData('planets'),
      vehicles: [],
      loading: false
    });
  }

  async vehicleData () {
    this.setState({
      people: [],
      planets: [],
      vehicles: await fetchData('vehicles'),
      loading: false
    });
  }

  favoritesData () {
    this.setState({
      people: [],
      planets: [],
      vehicles: [],
      loading: false
    });
  }

  addToFavorites = (card) => {
    this.setState({
      favorites: [card, ...this.state.favorites]
    });
  }

  removeFromFavorites = (card) => {
    const favorites = this.state.favorites;
    const getIndex = favorites.findIndex(favorite => favorite.id === card.id);

    favorites.splice(getIndex, 1);

    this.setState({
      favorites: [...favorites]
    });
  }

  render() {
    const loadingScreen = <Loading 
      loadScreen={this.state.loadScreen}
    />;
    const loadedScreen = <CardContainer
      people={this.state.people}
      planets={this.state.planets}
      vehicles={this.state.vehicles}
      favorites={this.state.favorites}
      addFavorite={this.addToFavorites}
      removeFavorite={this.removeFromFavorites}
    />;

    return (
      <div className="App">
        <Header />
        <ButtonContainer 
          fetchData={this.fetchData}
          favoritesCounter={this.state.favorites}
        />
        <main className="mainArea">
          <div className="scrollWrap">
            <TextCrawl />
          </div>
          <div className="loadingWrap">
            { this.state.loading ? loadingScreen : loadedScreen }
          </div>
        </main>
      </div>
    );
  }
}

export default App;
