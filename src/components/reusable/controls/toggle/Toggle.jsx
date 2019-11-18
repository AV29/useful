import React from 'react';
import { string, bool } from 'prop-types';
import guid from '../../../../utilities/guid';
import { StyledLabel, StyledInputWrapper, StyledSlider, StyledInput, StyledToggle } from './styles';

function Toggle ({ label, className, id = guid(), disabled, leftLabel = false, ...props }) {
  return (
    <StyledToggle
      leftLabel={leftLabel}
      disabled={disabled}
      className={className}
    >
      <StyledInputWrapper htmlFor={id} leftLabel={leftLabel}>
        <StyledInput
          id={id}
          type="checkbox"
          {...props}
        />
        <StyledSlider/>
      </StyledInputWrapper>
      {label && <StyledLabel>{label}</StyledLabel>}
    </StyledToggle>
  );
}

Toggle.propTypes = {
  id: string,
  leftLabel: bool,
  disabled: bool,
  name: string,
  className: string,
  label: string,
  labelOrientation: string
};

export default Toggle;
