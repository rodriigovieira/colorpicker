import React, { Component } from 'react';

import Header from './Header';
import Bar from './Bar';
import Squares from './Squares';

import '../styles/main.scss';

// generate random color
// create six squares
// get color and paste it to page
// create new game button
// generate 6 randons squares

const generateColor = () => {
  return `RGB(${(Math.random() * 256).toFixed(0)}, ${(Math.random() * 256).toFixed(0)}, ${(Math.random() * 256).toFixed(0)})`
}

export default class App extends Component {
  state = {
    rightColor: generateColor(),
  };

  newGameHandler = (event) => {

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
