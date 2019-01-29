import React, { Component } from 'react';

import Header from './Header';
import Bar from './Bar';
import Squares from './Squares';

import '../styles/main.scss';

const generateColor = () => {
  return `RGB(${(Math.random() * 256).toFixed(0)}, ${(Math.random() * 256).toFixed(0)}, ${(Math.random() * 256).toFixed(0)})`
}

export default class App extends Component {
  state = {
    rightColor: generateColor(),
  };

  render() {
    return (
      <div>
        <Header rightColor={this.state.rightColor} />
        <Bar clickHandler={this.newGameHandler} />
        <Squares rightColor={this.state.rightColor} />
      </div>
    )
  }
}
