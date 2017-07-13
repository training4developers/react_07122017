import React from 'react';

export class ItemList extends React.Component {

  render() {

    return <ul>
      {this.props.items.map(item => <li>{item}</li>)}
    </ul>;
  }
}