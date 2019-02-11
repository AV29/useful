import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlexRow, FlexColumn } from '../../../styles/styles';
import Input from '../../reusable/input/Input';
import Button from '../../reusable/button/Button';
import Slider from '../../reusable/slider/Slider';

class MoneyCalculator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      restAmount: '',
      restAmountPerDay: '',
      sliderValue: 400
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
            style={{ width: 500}}
            label="Slider Example"
            value={this.state.sliderValue}
            onChange={this.handleChangeSliderValue}
            steps={[
              { index: 1, value: 400, label: '400', tooltip: '400' },
              { index: 2, value: 500, label: '500', tooltip: '500' },
              { index: 3, value: 600, label: '600', tooltip: '600' },
              { index: 4, value: 700, label: '700', tooltip: '700' }
            ]}
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
