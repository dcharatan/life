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
      </div>
      <div className="w-50 ml-5">
        <div className="font-weight-bold">Digital Aquarium</div>
        <div className="mb-2">Procedural Model (2029)</div>
        <div className="mb-2">“These creatures are not organic, but neither are they inorganic. [They] are immaterial, mathemati- cal beings. They are visible, all the same: they move, couple, and multiply on our computer terminals. [...] Oh how dazzlingly beautiful is the odourless geometry of the lissajoune!” (Krohn, 3-6)</div>
        <div>This piece illustrates three primitive digital lifeforms: a 112P51 oscillator, a rotating torus, and a travelling sine wave. These creatures’ lives are predetermined by procedural models that have evolved over billions of epochs of reinforcement learning. Note the Gestaltist element: although the piece consists of individual characters, it must be appreciated via a defocused gaze that allows its elements’ subtle intensity differences to form an image.</div>
      </div>
    </div>
  );
}

export default App;
