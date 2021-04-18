import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import MechanicalImage from './mechanical.png';
import ArtCard from '../ArtCard';

const title = 'My Most Mechanical and Dirty Hand...';

const medium = '3D Printing';
const year = '2026';

const main = 'When scientists first mastered the human genome and mind replication in 2025, an entire new field of anthropology emerged which used ancient DNA and genetic samples to revive the minds and bodies of historical figures. An early subject of research was a man known simply as “Herr C.” who was a dancer at an opera house in 1801 Berlin. Herr C. was chosen because of opportunity: his body was well-preserved post-mortem, so scientists were able to extract genetic material from his hand and attempt revival. The first step in this process was the digital recreation of Herr C.’s hand, which was successfully performed in 2026. The model for his hand is shown in the piece above alongside a 3D printed version. The printed version is scaled to 10% of the original size and is shown in comparison to the now-discontinued U.S. quarter.';

const Mechanical = () => (
  <div className="p-5 scroll-y w-100 h-100">
    <Container>
      <Row>
        <Col>
          <img src={MechanicalImage} alt="Mechanical Hand" height="350em" className="mb-3" />
          <ArtCard title={title} medium={medium} year={year} className="mb-2" />
          <ReactMarkdown>{main}</ReactMarkdown>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Mechanical;
