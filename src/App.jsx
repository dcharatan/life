/* eslint-disable no-unused-vars */
import React from 'react';
import { createLifeState, padState } from './life/life';
import Viewer from './Viewer';
import rle from './life/oscillator';
import Attribution from './Attribution';

function App() {
  return (
    <div className="d-flex align-items-center justify-content-center w-100 h-100">
      <div style={{ position: 'absolute', bottom: '1em', left: '1em' }}><Attribution /></div>
      <div>
        <Viewer
          initialState={padState(createLifeState(rle), 3)}
          numRows={43}
          numCols={79}
        />
        <div className="font-weight-bold">Unknown AI</div>
        <div className="mb-2">American, 2031 —</div>
        <div>
          <span className="font-weight-bold font-italic">Untitled Game/Life</span>
          , 2033
        </div>
        <div>Serial Interface on PDP-11</div>
      </div>
    </div>
  );
}

export default App;
