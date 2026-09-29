/**
 * The regions of the world, top to bottom. Drives the Quest Log navigation,
 * the area banners and the traveler's speech bubbles.
 * `id` must match the id of the corresponding <section>.
 */

export interface Region {
  id: string;
  /** Navigation label. */
  label: string;
  /** Flavour name of the area, shown in the area banner. */
  area: string;
  timeOfDay: 'Dawn' | 'Morning' | 'Midday' | 'Afternoon' | 'Sunset' | 'Night';
  /** What the traveler says on arrival (decorative, desktop only). */
  travelerLine: string;
}

export const regions: Region[] = [
  { id: 'start', label: 'Introduction', area: 'Dawn Road', timeOfDay: 'Dawn', travelerLine: '' },
  {
    id: 'about',
    label: 'About',
    area: 'Whisperwood',
    timeOfDay: 'Morning',
    travelerLine: 'A quiet clearing…',
  },
  {
    id: 'projects',
    label: 'Projects',
    area: 'Guild Village',
    timeOfDay: 'Midday',
    travelerLine: 'The quest board!',
  },
  {
    id: 'skills',
    label: 'Skills',
    area: 'Tinker’s Workshop',
    timeOfDay: 'Afternoon',
    travelerLine: 'Tools of the trade.',
  },
  {
    id: 'experience',
    label: 'Experience',
    area: 'Lantern City',
    timeOfDay: 'Sunset',
    travelerLine: 'Look how far we came.',
  },
  {
    id: 'contact',
    label: 'Contact',
    area: 'Starwatch Summit',
    timeOfDay: 'Night',
    travelerLine: 'Almost at the top.',
  },
];

export function regionById(id: string): Region {
  const region = regions.find((r) => r.id === id);
  if (!region) throw new Error(`Unknown region "${id}"`);
  return region;
}
