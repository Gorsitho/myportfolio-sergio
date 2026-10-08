/* Current language and helpers to read translated values. */
const LANGUAGES = ['en', 'es', 'de'];
let lang = initialLanguage();

function initialLanguage() {
  const saved = readSetting('lang');
  if (LANGUAGES.includes(saved)) return saved;
  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return LANGUAGES.includes(browser) ? browser : 'en';
}

/** Pick the current language from a { en, es, de } value; plain values pass through. */
function t(value) {
  if (value && typeof value === 'object' && !Array.isArray(value)) return value[lang] ?? value.en;
  return value;
}

/** Interface text by key (see js/data/translations.js), falling back to English. */
const ui = (key) => UI[lang][key] ?? UI.en[key];
