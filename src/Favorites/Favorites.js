import React from 'react';
import PropTypes from 'prop-types';
import './Favorites.css';

const Favorites = (props) => {
  const addToFavorites = () => {
    const { card, favorites } = props;

    favorites.find(favorite => favorite.name === card.name) ?
      props.removeFavorite(card) :
      props.addFavorite(card);
  };

  return (
    <div>
      <button
        onClick={addToFavorites}
        className="favoriteButton"
      >
      </button>
    </div>
  );
};

Favorites.propTypes = {
  card: PropTypes.object.isRequired,
  favorites: PropTypes.array.isRequired,
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired
};

export default Favorites;