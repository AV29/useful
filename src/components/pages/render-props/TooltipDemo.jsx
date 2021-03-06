import React from 'react';
import { useTranslation } from 'react-i18next';
import { TooltipHoverTarget } from './styles';
import Tooltip from '../../reusable/tooltip/Tooltip';

export default function TooltipDemo () {
  const { t } = useTranslation('common');
  return (
    <Tooltip
      renderHoverTarget={({ bindRef }) => (
        <TooltipHoverTarget ref={bindRef}>{t('hoverToCallTooltip')}</TooltipHoverTarget>)}
    >
      <span>{t('hoverHereHideTooltip')}</span>
    </Tooltip>
  );
}
