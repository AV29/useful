/* eslint-disable id-length */
import React, { Component } from 'react';
import { func, number } from 'prop-types';
import { withTranslation } from 'react-i18next';
import { findMaxAdjacent, populateData } from './utilities';
import Input from '../../reusable/controls/input/Input';
import {
  StyledAdjacentCalcContainer,
  StyledControlsBlock,
  StyledNumbersWrapper,
  StyledNumberCell,
  StyledRefresher
} from './adjacentCalcStyles';

class AdjacentCalc extends Component {

  static getInitialState(limit, size) {
    const data = populateData(size);
    return {
      size,
      limit,
      data,
      result: findMaxAdjacent(data, limit)
    };
  }

  state = AdjacentCalc.getInitialState(this.props.defaultLimit, this.props.defaultSize);

  handleChangeLimit = ({ target: { value } }) => {
    this.handleValidate(this.state.size, +value);
  };

  handleChangeSize = ({ target: { value } }) => {
    this.handleValidate(+value, this.state.limit);
  };

  handleValidate = (size, limit) => {
    this.setState(() => ({ size, limit }), limit <= size ? this.regenerate : null);
  };

  regenerate = () => {
    const { limit, size } = this.state;
    const data = populateData(+size);
    this.setState({
      data,
      result: findMaxAdjacent(data, +limit)
    });
  };

  checkIsTargetCell = (rowIndex, cellIndex) => {
    return this.state.result.indexes.find(({ x, y }) => rowIndex === x && cellIndex === y);
  };

  render() {
    const { data, size, limit, result: { res } } = this.state;
    const isValid = limit <= size;
    return (
      <StyledAdjacentCalcContainer>
        <StyledControlsBlock>
          <Input
            id="size"
            label={this.props.t('size')}
            type="number"
            onChange={this.handleChangeSize}
            value={size}
            validate={() => !isValid && this.props.t('sizeValidation', { limit })}
          />
          <Input
            id="limit"
            label={this.props.t('limit')}
            type="number"
            onChange={this.handleChangeLimit}
            value={limit}
            validate={() => !isValid && this.props.t('limitValidation', { size })}
          />
          {`${this.props.t('result')}: ${res}`}
          <StyledRefresher
            onClick={this.regenerate}
            icon="refresh"
            disabled={!isValid}
          />
        </StyledControlsBlock>
        <StyledNumbersWrapper isBlocked={!isValid}>
          {
            data.map((row, rowIndex) => (
              <div key={rowIndex}>
                {
                  row.map((cell, cellIndex) => (
                    <StyledNumberCell
                      key={cellIndex}
                      isTarget={this.checkIsTargetCell(rowIndex, cellIndex)}
                    >
                      {cell}
                    </StyledNumberCell>
                  ))
                }
              </div>
            ))
          }
        </StyledNumbersWrapper>
      </StyledAdjacentCalcContainer>
    );
  }
}

AdjacentCalc.defaultProps = {
  defaultSize: 5,
  defaultLimit: 3
};

AdjacentCalc.propTypes = {
  defaultSize: number,
  defaultLimit: number,
  t: func
};

export default withTranslation('common')(AdjacentCalc);
