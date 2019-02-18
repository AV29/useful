import React from 'react';
import PropTypes from 'prop-types';
import { StyledMenuOpener } from './styles';

function MenuOpener({ size = 20, ...props }) {

  return (
    <StyledMenuOpener
      size={size}
      {...props}
    />
  );
}

MenuOpener.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  size: PropTypes.number,
  onClick: PropTypes.func
};

export default MenuOpener;
