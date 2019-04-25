import React, { Component } from 'react';
import { Header, Image, Grid } from 'semantic-ui-react';
import ElevatorButton from './ElevatorButton';
import typeFilter from '../../utils/typeFilter';

import './index.sass';

interface ElevatorProps {
  image: string;
  name: string;
  age: number;
  status?: React.ReactNode;
  inverted?: boolean;
}

export default class Elevator extends Component<ElevatorProps> {
  static Button = ElevatorButton;

  render = () => {
    return (
      <div className='elevator'>
        <Image src={this.props.image} size='medium' circular centered />
        <Header className='elevator-header' inverted={this.props.inverted}>
          {this.props.name}
        </Header>
        <Header className='elevator-sub' inverted={this.props.inverted}>
          <strong>{this.props.age}.</strong>
          &nbsp;
          {this.props.status}
          {this.props.status !== undefined ? '.' : null}
        </Header>
        <Grid
          className='elevator-buttons'
          centered
          inverted={this.props.inverted}
        >
          {typeFilter(this.props.children, [ElevatorButton])}
        </Grid>
      </div>
    );
  };
}
