/* =====================================================================
   EDIT YOUR CONTENT HERE
   Text that changes with the language is written as { en, es, de }.
   Everything below the "SITE LOGIC" line renders this data.
   ===================================================================== */

const PROFILE = {
  name: 'Sergio Daniel Velásquez',
  role: { en: 'Developer', es: 'Desarrollador', de: 'Entwickler' },
  intro: {
    en: 'Colombian software developer and Master’s student in Applied Computer Science at the University of Bamberg, passionate about building practical solutions.',
    es: 'Desarrollador de software colombiano y estudiante de máster en Informática Aplicada en la Universidad de Bamberg, apasionado por crear soluciones prácticas.',
    de: 'Kolumbianischer Softwareentwickler und Masterstudent der Angewandten Informatik an der Universität Bamberg – mit Leidenschaft für praktische Lösungen.',
  },
  location: { en: 'Germany', es: 'Alemania', de: 'Deutschland' },
  languages: { en: 'German, English, Spanish', es: 'Alemán, inglés, español', de: 'Deutsch, Englisch, Spanisch' },
  email: 'gorsitho@gmail.com',
  github: 'https://github.com/Gorsitho',
  linkedin: 'https://www.linkedin.com/in/gorsitho/',
};

// Quest icons: any image in assets/ works. Suggestions:
// assets/dungeon/tile_0089.png (chest), tile_0066.png (scroll), tile_0104.png (sword),
// tile_0116.png (blue potion), tile_0101.png (ring)
// rank: 'main' or 'side'
const PROJECTS = [
  {
    title: 'Vie Clinic',
    description: {
      en: 'Medical management software used in different cities across Colombia.',
      es: 'Software de gestión médica utilizado en diferentes ciudades de Colombia.',
      de: 'Software für medizinisches Praxismanagement, die in verschiedenen Städten Kolumbiens eingesetzt wird.',
    },
    technologies: ['Visual basic', 'Express'],
    demo: 'https://indigo.tech/vie-clinic',
    icon: 'assets/dungeon/tile_0089.png',
    rank: 'main',
  },
  {
    title: 'Exploración al saber',
    description: {
      en: 'An educational game to learn the basics of mathematics in an interactive way.',
      es: 'Un juego educativo para aprender las bases de las matemáticas de forma interactiva.',
      de: 'Ein Lernspiel, mit dem man die Grundlagen der Mathematik interaktiv lernt.',
    },
    technologies: ['C#', 'Unity'],
    demo: 'https://mrjaknaz.itch.io/exploracion-al-saber',
    icon: 'assets/dungeon/tile_0066.png',
    rank: 'side',
  },
  {
    title: 'Project Three',
    description: {
      en: 'What did you learn? What result are you proud of? Mention it here.',
      es: '¿Qué aprendiste? ¿De qué resultado estás orgulloso? Menciónalo aquí.',
      de: 'Was hast du gelernt? Auf welches Ergebnis bist du stolz? Erwähne es hier.',
    },
    technologies: ['JavaScript', 'Git'],
    demo: 'https://example.com',
    icon: 'assets/dungeon/tile_0104.png',
    rank: 'side',
  },
  {
    title: 'Project Four',
    description: {
      en: 'A placeholder for another project. Replace the title, text, technologies and links.',
      es: 'Un espacio para otro proyecto. Cambia el título, el texto, las tecnologías y los enlaces.',
      de: 'Platzhalter für ein weiteres Projekt. Ersetze Titel, Text, Technologien und Links.',
    },
    technologies: ['HTML', 'CSS', 'Python'],
    demo: 'https://example.com',
    icon: 'assets/dungeon/tile_0116.png',
    rank: 'side',
  },
];

