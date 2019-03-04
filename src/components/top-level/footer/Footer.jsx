import React from 'react';
import { func } from 'prop-types';
import { withTranslation } from 'react-i18next';
import { StyledFooter } from './styles';

function Footer({ t }) {
  return (
    <StyledFooter>
      {t('footerInfo')}
    </StyledFooter>
  );
}

Footer.propTypes = {
  t: func
};

export default withTranslation('common')(Footer);
