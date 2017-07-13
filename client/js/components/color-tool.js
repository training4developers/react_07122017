import React from 'react';

import { ToolHeader } from './tool-header';
import { ItemList } from './item-list';
import { ColorForm } from './color-form';

export class ColorTool extends React.Component {

  static defaultProps = {
    colorList: [],
  };  

  constructor(props) {
    super(props);

    this.state = {
      colorList: this.props.colorList.concat(),
    };
  }

  saveColor = (newColor) => {

    const nextId = Math.max(...this.state.colorList.map(color => color.id)) + 1;

    this.setState({
      colorList: this.state.colorList.concat({
        id: nextId,
        name: newColor
      }),
    });
  };

  deleteColor = (colorId) => {

    const colorToDeleteIndex = this.state.colorList.findIndex(color => color.id === colorId);

    this.setState({
      //colorList: this.state.colorList.filter(color => color.id !== colorId),
      colorList: [
        ...this.state.colorList.slice(0, colorToDeleteIndex),
        ...this.state.colorList.slice(colorToDeleteIndex + 1),
      ],
    });
  }

  render() {
    return <div> 
      <ToolHeader headerText="Color Tool" />
      <ItemList items={this.state.colorList} onDeleteItem={this.deleteColor}  />
      <ColorForm onSaveColor={this.saveColor} />
    </div>;
  }

}