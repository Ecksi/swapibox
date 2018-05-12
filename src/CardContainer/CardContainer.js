import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = (props) => {
  const getCategory = (props) => {
    const propKeys = Object.keys(props);

    return propKeys.find(category => props[category].length > 0);
  };

  const getData = (props) => {
    const dirtyData = props[getCategory(props)];

    if (dirtyData) {
      const cleanData = dirtyData.map((data, index) =>
        <Card
          key={index}
          id={index}
          {...data}
          type={getCategory(props)}
        />
      );

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