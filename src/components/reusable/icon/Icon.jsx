import React from 'react';
import { func, string, object, bool } from 'prop-types';
import Icons from './Icons';
import { StyledIcon } from './styles.js';

export function Icon ({ icon = 'logo', onClick, size = 30, disabled, ...props }) {

  const handleClick = (event) => {
    onClick && !disabled && onClick(event);
  };

  const IconComponent = Icons[icon];

  return (
    <StyledIcon
      size={size}
      onClick={handleClick}
      {...props}
    >
      {IconComponent ? <IconComponent/> : '*'}
    </StyledIcon>
  );
}

Icon.propTypes = {
  style: object,
  icon: string,
  title: string,
  onClick: func,
  disabled: bool
};

export function FontIcon ({ icon = 'logo', type = 'fa', className, onClick, disabled, ...props }) {

  const handleClick = (event) => {
    onClick && !disabled && onClick(event);
  };

  return (
    <i
      onClick={handleClick}
      {...props}
      className={`${type} fa-${icon}`}
    />
  );
}
