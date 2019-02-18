import React, { Component, Fragment } from 'react';
import { shape, string } from 'prop-types';
import { ThemeConsumer } from 'styled-components';
import { StyledSlider } from './styles';
import Rating from '../../reusable/rating/Rating';
import { FlexRowWrapped, DemoSection, Heading } from '../../../styles/styles';

class Controls extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sliderValue: 2,
      ratingValue: 3
    };

    this.handleChangeSliderValue = this.handleChangeSliderValue.bind(this);
    this.handleChangeRatingValue = this.handleChangeRatingValue.bind(this);
  }

  handleChangeSliderValue(sliderValue) {
    this.setState({ sliderValue });
  }

  handleChangeRatingValue(ratingValue) {
    console.log(ratingValue);
    this.setState({ ratingValue });
  }

  render() {
    return (
      <ThemeConsumer>
        {({ color, shadowColor }) => (
          <Fragment>
            <Heading>{this.props.name}</Heading>
            <FlexRowWrapped>
              <DemoSection>
                <StyledSlider
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
                  theme={{ trackColor: color, thumbColor: shadowColor }}
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
