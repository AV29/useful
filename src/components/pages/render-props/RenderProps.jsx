import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlexRow, FlexColumn } from '../../../styles/styles';
import WindowSize from '../../reusable/window-size/WindowSize';
import { StyledTestContainer } from './styles';
import DataFetcher from '../../reusable/data-fetcher/DataFetcher';
import Clickoutside from '../../reusable/clickoutside/Clickoutside';

class RenderProps extends Component {

  constructor(props) {
    super(props);

    this.handleChangeRenderPropContainerData = this.handleChangeRenderPropContainerData.bind(this);
    this.handleClickoutsideTestContainer = this.handleClickoutsideTestContainer.bind(this);

    this.state = {
      sharedData: ''
    };
  }

  handleChangeRenderPropContainerData(value) {
    console.log(value);
    this.setState({ sharedData: value });
  }

  handleClickoutsideTestContainer() {
    console.log('outside');
  }

  render() {
    return (
      <WindowSize>
        {({ windowWidth, windowHeight }) => (
          <Clickoutside onClickedOutside={this.handleClickoutsideTestContainer}>
            {({ bindRef }) => (
              <FlexRow>
                <FlexColumn>
                  <h1>{this.props.name}</h1>
                  <DataFetcher latency={2000}>
                    {({ data, loading }) => (
                      <StyledTestContainer
                        passedRef={bindRef}
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
          </Clickoutside>
        )}
      </WindowSize>
    );
  }
}

RenderProps.propTypes = {
  name: PropTypes.string
};

export default RenderProps;
