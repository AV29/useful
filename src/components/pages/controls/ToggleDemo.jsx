import React from 'react';
import { func, object } from 'prop-types';
import ToggleBox from '../../reusable/controls/toggle/Toggle';
import { DemoSection } from '../../../styles/styles';

export default function ToggleDemo ({ toggles, onChange }) {
  return (
    <DemoSection>
      {
        Object.keys(toggles).map(key => (
          <ToggleBox
            key={key}
            id={key}
            label={toggles[key].label}
            checked={toggles[key].checked}
            onChange={onChange}
          />
        ))
      }
    </DemoSection>
  );
}

ToggleDemo.propTypes = {
  toggles: object,
  onChange: func
};
