import React from 'react';
import PropTypes from 'prop-types';

export class ItemList extends React.Component {

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  // static get propTypes() {
  //   return {

  //   };
  // }

  render() {

    return <ul>
      {this.props.items.map(item => <li>{item}</li>)}
    </ul>;
  }
}
