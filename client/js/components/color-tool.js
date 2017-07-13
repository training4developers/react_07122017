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

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        colorList: this.state.colorList.slice(0,2).concat(this.state.colorList.slice(3)),
      });
    }, 3000);
  }

  saveColor = (newColor) => {
    this.setState({
      colorList: this.state.colorList.concat(newColor),
    });
  };

  render() {
    return <div> 
      <ToolHeader headerText="Color Tool" />
      <ItemList items={this.state.colorList}  />
      <ColorForm onSaveColor={this.saveColor} />
    </div>;
  }

}