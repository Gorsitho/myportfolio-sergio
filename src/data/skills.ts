/**
 * ─────────────────────────────────────────────────────────────────────
 *  SKILLS — shown as inventory items in the Workshop.
 *
 *  Each category gets its own item icon (tome, gem, hammer, gear).
 *  For each skill:
 *    name   – full name
 *    short  – 1–3 characters engraved on the item
 *    color  – item colour (6-digit hex)
 *    usedIn – where you used it (shown when the item is selected)
 *  All values are placeholders — keep only what you actually use.
 * ─────────────────────────────────────────────────────────────────────
 */

export type ItemIcon = 'tome' | 'gem' | 'hammer' | 'gear';

export interface Skill {
  name: string;
  short: string;
  color: string;
  usedIn: string[];
}

export interface SkillCategory {
  title: string;
  icon: ItemIcon;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'tome',
    skills: [
      { name: 'JavaScript', short: 'JS', color: '#e8c547', usedIn: ['Project Delta', 'Web interfaces'] },
      { name: 'TypeScript', short: 'TS', color: '#5b8fd6', usedIn: ['Project Alpha', 'Project Beta'] },
      { name: 'Python', short: 'PY', color: '#6fae6a', usedIn: ['Project Gamma', 'Automation scripts'] },
      { name: 'HTML', short: 'HT', color: '#e0703f', usedIn: ['Every web project'] },
      { name: 'CSS', short: 'CS', color: '#4fa89a', usedIn: ['Every web project', 'This portfolio'] },
      { name: 'SQL', short: 'SQ', color: '#c98a5a', usedIn: ['Project Alpha', 'Data analysis'] },
    ],
  },
  {
    title: 'Frameworks',
    icon: 'gem',
    skills: [
      { name: 'Astro', short: 'AS', color: '#e27a4f', usedIn: ['Project Alpha', 'This portfolio'] },
      { name: 'React', short: 'RE', color: '#5cc2d6', usedIn: ['Project Beta'] },
      { name: 'Node.js', short: 'ND', color: '#7bb35a', usedIn: ['Project Alpha', 'APIs'] },
    ],
  },
  {
    title: 'Tools',
    icon: 'hammer',
    skills: [
      { name: 'Git', short: 'GT', color: '#e0703f', usedIn: ['Every project'] },
      { name: 'GitHub', short: 'GH', color: '#b7b1c9', usedIn: ['Code review', 'CI with GitHub Actions'] },
    ],
  },
  {
    title: 'Infrastructure',
    icon: 'gear',
    skills: [
      { name: 'Docker', short: 'DK', color: '#4f93d6', usedIn: ['Project Gamma', 'Local environments'] },
      { name: 'Linux', short: 'LX', color: '#e8c547', usedIn: ['Servers', 'Daily development'] },
    ],
  },
];
