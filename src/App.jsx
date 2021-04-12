/* eslint-disable no-unused-vars */
import React from 'react';
import { createLifeState } from './life/life';
import LifeGame from './visualization/LifeGame';
import rle from './life/oscillator';

function App() {
  return (
    <div className="d-flex align-items-center justify-content-center w-100 h-100">
      <div>
        <LifeGame
          initialState={createLifeState(rle)}
          numRows={35}
          numCols={79}
        />
      </div>
    </div>
  );
}

export default App;
