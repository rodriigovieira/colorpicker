import React from 'react';

const Bar = (props) => (
  <div>
    <div id="bar">
      <div id="new-game">
        <button onClick={props.clickHandler}>New Game</button>
      </div>
    </div>
  </div>
);

export default Bar;
