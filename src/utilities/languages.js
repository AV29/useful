const languages = [
  {
    id: '1',
    locale: 'en-US',
    displayName: 'en'
  },
  {
    id: '2',
    locale: 'ru',
    displayName: 'ru'
  }
];

export const getInitialLocale = () => {
  const currentLanguage = languages.find(({ id }) => id === localStorage.getItem('languageId')) || languages[0];
  return currentLanguage.locale;
};

export default languages;
