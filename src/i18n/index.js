import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';

const currentDomain = 'http://localhost:3000';

i18n
  .use(XHR)
  .use(initReactI18next)
  .init({
    lng: 'en-US',
    whitelist: ['en-US'],
    ns: ['common'],
    defaultNS: ['common'],
    fallbackLng: false,
    load: 'currentOnly',
    wait: true,
    backend: {
      loadPath: `${currentDomain}/locales/{{lng}}/{{ns}}.json`
    }
  });

export default i18n;
