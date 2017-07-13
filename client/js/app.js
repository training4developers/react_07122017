import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/color-tool';

const colors = [
  { id: 1, name: 'red' },
  { id: 2, name: 'yellow' },
  { id: 3, name: 'blue' },
  { id: 4, name: 'green' },
];

ReactDOM.render(
  // React.createElement(ColorTool, { colorList: colors }),
  <ColorTool colorList={colors} />,
  document.querySelector('main'),
);
