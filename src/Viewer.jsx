/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { copyState, updateLifeState } from './life/life';
import { getDonutFrame } from './donut';
import { getSineWaveFrame } from './sineWave';

const LifeGame = ({
  initialState, updateInterval, numRows, numCols,
}) => {
  const [lifeState, setLifeState] = useState(initialState);
  const scratch = useRef(copyState(initialState));
  const [donutState, setDonutState] = useState([0, 0]);

  useEffect(() => {
    const donutInterval = setInterval(() => {
      setDonutState([donutState[0] + 0.03, donutState[1] + 0.07]);
      setLifeState(updateLifeState(lifeState, scratch.current));
    }, updateInterval);
    return () => {
      clearInterval(donutInterval);
    };
  }, [lifeState, donutState]);

  const donutText = getDonutFrame(donutState[0], donutState[1]);
  const sineWaveText = getSineWaveFrame(donutState[0], numRows, numCols);

  let text = '';
  for (let row = 0; row < numRows; row += 1) {
    for (let col = 0; col < numCols; col += 1) {
      const alive = lifeState[row] ? lifeState[row][col] ?? false : false;
      const donutLetter = donutText[row] ? donutText[row][col] ?? ' ' : ' ';
      const sineLetter = sineWaveText[row] ? sineWaveText[row][col] ?? ' ' : ' ';
      let actual = ' ';
      if (donutLetter !== ' ') {
        actual = donutLetter;
      } else if (alive) {
        actual = '0';
      } else if (sineLetter !== ' ') {
        actual = sineLetter;
      }
      text += actual;
    }
    text += '\n';
  }

  return (
    <div className="text-monospace" style={{ fontSize: '1%', lineHeight: '120%' }}>
      {text.replace(/ /g, '_').split('\n').map((item, key) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={key}>
          {item}
          <br />
        </span>
      ))}
    </div>
  );
};

LifeGame.propTypes = {
  initialState: PropTypes.objectOf(PropTypes.objectOf(PropTypes.bool)).isRequired,
  updateInterval: PropTypes.number,
  numRows: PropTypes.number,
  numCols: PropTypes.number,
};

LifeGame.defaultProps = {
  updateInterval: 1000 / 20,
  numRows: 5,
  numCols: 5,
};

export default LifeGame;
