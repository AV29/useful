import React from 'react';
import { useTranslation } from 'react-i18next';
import { func, string } from 'prop-types';
import { SmallHeading } from '../../../styles/styles';
import { ClickOutsideDemoSection } from './styles';

export default function ClickOutsideDemo ({ color, bindRef }) {
  const { t } = useTranslation('common');
  return (
    <ClickOutsideDemoSection ref={bindRef} shadowColor={color}>
      <SmallHeading>{t('clickOutsideMessage')}</SmallHeading>
      <SmallHeading>{t('clickInsideMessage')}</SmallHeading>
    </ClickOutsideDemoSection>
  );
}

ClickOutsideDemo.propTypes = {
  bindRef: func,
  color: string
};
