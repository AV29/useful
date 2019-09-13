import React from 'react';
import { func, object } from 'prop-types';
import CheckBox from '../../reusable/controls/checkbox/CheckBox';

export default function CheckBoxesDemo ({ checkboxes, onChange }) {
  return Object.keys(checkboxes).map(key => (
    <CheckBox
      key={key}
      id={key}
      label={checkboxes[key].label}
      checked={checkboxes[key].checked}
      onChange={onChange}
    />
  ));
}

CheckBoxesDemo.propTypes = {
  checkboxes: object,
  onChange: func
};
