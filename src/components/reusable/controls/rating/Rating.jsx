import React from 'react';
import { number, string, func } from 'prop-types';
import { StyledRatingControl, StyledRatingItem, ItemsWrapper } from './styles';

function Rating ({ label, scaleSize, className, icon, value, onChange, iconSize }) {
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
            onClick={() => onChange(val + 1)}
          />
        ))}
      </ItemsWrapper>
    </StyledRatingControl>
  );
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

