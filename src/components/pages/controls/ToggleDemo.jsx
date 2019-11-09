import React from 'react';
import ToggleBox from '../../reusable/controls/toggle/Toggle';
import useToggle from '../../../hooks/useToggle';
import { useTranslation } from 'react-i18next';

export default function ToggleDemo () {
  const { t } = useTranslation('common');
  const [toggles, onChange] = useToggle();
  return toggles.map(({ id, labelKey, ...toggle }, index) => (
    <ToggleBox
      key={index}
      id={`toggle-${id}`}
      label={t(labelKey)}
      onChange={() => onChange(index)}
      {...toggle}
    />
  ));
}
