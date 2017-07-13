import React from 'react';

import { ToolHeader } from './tool-header';
import { ItemList } from './item-list';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colorList: this.props.colorList.concat(),
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
    this.setState({
      colorList: this.state.colorList.concat(this.state.newColor),
      newColor: '',
    });
  }

  render() {
    return <div> 
      <ToolHeader headerText="Color Tool" />
      <ItemList items={this.state.colorList} />
      <form>
        <div>
          <label htmlFor="new-color">New Color:</label>
          <input type="text" name="newColor" id="new-color"
            value={this.state.newColor} onChange={this.onChange} />
        </div>
        <button type="button" onClick={this.onClick}>Add Color</button>
      </form>
    </div>;
  }

}