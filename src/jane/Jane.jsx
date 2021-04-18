import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import Jane1 from './Jane1.png';
import Jane2 from './Jane2.png';
import ArtCard from '../ArtCard';

const title = '### Jane Eykie (b. 1960)';
const secondTitle = 'IS EMBODIMENT NECESSARY TO UNDERSTAND ART?';

const medium = 'Digital piece, Photoshop, Google';
const year = '2021';

const p1 = 'In 1972, Hubert L. Dreyfus, wrote a chapter entitled, “The Role of the Body in Intelligent Behavior,” in What Computers Can’t Do: The Limits of Artificial Intelligence. He questions whether a body is required for intelligent behavior. He writes that, at the current moment, humans are better at pattern recognition than computers. To explain this, Dreyfus highlights the gestaltists, which hypothesize that the whole determines what counts as a part, and defines a gestalt as a whole that is perceived more than its parts. Dreyfus says that computers have a hard time recognizing complex patterns, especially because they lack bodies. He concludes, “pattern recognition is a bodily skill basic to all intelligent behavior, the question of whether artificial intelligence is possible boils down to the question of whether there can be an artificially embodied agent” (Dreyfus 250). ';
const p2 = 'How does the gestalt theory connect to art and AI’s perception of art? Does an AI have to be embodied to understand an art piece? This experimental piece uses Photoshop and Google’s reverse image search to ask these questions. In the art piece, many pixels are removed from a famous Renaissance art piece — the Arnolfini Portrait by Jan van Eyck. It is then entered into Google’s reverse image search. In this stage of the image, an embodied human can definitely still ascertain the identity of this painting. But could one of the most powerful search engines — Google — do so? Google does indeed identify that the painting is by Jan van Eyck, however, does not identify the exact painting. In the next step of the artistic inquiry, the artist uses Photoshop’s smart “spot healing brush” to fill in the parts of the painting that are missing. This tool works by identifying surrounding patterns and calculating the pattern that would probably fit in a selected area. This tool worked somewhat well — it definitely morphed the image but provided almost a full painting. The artist then put this reconstructed image into the Google search engine again. This time, Google successfully both identifies the painting’s name and artist. ';
const p3 = 'This process tells us a few things. First, in 2021, computer tools existed that could both recognize a pattern and perhaps understand an image as a whole. Moreover, the computer processes were more powerful when combined. A new program could have been created to reach this result automatically by utilizing these two programs together. Overall, the two computer programs utilized in this experiment completed the challenges posed to them; they used existing patterns to identify a whole and gave meaning to a whole that went beyond the composition of its parts. And the computer programs did this without being embodied. ';
const p4 = 'Would Dreyfus have predicted this result? Almost 50 years after Dreyfus wrote his book, computers had become exponentially more sophisticated and advanced. This experiment shows that a larger pattern and understanding of a portrait occurred without a body — disproving Dreyfus’s hypothesis.';
const p5 = 'However, what this doesn’t tell us is whether computers can feel the creativity and emotions that paintings evoke. Is a body still necessary to grasp the purpose of art and to analyze art? Art isn’t about calculating or identifying a piece as a whole, however, combining the powers with an embodied human can aid a human in understanding a piece on a deeper level.';

const Jane = () => (
  <div className="p-5 scroll-y w-100 h-100">
    <Container>
      <Row>
        <Col>
          <img src={Jane1} alt="Jane1" height="650em" className="mb-3" />
          <img src={Jane2} alt="Jane2" height="650em" className="mb-3" />
          <ReactMarkdown>{title}</ReactMarkdown>
          <ArtCard title={secondTitle} medium={medium} year={year} className="mb-2" />
          <ReactMarkdown>{p1}</ReactMarkdown>
          <ReactMarkdown>{p2}</ReactMarkdown>
          <ReactMarkdown>{p3}</ReactMarkdown>
          <ReactMarkdown>{p4}</ReactMarkdown>
          <ReactMarkdown>{p5}</ReactMarkdown>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Jane;
