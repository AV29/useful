import React from 'react';
import { func, string } from 'prop-types';
import noop from '../../../../utilities/noop';
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
      <StyledError>
        {validate()}
      </StyledError>
    </StyledInputWrapper>
  );
}

Input.propTypes = {
  id: string,
  validate: func,
  label: string,
};

Input.defaultProps = {
  validate: noop
};

export default Input;
