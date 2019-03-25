import React from 'react';
import { number, func } from 'prop-types';
import { SliderContainer } from './styles';
import { DemoSection } from '../../../styles/styles';
import { useTranslation } from 'react-i18next';

export default function SliderDemo ({ value, onChange }) {
  const { t } = useTranslation('common');
  return (
    <DemoSection>
      <SliderContainer
        label={t('sliderExample')}
        max={4}
        stepPerClick
        value={value}
        onChange={onChange}
        info={{
          1: { tickMark: '10:00', tooltip: t('cameAtWork') },
          2: { tickMark: '14:00', tooltip: t('goneForDinner') },
          3: { tickMark: '14:30', tooltip: t('tookSomeCoffee') },
          4: { tickMark: '20:00', tooltip: t('wentHome') }
        }}
      />
    </DemoSection>
  );
}

SliderDemo.propTypes = {
  value: number,
  onChange: func
};
