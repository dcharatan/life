import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import ArtCard from '../ArtCard';
import YoutubeEmbed from '../YouTubeEmbed';

const title = '### Radiobrain (b. 1960)';
const secondTitle = 'Creep (1995)';

const medium = 'Video: Guitar, Digital Pedal, Amplifier, Camera';

const p1 = 'Michael Polanyi once said, “while we rely on a tool or a probe, they are not handled as external objects … they remain on our side … forming part of ourselves, the operating persons. We pour ourselves out into them and assimilate them as parts of our existence” (Dreyfus 252).';
const p2 = 'The creation of music occurs when a human adopts an instrument as a part of their own — they play their feelings, emotion, and rhythm to the world through this extension of their own body. Is artificially processed music still music? Are humans capable of assimilating artificially processed music machines into our own being, like analog instruments, to create new music that wasn’t possible before? Is combining artificial elements of music to our own bodies a way of becoming transhuman? As FM-2030 said, humans are finite beings. How will posthumanism change music? Do only humans have the ability to create music? Do you need humanity to be creative?';
const p3 = 'This music piece explores these questions and depicts how computers can augment the creative abilities and potential of humans. As the human plays an instrument as an extension of their own being, the artificial music processing pedal (which produces the drums and guitar loop) additionally becomes an extension of their own being. In a way, this process is transhuman. As technology and humans progress, and as we near the singularity, the limits of music expand as transhumanism allows new forms of creativity.';

const RadioBrain = () => (
  <div className="p-5 scroll-y w-100 h-100">
    <Container>
      <Row>
        <Col>
          <YoutubeEmbed embedId="UHQA_VlB3GA" className="mb-3" />
          <ReactMarkdown>{title}</ReactMarkdown>
          <ArtCard title={secondTitle} medium={medium} className="mb-2" />
          <ReactMarkdown>{p1}</ReactMarkdown>
          <ReactMarkdown>{p2}</ReactMarkdown>
          <ReactMarkdown>{p3}</ReactMarkdown>
        </Col>
      </Row>
    </Container>
  </div>
);

export default RadioBrain;
