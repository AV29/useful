import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SliderContainer } from './styles';

export default function SliderDemo () {
  const { t } = useTranslation('common');
  const [value, onChange] = useState(2);
  return (
    <SliderContainer
      label={t('dailyPlan')}
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
  );
}
