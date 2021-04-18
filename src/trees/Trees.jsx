import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import TreesImage from './treeforclass.jpg';
import ArtCard from '../ArtCard';

const title = '### Unknown (2010)';

const secondTitle = 'The Dance of the Trees';

const medium = 'Mixed-Media Oil Paint Pens on Paper and Adobe Photoshop';

const p1 = 'Macfarlane’s “The Understorey" describes the hive mind of trees, the way that a forest is like a social network. This piece reimagines this hive mind and network in the style of Henri Matisse’s The Dance, replacing the rejoicing people in the circle with simple trees. The image of the conjoined trees, holding barks like hands, connected and mobile, emphasizes the liveliness of these creatures. This very vitality is a reflection of their intelligence, of the hive mind, of the way that these dense trees have a consciousness not unlike ours. Their bark like skin, their sap like blood, their leaves like hair. These trees reflect a possibility of our own intelligence, a nonhierarchical system, both natural and alien. This piece draws upon the historical conceptions of nature and mutualism, adapted to a human art piece.';
const p2 = 'The wood wide web, as it’s known, brings forth questions of consciousness and the way that we identify “the mind.” Minsky, in the Society of Mind, describes “communities grow mental worlds (31).” Indeed, a community, as it’s seen in Matisse’s the Dance, is a matter of minds meeting. That’s the case of these forest communities, which communicate to each other through fungus, through soil. Consider the way that humans are connected to each other, open your mind to what’s possible for other ecosystems. These trees are alive, and they think so too. ';

const Trees = () => (
  <div className="p-5 scroll-y w-100 h-100">
    <Container>
      <Row>
        <Col>
          <img src={TreesImage} alt="Trees" height="400em" className="mb-3" />
          <ReactMarkdown>{title}</ReactMarkdown>
          <ArtCard title={secondTitle} medium={medium} className="mb-2" />
          <ReactMarkdown>{p1}</ReactMarkdown>
          <ReactMarkdown>{p2}</ReactMarkdown>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Trees;
