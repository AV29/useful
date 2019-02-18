import React, { PureComponent } from 'react';
import { number, string, func } from 'prop-types';
import { StyledRatingControl, StyledRatingItem, ItemsWrapper } from './styles';

class Rating extends PureComponent {
  constructor (props) {
    super(props);

    this.stars = [...new Array(this.props.scaleSize)].map((_, index) => index + 1);
  }

  render () {
    const { label, className, icon, value, onChange, iconSize } = this.props;

    return (
      <StyledRatingControl className={className}>
        {label && <div className="label">{label}</div>}
        <ItemsWrapper>
          {this.stars.map(val => (
            <StyledRatingItem
              key={val}
              icon={icon}
              size={iconSize}
              rated={value >= val}
              onClick={() => onChange(val)}
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

