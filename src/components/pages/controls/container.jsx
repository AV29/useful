import React, { Component, Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import { string, func } from 'prop-types';
import SliderDemo from './SliderDemo';
import ToggleDemo from './ToggleDemo';
import RatingDemo from './RatingDemo';
import IdleIndicatorDemo from './IdleIndicatorDemo';
import { GridWrapper, Heading } from '../../../styles/styles';
import DemoSection from '../../reusable/demo-section/DemoSection';
import CheckBoxesDemo from './CheckBoxesDemo';
import AdjacentCalc from './AdjacentCalc';

class Controls extends Component {

  constructor (props) {
    super(props);

    this.state = {
      inIdle: false,
      sliderValue: 2,
      ratingValue: 9,
      toggles: {
        'toggle-1': { checked: false, label: this.props.t('isReact') },
        'toggle-2': { checked: true, label: this.props.t('isAngular') },
        'toggle-3': { checked: false }
      },
      checkboxes: {
        'checkbox-1': { checked: false, label: this.props.t('hoc') },
        'checkbox-2': { checked: true, label: this.props.t('facc') },
        'checkbox-3': { checked: false, label: this.props.t('hook') }
      }
    };

    this.handleToggleValue = this.handleToggleValue.bind(this);
    this.handleToggleCheckBoxValue = this.handleToggleCheckBoxValue.bind(this);
    this.handleChangeSliderValue = this.handleChangeSliderValue.bind(this);
    this.handleChangeRatingValue = this.handleChangeRatingValue.bind(this);
    this.handleIdleFinished = this.handleIdleFinished.bind(this);
    this.handleStartIdle = this.handleStartIdle.bind(this);
  }

  handleToggleValue ({ target: { id } }) {
    this.setState(({ toggles }) => ({
      toggles: {
        ...toggles,
        [id]: {
          ...toggles[id],
          checked: !toggles[id].checked
        }
      }
    }));
  }

  handleToggleCheckBoxValue ({ target: { id } }) {
    this.setState(({ checkboxes }) => ({
      checkboxes: {
        ...checkboxes,
        [id]: {
          ...checkboxes[id],
          checked: !checkboxes[id].checked
        }
      }
    }));
  }

  handleChangeSliderValue (sliderValue) {
    this.setState({ sliderValue });
  }

  handleChangeRatingValue (ratingValue) {
    this.setState({ ratingValue });
  }

  handleIdleFinished () {
    this.setState({ inIdle: false });
    this.timer.stop();
  }

  handleStartIdle () {
    this.setState({ inIdle: true });
    this.indicator.trigger();
    this.timer.trigger();
  }

  render () {
    return (
      <Fragment>
        <Heading>{this.props.t(this.props.nameKey)}</Heading>
        <GridWrapper>
          <DemoSection title={this.props.t('sliderExample')}>
            <SliderDemo
              value={this.state.sliderValue}
              onChange={this.handleChangeSliderValue}
            />
          </DemoSection>
          <DemoSection title={this.props.t('ratingControl')}>
            <RatingDemo
              value={this.state.ratingValue}
              onChange={this.handleChangeRatingValue}
            />
          </DemoSection>
          <DemoSection title={this.props.t('toggleExample')}>
            <ToggleDemo
              toggles={this.state.toggles}
              onChange={this.handleToggleValue}
            />
          </DemoSection>
          <DemoSection title={this.props.t('idleIndicatorExample')}>
            <IdleIndicatorDemo
              idle={this.state.inIdle}
              onFinished={this.handleIdleFinished}
              onStartIdle={this.handleStartIdle}
              bindTimer={timer => this.timer = timer}
              bindIndicator={indicator => this.indicator = indicator}
            />
          </DemoSection>
          <DemoSection title={this.props.t('checkboxExample')}>
            <CheckBoxesDemo
              checkboxes={this.state.checkboxes}
              onChange={this.handleToggleCheckBoxValue}
            />
          </DemoSection>
          <DemoSection>
            <AdjacentCalc />
          </DemoSection>
        </GridWrapper>
      </Fragment>
    );
  }
}

Controls.propTypes = {
  nameKey: string,
  t: func
};

export default withTranslation('common')(Controls);
