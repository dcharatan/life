import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const Attribution = () => {
  const [show, setShow] = useState(false);

  const attribution = 'This animation is based on [Conway\'s Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), using Nicolay Beluchenko\'s 112P51 oscillator, which can be found [here](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life). The spinning torus animation is adapted from [Andy Sloane\'s website](https://www.a1k0n.net/2011/07/20/donut-math.html). The sine wave animation is based on a [shader by DonKarlssonSang](https://www.shadertoy.com/view/lslfRn).';

  return (
    <div>
      {show ? <div className="mb-3"><ReactMarkdown>{attribution}</ReactMarkdown></div> : null}
      <Button variant="secondary" size="sm" className="m-0" onClick={() => setShow(!show)}>{`${show ? 'Hide' : 'Show'} Attributions`}</Button>
    </div>
  );
};

export default Attribution;
