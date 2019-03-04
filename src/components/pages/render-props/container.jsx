import React, { Component, Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import { string, func } from 'prop-types';
import { DemoSection, GridWrapper, Heading, SmallHeading } from '../../../styles/styles';
import { getRandomColor } from '../../../utilities/random';
import WindowSize from '../../reusable/window-size/WindowSize';
import ClickOutside from '../../reusable/clickoutside/ClickOutside';
import TooltipDemo from './TooltipDemo';
import AsyncDemo from './AsyncDemo';
import ContextMenuDemo from './ContextMenuDemo';
import ClickOutsideDemo from './ClickOutsideDemo';

class RenderProps extends Component {

  constructor (props) {
    super(props);

    this.handleChangeRenderPropContainerData = this.handleChangeRenderPropContainerData.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChooseItem = this.handleChooseItem.bind(this);

    this.state = {
      sharedData: '',
      color: '#444444',
      selectedItem: this.props.t('isReact'),
      contextMenuItems: [{ id: '1', text: this.props.t('isReact') }, { id: '2', text: this.props.t('isAngular') }, { id: '3', text: this.props.t('isVue') }]
    };

  }

  handleChangeRenderPropContainerData (value) {
    this.setState({ sharedData: value });
  }

  handleChangeColor (color) {
    return () => {
      this.setState({ color });
    };
  }

  handleChooseItem (selectedItem) {
    this.setState({ selectedItem });
  }

  render () {
    return (
      <WindowSize>
        {({ windowWidth, windowHeight }) => (
          <ClickOutside
            onClickedOutside={this.handleChangeColor(getRandomColor())}
            onClickedInside={this.handleChangeColor('black')}
          >
            {({ bindRef }) => (
              <Fragment>
                <Heading>{this.props.t(this.props.nameKey)}</Heading>
                <GridWrapper>
                  <AsyncDemo
                    sharedData={this.state.sharedData}
                    onChange={this.handleChangeRenderPropContainerData}
                  />
                  <DemoSection>
                    <SmallHeading>{this.props.t('windowSizeMessage', { windowWidth, windowHeight })}</SmallHeading>
                  </DemoSection>
                  <ContextMenuDemo
                    items={this.state.contextMenuItems}
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
  nameKey: string,
  t: func
};

export default withTranslation('common')(RenderProps);