// Shown as the inventory inside the About card
const SKILLS = [
  {
    name: 'Java',
    icon: 'assets/dungeon/tile_0104.png',
    type: { en: 'Language', es: 'Lenguaje', de: 'Sprache' },
    description: {
      en: 'Object-oriented backend development.',
      es: 'Desarrollo backend orientado a objetos.',
      de: 'Objektorientierte Backend-Entwicklung.',
    },
  },
  {
    name: 'V. Basic',
    icon: 'assets/dungeon/tile_0101.png',
    type: { en: 'Language', es: 'Lenguaje', de: 'Sprache' },
    description: {
      en: 'Desktop business applications.',
      es: 'Aplicaciones de escritorio empresariales.',
      de: 'Business-Anwendungen für den Desktop.',
    },
  },
  {
    name: 'Spring',
    icon: 'assets/dungeon/tile_0115.png',
    type: { en: 'Framework', es: 'Framework', de: 'Framework' },
    description: {
      en: 'REST APIs and backend services in Java.',
      es: 'APIs REST y servicios backend en Java.',
      de: 'REST-APIs und Backend-Services in Java.',
    },
  },
  {
    name: 'React',
    icon: 'assets/dungeon/tile_0114.png',
    type: { en: 'Library', es: 'Librería', de: 'Bibliothek' },
    description: {
      en: 'Interactive, component-based user interfaces.',
      es: 'Interfaces de usuario interactivas basadas en componentes.',
      de: 'Interaktive, komponentenbasierte Benutzeroberflächen.',
    },
  },
  {
    name: 'Git',
    icon: 'assets/town/tile_0117.png',
    type: { en: 'Tool', es: 'Herramienta', de: 'Werkzeug' },
    description: {
      en: 'Version control and collaboration on GitHub.',
      es: 'Control de versiones y colaboración en GitHub.',
      de: 'Versionskontrolle und Zusammenarbeit auf GitHub.',
    },
  },
  {
    name: 'SQL',
    icon: 'assets/dungeon/tile_0089.png',
    type: { en: 'Data', es: 'Datos', de: 'Daten' },
    description: {
      en: 'Querying and modelling relational data.',
      es: 'Consultas y modelado de datos relacionales.',
      de: 'Abfragen und Modellieren relationaler Daten.',
    },
  },
];

const EXPERIENCE = [
  {
    period: '04.2023 — 08.2023',
    title: { en: 'Junior Software Developer', es: 'Desarrollador de software junior', de: 'Junior Softwareentwickler' },
    place: 'Indigo Technologies',
    description: {
      en: 'Developed and maintained features for the “Vie Cloud” product.',
      es: 'Desarrollo y mantenimiento de funcionalidades para el producto «Vie Cloud».',
      de: 'Entwicklung und Wartung von Funktionen für das Produkt „Vie Cloud“.',
    },
  },
  {
    period: '03.2021 — 03.2023',
    title: { en: 'Freelance Software Developer', es: 'Desarrollador de software independiente', de: 'Selbstständiger Softwareentwickler' },
    place: { en: 'Freelance', es: 'Independiente', de: 'Freiberuflich' },
    description: {
      en: 'Built small software solutions and web applications for local clients.',
      es: 'Desarrollo de pequeñas soluciones de software y aplicaciones web para clientes locales.',
      de: 'Entwicklung kleiner Softwarelösungen und Webanwendungen für lokale Kunden.',
    },
  },
  {
    period: '02.2015 — 11.2015',
    title: { en: 'Technician Internship', es: 'Prácticas de técnico', de: 'Techniker-Praktikum' },
    place: 'ABC Insumos',
    description: {
      en: 'Repair and maintenance of computers, smartphones and other devices.',
      es: 'Reparación y mantenimiento de computadores, smartphones y otros dispositivos.',
      de: 'Reparatur und Wartung von Computern, Smartphones und weiteren Geräten.',
    },
  },
];

