/* =====================================================================
   Entry point: renders the content and wires up the interactions.
   Loaded last (see index.html), after the data, utils and components.
   ===================================================================== */

/** Renders everything that depends on the language; called again on language change. */
function renderAll() {
  renderInterface();
  renderProfile();
  renderProjects();
  renderAchievements();
  renderSkills();
  renderExperience();
}

renderAll();
setupLanguageSwitch();
setupEmailCopy();
setupMusic();
setupNavigation();
setupAmbience();
setupParallax();
