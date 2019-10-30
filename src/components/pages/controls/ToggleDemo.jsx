import React from 'react';
import ToggleBox from '../../reusable/controls/toggle/Toggle';
import useToggle from '../../../hooks/useToggle';

export default function ToggleDemo () {
  const [toggles, onChange] = useToggle();
  return toggles.map(({ id, ...toggle }, index) => (
    <ToggleBox
      key={index}
      id={`toggle-${id}`}
      onChange={() => onChange(index)}
      {...toggle}
    />
  ));
}
