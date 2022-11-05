import { createI18n } from 'vue-i18n';

import en from '@/locales/en.json';
import ko from '@/locales/ko.json';

let browserLang = navigator.language.substring(0, 2);
if (!['en', 'ko'].includes(browserLang)) browserLang = 'en';

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem('SL_LANG') || browserLang,
  warnHtmlMessage: false,
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'en',
  messages: {
    ko,
    en,
  },
});

export default i18n;
