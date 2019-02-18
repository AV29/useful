import React from 'react';
import { string } from 'prop-types';
import guid from '../../../../utilities/guid';
import { StyledLabel, StyledSlider, StyledInput, StyledToggle } from './styles';

function Toggle({ label, id = guid(), leftLabel = false, ...props }) {
  return (
    <StyledToggle leftLabel={leftLabel}>
      <StyledLabel htmlFor={id} leftLabel={leftLabel}>
        <StyledInput
          id={id}
          type="checkbox"
          {...props}
        />
        <StyledSlider/>
      </StyledLabel>
      {label && <span>{label}</span>}
    </StyledToggle>
  );
}

Toggle.propTypes = {
  name: string,
  label: string,
  labelOrientation: string
};

export default Toggle;
