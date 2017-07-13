import React from 'react';
import PropTypes from 'prop-types';

export class ListItem extends React.Component {

  constructor(props) {
    super(props);
    console.log('constructor executed', props.item);

    this.state = {
      item: props.item,
    };
  }

  componentWillUnmount() {
    console.log('unmounting', this.state.item);
  }

  render() {

    return <li>{this.props.item}, {this.state.item}</li>;

  }

}

export class ItemList extends React.Component {

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  };



  // static get propTypes() {
  //   return {
  //     items: PropTypes.arrayOf(PropTypes.string).isRequired,
  //   };
  // }

  render() {

    return <ul>
      {this.props.items.map( (item, i) => <ListItem key={item} item={item} />)}
    </ul>;
  }
}
