/**
 * Inventory item icons (12×12). 'a' is the item colour, 'A' its shadow;
 * both come from the skill's colour in src/data/skills.ts.
 */
import { shade, type Palette, type PixelMap } from '../lib/pixel';
import { gear } from './scenery';
import type { ItemIcon } from '../data/skills';

export const itemIcons: Record<ItemIcon, PixelMap> = {
  tome: [
    '.ooooooooo..',
    '.oaaaaaaaoo.',
    '.oaAAAAAaowo',
    '.oaaaaaaaowo',
    '.oaAAAAaaowo',
    '.oaaaaaaaowo',
    '.oaaaaaaaowo',
    '.oaAAAaaaowo',
    '.oaaaaaaaowo',
    '.oAAAAAAAowo',
    '.oooooooooow',
    '..ooooooooo.',
  ],
  gem: [
    '....oooo....',
    '...owwaao...',
    '..owaaaaao..',
    '.owaaaaaaao.',
    'oooooooooooo',
    'oaaaaaaaaaAo',
    '.oaaaaaaaAo.',
    '..oaaaaaAo..',
    '...oaaaAo...',
    '....oaAo....',
    '.....oo.....',
    '............',
  ],
  hammer: [
    '..oooooooo..',
    '.oaaaaaaaAo.',
    '.oaaaaaaaAo.',
    '.oAAAAAAAAo.',
    '..ooohhooo..',
    '....ohho....',
    '....ohho....',
    '....ohho....',
    '....ohHo....',
    '....ohHo....',
    '....ohHo....',
    '....oooo....',
  ],
  gear,
};

export function itemPalette(color: string): Palette {
  return {
    o: '#14182a',
    a: color,
    A: shade(color, 0.62),
    w: '#fff4d6',
    h: '#b07a45',
    H: '#7b4a2a',
    d: '#1d2440',
  };
}
