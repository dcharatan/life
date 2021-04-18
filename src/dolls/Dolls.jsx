import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import DollsImage from './paperdolls.jpg';
import ArtCard from '../ArtCard';

const title = '### Unknown (2031)';

const secondTitle = 'Cybernetic Dolls';

const medium = 'Adobe Photoshop';

const text = `“A cyborg is a cybernetic organism, a hybrid of machine and organism, a creature of social reality as well as a creature of fiction (117).” Inspired by The Cyborg Manifesto, this collection of paper dolls and cybernetic additions explores the way that femininity has changed with transhumanism. Consider the way that Haraway describes the potential empowerment of the Cyborg existence, and the way that these technological augmentations fulfill that prophecy: a chip that can read minds, a cybernetic arm, a bionic eye that has x-ray vision.

The paper doll is a simple, traditional conception of femininity. A game for young creatures to think about the kinds of women they’ll look like when they’re older. This piece explores the possibilities of the singularity, once we become transhuman, post gender. “A cyborg world might be about lived social and bodily realities in which people are not afraid of their joint kinship with animals and machines, not afraid of permanently partial identities and contradictory standpoints” (122). This artwork demonstrates the new world Haraway dreamed of, the combination of animals and machines is a neutral part of life.

The simple pieces of clothing have little detail to them; they are abstracted shapes. The technological additions are more sophisticated. The doll is still made of paper, but her additions don’t have to be. This demonstrates the way that old conventions of femininity have flattened in the presence of these cybernetic additions. This piece asks you to consider the way that you conceptualize your own body, and where you can go as a transhuman.`;

const Dolls = () => (
  <div className="p-5 scroll-y w-100 h-100">
    <Container>
      <Row>
        <Col>
          <img src={DollsImage} alt="Dolls" height="400em" className="mb-3" />
          <ReactMarkdown>{title}</ReactMarkdown>
          <ArtCard title={secondTitle} medium={medium} className="mb-2" />
          <ReactMarkdown>{text}</ReactMarkdown>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Dolls;
