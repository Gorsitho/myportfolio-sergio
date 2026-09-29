/**
 * ─────────────────────────────────────────────────────────────────────
 *  PROJECTS — shown on the Quest Board.
 *
 *  To add a project, copy one object below and edit it. Cards are rendered
 *  in this order. Mark ONE project as `featured: true` to give it the large
 *  highlighted card.
 *
 *  Images live in /public. Use a path relative to /public, e.g.
 *  'projects/my-app.png'. A 16:9 image around 960×540 works best.
 *  Every entry below is a placeholder — replace them with your own work.
 * ─────────────────────────────────────────────────────────────────────
 */

export type ProjectStatus = 'Completed' | 'In progress' | 'Prototype' | 'Maintained';

export interface Project {
  title: string;
  /** One or two sentences: the problem and what you built. */
  description: string;
  /** Path relative to /public. */
  image: string;
  /** Describe the image for screen-reader users. */
  imageAlt: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  year: number;
  status?: ProjectStatus;
}

export const projects: Project[] = [
  {
    title: 'Project Alpha',
    description:
      'Placeholder for your flagship project. Explain the problem it solves, who it is for, and the most interesting technical decision you made along the way.',
    image: 'projects/alpha.svg',
    imageAlt: 'Pixel-art illustration of a dashboard window with charts',
    technologies: ['TypeScript', 'Astro', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/Gorsitho/YOUR_REPOSITORY',
    demoUrl: 'https://example.com',
    featured: true,
    year: 2026,
    status: 'Maintained',
  },
  {
    title: 'Project Beta',
    description:
      'Placeholder for a web application. Mention one measurable result or the feature you are proudest of.',
    image: 'projects/beta.svg',
    imageAlt: 'Pixel-art illustration of a treasure map with a dotted route',
    technologies: ['React', 'TypeScript', 'CSS'],
    githubUrl: 'https://github.com/Gorsitho/YOUR_REPOSITORY',
    demoUrl: 'https://example.com',
    year: 2025,
    status: 'Completed',
  },
  {
    title: 'Project Gamma',
    description:
      'Placeholder for an AI or data project. Describe the model or API you used and how the result reached real users.',
    image: 'projects/gamma.svg',
    imageAlt: 'Pixel-art illustration of a glowing crystal orb',
    technologies: ['Python', 'FastAPI', 'Docker'],
    githubUrl: 'https://github.com/Gorsitho/YOUR_REPOSITORY',
    year: 2025,
    status: 'Prototype',
  },
  {
    title: 'Project Delta',
    description:
      'Placeholder for a tool, library or mobile experience. Keep it short — link to the repository for the details.',
    image: 'projects/delta.svg',
    imageAlt: 'Pixel-art illustration of a phone showing a simple interface',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Git'],
    githubUrl: 'https://github.com/Gorsitho/YOUR_REPOSITORY',
    demoUrl: 'https://example.com',
    year: 2024,
    status: 'In progress',
  },
];
