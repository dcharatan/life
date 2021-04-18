import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const title = '## Bibliography';

const main = `
c4dcenter. (2020). 4K Clay 03-C4D Material [Texture]. https://c4dcenter.com/material-library/4k-clay-03-c4d-material/

c4dcenter. (2020). 4K Plywood 02-Clean-C4D Material [Texture]. https://c4dcenter.com/material-library/4k-plywood-02-clean-c4d-material/

Donna Haraway, “A Cyborg Manifesto: Science, Technology, and Socialist-Feminism in the Late 20th Century” (1985), pp. 117-147.

_Fm-2030: [Are You Transhuman?](https://www.youtube.com/watch?v=eaS9QBdVHMs&t=4s)_, 2013. 

Heinrich von Kleist, “On the Marionette Theatre” (1810), pp. 22-24.

Holly Case. “Creation Narratives-Selection” (2021), pp. 1-4.

Hubert L. Dreyfus, “The Role of the Body in Intelligent Behavior,” in _What Computers Can’t Do: The Limits of Artificial Intelligence (1972)_, pp. 235-255.

Irvine, L. (2018). Cyborg [Digital Composite]. https://www.theguardian.com/books/2018/may/30/top-10-books-to-help-you-survive-the-digital-age

Karl Marx. _Fundamentals of a Critique of Political Economy_, Notebook VI (1857-8), pp. 693-702.

Karel Čapek. “Rossum’s Universal Robots” (1920), pp. 9-45. 

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
