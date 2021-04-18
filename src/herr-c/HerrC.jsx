import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import ArtCard from '../ArtCard';
import YoutubeEmbed from '../YouTubeEmbed';

const main = 'In this newly released video interview, Herr C. (the subject of __My Most Mechanical and Dirty Hand…__) in his transhuman form is interviewed by a scientist. Herr C.’s mind was created using backpropagation of DNA found in his hand to digitally grow a mind in the shape of the original 1801 subject. This piece gives a glimpse into the ongoing process and struggle to combine man with machine, as his mind must be artificially supported to prevent mental breakdown. The interview is a close mimic of the opening dialogue in Heinrich von Kleist’s ‘On the Marionette Theatre’, but the dialogue has been adapted to discuss Herr C.’s transhuman form rather than dancing marionettes. Herr C. possesses a deep knowledge of how his new body functions, and interestingly expresses a belief that it is possible to separate his mind from his new body to create a purely mechanical being.';

const HerrC = () => (
  <div className="p-5 scroll-y w-100 h-100">
    <Container>
      <Row>
        <Col>
          <YoutubeEmbed embedId="TsYoWBEzp9c" className="mb-3" />
          <ArtCard title="Interview with Herr C." medium="Video" year="2029" className="mb-2" />
          <ReactMarkdown>{main}</ReactMarkdown>
        </Col>
      </Row>
    </Container>
  </div>
);

export default HerrC;
