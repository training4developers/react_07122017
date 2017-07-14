import React from 'react';
import PropTypes from 'prop-types';

// no state
// that does not need life-cycle function

export const ListItem = props => {
  console.log(props);
  return <li>
    {props.children}
    <button type="button"
      onClick={() => props.onDeleteItem(props.item.id)}>
      Delete
    </button>
  </li>;
};

ListItem.propTypes = {
  children: PropTypes.object,
  onDeleteItem: PropTypes.func,
};

export class ItemList extends React.Component {

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    return <ul>
      {this.props.items.map( item => <ListItem key={item.id} item={item} onDeleteItem={this.props.onDeleteItem}>
        <b>{item.id} - {item.name}</b>
        <b>{item.id} - {item.name}</b>
      </ListItem>)}
    </ul>;
  }
}