// Right column of the Journey section (yellow cards)
const EDUCATION = [
  {
    period: { en: 'Since 04.2026', es: 'Desde 04.2026', de: 'Seit 04.2026' },
    title: {
      en: 'M. Sc. Applied Computer Science',
      es: 'M. Sc. Informática Aplicada',
      de: 'M. Sc. Angewandte Informatik',
    },
    place: {
      en: 'Otto-Friedrich University',
      es: 'Universidad Otto-Friedrich',
      de: 'Otto-Friedrich-Universität',
    },
    description: { en: 'Bamberg, Germany.', es: 'Bamberg, Alemania.', de: 'Bamberg, Deutschland.' },
  },
  {
    period: '02.2016 – 04.2021',
    title: {
      en: 'B. Sc. Software Engineering',
      es: 'Ingeniería de Software',
      de: 'B. Sc. Softwaretechnik',
    },
    place: {
      en: 'Surcolombia University (USCO)',
      es: 'Universidad Surcolombiana (USCO)',
      de: 'Universidad Surcolombiana (USCO)',
    },
    description: {
      en: 'Final grade: 1.5. Neiva, Colombia',
      es: 'Nota final: 1.5. Neiva, Colombia',
      de: 'Abschlussnote: 1,5. Neiva, Kolumbien',
    },
  },
  {
    period: '02.2014 – 11.2015',
    title: {
      en: 'Technical Degree in Systems Engineering',
      es: 'Técnico en Ingeniería de Sistemas',
      de: 'Technischer Abschluss in Systemtechnik',
    },
    place: 'SENA',
    description: { en: 'Neiva, Colombia', es: 'Neiva, Colombia', de: 'Neiva, Kolumbien' },
  },
];

