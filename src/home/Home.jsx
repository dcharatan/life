import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const title = '## Transhumanism and the Intersection of Humanity, Technology, and Creativity ';

const secondTitle = '### Exhibit created in 2032';

const main = `This exhibition is a collection of works produced from 1995 to 2031 and includes physical, digital, visual, and auditory pieces. As humanity approaches the technological singularity, we look back to the past four decades seeking clues for how we got here and what may lie ahead. 

Some questions these conceptual artworks explore include:

-What is the importance of the body in creativity and intelligence, and what differences or similarities exist between humans, robots, and cyborgs?

-If humans can live digitally or be revived in virtual reality, what does this mean for our concepts about death? Have we created an afterlife?

-How can AI and cybernetic parts create new opportunities for creativity? 

-What can be considered creativity? Can AI be creative, and if art can’t be distinguished as from an AI or from a human, what does that say about creativity or humanity?`;

const Trees = () => (
  <div className="p-5 scroll-y w-100 h-100">
    <Container>
      <Row>
        <Col>
          <ReactMarkdown>{title}</ReactMarkdown>
          <br />
          <ReactMarkdown>{secondTitle}</ReactMarkdown>
          <br />
          <br />
          <ReactMarkdown>{main}</ReactMarkdown>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Trees;
