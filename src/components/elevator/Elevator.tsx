import React, { Component, ReactNode } from 'react';
import { Header, Image, Grid } from 'semantic-ui-react';
import ElevatorButton from './ElevatorButton';
import typeFilter from '../../utils/typeFilter';

import './index.sass';

interface ElevatorProps {
  image: string;
  name: string;
  age: number;
  status?: ReactNode;
  inverted?: boolean;
  children?: ReactNode;
}

const Elevator = (props: ElevatorProps) => {
  return (
    <div className='elevator'>
      <Image src={props.image} size='medium' circular centered />
      <Header className='elevator-header' inverted={props.inverted}>
        {props.name}
      </Header>
      <Header className='elevator-sub' inverted={props.inverted}>
        <strong>{props.age}.</strong>
        &nbsp;
        {props.status}
        {props.status !== undefined ? '.' : null}
      </Header>
      <Grid className='elevator-buttons' centered inverted={props.inverted}>
        {typeFilter(props.children, [ElevatorButton])}
      </Grid>
    </div>
  );
};

Elevator.Button = ElevatorButton;
export default Elevator;
