import React, { Component } from 'react';

import Square from './Square';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let codes = [1, 2, 3, 4, 5, 6];
let result = [];

const generateColor = () => {
  return `RGB(${(Math.random() * 256).toFixed(0)}, ${(Math.random() * 256).toFixed(0)}, ${(Math.random() * 256).toFixed(0)})`
}

let styles = {
  containerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxStyle: {
    height: 175,
    width: 175,
    borderRadius: 15,
    backgroundColor: 'black',
    display: 'inline-flex',
    margin: 10,
  }
}

let boxStyles = [];

export default class Squares extends Component {
  state = {
    loading: true,
    win: false,
  };

  colorChooser = (win = false) => {
    shuffleArray(codes);

    if (win) {
      console.log('Am I ALIVE?');

      result = [];
      codes.forEach(value => {
        result.push({
          color: this.props.rightColor,
          code: value,
        })
      })

      boxStyles = []
      result.forEach(value => boxStyles.push({
        height: 175,
        width: 175,
        borderRadius: 15,
        backgroundColor: value.color,
        display: 'inline-flex',
        margin: 10,
      }))
    } else {
      console.log('AM I DEAD?');
      codes.forEach(value => {
        if (value === 1) {
          result.push({
            color: this.props.rightColor,
            code: value,
          })
        } else {
          result.push({
            color: generateColor(),
            code: value,
          })
        }
      })
      boxStyles = []
      result.forEach(value => boxStyles.push({
        height: 175,
        width: 175,
        borderRadius: 15,
        backgroundColor: value.color,
        display: 'inline-flex',
        margin: 10,
      }))
    }
  };

  winHandler = () => {
    console.log(result);
    console.log(boxStyles);

    this.setState({
      loading: true,
      win: true,
    })
    const color = result.find(value => value.code === 1).color;
    result.map(value => {
      return {
        ...value,
        color,
      }
    })
    boxStyles.map(value => {
      return {
        ...value,
        backgroundColor: color,
      }
    })
    console.log(this.state.win);
    this.colorChooser(true);
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
    this.colorChooser();
    this.setState({ loading: false })
  }

  renderizer = () => {
    if (this.state.loading) {
      return <p>Loading.</p>
    } else {
      return (
        <div id="content" style={{ paddingTop: '2%' }}>
          <div style={styles.containerStyle}>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div style={styles.containerStyle}>
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
