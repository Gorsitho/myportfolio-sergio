/**
 * ─────────────────────────────────────────────────────────────────────
 *  EXPERIENCE — shown on the Journey Map, oldest first.
 *
 *  period       – e.g. '2023' or '2023 — 2024'
 *  landmark     – a short name for the stop on the map (flavour text)
 *  title        – your role, degree or milestone
 *  organization – company, school or context
 *  description  – one or two sentences
 *  highlights   – optional short bullet points
 *  All entries are placeholders.
 * ─────────────────────────────────────────────────────────────────────
 */

export interface ExperienceEntry {
  period: string;
  landmark: string;
  title: string;
  organization: string;
  description: string;
  highlights?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    period: '2023',
    landmark: 'The starting village',
    title: 'YOUR_FIRST_MILESTONE',
    organization: 'YOUR_SCHOOL_OR_COMPANY',
    description:
      'Where the journey started — e.g. your studies, a first course or the first program you shipped.',
    highlights: ['Learned the fundamentals of programming', 'Built first small web projects'],
  },
  {
    period: '2024',
    landmark: 'The crossroads',
    title: 'YOUR_ROLE_OR_PROGRAM',
    organization: 'YOUR_SCHOOL_OR_COMPANY',
    description:
      'A project, internship or education milestone. Describe your responsibilities and what you learned.',
    highlights: ['Collaborated in a team using Git', 'Delivered a project end to end'],
  },
  {
    period: '2025',
    landmark: 'The mountain pass',
    title: 'YOUR_ROLE',
    organization: 'YOUR_COMPANY_OR_CLIENT',
    description:
      'A development milestone — a job, freelance work or an open-source contribution with real users.',
    highlights: ['Shipped features to production', 'Improved performance and accessibility'],
  },
  {
    period: '2026 — now',
    landmark: 'Current chapter',
    title: 'YOUR_CURRENT_ROLE',
    organization: 'YOUR_CURRENT_COMPANY',
    description: 'What you are working on today and the direction you want to grow in.',
  },
];
