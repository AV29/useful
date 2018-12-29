import React from 'react';
import PropTypes from 'prop-types';
import { StyledToggler } from './styles';

function Toggler({ collapsed, size = 20, onClick }) {

  const handleClick = () => onClick && onClick();

  return (
    <StyledToggler
      size={size}
      collapsed={collapsed}
      onClick={handleClick}
    />
  );
}

Toggler.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  size: PropTypes.number,
  onClick: PropTypes.func
};

export default Toggler;
