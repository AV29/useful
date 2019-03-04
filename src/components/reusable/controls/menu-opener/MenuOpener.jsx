import React from 'react';
import { bool, number, func } from 'prop-types';
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
  collapsed: bool.isRequired,
  size: number,
  onClick: func
};

export default MenuOpener;
