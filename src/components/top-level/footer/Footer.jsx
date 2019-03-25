import React from 'react';
import { func } from 'prop-types';
import { Route } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { StyledFooter } from './styles';

function Footer ({ t }) {
  return (
    <StyledFooter>
      {t('footerInfo')}
      <Route path="/hooks" render={() => <h1>Hello hooks</h1>}/>
    </StyledFooter>
  );
}

Footer.propTypes = {
  t: func
};

export default withTranslation('common')(Footer);