/* ─── Interface text (menus, headings, buttons) ─── */
const UI = {
  en: {
    skip: 'Skip to content',
    menu: 'Menu',
    mainNav: 'Main',
    language: 'Language',
    navStart: 'Start',
    navAbout: 'About',
    navJourney: 'Journey',
    navProjects: 'Projects',
    navContact: 'Contact',
    heroTag: 'Dawn · The journey begins',
    heroCta: 'See my projects ▸',
    scrollHint: 'Scroll to About',
    aboutTag: 'Morning · Whispering Forest',
    aboutTitle: 'Character Profile',
    avatarAlt: 'Portrait',
    statName: 'Name',
    statClass: 'Class',
    statHome: 'Home',
    statLanguages: 'Languages',
    music: 'Background music',
    inventoryTitle: 'Inventory',
    inventoryHint: 'Select an item to inspect it.',
    journeyTag: 'Midday · The Green Meadows',
    journeyTitle: 'The Journey So Far',
    workTitle: 'Work',
    educationTitle: 'Education',
    projectsTag: 'Afternoon · Guild Village',
    projectsTitle: 'Quest Board',
    projectsSub: 'Projects I have taken on. Pick a quest to try the demo.',
    boardSign: 'Quests',
    rankMain: 'Main quest',
    rankSide: 'Side quest',
    demo: 'Live demo',
    technologies: 'Technologies',
    contactTag: 'Night · The End of the Road',
    contactTitle: 'Send a Message',
    contactLead: 'This journey ends here — the next one could start with you.',
    contactText: 'Have a project, a role or just a question? My inbox is always open.',
    castleAlt: 'Pixel-art castle under a full moon',
    thanks: 'Thanks for exploring.',
    credits: 'Art credits',
    metaDescription: 'Portfolio of {name}, software developer. Projects, skills and experience.',
  },
  es: {
    skip: 'Saltar al contenido',
    menu: 'Menú',
    mainNav: 'Principal',
    language: 'Idioma',
    navStart: 'Inicio',
    navAbout: 'Sobre mí',
    navJourney: 'Trayectoria',
    navProjects: 'Proyectos',
    navContact: 'Contacto',
    heroTag: 'Amanecer · Comienza el viaje',
    heroCta: 'Ver mis proyectos ▸',
    scrollHint: 'Ir a Sobre mí',
    aboutTag: 'Mañana · Bosque de los Susurros',
    aboutTitle: 'Perfil del personaje',
    avatarAlt: 'Retrato',
    statName: 'Nombre',
    statClass: 'Clase',
    statHome: 'Hogar',
    statLanguages: 'Idiomas',
    music: 'Música de fondo',
    inventoryTitle: 'Inventario',
    inventoryHint: 'Selecciona un objeto para inspeccionarlo.',
    journeyTag: 'Mediodía · Las Praderas Verdes',
    journeyTitle: 'El viaje hasta ahora',
    workTitle: 'Experiencia',
    educationTitle: 'Educación',
    projectsTag: 'Tarde · Aldea del Gremio',
    projectsTitle: 'Tablón de misiones',
    projectsSub: 'Proyectos que he emprendido. Elige una misión para probar la demo.',
    boardSign: 'Misiones',
    rankMain: 'Misión principal',
    rankSide: 'Misión secundaria',
    demo: 'Ver demo',
    technologies: 'Tecnologías',
    contactTag: 'Noche · El final del camino',
    contactTitle: 'Envíame un mensaje',
    contactLead: 'Este viaje termina aquí — el próximo podría empezar contigo.',
    contactText: '¿Tienes un proyecto, un puesto o simplemente una pregunta? Mi bandeja de entrada siempre está abierta.',
    castleAlt: 'Castillo en pixel art bajo la luna llena',
    thanks: 'Gracias por explorar.',
    credits: 'Créditos de arte',
    metaDescription: 'Portafolio de {name}, desarrollador de software. Proyectos, habilidades y experiencia.',
  },
  de: {
    skip: 'Zum Inhalt springen',
    menu: 'Menü',
    mainNav: 'Hauptnavigation',
    language: 'Sprache',
    navStart: 'Start',
    navAbout: 'Über mich',
    navJourney: 'Werdegang',
    navProjects: 'Projekte',
    navContact: 'Kontakt',
    heroTag: 'Morgengrauen · Die Reise beginnt',
    heroCta: 'Meine Projekte ▸',
    scrollHint: 'Zu „Über mich“ scrollen',
    aboutTag: 'Morgen · Flüsterwald',
    aboutTitle: 'Charakterprofil',
    avatarAlt: 'Porträt',
    statName: 'Name',
    statClass: 'Klasse',
    statHome: 'Heimat',
    statLanguages: 'Sprachen',
    music: 'Hintergrundmusik',
    inventoryTitle: 'Inventar',
    inventoryHint: 'Wähle einen Gegenstand, um ihn anzusehen.',
    journeyTag: 'Mittag · Die grünen Wiesen',
    journeyTitle: 'Die bisherige Reise',
    workTitle: 'Berufserfahrung',
    educationTitle: 'Ausbildung',
    projectsTag: 'Nachmittag · Gildendorf',
    projectsTitle: 'Auftragsbrett',
    projectsSub: 'Projekte, die ich umgesetzt habe. Wähle einen Auftrag, um die Demo zu testen.',
    boardSign: 'Aufträge',
    rankMain: 'Hauptquest',
    rankSide: 'Nebenquest',
    demo: 'Live-Demo',
    technologies: 'Technologien',
    contactTag: 'Nacht · Das Ende des Weges',
    contactTitle: 'Schreib mir',
    contactLead: 'Diese Reise endet hier – die nächste könnte mit dir beginnen.',
    contactText: 'Du hast ein Projekt, eine Stelle oder einfach eine Frage? Mein Postfach ist immer offen.',
    castleAlt: 'Pixel-Art-Burg unter dem Vollmond',
    thanks: 'Danke fürs Erkunden.',
    credits: 'Grafik-Credits',
    metaDescription: 'Portfolio von {name}, Softwareentwickler. Projekte, Fähigkeiten und Erfahrung.',
  },
};

/* =====================================================================
   SITE LOGIC
   ===================================================================== */

const LANGUAGES = ['en', 'es', 'de'];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let lang = initialLanguage();
let selectedSkill = 0;

/* Saved preferences (language, music). Storage can be blocked, e.g. in private mode. */
function readSetting(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function saveSetting(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage unavailable: the choice lasts for this visit only */
  }
}

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

