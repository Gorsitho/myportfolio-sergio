/* ─── Journey: work (signposts, blue cards) and education (scrolls, yellow cards) ─── */
function renderJourney(listId, entries, marker, cardClass) {
  document.getElementById(listId).replaceChildren(
    ...entries.map((entry) => {
      const item = el('li', 'journey__stop');
      const card = el('div', `window journey__card ${cardClass}`.trim());
      card.append(
        el('p', 'journey__period', t(entry.period)),
        el('h4', 'journey__title', t(entry.title)),
        el('p', 'journey__place', t(entry.place)),
        el('p', 'journey__desc', t(entry.description)),
      );
      item.append(pixelImg(marker, 'journey__marker'), card);
      return item;
    }),
  );
}

function renderExperience() {
  renderJourney('experience-list', EXPERIENCE, 'assets/town/tile_0083.png', '');
  renderJourney('education-list', EDUCATION, 'assets/dungeon/tile_0066.png', 'journey__card--education');
}
