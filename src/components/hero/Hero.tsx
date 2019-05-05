import React, { Component, ReactNode, useCallback } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import './index.sass';

interface HeroBackground {
  color?: string;
  image?: string;
  opacity?: number;
  blur?: number;
  scale?: number;
  translation?: number;
}

interface HeroProps {
  navigation?: ReactNode;
  background?: HeroBackground;
  inverted?: boolean;

  children: ReactNode;
}

const Hero = (props: HeroProps) => {
  const renderBackground = () => {
    if (props.background)
      return (
        <div
          className='hero-background'
          style={{
            backgroundImage: 'url(' + props.background.image + ')',
            backgroundPositionY: '-' + props.background.translation + 'px',
            backgroundSize: 'calc(100% * ' + props.background.scale + ')',
            opacity: props.background.opacity,
            filter: 'blur(' + props.background.blur + 'px)'
          }}
        />
      );
  };

  return (
    <div className='hero'>
      <Segment
        className='hero-segment'
        style={{
          backgroundColor: props.background ? props.background.color : null
        }}
        vertical
        inverted={props.inverted}
      >
        {renderBackground()}
        <div className='hero-navigation'>{props.navigation}</div>
        <Container className='hero-container'>{props.children}</Container>
      </Segment>
    </div>
  );
};

export default Hero;
