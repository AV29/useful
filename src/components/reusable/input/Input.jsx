import React from 'react';
import { StyledInput } from './styles';

function Input({ id, label, ...props }) {
  return (
    <StyledInput>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        {...props}
      />
    </StyledInput>
  );
}

export default Input;