const ui = (key) => UI[lang][key] ?? UI.en[key];

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function pixelImg(src, className, size = 48) {
  const img = el('img', `pixel ${className || ''}`.trim());
  img.src = src;
  img.alt = '';
  img.width = size;
  img.height = size;
  return img;
}

function externalLink(href, text, className, label) {
  const a = el('a', className, text);
  a.href = href;
  a.target = '_blank';
  a.rel = 'noopener';
  if (label) a.setAttribute('aria-label', label);
  return a;
}

/* ─── Static interface text ─── */
function renderInterface() {
  document.documentElement.lang = lang;
  document.title = `${PROFILE.name} — ${t(PROFILE.role)}`;
  document.querySelector('meta[name="description"]').content = ui('metaDescription').replace('{name}', PROFILE.name);

  document.querySelectorAll('[data-i18n]').forEach((node) => (node.textContent = ui(node.dataset.i18n)));
  document.querySelectorAll('[data-i18n-aria]').forEach((node) => node.setAttribute('aria-label', ui(node.dataset.i18nAria)));
  document.querySelectorAll('[data-i18n-alt]').forEach((node) => (node.alt = ui(node.dataset.i18nAlt)));

  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
  });
}

/* ─── Profile ─── */
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
      links.append(externalLink(project.demo, ui('demo'), 'btn btn--small', `${project.title}: ${ui('demo')}`));

      item.append(head, el('p', 'quest__desc', t(project.description)), tech, links);
      return item;
    }),
  );
}

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

function renderAll() {
  renderInterface();
  renderProfile();
  renderProjects();
  renderSkills();
  renderExperience();
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

/* ─── Background music ───
   Browsers block sound until the visitor interacts with the page, so the loop
   starts on the first click, tap or key press (unless it was switched off). */
const MUSIC_VOLUME = 0.3;

function setupMusic() {
  const audio = document.getElementById('bg-music');
  const toggle = document.querySelector('.music-toggle');
  let enabled = readSetting('music') !== 'off';
  let resumeWhenVisible = false;

  audio.volume = MUSIC_VOLUME;
  const render = () => toggle.setAttribute('aria-pressed', String(!audio.paused));
  const play = () => audio.play().catch(() => {}).finally(render);

  toggle.addEventListener('click', () => {
    enabled = audio.paused;
    saveSetting('music', enabled ? 'on' : 'off');
    if (enabled) play();
    else {
      audio.pause();
      render();
    }
  });

  const startOnFirstInteraction = (event) => {
    ['pointerdown', 'keydown', 'touchend'].forEach((type) => document.removeEventListener(type, startOnFirstInteraction));
    if (enabled && audio.paused && !event.target.closest('.music-toggle')) play();
  };
  ['pointerdown', 'keydown', 'touchend'].forEach((type) => document.addEventListener(type, startOnFirstInteraction));

  // Pause while the tab is hidden, resume when the visitor comes back.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      resumeWhenVisible = !audio.paused;
      audio.pause();
    } else if (resumeWhenVisible) play();
  });

  if (enabled) play(); // plays right away where the browser allows autoplay
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

/* ─── Scroll parallax ───
   data-parallax: horizontal drift (forest).
   data-depth: vertical lag behind the page (0 = moves with the page,
   higher = farther away). Measured from the section's centre so layers
   rest in their designed position when the section is centred on screen. */
function setupParallax() {
  if (reduceMotion) return;
  const layers = [...document.querySelectorAll('[data-parallax], [data-depth]')];
  let ticking = false;

  const update = () => {
    const viewportCenter = window.innerHeight / 2;
    layers.forEach((layer) => {
      const rect = layer.closest('section').getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
      const x = rect.top * (+layer.dataset.parallax || 0);
      const y = (viewportCenter - (rect.top + rect.height / 2)) * (+layer.dataset.depth || 0);
      layer.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
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
  window.addEventListener('resize', update);
  update();
}

renderAll();
setupLanguageSwitch();
setupMusic();
setupNavigation();
setupAmbience();
setupParallax();
