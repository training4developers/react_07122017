import React from 'react';

import { ToolHeader } from './tool-header';
import { ItemList } from './item-list';
import { ColorForm } from './color-form';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colorList: this.props.colorList.concat(),
    };

    this.saveColor = this.saveColor.bind(this);
  }

  saveColor(newColor) {
    this.setState({
      colorList: this.state.colorList.concat(newColor),
    });
  }

  render() {
    return <div> 
      <ToolHeader headerText="Color Tool" />
      <ItemList items={this.state.colorList} />
      <ColorForm onSaveColor={this.saveColor} />
    </div>;
  }

}