/* =====================================================================
   EDIT YOUR CONTENT HERE
   Text that changes with the language is written as { en, es, de }.
   Asset paths are relative to index.html (e.g. assets/dungeon/...).
   ===================================================================== */

const PROFILE = {
  name: 'Sergio Velásquez',
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
// demo (optional): live site, shown as a "Live demo" button
// code (optional): repository link, shown as a "View code" button
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
    title: 'Advanced Angular',
    description: {
      en: 'Angular course completed on the Udemy platform.',
      es: 'Curso de Angular completado en la plataforma Udemy.',
      de: 'Angular-Kurs, abgeschlossen auf der Plattform Udemy.',
    },
    technologies: ['Angular', 'TypeScript'],
    code: 'https://github.com/Gorsitho',
    icon: 'assets/dungeon/tile_0104.png',
    rank: 'side',
  },
];

// Shown below the quest board. Icons are 16×16 pixel art in assets/achievements/
const ACHIEVEMENTS = [
  {
    title: { en: 'German B2 Certificate', es: 'Certificado de alemán B2', de: 'Deutsch-Zertifikat B2' },
    description: {
      en: 'Certified German language skills at level B2.',
      es: 'Conocimientos de alemán certificados en el nivel B2.',
      de: 'Zertifizierte Deutschkenntnisse auf Niveau B2.',
    },
    icon: 'assets/achievements/german-b2.svg',
  },
  {
    title: { en: 'Volunteering in Germany', es: 'Voluntariado en Alemania', de: 'Ehrenamt in Deutschland' },
    description: {
      en: 'Gave my time to support the local community in Germany.',
      es: 'Dediqué mi tiempo a apoyar a la comunidad local en Alemania.',
      de: 'Ehrenamtlicher Einsatz für die lokale Gemeinschaft in Deutschland.',
    },
    icon: 'assets/achievements/volunteering.svg',
  },
  {
    title: 'Scrum Fundamentals Certified',
    description: {
      en: 'Certified in the fundamentals of the Scrum framework and agile teamwork.',
      es: 'Certificado en los fundamentos del marco Scrum y el trabajo ágil en equipo.',
      de: 'Zertifiziert in den Grundlagen des Scrum-Frameworks und agiler Teamarbeit.',
    },
    icon: 'assets/achievements/scrum.svg',
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
