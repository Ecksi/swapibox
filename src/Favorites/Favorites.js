import React from 'react';

const Favorites = (props) => {
  const addToFavorites = () => {
    if (props.favorites) {
      if (!props.favorites.find(favorite => favorite.name === props.card.name)) {
        props.addFavorite(props.card);
      } else {
        props.removeFavorite(props.card);
      }
    }
  };

  return (
    <div>
      <button
        onClick={addToFavorites}
      >
      Add to Favorites
      </button>
    </div>
  );
};

export default Favorites;