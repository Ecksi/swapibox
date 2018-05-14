import React from 'react';
import Favorite from '../Favorites/Favorites';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
  const cardType = (props) => {
    const sanitizedId = props.id.split('-')[0];

    if (sanitizedId === 'people') {
      return peopleCard(props);
    } else if (sanitizedId === 'planets') {
      return planetCard(props);
    } else if (sanitizedId === 'vehicles') {
      return vehicleCard(props);
    } 
  };

  const isFavorite = (props) => props.isFavorite ? true : false;

  const peopleCard = props => {
    const { id, name, homeworld, species, language, population } = props;

    return (
      <div id={id}>
        <h3>Name: {name}</h3>
        <h4>Homeworld: {homeworld}</h4>
        <h4>Species: {species}</h4>
        <h4>Language: {language}</h4>
        <h4>Population: {population}</h4>
      </div>
    );
  };

  const planetCard = props => {
    const { id, name, terrain, population, climate, residents } = props;

    return (
      <div id={id}>
        <h3>Name: {name}</h3>
        <h3>Terrain: {terrain}</h3>
        <h3>Population: {population}</h3>
        <h3>Climate: {climate}</h3>
        <h3>Residents: {residents}</h3>
      </div>
    );
  };

  const vehicleCard = props => {
    const { id, name, model, vehicleClass, passengers } = props;

    return (
      <div id={id}>
        <h3>Name: {name}</h3>
        <h3>Terrain: {model}</h3>
        <h3>Class: {vehicleClass}</h3>
        <h3>Climate: {passengers}</h3>
      </div>
    );
  };

  return (
    <div 
      className={ isFavorite(props) ? "favorite Card" : "Card" }
    >
      <Favorite 
        card={props}
        favorites={props.favorites}
        addFavorite={props.addFavorite}
        removeFavorite={props.removeFavorite}
      />
      {cardType(props)}
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  homeworld: PropTypes.string,
  species: PropTypes.string,
  language: PropTypes.string,
  population: PropTypes.string,
  terrain: PropTypes.string,
  climate: PropTypes.string,
  residents: PropTypes.array,
  model: PropTypes.string,
  vehicleClass: PropTypes.string,
  passengers: PropTypes.string,
  data: PropTypes.object,
  type: PropTypes.string.isRequired,
  favorites: PropTypes.array.isRequired,
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired

};

export default Card;
