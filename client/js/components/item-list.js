import React from 'react';
import PropTypes from 'prop-types';

export class ListItem extends React.Component {

  render() {
    return <li>
      {this.props.children.id} - {this.props.children.name}
      <button type="button"
        onClick={() => this.props.onDeleteItem(this.props.children.id)}>
        Delete
      </button>
    </li>;
  }
}

export class ItemList extends React.Component {

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    return <ul>
      {this.props.items.map( item => <ListItem key={item.id} onDeleteItem={this.props.onDeleteItem}>{item}</ListItem>)}
    </ul>;
  }
}
