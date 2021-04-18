import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const title = '## Bibliography';

const main = `Donna Haraway, “A Cyborg Manifesto: Science, Technology, and Socialist-Feminism in the Late 20th Century” (1985), pp. 117-147.

_Fm-2030: [Are You Transhuman?](https://www.youtube.com/watch?v=eaS9QBdVHMs&t=4s)_, 2013. 

Heinrich von Kleist, “On the Marionette Theatre” (1810), pp. 22-24.

Holly Case. “Creation Narratives-Selection” (2021), pp. 1-4.

Hubert L. Dreyfus, “The Role of the Body in Intelligent Behavior,” in _What Computers Can’t Do: The Limits of Artificial Intelligence (1972)_, pp. 235-255.

Karl Marx. _Fundamentals of a Critique of Political Economy_, Notebook VI (1857-8), pp. 693-702.

Karel Čapek. “Rossum’s Universal Robots” (1920), pp. 9-11. 

Leena Krohn. “Gorgonoids” (1992), pp. 3-6. 

Marvin Minsky, “The Society of Mind,” in The Personalist Forum (1987), pp. 19-32. 

Robert Macfarlane, “The Understorey,” in Underland: A Deep Time Journey (2019), pp. 87-98.`;

const Bibliography = () => (
  <div className="p-5 scroll-y w-100 h-100">
    <Container>
      <Row>
        <Col>
          <ReactMarkdown>{title}</ReactMarkdown>
          <ReactMarkdown>{main}</ReactMarkdown>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Bibliography;
