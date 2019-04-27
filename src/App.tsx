import React, { Component } from 'react';
import Hero from './components/hero/Hero';
import Elevator from './components/elevator/Elevator';
import Navigation from './components/navigation/Navigation';

class App extends Component {
  render = () => {
    return (
      <div>
        <Hero
          navigation={
            <Navigation>
              <Navigation.Item href='#' text='About me.' />
              <Navigation.Item href='#' text='Recent notes.' />
              <Navigation.Item href='#' text='Projects.' />
            </Navigation>
          }
        >
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
        </Hero>
      </div>
    );
  };
}

export default App;
