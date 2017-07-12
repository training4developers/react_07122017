import React from 'react';

export class ColorTool extends React.Component {

  render() {

    const colors = [ 'red', 'yellow', 'blue', 'green' ];

    return <div> 
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map(color => <li>{color}</li>)}
      </ul>
    </div>;
  }

}