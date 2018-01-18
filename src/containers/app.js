import React, { Component } from 'react';

export default class App extends Component {

  state = {
    text: 'Hello Redux!'
  }

  render() {
    return <h1>{this.state.text}</h1>;
  }
}