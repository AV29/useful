import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { DemoSection, GridWrapper, Heading, SmallHeading } from '../../../styles/styles';
import { getRandomColor } from '../../../utilities/random';
import WindowSize from '../../reusable/window-size/WindowSize';
import ClickOutside from '../../reusable/clickoutside/ClickOutside';
import TooltipDemo from './TooltipDemo';
import AsyncDemo from './AsyncDemo';
import ContextMenuDemo from './ContextMenuDemo';
import ClickOutsideDemo from './ClickOutsideDemo';

class RenderProps extends Component {

  constructor(props) {
    super(props);

    this.handleChangeRenderPropContainerData = this.handleChangeRenderPropContainerData.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChooseItem = this.handleChooseItem.bind(this);

    this.state = {
      sharedData: '',
      color: '#444444',
      selectedItem: 'React'
    };

  }

  handleChangeRenderPropContainerData(value) {
    this.setState({ sharedData: value });
  }

  handleChangeColor(color) {
    return () => {
      this.setState({ color });
    };
  }

  handleChooseItem(selectedItem) {
    this.setState({ selectedItem });
  }

  render() {
    return (
      <WindowSize>
        {({ windowWidth, windowHeight }) => (
          <ClickOutside
            onClickedOutside={this.handleChangeColor(getRandomColor())}
            onClickedInside={this.handleChangeColor('black')}
          >
            {({ bindRef }) => (
              <Fragment>
                <Heading>{this.props.name}</Heading>
                <GridWrapper>
                  <AsyncDemo
                    sharedData={this.state.sharedData}
                    onChange={this.handleChangeRenderPropContainerData}
                  />
                  <DemoSection>
                    <SmallHeading>Here is window size: {windowWidth} x {windowHeight}</SmallHeading>
                  </DemoSection>
                  <ContextMenuDemo
                    onChooseItem={this.handleChooseItem}
                    selectedItem={this.state.selectedItem}
                  />
                  <TooltipDemo/>
                  <ClickOutsideDemo
                    bindRef={bindRef}
                    color={this.state.color}
                  />
                </GridWrapper>
              </Fragment>
            )}
          </ClickOutside>
        )}
      </WindowSize>
    );
  }
}

RenderProps.propTypes = {
  name: PropTypes.string
};

export default RenderProps;
