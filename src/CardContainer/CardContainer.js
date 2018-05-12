import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = (props) => {
  const getCategory = (props) => {
    const propKeys = Object.keys(props);
    const sanitizedKeys = propKeys.slice(0, 4);

    return sanitizedKeys.find(category => props[category].length > 0);
  };

  const getData = (props) => {
    const dirtyData = props[getCategory(props)];
    if (dirtyData) {
      const cleanData = dirtyData.map((data, index) => {
        if (props.favorites.find(favorite => favorite.name === data.name)) {
          return ( 
            <Card
              key={index}
              id={`${getCategory(props)}-${index}` }
              {...data}
              type={getCategory(props)}
              favorites={props.favorites}
              addFavorite={props.addFavorite}
              removeFavorite={props.removeFavorite}
              isFavorite='true'
            />
          );
        } else {
          return (
            <Card
              key={index}
              id={`${getCategory(props)}-${index}`}
              {...data}
              type={getCategory(props)}
              favorites={props.favorites}
              addFavorite={props.addFavorite}
              removeFavorite={props.removeFavorite}
              isFavorite='false'
            />
          );
        } 
      });
      return cleanData;
    }
  };

  return (
    <div className="CardContainer">
      { getData(props) ? getData(props) : '' }
    </div>
  );
};

export default CardContainer;