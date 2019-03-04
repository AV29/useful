import React, { Component, Fragment } from 'react';
import { string } from 'prop-types';
import SliderDemo from './SliderDemo';
import ToggleDemo from './ToggleDemo';
import RatingDemo from './RatingDemo';
import IdleIndicatorDemo from './IdleIndicatorDemo';
import { GridWrapper, Heading } from '../../../styles/styles';
import CheckBoxesDemo from './CheckBoxesDemo';

class Controls extends Component {

  constructor (props) {
    super(props);

    this.state = {
      inIdle: false,
      sliderValue: 2,
      ratingValue: 3,
      toggles: {
        'toggle-1': { checked: false, label: 'Is React' },
        'toggle-2': { checked: true, label: 'Is Angular' },
        'toggle-3': { checked: false }
      },
      checkboxes: {
        'checkbox-1': { checked: false, label: 'HOC' },
        'checkbox-2': { checked: true, label: 'FACC' },
        'checkbox-3': { checked: false, label: 'HOOK' }
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
        <Heading>{this.props.name}</Heading>
        <GridWrapper>
          <SliderDemo
            value={this.state.sliderValue}
            onChange={this.handleChangeSliderValue}
          />
          <RatingDemo
            value={this.state.ratingValue}
            onChange={this.handleChangeRatingValue}
          />
          <ToggleDemo
            toggles={this.state.toggles}
            onChange={this.handleToggleValue}
          />
          <IdleIndicatorDemo
            idle={this.state.inIdle}
            onFinished={this.handleIdleFinished}
            onStartIdle={this.handleStartIdle}
            bindTimer={timer => this.timer = timer}
            bindIndicator={indicator => this.indicator = indicator}
          />
          <CheckBoxesDemo
            checkboxes={this.state.checkboxes}
            onChange={this.handleToggleCheckBoxValue}
          />
        </GridWrapper>
      </Fragment>
    );
  }
}

Controls.propTypes = {
  name: string
};

export default Controls;
