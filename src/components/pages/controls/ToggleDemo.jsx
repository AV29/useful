import React from 'react';
import { func, object } from 'prop-types';
import ToggleBox from '../../reusable/controls/toggle/Toggle';

export default function ToggleDemo ({ toggles, onChange }) {
  return Object.keys(toggles).map(key => (
    <ToggleBox
      key={key}
      id={key}
      label={toggles[key].label}
      checked={toggles[key].checked}
      onChange={onChange}
    />
  ));
}

ToggleDemo.propTypes = {
  toggles: object,
  onChange: func
};
