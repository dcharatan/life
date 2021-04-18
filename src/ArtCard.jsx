/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
// hackathon mode lmao
import React from 'react';

const ArtCard = ({
  title, medium, year, ...props
}) => (
  <div {...props}>
    <div className="font-weight-bold">{title}</div>
    <div>{year ? `${medium} (${year})` : `${medium}`}</div>
  </div>
);

export default ArtCard;
