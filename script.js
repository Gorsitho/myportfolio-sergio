/* =====================================================================
   EDIT YOUR CONTENT HERE
   Everything below the "SITE LOGIC" line renders this data.
   ===================================================================== */

const PROFILE = {
  name: 'YOUR_NAME',
  role: 'YOUR_ROLE',
  intro: 'A short introduction about what you build and what you care about.',
  location: 'YOUR_LOCATION',
  languages: 'YOUR_LANGUAGES',
  status: 'Open to new quests',
  email: 'YOUR_EMAIL',
  github: 'YOUR_GITHUB_URL',
  linkedin: 'YOUR_LINKEDIN_URL',
  // One string per paragraph
  bio: [
    'Write a few sentences about yourself here: your background, what you enjoy building, and what you are looking for next.',
    'Add a second paragraph about your interests, how you like to work, or what you are learning right now.',
  ],
};

// Quest icons: any image in assets/ works. Suggestions:
// assets/dungeon/tile_0089.png (chest), tile_0066.png (scroll), tile_0104.png (sword),
// tile_0116.png (blue potion), tile_0029.png (banner), tile_0101.png (ring)
const PROJECTS = [
  {
    title: 'Project One',
    description: 'Describe the problem this project solves and what you built. One or two sentences is enough.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'YOUR_GITHUB_URL',
    demo: 'https://example.com',
    icon: 'assets/dungeon/tile_0089.png',
    rank: 'Main quest',
  },
  {
    title: 'Project Two',
    description: 'A short description of your second project and the most interesting part of building it.',
    technologies: ['Python', 'SQL'],
    github: 'YOUR_GITHUB_URL',
    demo: 'https://example.com',
    icon: 'assets/dungeon/tile_0066.png',
    rank: 'Side quest',
  },
  {
    title: 'Project Three',
    description: 'What did you learn? What result are you proud of? Mention it here.',
    technologies: ['JavaScript', 'Git'],
    github: 'YOUR_GITHUB_URL',
    demo: 'https://example.com',
    icon: 'assets/dungeon/tile_0104.png',
    rank: 'Side quest',
  },
  {
    title: 'Project Four',
    description: 'A placeholder for another project. Replace the title, text, technologies and links.',
    technologies: ['HTML', 'CSS', 'Python'],
    github: 'YOUR_GITHUB_URL',
    demo: 'https://example.com',
    icon: 'assets/dungeon/tile_0116.png',
    rank: 'Side quest',
  },
];

const SKILLS = [
  { name: 'HTML', type: 'Markup', icon: 'assets/dungeon/tile_0104.png', description: 'Semantic, accessible page structure.' },
  { name: 'CSS', type: 'Styling', icon: 'assets/dungeon/tile_0101.png', description: 'Responsive layouts, animations and design systems.' },
  { name: 'JavaScript', type: 'Language', icon: 'assets/dungeon/tile_0115.png', description: 'Interactive interfaces and browser APIs.' },
  { name: 'Python', type: 'Language', icon: 'assets/dungeon/tile_0114.png', description: 'Scripting, automation and data work.' },
  { name: 'Git', type: 'Tool', icon: 'assets/town/tile_0117.png', description: 'Version control and collaboration on GitHub.' },
  { name: 'SQL', type: 'Data', icon: 'assets/dungeon/tile_0089.png', description: 'Querying and modelling relational data.' },
];

const EXPERIENCE = [
  {
    period: 'YEAR — YEAR',
    title: 'YOUR_POSITION_OR_STUDIES',
    place: 'COMPANY_OR_SCHOOL',
    description: 'Where your journey started. Describe what you did and learned.',
  },
  {
    period: 'YEAR — YEAR',
    title: 'YOUR_POSITION',
    place: 'COMPANY',
    description: 'A milestone along the road: responsibilities, projects and results.',
  },
  {
    period: 'YEAR — Present',
    title: 'YOUR_CURRENT_POSITION',
    place: 'COMPANY',
    description: 'Your current chapter and what you are working towards.',
  },
];

/* =====================================================================
   SITE LOGIC
   ===================================================================== */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function externalLink(href, text, className, label) {
  const a = el('a', className, text);
  a.href = href;
  a.target = '_blank';
  a.rel = 'noopener';
  if (label) a.setAttribute('aria-label', label);
  return a;
}

/* ─── Profile ─── */
function renderProfile() {
  document.querySelectorAll('[data-profile]').forEach((node) => {
    const value = PROFILE[node.dataset.profile];
    if (value) node.textContent = value;
  });

  const links = { github: PROFILE.github, linkedin: PROFILE.linkedin, email: `mailto:${PROFILE.email}` };
  document.querySelectorAll('[data-profile-link]').forEach((node) => {
    node.href = links[node.dataset.profileLink];
  });

  const bio = document.querySelector('[data-profile-bio]');
  if (bio) bio.replaceChildren(...PROFILE.bio.map((text) => el('p', '', text)));

  document.getElementById('year').textContent = new Date().getFullYear();
}

