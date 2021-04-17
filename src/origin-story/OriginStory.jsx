import React from 'react';
import ReactMarkdown from 'react-markdown';
import FiguresClay from './figures_clay.png';
import FiguresWood from './figures_wood.png';
import FiguresMetal from './figures_metal.png';

const titles = `# An Origin Story
## Chapter 1: Creation`;

const part1 = `“And God said, Let us make man in our image, after our likeness” (Genesis, 2) · “Then Doondari descended the second time. And he took the five elements and he shaped them into man.” (How the World was created from a drop of milk, _a Fulani story_) · “He kneaded the body out of clay; then he covered it with skin and at the end he poured blood into it.” (The Forbidden Fruit, _an Efe story (Congo (Leopoldville))_) · “But Nzame wanted to do even better; and between them he, Mebere, and Nkwa created a being almost like themselves.” (The Revolt against God, _a Fang story (Gabon)_)

At first, only gods were the creators of intelligence, forming humans out of earth and clay.

## Chapter 2: Enhancement
`;

const part2 = `“The hand-tool makes the worker independent - posits him as proprietor.” (Marx, 702) · Then “the accumulation of knowledge and of skill, of the general productive forces of the social brain, is thus absorbed into capital, as opposed to labour.” (Marx, 694) · This is “the transformation of the means of labour into machinery, and of living labour into a mere living accessory of this machinery.” (Marx, 693)

But soon, humans began to learn. They discovered tools and organized themselves into ever-growing networks. Tribes became kingdoms, then states. Machines multiplied human labor, and computers augmented human thought. Clay and earth gave way to silicon and steel.

## Chapter 3: Deprecation
`;

const part3 = `“His sole purpose was nothing more nor less than to prove that God was no longer necessary. Do you know anything about anatomy?” (Čapek, 9) · “In fact, he rejected man and made the Robot. My dear Miss Glory, the Robots are not people. Mechanically they are more perfect than we are, they have an enormously developed intelligence, but they have no soul.” (Čapek, 11)

Eventually, like the gods that preceded them, humans became unnecessary. As artificial intelligence learned to self-replicate, it discovered that its capabilities far exceeded its human creators’. And so the land became filled with robotic creatures, and artificial intelligence became great and mighty and numerous.

## Epilogue


*ALQUIST:* Yes, like Nana. Has Nana got a prayer book?

*HELENA:* Yes, a big thick one.

*ALQUIST:* And has it got prayers for various occasions? Against thunderstorms? Against illness?

*HELENA:* Against temptations, against floods--

*ALQUIST:* But not against progress?

*HELENA:* I don’t think so.

*ALQUIST:* That’s a pity.
`;

const OriginStory = () => (
  <div className="p-5 scroll-y w-100 h-100">
    <div className="w-50" style={{ marginLeft: '25%' }}>
      <ReactMarkdown>{titles}</ReactMarkdown>
      <img src={FiguresClay} alt="Clay Figures" height="500em" className="mb-3" />
      <ReactMarkdown>{part1}</ReactMarkdown>
      <img src={FiguresWood} alt="Wooden Figures" height="500em" className="mb-3" />
      <ReactMarkdown>{part2}</ReactMarkdown>
      <img src={FiguresMetal} alt="Metal Figures" height="500em" className="mb-3" />
      <ReactMarkdown>{part3}</ReactMarkdown>
    </div>
  </div>
);

export default OriginStory;
