import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlexRow, FlexColumn } from '../../../styles/styles';
import Input from '../../reusable/input/Input';
import Button from '../../reusable/button/Button';
import Slider from '../../reusable/slider/Slider';

class MoneyCalculator extends Component {

  constructor(props) {
    super(props);

    this.steps = (new Array(10)).fill(0).map((el, i) => ({ value: i, label: `${i}`, tooltip: `Anton ${i}` }));

    this.state = {
      restAmount: '',
      restAmountPerDay: '',
      sliderValue: 2
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
          <Slider
            style={{ width: 600 }}
            label="Slider Example"
            value={this.state.sliderValue}
            onChange={this.handleChangeSliderValue}
            steps={this.steps}
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
