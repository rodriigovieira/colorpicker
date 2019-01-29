import React, { Component } from 'react';

import Square from './Square';
import { colorChooser, boxStyles, result } from '../functions/functions';

export default class Squares extends Component {
  state = {
    loading: true,
    win: false,
  };

  containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  winHandler = () => {
    colorChooser(true, this.props.rightColor);
    this.setState({ loading: false });
  }

  renderSquare = (index) => {
    return <Square
      code={result[index].code}
      winHandler={this.winHandler}
      data={result}
      styles={boxStyles[index]}
    />
  }

  componentDidMount() {
    colorChooser(false, this.props.rightColor);
    this.setState({ loading: false })
  }

  renderizer = () => {
    if (this.state.loading) {
      return <p style={{ textAlign: 'center', fontSize: '2rem' }}>Loading.</p>
    } else {
      return (
        <div id="content" style={{ paddingTop: '2%' }}>
          <div style={this.containerStyle}>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div style={this.containerStyle}>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderizer()}
      </div>
    );
  };
};
