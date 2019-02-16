import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlexRow, FlexColumn } from '../../../styles/styles';
import WindowSize from '../../reusable/window-size/WindowSize';
import RenderPropInnerContainer from './RenderPropInnerContainer';
import DataFetcher from '../../reusable/data-fetcher/DataFetcher';

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
      <WindowSize>
        {({ windowWidth, windowHeight }) => (
          <FlexRow>
            <FlexColumn>
              <h1>{this.props.name}</h1>
              <DataFetcher latency={2000}>
                {({ data, loading }) => (
                  <RenderPropInnerContainer
                    data={data}
                    sharedData={this.state.sharedData}
                    loading={loading}
                    onChange={this.handleChangeRenderPropContainerData}
                  />
                )}
              </DataFetcher>
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
