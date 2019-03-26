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
      validation: {
        size: false,
        limit: false
      },
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
    this.recalculate = this.recalculate.bind(this);
    this.regenerate = this.regenerate.bind(this);

    this.state = AdjacentCalc.getInitialState(this.props.defaultLimit, this.props.defaultSize);
  }

  handleChangeLimit({ target: { value } }) {
    this.handleValidate(this.state.size, +value, this.recalculate);
  }

  handleChangeSize({ target: { value } }) {
    this.handleValidate(+value, this.state.limit, this.regenerate);
  }

  handleValidate(size, limit, callback) {
    let isSizeInvalid = false;
    let isLimitInvalid = false;
    if (size > this.props.defaultSize) {
      isSizeInvalid = true;
    }
    if (limit > size) {
      isSizeInvalid = true;
      isLimitInvalid = true;
    }
    this.setState(() => ({
      validation: { size: isSizeInvalid, limit: isLimitInvalid },
      size,
      limit
    }), isSizeInvalid || isLimitInvalid ? null : callback);
  }

  recalculate() {
    this.setState(({ limit, data }) => ({
      result: findMaxAdjacent(data, +limit)
    }));
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
    const { data, validation, size, limit, result: { res } } = this.state;
    return (
      <StyledAdjacentCalcContainer>
        <StyledControlsBlock>
          <Input
            id="size"
            label={this.props.t('size')}
            type="number"
            onChange={this.handleChangeSize}
            value={size}
            validate={() => validation.size && this.props.t('sizeValidation', { limit, defaultSize: this.props.defaultSize })}
          />
          <Input
            id="limit"
            label={this.props.t('limit')}
            type="number"
            onChange={this.handleChangeLimit}
            value={limit}
            validate={() => validation.limit && this.props.t('limitValidation', { size })}
          />
          {`${this.props.t('result')}: ${res}`}
          <StyledRefresher onClick={this.regenerate} icon="refresh"/>
        </StyledControlsBlock>
        <StyledNumbersWrapper isBlocked={validation.limit || validation.size}>
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
