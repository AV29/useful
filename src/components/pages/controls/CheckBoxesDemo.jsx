import React from 'react';
import { useTranslation } from 'react-i18next';
import CheckBox from '../../reusable/controls/checkbox/CheckBox';
import useToggle from '../../../hooks/useToggle';

export default function CheckBoxesDemo () {
  const { t } = useTranslation('common');
  const [checkboxes, onChange] = useToggle();
  return checkboxes.map(({ id, leftLabel, labelKey, ...checkbox }, index) => (
    <CheckBox
      id={`checkbox-${id}`}
      key={index}
      label={t(labelKey)}
      onChange={() => onChange(index)}
      {...checkbox}
    />
  ));
}
