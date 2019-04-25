import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';

import './index.sass';
import Elevator from '../elevator/Elevator';

export default class Hero extends Component {
  render() {
    return (
      <div className='hero'>
        <Segment className='hero-segment' vertical inverted>
          <Container className='hero-container'>
            <Elevator
              image='https://secure.gravatar.com/avatar/760c95a88c6d3a3607c12730ca89c792?size=1024'
              name='Samuel Oechsler'
              age={20}
              status={
                <span>
                  Student, developer <strong>@medialesson</strong>
                </span>
              }
              inverted
            >
              <Elevator.Button
                icon='github'
                href='#'
                description='Fork me on GitHub'
                inverted
              />
              <Elevator.Button
                icon='discord'
                href='#'
                description='Add me on Discord'
                inverted
              />
              <Elevator.Button
                icon='snapchat ghost'
                href='#'
                description='Follow me on Snapchat'
                inverted
              />
            </Elevator>
          </Container>
        </Segment>
      </div>
    );
  }
}
