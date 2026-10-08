/* ─── Static interface text: every element with a data-i18n* attribute ─── */
function renderInterface() {
  document.documentElement.lang = lang;
  document.title = `${PROFILE.name} — ${t(PROFILE.role)}`;
  document.querySelector('meta[name="description"]').content = ui('metaDescription').replace('{name}', PROFILE.name);

  document.querySelectorAll('[data-i18n]').forEach((node) => (node.textContent = ui(node.dataset.i18n)));
  document.querySelectorAll('[data-i18n-aria]').forEach((node) => node.setAttribute('aria-label', ui(node.dataset.i18nAria)));
  document.querySelectorAll('[data-i18n-alt]').forEach((node) => (node.alt = ui(node.dataset.i18nAlt)));
  document.querySelectorAll('[data-i18n-title]').forEach((node) => (node.title = ui(node.dataset.i18nTitle)));

  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
  });
}

/* ─── Language switch (flag buttons) ─── */
function setupLanguageSwitch() {
  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => {
      lang = button.dataset.lang;
      saveSetting('lang', lang);
      renderAll();
    });
  });
}
