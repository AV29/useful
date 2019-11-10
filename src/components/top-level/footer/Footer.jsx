import React from 'react';
import { func } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { getCurrentYear } from '../../../utilities/date';
import { StyledFooter } from './styles';

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <StyledFooter>
      {t('footerInfo', { date: getCurrentYear() })}
    </StyledFooter>
  );
};

export default Footer;
