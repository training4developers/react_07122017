import React from 'react';
import PropTypes from 'prop-types';

import { BaseForm } from './base-form';

export class ColorForm extends BaseForm {

  static propTypes = {
    onSaveColor: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      newColor: '',
    };
  }

  onClick = () => {
    this.props.onSaveColor(this.state.newColor);
    this.setState({
      newColor: '',
    });
  };

  render() {

    return <form>
      <div>
        <label htmlFor="new-color">New Color:</label>
        <input type="text" name="newColor" id="new-color"
          value={this.state.newColor} onChange={this.onChange} />
      </div>
      <button type="button" onClick={this.onClick}>Save Color</button>
    </form>;

  }

}