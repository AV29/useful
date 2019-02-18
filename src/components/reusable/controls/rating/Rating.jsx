import React, { Component } from 'react';
import { number, string, func } from 'prop-types';
import { StyledRatingControl, StyledRatingItem, ItemsWrapper } from './styles';

class Rating extends Component {
  constructor(props) {
    super(props);

    this.previousValue = this.props.value;

  }

  handleClick(val) {
    this.previousValue === val ?
      this.props.onChange(val) :
      this.props.onChange(val + 1);

    this.previousValue = val;
  }

  render() {
    const { label, scaleSize, className, icon, value, iconSize } = this.props;
    return (
      <StyledRatingControl className={className}>
        {label && <div className="label">{label}</div>}
        <ItemsWrapper>
          {[...new Array(scaleSize)].map((_, val) => (
            <StyledRatingItem
              key={val}
              icon={icon}
              size={iconSize}
              rated={value > val}
              onClick={() => this.handleClick(val)}
            />
          ))}
        </ItemsWrapper>
      </StyledRatingControl>
    );
  }
}

Rating.propTypes = {
  icon: string,
  iconSize: number,
  scaleSize: number,
  value: number.isRequired,
  onChange: func.isRequired,
  label: string,
  className: string,
};

Rating.defaultProps = {
  icon: 'star',
  className: '',
  scaleSize: 5,
  iconSize: 30,
  onChange: () => undefined
};

export default Rating;

