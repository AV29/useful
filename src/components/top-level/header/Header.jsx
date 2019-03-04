import React from 'react';
import { func, arrayOf, shape, string } from 'prop-types';
import { StyledHeader } from './styles';
import { useTranslation } from 'react-i18next';
import ThemePicker from '../../reusable/controls/theme-picker/ThemePicker';

function Header({ themes, onThemeChange }) {
  const { t } = useTranslation('common');
  return (
    <StyledHeader>
      <h1>
        {t('headerTitle')}
      </h1>
      <ThemePicker
        themes={themes}
        onChange={onThemeChange}
      />
    </StyledHeader>
  );
}

Header.propTypes = {
  onThemeChange: func,
  themes: arrayOf(shape({
    id: string.isRequired,
    baseColor: string,
    backgroundColor: string,
    shadowColor: string,
    borderColor: string
  }))
};

export default Header;
