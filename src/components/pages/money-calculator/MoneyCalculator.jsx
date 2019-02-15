import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlexRow, FlexColumn } from '../../../styles/styles';
import Input from '../../reusable/input/Input';
import Button from '../../reusable/button/Button';
import { StyledSlyder } from './styles';

class MoneyCalculator extends Component {

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
      <FlexRow>
        <FlexColumn>
          <h1>{this.props.name}</h1>
          <Input
            id="restAmount"
            label="Rest Amount"
            type="number"
            value={this.state.restAmount}
            onChange={this.handleChangeRestAmount}
          />
          <Input
            id="restAmountPerDay"
            label="Rest Amount Per Day"
            value={this.state.restAmountPerDay}
            style={{ textAlign: 'center' }}
            readOnly
          />
          <Button onClick={this.handleCalculateRestAmountPerDay}>Calculate</Button>
          <StyledSlyder
            label="Slider Example"
            max={4}
            stepPerClick
            value={this.state.sliderValue}
            onChange={this.handleChangeSliderValue}
            info={this.info}
          />
        </FlexColumn>
      </FlexRow>
    );
  }
}

MoneyCalculator.propTypes = {
  name: PropTypes.string
};

export default MoneyCalculator;
