import React from 'react';
import { string } from 'prop-types';
import { StyledCheckBox } from './styles';

function ToggleBox(props) {

  const {
    label            = '',
    name,
    labelOrientation = 'left',
    ...restProps
  } = props;

  return (
    <StyledCheckBox>
      <div className={`input-wrapper toggler ${labelOrientation}`}>
        <input
          id={name}
          type="checkbox"
          className={`${labelOrientation}`}
          {...restProps}
        />
        <label
          htmlFor={name}
        >
          <span className="toggler"/>
          <span>{label}</span>
        </label>
      </div>
    </StyledCheckBox>
  );
}

ToggleBox.propTypes = {
  name: string,
  label: string,
  labelOrientation: string
};

export default ToggleBox;
