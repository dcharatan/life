/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCell, getNextLifeState } from '../life/life';
import Cell from './Cell';
import { getDonutFrame } from '../donut';

const LifeGame = ({
  initialState, updateInterval, numRows, numCols,
}) => {
  const [state, setState] = useState(initialState);
  const [donutState, setDonutState] = useState([0, 0]);

  // Game of Life
  useEffect(() => {
    const donutInterval = setInterval(() => {
      setDonutState([donutState[0] + 0.03, donutState[1] + 0.07]);
      setState(getNextLifeState(state));
    }, 1000 / 30);
    return () => {
      clearInterval(donutInterval);
    };
  }, [state, donutState]);

  const text = getDonutFrame(donutState[0], donutState[1]);

  const rows = [];
  for (let row = 0; row < numRows; row += 1) {
    const rowCells = [];
    for (let col = 0; col < numCols; col += 1) {
      const alive = !!getCell(state, row, col);
      rowCells.push(<Cell key={col} letter={text[row] ? text[row][col] ?? '_' : '_'} alive={alive} />);
    }
    rows.push(<div className="d-flex flex-row" key={row}>{rowCells}</div>);
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
