/* ─── Projects: quest board ─── */
function renderProjects() {
  const list = document.getElementById('project-list');
  list.replaceChildren(
    ...PROJECTS.map((project, index) => {
      const item = el('li', 'quest');
      item.style.setProperty('--tilt', `${index % 2 ? 1 : -1}deg`);

      const head = el('div', 'quest__head');
      const titles = el('div');
      titles.append(
        el('p', 'quest__rank', ui(project.rank === 'main' ? 'rankMain' : 'rankSide')),
        el('h3', 'quest__title', project.title),
      );
      head.append(pixelImg(project.icon, 'quest__icon'), titles);

      const tech = el('ul', 'quest__tech');
      tech.setAttribute('role', 'list');
      tech.setAttribute('aria-label', ui('technologies'));
      project.technologies.forEach((name) => tech.append(el('li', 'tag', name)));

      const links = el('div', 'quest__links');
      if (project.demo) {
        links.append(externalLink(project.demo, ui('demo'), 'btn btn--small', `${project.title}: ${ui('demo')}`));
      }
      if (project.code) {
        const code = externalLink(project.code, '', 'btn btn--small btn--code', `${project.title}: ${ui('code')}`);
        code.innerHTML = '<svg class="icon" aria-hidden="true" focusable="false"><use href="#i-github"/></svg>';
        code.append(ui('code'));
        links.append(code);
      }

      // Ink stamp in the bottom corner of the quest paper
      const stamp = el('span', 'quest__stamp');
      stamp.innerHTML = '<svg class="icon" aria-hidden="true" focusable="false"><use href="#i-check"/></svg>';
      stamp.append(ui('stamp'));
      links.append(stamp);

      item.append(head, el('p', 'quest__desc', t(project.description)), tech, links);
      return item;
    }),
  );
}

/* ─── Achievements: "unlocked" banners below the quest board ─── */
function renderAchievements() {
  document.getElementById('achievement-list').replaceChildren(
    ...ACHIEVEMENTS.map((achievement) => {
      const item = el('li', 'achievement');
      const frame = el('div', 'achievement__frame');
      frame.append(pixelImg(achievement.icon, 'achievement__icon'));
      const text = el('div');
      text.append(
        el('p', 'achievement__label', ui('achievementUnlocked')),
        el('h4', 'achievement__title', t(achievement.title)),
        el('p', 'achievement__desc', t(achievement.description)),
      );
      item.append(frame, text);
      return item;
    }),
  );
}
