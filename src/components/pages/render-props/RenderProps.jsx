import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlexRow, FlexColumn } from '../../../styles/styles';
import RenderPropContainer from './RenderPropContainer';
import WindowSize from '../../reusable/window-size/WindowSize';

class RenderProps extends Component {

  constructor (props) {
    super(props);

    this.handleChangeRenderPropContainerData = this.handleChangeRenderPropContainerData.bind(this);

    this.state = {
      sharedData: ''
    };
  }

  handleChangeRenderPropContainerData (value) {
    console.log(value);
    this.setState({ sharedData: value });
  }

  render () {
    return (
      <WindowSize>
        {({ windowWidth, windowHeight }) => (
          <FlexRow>
            <FlexColumn>
              <h1>{this.props.name}</h1>
              <RenderPropContainer
                sharedData={this.state.sharedData}
                onNotifyParent={this.handleChangeRenderPropContainerData}
              />
              <h2>Here is window size: {windowWidth} x {windowHeight}</h2>
            </FlexColumn>
          </FlexRow>
        )}
      </WindowSize>
    );
  }
}

RenderProps.propTypes = {
  name: PropTypes.string
};

export default RenderProps;
