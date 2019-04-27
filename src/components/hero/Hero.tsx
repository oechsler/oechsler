import React, { Component, ReactNode } from 'react';
import { Container, Segment } from 'semantic-ui-react';

import './index.sass';

interface HeroProps {
  navigation?: ReactNode;

  children: ReactNode;
}

const Hero = (props: HeroProps) => {
  return (
    <div className='hero'>
      <Segment className='hero-segment' vertical inverted>
        <div className='hero-navigation'>{props.navigation}</div>
        <Container className='hero-container'>{props.children}</Container>
      </Segment>
    </div>
  );
};

export default Hero;
