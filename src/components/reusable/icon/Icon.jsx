import React from 'react';
import { func, string, object, bool } from 'prop-types';
import Icons from './Icons';
import { StyledIcon } from './styles.js';

function Icon({ icon = 'logo', className, onClick, disabled, ...props }) {

  const handleClick = (event) => {
    onClick && !disabled && onClick(event);
  };

  const IconComponent = Icons[icon];

  return (
    <StyledIcon
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
  className: string,
  onClick: func,
  disabled: bool
};

export default Icon;
