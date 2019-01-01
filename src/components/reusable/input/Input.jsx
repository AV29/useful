import React from 'react';
import { StyledInput, StyledInputWrapper } from './styles';

function Input({ id, label, ...props }) {
  return (
    <StyledInputWrapper>
      {label && <label htmlFor={id}>{label}</label>}
      <StyledInput
        id={id}
        {...props}
      />
    </StyledInputWrapper>
  );
}

export default Input;
