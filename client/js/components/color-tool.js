import React from 'react';

export class ColorTool extends React.Component {

  render() {

    return <div> 
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {this.props.colorList.map(color => <li>{color}</li>)}
      </ul>
    </div>;
  }

}