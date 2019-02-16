import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlexRow, StyledHeading } from '../../../styles/styles';
import WindowSize from '../../reusable/window-size/WindowSize';
import TestContainer from './TestContainer';
import { StyledRenderPropContent } from './styles';
import DataFetcher from '../../reusable/data-fetcher/DataFetcher';
import Clickoutside from '../../reusable/clickoutside/Clickoutside';

class RenderProps extends Component {

  constructor(props) {
    super(props);

    this.handleChangeRenderPropContainerData = this.handleChangeRenderPropContainerData.bind(this);
    this.handleClickoutsideContainer = this.handleClickoutsideContainer.bind(this);
    this.handleClickInsideContainer = this.handleClickInsideContainer.bind(this);

    this.state = {
      sharedData: '',
      padding: 15
    };
  }

  handleChangeRenderPropContainerData(value) {
    this.setState({ sharedData: value });
  }

  handleClickoutsideContainer() {
    if(this.state.padding > 100) return;
    this.setState(({ padding }) => ({ padding: padding + 15 }));
  }

  handleClickInsideContainer() {
    if(this.state.padding < 15) return;
    this.setState(({ padding }) => ({ padding: padding - 15 }));
  }

  render() {
    console.log(this.state.padding);
    return (
      <WindowSize>
        {({ windowWidth, windowHeight }) => (
          <Clickoutside
            onClickedOutside={this.handleClickoutsideContainer}
            onClickedInside={this.handleClickInsideContainer}
          >
            {({ bindRef }) => (
              <FlexRow>
                <StyledRenderPropContent ref={bindRef} padding={this.state.padding}>
                  <StyledHeading>{this.props.name}</StyledHeading>
                  <DataFetcher latency={2000}>
                    {({ data, loading }) => (
                      <TestContainer
                        data={data}
                        sharedData={this.state.sharedData}
                        loading={loading}
                        onChange={this.handleChangeRenderPropContainerData}
                      />
                    )}
                  </DataFetcher>
                  <StyledHeading>Here is window size: {windowWidth} x {windowHeight}</StyledHeading>
                </StyledRenderPropContent>
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
