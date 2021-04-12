import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCell, getNextLifeState } from '../life';
import Cell from './Cell';

const LifeGame = ({
  initialState, updateInterval, numRows, numCols,
}) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      setState(getNextLifeState(state));
    }, updateInterval);
    return () => clearInterval(interval);
  }, [state]);

  const rows = [];
  for (let row = 0; row < numRows; row += 1) {
    const rowCells = [];
    const rowStates = [];
    for (let col = 0; col < numCols; col += 1) {
      const alive = !!getCell(state, row, col);
      rowCells.push(<Cell letter="X" alive={alive} />);
      rowStates.push(alive ? 'A' : 'D');
    }
    rows.push(<div className="d-flex flex-row" key={`${row}${rowStates.join('')}`}>{rowCells}</div>);
  }

  return <div>{rows}</div>;
};

LifeGame.propTypes = {
  initialState: PropTypes.objectOf(PropTypes.objectOf(PropTypes.bool)).isRequired,
  updateInterval: PropTypes.number,
  numRows: PropTypes.number,
  numCols: PropTypes.number,
};

LifeGame.defaultProps = {
  updateInterval: 1000,
  numRows: 5,
  numCols: 5,
};

export default LifeGame;
