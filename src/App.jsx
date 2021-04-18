/* eslint-disable no-unused-vars */
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { createLifeState, padState } from './life/life';
import Viewer from './Viewer';
import rle from './life/oscillator';
import Attribution from './Attribution';
import OriginStory from './origin-story/OriginStory';
import HerrC from './herr-c/HerrC';
import Mechanical from './mechanical/Mechanical';
import Jane from './jane/Jane';
import RadioBrain from './radio-brain/RadioBrain';
import Trees from './trees/Trees';

function App() {
  return (
    <div className="w-100 h-100">
      <Carousel className="w-100 h-100" controls={false} interval={9999999999999}>
        <Carousel.Item className="w-100 h-100">
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
              <div className="mb-2">“These creatures are not organic, but neither are they inorganic. [They] are immaterial, mathematical beings. They are visible, all the same: they move, couple, and multiply on our computer terminals. [...] Oh how dazzlingly beautiful is the odourless geometry of the lissajoune!” (Krohn, 3-6)</div>
              <div>This piece illustrates three primitive digital lifeforms: a 112P51 oscillator, a rotating torus, and a travelling sine wave. These creatures’ lives are predetermined by procedural models that have evolved over billions of epochs of reinforcement learning. Note the Gestaltist element: although the piece consists of individual characters, it must be appreciated via a defocused gaze that allows its subtle intensity differences to form an image.</div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <OriginStory />
        </Carousel.Item>
        <Carousel.Item>
          <Mechanical />
        </Carousel.Item>
        <Carousel.Item>
          <HerrC />
        </Carousel.Item>
        <Carousel.Item>
          <Jane />
        </Carousel.Item>
        <Carousel.Item>
          <RadioBrain />
        </Carousel.Item>
        <Carousel.Item>
          <Trees />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
