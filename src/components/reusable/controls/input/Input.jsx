import React from 'react';
import { StyledInput, StyledInputWrapper, StyledError } from './styles';

function Input ({ id, label, validate, ...props }) {
  return (
    <StyledInputWrapper>
      {label && <label htmlFor={id}>{label}</label>}
      <StyledInput
        id={id}
        withValidation={validate}
        {...props}
      />
      {
        validate &&
        <StyledError>
          {validate()}
        </StyledError>
      }
    </StyledInputWrapper>
  );
}

export default Input;
