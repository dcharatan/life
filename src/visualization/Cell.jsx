import React from 'react';
import PropTypes from 'prop-types';

const LifeGame = ({ alive, letter }) => {
  const classes = ['text-monospace'];
  return <div className={classes.join(' ')}>{alive ? '*' : letter}</div>;
};

LifeGame.propTypes = {
  alive: PropTypes.bool.isRequired,
  letter: PropTypes.string.isRequired,
};

export default LifeGame;