/* ─── Projects: quest board ─── */
function renderProjects() {
  const list = document.getElementById('project-list');
  PROJECTS.forEach((project, index) => {
    const item = el('li', 'quest');
    item.style.setProperty('--tilt', `${index % 2 ? 1 : -1}deg`);

    const head = el('div', 'quest__head');
    const icon = el('img', 'pixel quest__icon');
    icon.src = project.icon;
    icon.alt = '';
    icon.width = 48;
    icon.height = 48;
    const titles = el('div');
    titles.append(el('p', 'quest__rank', project.rank), el('h3', 'quest__title', project.title));
    head.append(icon, titles);

    const tech = el('ul', 'quest__tech');
    tech.setAttribute('role', 'list');
    tech.setAttribute('aria-label', 'Technologies');
    project.technologies.forEach((name) => tech.append(el('li', 'tag', name)));

    const links = el('div', 'quest__links');
    links.append(
      externalLink(project.github, 'GitHub', 'btn btn--small', `${project.title} source code on GitHub`),
      externalLink(project.demo, 'Live demo', 'btn btn--small btn--primary', `${project.title} live demo`),
    );

    item.append(head, el('p', 'quest__desc', project.description), tech, links);
    list.append(item);
  });
}

/* ─── Skills: inventory ─── */
function renderSkills() {
  const list = document.getElementById('skill-list');
  const details = document.getElementById('skill-details');

  function show(skill, button) {
    list.querySelectorAll('.slot').forEach((slot) => slot.setAttribute('aria-pressed', 'false'));
    button.setAttribute('aria-pressed', 'true');
    const icon = el('img', 'pixel');
    icon.src = skill.icon;
    icon.alt = '';
    icon.width = 48;
    icon.height = 48;
    const text = el('div');
    text.append(el('p', 'inventory__name', skill.name), el('p', 'inventory__type', skill.type), el('p', '', skill.description));
    details.replaceChildren(icon, text);
  }

  SKILLS.forEach((skill, index) => {
    const item = el('li');
    const button = el('button', 'slot');
    button.type = 'button';
    button.setAttribute('aria-pressed', 'false');
    const icon = el('img', 'pixel');
    icon.src = skill.icon;
    icon.alt = '';
    icon.width = 48;
    icon.height = 48;
    button.append(icon, el('span', 'slot__name', skill.name));
    button.addEventListener('click', () => show(skill, button));
    item.append(button);
    list.append(item);
    if (index === 0) show(skill, button);
  });
}

/* ─── Experience: journey ─── */
function renderExperience() {
  const list = document.getElementById('experience-list');
  EXPERIENCE.forEach((entry) => {
    const item = el('li', 'journey__stop');
    const marker = el('img', 'pixel journey__marker');
    marker.src = 'assets/town/tile_0083.png';
    marker.alt = '';
    marker.width = 48;
    marker.height = 48;

    const card = el('div', 'window journey__card');
    card.append(
      el('p', 'journey__period', entry.period),
      el('h3', 'journey__title', entry.title),
      el('p', 'journey__place', entry.place),
      el('p', '', entry.description),
    );
    item.append(marker, card);
    list.append(item);
  });
}

/* ─── Navigation ─── */
function setupNavigation() {
  const nav = document.getElementById('nav');
  const toggle = nav.querySelector('.nav__toggle');
  const links = [...nav.querySelectorAll('.nav__links a')];

  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  links.forEach((link) => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });

  // Highlight the section that crosses the middle of the screen.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('is-active', active);
          if (active) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      });
    },
    { rootMargin: '-45% 0px -54% 0px' },
  );
  document.querySelectorAll('main > section').forEach((section) => observer.observe(section));
}

/* ─── Ambient effects: stars, fireflies, dust motes ─── */
function scatter(container, count, className) {
  for (let i = 0; i < count; i++) {
    const dot = el('span', className);
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    dot.style.animationDelay = `${(-Math.random() * 8).toFixed(2)}s`;
    dot.style.animationDuration = `${(4 + Math.random() * 6).toFixed(2)}s`;
    container.append(dot);
  }
}

function setupAmbience() {
  document.querySelectorAll('[data-stars]').forEach((c) => scatter(c, +c.dataset.stars, 'star'));
  document.querySelectorAll('[data-fireflies]').forEach((c) => scatter(c, +c.dataset.fireflies, 'firefly'));
  document.querySelectorAll('[data-motes]').forEach((c) => scatter(c, +c.dataset.motes, 'mote'));
}

/* ─── Gentle parallax on the forest layers ─── */
function setupParallax() {
  if (reduceMotion) return;
  const layers = [...document.querySelectorAll('[data-parallax]')];
  let ticking = false;

  const update = () => {
    layers.forEach((layer) => {
      const section = layer.closest('section');
      const offset = section.getBoundingClientRect().top;
      layer.style.transform = `translate3d(${(offset * +layer.dataset.parallax).toFixed(1)}px, 0, 0)`;
    });
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) requestAnimationFrame(update);
      ticking = true;
    },
    { passive: true },
  );
  update();
}

renderProfile();
renderProjects();
renderSkills();
renderExperience();
setupNavigation();
setupAmbience();
setupParallax();
