import React, { Component } from 'react';
import Container from '../containers/index';
import Map from '../components/Map';

class Screen extends Component {
  render() {
    // return <Container backgroundColor="#c95e0c" onPress={() => console.log('press')} />;
    return <Map />;
  }
}

export default Screen;