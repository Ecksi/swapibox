import React from 'react';
import Favorite from '../Favorites/Favorites';
import './Card.css';

const Card = (props) => {
  const cardType = (props) => {
    if (props.id.split('-')[0] === 'people') {
      return peopleCard(props);
    } else if (props.id.split('-')[0] === 'planets') {
      return planetCard(props);
    } else if (props.id.split('-')[0] === 'vehicles') {
      return vehicleCard(props);
    } 
  };

  const isFavorite = (props) => {
    if (props.isFavorite === "true") {
      return true;
    }
  };

  const peopleCard = props => {
    return (
      <div id={props.id}>
        <h3>Name: {props.name}</h3>
        <h4>Homeworld: {props.homeworld}</h4>
        <h4>Species: {props.species}</h4>
        <h4>Language: {props.language}</h4>
        <h4>Population: {props.population}</h4>
      </div>
    );
  };

  const planetCard = props => {
    return (
      <div id={props.id}>
        <h3>Name: {props.name}</h3>
        <h3>Terrain: {props.terrain}</h3>
        <h3>Population: {props.population}</h3>
        <h3>Climate: {props.climate}</h3>
        <h3>Residents: {props.residents}</h3>
      </div>
    );
  };

  const vehicleCard = props => {
    return (
      <div id={props.id}>
        <h3>Name: {props.name}</h3>
        <h3>Terrain: {props.model}</h3>
        <h3>Class: {props.class}</h3>
        <h3>Climate: {props.passengers}</h3>
      </div>
    );
  };

  return (
    <div 
      className={ isFavorite(props) ? "favorite Card" : "Card" }
    >
      { cardType(props) }
      <Favorite 
        card={props}
        favorites={props.favorites}
        addFavorite={props.addFavorite}
        removeFavorite={props.removeFavorite}
      />
    </div>
  );
};

export default Card;
