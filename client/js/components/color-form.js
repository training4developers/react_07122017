import React from 'react';

export class ColorForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      newColor: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({
      [ e.currentTarget.name ]: e.currentTarget.value,
    });
  }

  onClick() {
    this.props.onSaveColor(this.state.newColor);
    this.setState({
      newColor: '',
    });
  }

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