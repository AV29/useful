import React from 'react';
import CheckBox from '../../reusable/controls/checkbox/CheckBox';
import useToggle from '../../../hooks/useToggle';

export default function CheckBoxesDemo () {
  const [checkboxes, onChange] = useToggle();
  return checkboxes.map(({ id, leftLabel, ...checkbox }, index) => (
    <CheckBox
      id={`checkbox-${id}`}
      key={index}
      onChange={() => onChange(index)}
      {...checkbox}
    />
  ));
}
