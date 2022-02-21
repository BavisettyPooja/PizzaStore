import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = ({heading, text, url}) => {
  return (
    <FeatureContainer url={url}>
      <h1>{heading}</h1>
      <p>{text}</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
