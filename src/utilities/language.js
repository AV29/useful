import languages from '../constants/language';

export const getInitialLocale = () => {
  const currentLanguage = languages.find(({ id }) => id === localStorage.getItem('languageId')) || languages[0];
  return currentLanguage.locale;
};
