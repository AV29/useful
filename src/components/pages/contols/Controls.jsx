import React, { Component, Fragment } from 'react';
import { shape, string } from 'prop-types';
import { ThemeConsumer } from 'styled-components';
import { StyledSlider } from './styles';
import { FlexRowWrapped, DemoSection } from '../../../styles/styles';

class Controls extends Component {

  constructor(props) {
    super(props);

    this.state = {
      restAmount: '',
      restAmountPerDay: '',
      sliderValue: 2
    };

    this.info = {
      1: { tickMark: '10:00', tooltip: 'Came at work' },
      2: { tickMark: '14:00', tooltip: 'Gone for dinner' },
      3: { tickMark: '14:30', tooltip: 'Took some coffee' },
      4: { tickMark: '19:00', tooltip: 'Went home' }
    };

    this.handleChangeRestAmount = this.handleChangeRestAmount.bind(this);
    this.handleChangeSliderValue = this.handleChangeSliderValue.bind(this);
    this.handleCalculateRestAmountPerDay = this.handleCalculateRestAmountPerDay.bind(this);
  }

  handleChangeRestAmount({ target: { value } }) {
    this.setState({ restAmount: value });
  }

  handleCalculateRestAmountPerDay() {
    this.setState({ restAmountPerDay: this.state.restAmount });
  }

  handleChangeSliderValue(sliderValue) {
    console.log(sliderValue);
    this.setState({ sliderValue });
  }

  render() {
    return (
      <ThemeConsumer>
        {({ color, shadowColor }) => (
          <Fragment>
            <h1>{this.props.name}</h1>
            <FlexRowWrapped>
              <DemoSection>
                <StyledSlider
                  label="Slider Example"
                  max={4}
                  stepPerClick
                  value={this.state.sliderValue}
                  onChange={this.handleChangeSliderValue}
                  info={this.info}
                  theme={{ fillLowerColor: color, thumbColor: shadowColor }}
                />
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
    color: string,
    shadowColor: string
  })
};

export default Controls;
