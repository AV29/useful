import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { DemoSection, FlexRowWrapped, Flex, Heading, SmallHeading } from '../../../styles/styles';
import ContextMenu from '../../reusable/context-menu/ContextMenu';
import WindowSize from '../../reusable/window-size/WindowSize';
import TestContainer from './TestContainer';
import { StyledRenderPropContent, StyledList, ContextMenuCaller, TooltipHoverTarget, TestSquare } from './styles';
import { getRandomColor } from '../../../utilities/random';
import DataFetcher from '../../reusable/data-fetcher/DataFetcher';
import ClickOutside from '../../reusable/clickoutside/ClickOutside';
import Tooltip from '../../reusable/tooltip/Tooltip';

class RenderProps extends Component {

  constructor (props) {
    super(props);

    this.handleChangeRenderPropContainerData = this.handleChangeRenderPropContainerData.bind(this);
    this.handleClickOutsideContainer = this.handleClickOutsideContainer.bind(this);
    this.handleChooseItem = this.handleChooseItem.bind(this);

    this.state = {
      sharedData: '',
      borderColor: '#444444',
      selectedItem: 'React'
    };

    this.items = [{ id: '1', text: 'Angular' }, { id: '2', text: 'React' }, { id: '3', text: 'Vue' }];
  }

  handleChangeRenderPropContainerData (value) {
    this.setState({ sharedData: value });
  }

  handleClickOutsideContainer () {
    this.setState({ borderColor: getRandomColor() });
  }

  handleChooseItem (selectedItem) {
    this.setState({ selectedItem });
  }

  render () {
    return (
      <WindowSize>
        {({ windowWidth, windowHeight }) => (
          <ClickOutside onClickedOutside={this.handleClickOutsideContainer}>
            {({ bindRef }) => (
              <Fragment>
                <Heading>{this.props.name}</Heading>
                <FlexRowWrapped>
                  <DemoSection>
                    <StyledRenderPropContent ref={bindRef} style={{ borderColor: this.state.borderColor }}>
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
                      <SmallHeading>Click outside bounds to paint them randomly</SmallHeading>
                    </StyledRenderPropContent>
                  </DemoSection>
                  <DemoSection>
                    <SmallHeading>Here is window size: {windowWidth} x {windowHeight}</SmallHeading>
                  </DemoSection>
                  <DemoSection>
                    <SmallHeading>Context Menu example (made with Portal)</SmallHeading>
                    <ContextMenu
                      renderCaller={({ handleShowMenu }) => (
                        <Flex>
                          <ContextMenuCaller
                            onContextMenu={(event) => {
                              event.preventDefault();
                              handleShowMenu(event);
                            }}
                          >
                            Right Click to choose framework
                          </ContextMenuCaller>
                          <SmallHeading>{this.state.selectedItem}</SmallHeading>
                        </Flex>
                      )}
                    >
                      {({ handleHideMenu }) => (
                        <StyledList>
                          {
                            this.items.map(({ text, id }) => (
                              <li
                                key={id}
                                onClick={
                                  (event) => {
                                    text !== this.state.selectedItem && this.handleChooseItem(text);
                                    handleHideMenu(event);
                                  }
                                }
                              >
                                {text}
                              </li>
                            ))
                          }
                        </StyledList>
                      )}
                    </ContextMenu>
                  </DemoSection>
                  <DemoSection>
                    <Tooltip
                      renderHoverTarget={
                        ({ bindRef }) => (
                          <TooltipHoverTarget ref={bindRef}>Hover to see custom tooltip</TooltipHoverTarget>
                        )}
                    >
                      {<span ref={bindRef}>Here is a tooltip!!!</span>}
                    </Tooltip>
                    <Tooltip
                      renderHoverTarget={
                        ({ bindRef }) => (
                          <TestSquare ref={bindRef} style={{ top: 10, left: 10 }}/>
                        )}
                    >
                      {<span ref={bindRef}>TEst Test TEST TEST!!!</span>}
                    </Tooltip>
                    <Tooltip
                      renderHoverTarget={
                        ({ bindRef }) => (
                          <TestSquare ref={bindRef} style={{ right: 10, top: 10 }}/>
                        )}
                    >
                      {<span ref={bindRef}>TEst Test TEST TEST!!!</span>}
                    </Tooltip>
                    <Tooltip
                      renderHoverTarget={
                        ({ bindRef }) => (
                          <TestSquare ref={bindRef} style={{ bottom: 10, left: 10 }}/>
                        )}
                    >
                      {<span ref={bindRef}>TEst Test TEST TEST!!!</span>}
                    </Tooltip>
                    <Tooltip
                      renderHoverTarget={
                        ({ bindRef }) => (
                          <TestSquare ref={bindRef} style={{ bottom: 10, right: 10 }}/>
                        )}
                    >
                      {<span ref={bindRef}>TEst Test TEST TEST!!!</span>}
                    </Tooltip>

                    <Tooltip
                      renderHoverTarget={
                        ({ bindRef }) => (
                          <TestSquare ref={bindRef} style={{ bottom: '50%', left: 10 }}/>
                        )}
                    >
                      {<span ref={bindRef}>TEst Test TEST TEST!!!</span>}
                    </Tooltip>
                    <Tooltip
                      renderHoverTarget={
                        ({ bindRef }) => (
                          <TestSquare ref={bindRef} style={{ bottom: 10, right: '50%' }}/>
                        )}
                    >
                      {<span ref={bindRef}>TEst Test TEST TEST!!!</span>}
                    </Tooltip>
                    <Tooltip
                      renderHoverTarget={
                        ({ bindRef }) => (
                          <TestSquare ref={bindRef} style={{ top: '50%', right: 10 }}/>
                        )}
                    >
                      {<span ref={bindRef}>TEst Test TEST TEST!!!</span>}
                    </Tooltip>
                    <Tooltip
                      renderHoverTarget={
                        ({ bindRef }) => (
                          <TestSquare ref={bindRef} style={{ top: 10, left: '50%' }}/>
                        )}
                    >
                      {<span ref={bindRef}>TEst Test TEST TEST!!!</span>}
                    </Tooltip>
                  </DemoSection>
                </FlexRowWrapped>
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
