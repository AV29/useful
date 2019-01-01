import React, { Component } from 'react';
import { HorizontalContainer, ColumnContainer } from '../../../styles/styles';
import Input from '../../reusable/input/Input';
import Button from '../../reusable/button/Button';

class MoneyCalculator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      restAmount: '',
      restAmountPerDay: ''
    };

    this.handleChangeRestAmount = this.handleChangeRestAmount.bind(this);
    this.handleCalculateRestAmountPerDay = this.handleCalculateRestAmountPerDay.bind(this);
  }

  handleChangeRestAmount({ target: { value } }) {
    this.setState({ restAmount: value });
  }

  handleCalculateRestAmountPerDay() {
    this.setState({ restAmountPerDay: this.state.restAmount });
  }

  render() {
    return (
      <HorizontalContainer>
        <ColumnContainer>
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
        </ColumnContainer>
      </HorizontalContainer>
    );
  }
}

export default MoneyCalculator;
