import React from 'react';
import LifeGame from './visualization/LifeGame';

function App() {
  return (
    <LifeGame
      initialState={{
        2: {
          1: true,
          2: true,
          3: true,
        },
      }}
      numRows={5}
      numCols={5}
    />
  );
}

export default App;
