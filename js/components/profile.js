/* ─── Profile: name, role, links and footer year ─── */
function renderProfile() {
  document.querySelectorAll('[data-profile]').forEach((node) => {
    const value = t(PROFILE[node.dataset.profile]);
    if (value) node.textContent = value;
  });

  const links = { github: PROFILE.github, linkedin: PROFILE.linkedin, email: `mailto:${PROFILE.email}` };
  document.querySelectorAll('[data-profile-link]').forEach((node) => {
    node.href = links[node.dataset.profileLink];
  });

  document.getElementById('year').textContent = new Date().getFullYear();
}

let selectedSkill = 0;

/* ─── Skills: inventory inside the About card ─── */
function renderSkills() {
  const list = document.getElementById('skill-list');
  const details = document.getElementById('skill-details');

  const show = (index) => {
    selectedSkill = index;
    const skill = SKILLS[index];
    list.querySelectorAll('.slot').forEach((slot, i) => slot.setAttribute('aria-pressed', String(i === index)));
    const text = el('div');
    text.append(
      el('p', 'inventory__name', skill.name),
      el('p', 'inventory__type', t(skill.type)),
      el('p', 'inventory__desc', t(skill.description)),
    );
    details.replaceChildren(pixelImg(skill.icon), text);
  };

  list.replaceChildren(
    ...SKILLS.map((skill, index) => {
      const item = el('li');
      const button = el('button', 'slot');
      button.type = 'button';
      button.append(pixelImg(skill.icon), el('span', 'slot__name', skill.name));
      button.addEventListener('click', () => show(index));
      item.append(button);
      return item;
    }),
  );
  show(selectedSkill);
}
