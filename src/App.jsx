import React from 'react';
import { Button } from 'react-bootstrap';
import { updateLifeState } from './life';

function App() {
  const lifeState = updateLifeState({
    1: {
      1: true,
      2: true,
      3: true,
    },
  });
  console.log(lifeState);

  return (
    <div className="App">
      <Button>ad</Button>
    </div>
  );
}

export default App;
