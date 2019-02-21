import React from 'react';
import { number, func } from 'prop-types';
import { SliderContainer } from './styles';
import { DemoSection } from '../../../styles/styles';

export default function SliderDemo ({ value, onChange }) {
  return (
    <DemoSection>
      <SliderContainer
        label="Slider Example"
        max={4}
        stepPerClick
        value={value}
        onChange={onChange}
        info={{
          1: { tickMark: '10:00', tooltip: 'Came at work' },
          2: { tickMark: '14:00', tooltip: 'Gone for dinner' },
          3: { tickMark: '14:30', tooltip: 'Took some coffee' },
          4: { tickMark: '19:00', tooltip: 'Went home' }
        }}
      />
    </DemoSection>
  );
}

SliderDemo.propTypes = {
  value: number,
  onChange: func
};
