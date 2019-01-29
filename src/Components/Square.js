import React, { Component } from 'react';

export default class Square extends Component {
  clickHandler = () => {
    if (this.props.code === 1) {
      console.log('good');
      this.props.winHandler()
    } else {
      console.log('wrong');
    }
  }

  render() {
    return (
      <div>
          <div
            style={this.props.styles}
            onClick={this.clickHandler}
          >
          </div>
      </div>
    )
  }
}
