import React from 'react';
import { func, arrayOf, shape, string } from 'prop-types';
import { StyledHeader } from './styles';
import { Heading, FlexRow } from '../../../styles/styles';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../reusable/controls/language-switcher/LanguageSwitcher';
import ThemePicker from '../../reusable/controls/theme-picker/ThemePicker';

function Header ({ themes, languages, onThemeChange, onLanguageChange }) {
  const { t } = useTranslation('common');
  return (
    <StyledHeader>
      <Heading>
        {t('headerTitle')}
      </Heading>
      <FlexRow>
        <LanguageSwitcher
          languages={languages}
          onChange={onLanguageChange}
        />
        <ThemePicker
          themes={themes}
          onChange={onThemeChange}
        />
      </FlexRow>
    </StyledHeader>
  );
}

Header.propTypes = {
  onThemeChange: func,
  onLanguageChange: func,
  languages: arrayOf(shape({
    id: string.isRequired,
    displayName: string,
    locale: string.isRequired
  })),
  themes: arrayOf(shape({
    id: string.isRequired,
    baseColor: string,
    backgroundColor: string,
    shadowColor: string,
    borderColor: string
  }))
};

export default Header;
