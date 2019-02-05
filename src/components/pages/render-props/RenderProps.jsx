import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HorizontalContainer, ColumnContainer } from '../../../styles/styles';
import RenderPropContainer from './RenderPropContainer';

class RenderProps extends Component {

  constructor(props) {
    super(props);

    this.handleChangeRenderPropContainerData = this.handleChangeRenderPropContainerData.bind(this);

    this.state = {
      sharedData: ''
    };
  }

  handleChangeRenderPropContainerData(value) {
    console.log(value);
    this.setState({ sharedData: value });
  }

  render() {
    return (
      <HorizontalContainer>
        <ColumnContainer>
          <h1>{this.props.name}</h1>
          <RenderPropContainer
            sharedData={this.state.sharedData}
            onNotifyParent={this.handleChangeRenderPropContainerData}
          />
        </ColumnContainer>
      </HorizontalContainer>
    );
  }
}

RenderProps.propTypes = {
  name: PropTypes.string
};

export default RenderProps;
