import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = props => {
  const getCategory = props => {
    const propKeys = Object.keys(props);
    const sanitizedKeys = propKeys.slice(0, 4);

    return sanitizedKeys.find(category => props[category].length);
  };

  const getData = props => {
    const { favorites, addFavorite, removeFavorite } = props;
    const dirtyData = props[getCategory(props)];
    
    return dirtyData.map((data, index) => {
      let favoriteStatus = 
      Boolean(favorites.find(favorite => favorite.name === data.name));
      return ( 
        <Card
          key={index}
          id={`${getCategory(props)}-${index}` }
          {...data}
          type={getCategory(props)}
          favorites={favorites}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          isFavorite={favoriteStatus}
        />
      );
    });
  };

  return (
    <div className="CardContainer">
      { getCategory(props) ? getData(props) : '' }
    </div>
  );
};

CardContainer.propTypes = {
  people: PropTypes.array.isRequired,
  planets: PropTypes.array.isRequired,
  vehicles: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired
};

export default CardContainer;