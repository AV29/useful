import React from 'react';
import { bool, string, func, oneOfType } from 'prop-types';
import { StyledLabelWrapper, StyledCustomBox, StyledInputLabel } from './styles';
import guid from '../../../../utilities/guid';

const CheckBox = ({ label = '', required, className, id = guid(), disabled, ...props }) => (
  <StyledLabelWrapper
    htmlFor={id}
    disabled={disabled}
    className={className}
  >
    <input
      id={id}
      type="checkbox"
      disabled={disabled}
      {...props}
    />
    <StyledCustomBox/>
    <StyledInputLabel>{required ? <span>{label}<strong>*</strong></span> : label}</StyledInputLabel>
  </StyledLabelWrapper>
);

CheckBox.propTypes = {
  id: string,
  onChange: func.isRequired,
  onFocus: func,
  onBlur: func,
  value: oneOfType([bool, string]),
  name: string,
  className: string,
  label: string,
  disabled: bool,
  required: bool
};

export default CheckBox;
