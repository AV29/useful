import React from 'react';
import { string, bool } from 'prop-types';
import guid from '../../../../utilities/guid';
import { StyledLabel, StyledInputWrapper, StyledSlider, StyledInput, StyledToggle } from './styles';

function Toggle ({ label, id = guid(), disabled, leftLabel = false, ...props }) {
  return (
    <StyledToggle
      leftLabel={leftLabel}
      disabled={disabled}
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
  name: string,
  label: string,
  labelOrientation: string
};

export default Toggle;
