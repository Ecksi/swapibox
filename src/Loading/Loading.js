import React from 'react';
import PropTypes from 'prop-types';
import './Loading.css';

const Loading = (props) => {
  const getLoadScreen = ({ loadScreen }) => {
    if (loadScreen === 'people') {
      return (<img src='https://goo.gl/za9diQ' alt='' />);
    } else if (loadScreen === 'planets') {
      return (<img src='https://goo.gl/Bh3A1e' alt='' />);
    } else if (loadScreen === 'vehicles') {
      return (<img src='https://goo.gl/y3wSmf' alt='' />);
    }
  };

  return (
    <div className="loadWrapper">
      {getLoadScreen(props)}
    </div>
  );
};

Loading.propTypes = {
  loadScreen: PropTypes.string.isRequired
};

export default Loading;