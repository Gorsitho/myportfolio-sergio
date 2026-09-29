/**
 * The traveler — an original 16×16 pixel character, drawn as text.
 * Each character is one pixel; the letters map to colours in `travelerPalette`.
 *
 * Frame order matters (the CSS animations rely on it):
 *   0–1 idle   2–3 walking
 *
 * To restyle the character, edit the palette. To redraw it, edit the rows
 * (every row must stay 16 characters wide).
 */
import type { Palette, PixelMap } from '../lib/pixel';

export const travelerPalette: Palette = {
  o: '#1b1f2e', // outline / eye
  h: '#5a3a2a', // hair
  s: '#f1c69b', // skin
  S: '#d49a6a', // skin shadow
  e: '#1b1f2e', // eye
  c: '#f2a541', // scarf
  C: '#c26a2c', // scarf shadow
  t: '#3f8f86', // tunic
  T: '#2c6660', // tunic shadow
  p: '#2e3a5c', // trousers
  b: '#6b4127', // boots
  k: '#8a5a34', // backpack
  K: '#5e3b20', // backpack shadow
};

const head = [
  '......ooooo.....',
  '.....ohhhhho....',
  '....ohhhhhhho...',
  '....ohhhsssso...',
  '....ohhssseso...',
  '....ohsssssso...',
  '.....oSsssso....',
];

const scarf = '...occcccccco...';
const scarfInWind = '..Cocccccccco...';

const body = [
  '.oKkoCtttttto...',
  '.oKkoTtttttTo...',
  '.oKkoTtttttso...',
  '..ooopppppppo...',
];

const standingLegs = [
  '....opppoppo....',
  '....opppoppo....',
  '....obbbobbbo...',
  '....ooooooooo...',
];

const strideLegs = [
  '...oppo.oppo....',
  '..oppo...oppo...',
  '..obbbo..obbbo..',
  '..ooooo..ooooo..',
];

const passingLegs = [
  '....oppppppo....',
  '.....opppo......',
  '.....obbbbo.....',
  '.....oooooo.....',
];

const frame = (scarfRow: string, legs: string[]): PixelMap => [...head, scarfRow, ...body, ...legs];

export const travelerFrames: PixelMap[] = [
  frame(scarf, standingLegs),
  frame(scarfInWind, standingLegs),
  frame(scarfInWind, strideLegs),
  frame(scarf, passingLegs),
];
