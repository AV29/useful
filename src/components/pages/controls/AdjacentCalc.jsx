/* eslint-disable id-length */
import React, { Component } from 'react';
import classNames from '../../../utilities/classnames';
import { findMaxAdjacent, getRandomValue } from './utilities';
import Input from '../../reusable/controls/input/Input';
import Button from '../../reusable/controls/button/Button';
import './AdjacentCalc.less';

class AdjacentCalc extends Component {
  static populateData (size) {
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

  static getInitialState (limit, size) {
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

  constructor (props) {
    super(props);

    this.handleChangeLimit = this.handleChangeLimit.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.handleValidate = this.handleValidate.bind(this);
    this.recalculate = this.recalculate.bind(this);
    this.regenerate = this.regenerate.bind(this);

    this.defaultLimit = 4;
    this.defaultSize = 10;

    this.state = AdjacentCalc.getInitialState(this.defaultLimit, this.defaultSize);
  }

  handleChangeLimit ({ target: { value } }) {
    this.handleValidate(this.state.size, +value, this.recalculate);
  }

  handleChangeSize ({ target: { value } }) {
    this.handleValidate(+value, this.state.limit, this.regenerate);
  }

  handleValidate (size, limit, callback) {
    let isSizeInvalid = false;
    let isLimitInvalid = false;
    if (size > this.defaultSize) {
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

  recalculate () {
    this.setState(({ limit, data }) => ({
      result: findMaxAdjacent(data, +limit)
    }));
  }

  regenerate () {
    const { limit, size } = this.state;
    const data = AdjacentCalc.populateData(+size);
    this.setState({
      data,
      result: findMaxAdjacent(data, +limit)
    });
  }

  isTargetCell (rowIndex, cellIndex) {
    return this.state.result.indexes.find(({ x, y }) => rowIndex === x && cellIndex === y);
  }

  getData (data) {
    return data.map((row, rowIndex) => (
      <div
        key={rowIndex}
        className="adjacent-calc-row"
      >
        {
          row.map((cell, cellIndex) => (
            <span
              key={cellIndex}
              className={classNames(['adjacent-calc-cell', { active: this.isTargetCell(rowIndex, cellIndex) }])}
            >
              {cell}
            </span>
          ))}
      </div>
    ));
  }

  render () {
    const { data, validation, size, limit, result: { res } } = this.state;
    return (
      <div className="adjacent-calc-container">
        <div className="controls-block">
          <Button onClick={this.regenerate}> Regenerate Data </Button>
          <div className="control">
            <Input
              id="size"
              label="Size"
              type="number"
              onChange={this.handleChangeSize}
              value={size}
              validate={() => validation.size ? `should be in range of ${limit} - ${this.defaultSize}` : null}
            />
          </div>
          <div className="control">
            <Input
              id="limit"
              label="Limit"
              type="number"
              onChange={this.handleChangeLimit}
              value={limit}
              validate={() => validation.limit ? `can't be more than ${size}` : null}
            />
          </div>
          <div className="result">
            Result: {res}
          </div>
        </div>
        <div className={classNames(['numbers-wrapper', { 'has-error': validation.limit || validation.size }])}>
          {this.getData(data)}
        </div>
      </div>
    );
  }
}

export default AdjacentCalc;
