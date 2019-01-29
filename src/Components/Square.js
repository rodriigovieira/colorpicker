import React, { Component } from 'react';

export default class Square extends Component {
  state = {
    color: this.props.boxColor,
    win: false,
  }

  styles = {
    boxStyle: {
      height: 175,
      width: 175,
      borderRadius: 15,
      backgroundColor: this.state.color,
      display: 'inline-flex',
      margin: 10,
    }
  }

  clickHandler = (event) => {
    if (this.props.code === 1) {
      console.log('good');
      this.setState({ win: true });
      this.props.winHandler()
    } else {
      console.log('wrong');
    }
  }

  render() {
    return (
      <div>
        <div>
          <div
            style={this.props.styles}
            onClick={this.clickHandler}
          >
          </div>
        </div>
      </div>
    )
  }
}
