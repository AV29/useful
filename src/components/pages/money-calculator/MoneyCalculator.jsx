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
            steps={[
              { value: 1, label: 'Fast', tooltip: 'Fastest, Test Feasibility' },
              { value: 2, tooltip: 'Fast, Basic Search' },
              { value: 3, label: 'Balanced', tooltip: 'Default' },
              { value: 4, tooltip: 'Slower, Expanded Search' },
              { value: 5, label: 'Detailed', tooltip: 'Slowest, Advanced Search' }
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
