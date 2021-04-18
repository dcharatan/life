/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const FancyTag = ({ children, ...props }) => (
  <span className="fancy px-2 font-weight-bold">
    {children}
  </span>
);

export default FancyTag;
