import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/color-tool';

const colors = [ 'red', 'yellow', 'blue', 'green' ];

ReactDOM.render(
  // React.createElement(ColorTool, { colorList: colors }),
  <ColorTool colorList={colors} />,
  document.querySelector('main'),
);
