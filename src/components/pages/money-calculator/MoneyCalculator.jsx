import React, { Component } from 'react';
import { HorizontalContainer, ColumnContainer } from '../../../styles/styles';
import Input from '../../reusable/input/Input';
import Button from '../../reusable/button/Button';

class MoneyCalculator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      restAmount: ''
    };

    this.handleChangeRestAmount = this.handleChangeRestAmount.bind(this);
  }

  handleChangeRestAmount({ target: { value } }) {
    this.setState({ restAmount: value });
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
          <Button onClick={() => console.log(this.state.restAmount)}>Calculate</Button>
        </ColumnContainer>
      </HorizontalContainer>
    );
  }
}

export default MoneyCalculator;
