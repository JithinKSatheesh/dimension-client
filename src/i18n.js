import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import hy from 'Locales/hy.json'

const resources = {
    hy: hy,
    
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,

  });


export default i18n;