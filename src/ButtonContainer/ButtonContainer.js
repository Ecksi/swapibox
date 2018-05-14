import React from 'react';
import PropTypes from 'prop-types';
import './ButtonContainer.css';

const ButtonContainer = (props) => {
  return (
    <section className="buttonContainer">
      <span className="favoriteCounter">{props.favoritesCounter.length}</span>
      <button onClick={props.fetchData} className="favoritesButton"></button>
      <button onClick={props.fetchData} className="vehiclesButton"></button>
      <button onClick={props.fetchData} className="planetsButton"></button>
      <button onClick={props.fetchData} className="peopleButton"></button>
    </section>
  );
};

ButtonContainer.propTypes = {
  fetchData: PropTypes.func.isRequired,
  favoritesCounter: PropTypes.array.isRequired
};

export default ButtonContainer;