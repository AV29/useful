/* eslint-disable id-length */
import React, { Component } from 'react';
import { func, number } from 'prop-types';
import { withTranslation } from 'react-i18next';
import { findMaxAdjacent, getRandomValue } from './utilities';
import Input from '../../reusable/controls/input/Input';
import {
  StyledAdjacentCalcContainer,
  StyledControlsBlock,
  StyledNumbersWrapper,
  StyledNumberCell,
  StyledRefresher
} from './adjacentCalcStyles';

class AdjacentCalc extends Component {
  static populateData(size) {
    const data = [];
    if (!size) return [[]];
    for (let i = 0; i < size; i += 1) {
      data.push([]);
      for (let j = 0; j < size; j += 1) {
        data[i][j] = getRandomValue(1, 100);
      }
    }
    return data;
  }

  static getInitialState(limit, size) {
    const data = AdjacentCalc.populateData(size);
    return {
      valid: true,
      size,
      limit,
      data,
      result: findMaxAdjacent(data, limit)
    };
  }

  constructor(props) {
    super(props);

    this.handleChangeLimit = this.handleChangeLimit.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.handleValidate = this.handleValidate.bind(this);
    this.regenerate = this.regenerate.bind(this);

    this.state = AdjacentCalc.getInitialState(this.props.defaultLimit, this.props.defaultSize);
  }

  handleChangeLimit({ target: { value } }) {
    this.handleValidate(this.state.size, +value);
  }

  handleChangeSize({ target: { value } }) {
    this.handleValidate(+value, this.state.limit);
  }

  handleValidate(size, limit) {
    this.setState(() => ({
      valid: limit <= size,
      size,
      limit
    }), limit <= size ? this.regenerate : null);
  }

  regenerate() {
    const { limit, size } = this.state;
    const data = AdjacentCalc.populateData(+size);
    this.setState({
      data,
      result: findMaxAdjacent(data, +limit)
    });
  }

  isTargetCell(rowIndex, cellIndex) {
    return this.state.result.indexes.find(({ x, y }) => rowIndex === x && cellIndex === y);
  }

  render() {
    const { data, valid, size, limit, result: { res } } = this.state;
    return (
      <StyledAdjacentCalcContainer>
        <StyledControlsBlock>
          <Input
            id="size"
            label={this.props.t('size')}
            type="number"
            onChange={this.handleChangeSize}
            value={size}
            validate={() => !valid && this.props.t('sizeValidation', { limit })}
          />
          <Input
            id="limit"
            label={this.props.t('limit')}
            type="number"
            onChange={this.handleChangeLimit}
            value={limit}
            validate={() => !valid && this.props.t('limitValidation', { size })}
          />
          {`${this.props.t('result')}: ${res}`}
          <StyledRefresher
            onClick={this.regenerate}
            icon="refresh"
            disabled={!valid}
          />
        </StyledControlsBlock>
        <StyledNumbersWrapper isBlocked={!valid}>
          {
            data.map((row, rowIndex) => (
              <div key={rowIndex}>
                {
                  row.map((cell, cellIndex) => (
                    <StyledNumberCell
                      key={cellIndex}
                      isTarget={this.isTargetCell(rowIndex, cellIndex)}
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
