import React from 'react';
import { arrayOf, func, shape, string } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { StyledLanguageSwitcher, StyledLocale } from './styles';

function handleChangeLocale (props, locale, i18n) {
  i18n.changeLanguage(locale.locale);
  props.onChange(locale.id);
}

function LanguageSwitcher (props) {
  const { i18n } = useTranslation('common');
  return (
    <StyledLanguageSwitcher>
      {
        props.languages.map(language => (
          <StyledLocale
            key={language.id}
            isActive={i18n.language === language.locale}
            onClick={() => handleChangeLocale(props, language, i18n)}
          >
            {language.displayName}
          </StyledLocale>
        ))
      }
    </StyledLanguageSwitcher>
  );
}

LanguageSwitcher.propTypes = {
  t: func,
  onChange: func,
  languages: arrayOf(shape({
    id: string.isRequired,
    displayName: string,
    locale: string.isRequired
  }))
};

export default LanguageSwitcher;
