import React from 'react';
import { node } from 'prop-types';
import { StyledButton } from './styles';

function Button ({ children, ...props }) {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: node
};

export default Button;
