import React, { Component } from 'react';
import {
  Container,
  Image,
  Segment,
  Header,
  Grid,
  Icon,
  Popup,
  Menu
} from 'semantic-ui-react';
import Hero from './components/hero/Hero';

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
      </div>
    );
  }
}

export default App;
