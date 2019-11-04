import React, { Component, Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import { string, func } from 'prop-types';
import { GridWrapper, Heading, SmallHeading } from '../../../styles/styles';
import DemoSection from '../../reusable/demo-section/DemoSection';
import WindowSize from '../../reusable/window-size/WindowSize';
import TooltipDemo from './TooltipDemo';
import AsyncDemo from './AsyncDemo';
import ContextMenuDemo from './ContextMenuDemo';
import ClickOutsideDemo from './ClickOutsideDemo';

class RenderProps extends Component {

  constructor (props) {
    super(props);

    this.handleChangeRenderPropContainerData = this.handleChangeRenderPropContainerData.bind(this);
    this.handleChooseItem = this.handleChooseItem.bind(this);

    this.state = {
      sharedData: '',
      color: '#444444',
      selectedItem: this.props.t('isReact'),
      contextMenuItems: [{ id: '1', text: this.props.t('isReact') }, {
        id: '2',
        text: this.props.t('isAngular')
      }, { id: '3', text: this.props.t('isVue') }]
    };

  }

  handleChangeRenderPropContainerData (value) {
    this.setState({ sharedData: value });
  }

  handleChooseItem (selectedItem) {
    this.setState({ selectedItem });
  }

  render () {
    return (
      <WindowSize>
        {({ windowWidth, windowHeight }) => (
          <Fragment>
            <Heading>{this.props.t(this.props.nameKey)}</Heading>
            <GridWrapper>
              <DemoSection title={this.props.t('asyncLoadingExample')}>
                <AsyncDemo
                  sharedData={this.state.sharedData}
                  onChange={this.handleChangeRenderPropContainerData}
                />
              </DemoSection>
              <DemoSection title={this.props.t('windowSize')}>
                <SmallHeading>{this.props.t('windowSizeMessage', { windowWidth, windowHeight })}</SmallHeading>
              </DemoSection>
              <DemoSection title={this.props.t('contextMenuExampleRenderPropTitle')}>
                <ContextMenuDemo
                  items={this.state.contextMenuItems}
                  onChooseItem={this.handleChooseItem}
                  selectedItem={this.state.selectedItem}
                />
              </DemoSection>
              <DemoSection title={this.props.t('tooltipExample')}>
                <TooltipDemo />
              </DemoSection>
              <DemoSection title={this.props.t('clickOutsideExample')}>
                <ClickOutsideDemo />
              </DemoSection>
            </GridWrapper>
          </Fragment>
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
