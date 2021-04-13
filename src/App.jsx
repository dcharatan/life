/* eslint-disable no-unused-vars */
import React from 'react';
import { createLifeState, padState } from './life/life';
import Viewer from './Viewer';
import rle from './life/oscillator';

function App() {
  return (
    <div className="d-flex align-items-center justify-content-center w-100 h-100">
      <div>
        <Viewer
          initialState={padState(createLifeState(rle), 3)}
          numRows={43}
          numCols={79}
        />
      </div>
    </div>
  );
}

export default App;
