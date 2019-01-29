import React from 'react';

const Header = (props) => (
  <div>
    <div id="header">
      <p>The Color Picking Game!</p>
      <p style={{ fontSize: '3rem', }}>{props.rightColor}</p>
      <p>Guess this color!</p>
    </div>
  </div>
);

export default Header;
