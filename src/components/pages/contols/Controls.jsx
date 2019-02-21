import React, { Component, Fragment } from 'react';
import { shape, string } from 'prop-types';
import { ThemeConsumer } from 'styled-components';
import { SliderContainer, IdleIndicatorContainer } from './styles';
import Rating from '../../reusable/controls/rating/Rating';
import ToggleBox from '../../reusable/controls/toggle/Toggle';
import IdleIndicator from '../../reusable/idle-indicator/IdleIndicator';
import Button from '../../reusable/controls/button/Button';
import { FlexRowWrapped, DemoSection, Heading } from '../../../styles/styles';

class Controls extends Component {

  constructor (props) {
    super(props);

    this.state = {
      inIdle: false,
      sliderValue: 2,
      ratingValue: 3,
      toggles: {
        'left-label': { checked: false, label: 'Is React' },
        'right-label': { checked: true, label: 'Is Angular' },
        'no-label': { checked: false }
      }
    };

    this.handleToggleValue = this.handleToggleValue.bind(this);
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

  handleChangeSliderValue (sliderValue) {
    this.setState({ sliderValue });
  }

  handleChangeRatingValue (ratingValue) {
    this.setState({ ratingValue });
  }

  handleIdleFinished () {
    this.setState({ inIdle: false });
  }

  handleStartIdle () {
    this.setState({ inIdle: true });
    this.indicator.trigger();
  }

  render () {
    return (
      <ThemeConsumer>
        {({ baseColor, shadowColor }) => (
          <Fragment>
            <Heading>{this.props.name}</Heading>
            <FlexRowWrapped>
              <DemoSection>
                <SliderContainer
                  label="Slider Example"
                  max={4}
                  stepPerClick
                  value={this.state.sliderValue}
                  onChange={this.handleChangeSliderValue}
                  info={{
                    1: { tickMark: '10:00', tooltip: 'Came at work' },
                    2: { tickMark: '14:00', tooltip: 'Gone for dinner' },
                    3: { tickMark: '14:30', tooltip: 'Took some coffee' },
                    4: { tickMark: '19:00', tooltip: 'Went home' }
                  }}
                  theme={{ trackColor: baseColor, thumbColor: shadowColor }}
                />
              </DemoSection>
              <DemoSection>
                <Rating
                  scaleSize={10}
                  label="Rating Control"
                  value={this.state.ratingValue}
                  onChange={this.handleChangeRatingValue}
                />
              </DemoSection>
              <DemoSection>
                {Object.keys(this.state.toggles).map(key => (
                  <ToggleBox
                    key={key}
                    id={key}
                    label={this.state.toggles[key].label}
                    checked={this.state.toggles[key].checked}
                    onChange={this.handleToggleValue}
                  />
                ))}
              </DemoSection>
              <DemoSection>
                <IdleIndicatorContainer>
                  <IdleIndicator
                    ref={indicator => this.indicator = indicator}
                    idleTime={2000}
                    onFinished={this.handleIdleFinished}
                  />
                </IdleIndicatorContainer>
                <Button disabled={this.state.inIdle} onClick={this.handleStartIdle}>{this.state.inIdle ? '...waiting' : 'Start Idle Timer'}</Button>
              </DemoSection>
            </FlexRowWrapped>
          </Fragment>
        )}
      </ThemeConsumer>
    );
  }
}

Controls.propTypes = {
  name: string,
  theme: shape({
    baseColor: string,
    shadowColor: string
  })
};

export default Controls;
