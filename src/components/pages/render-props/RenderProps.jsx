import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { DemoSection, FlexRowWrapped, Heading, SmallHeading } from '../../../styles/styles';
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
    if (this.state.padding > 100) return;
    this.setState(({ padding }) => ({ padding: padding + 15 }));
  }

  handleClickInsideContainer() {
    if (this.state.padding < 15) return;
    this.setState(({ padding }) => ({ padding: padding - 15 }));
  }

  render() {
    return (
      <WindowSize>
        {({ windowWidth, windowHeight }) => (
          <Clickoutside
            onClickedOutside={this.handleClickoutsideContainer}
            onClickedInside={this.handleClickInsideContainer}
          >
            {({ bindRef }) => (
              <Fragment>
                <Heading>{this.props.name}</Heading>
                <FlexRowWrapped>
                  <DemoSection>
                    <StyledRenderPropContent ref={bindRef} padding={this.state.padding}>
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
                      <SmallHeading>Click inside bounds to reduce padding, outside to enlarge padding</SmallHeading>
                    </StyledRenderPropContent>
                  </DemoSection>
                  <DemoSection>
                    <SmallHeading>Here is window size: {windowWidth} x {windowHeight}</SmallHeading>
                  </DemoSection>
                </FlexRowWrapped>
              </Fragment>
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
