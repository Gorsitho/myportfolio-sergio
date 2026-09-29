/**
 * Original pixel-art props for the world, drawn as text maps
 * (see src/lib/pixel.ts). '.' is transparent.
 */
import { mirror, type Palette, type PixelMap } from '../lib/pixel';

export const cloud: PixelMap = [
  '......wwww......',
  '..wwwwwwwwwww...',
  '.wwwwwwwwwwwwww.',
  'wwwwwwwwwwwwwwww',
  '.ssssssssssssss.',
];

export const house: PixelMap = [
  '..............ooo...',
  '.........o....oco...',
  '........oRo...oco...',
  '.......oRrRo..oco...',
  '......oRrrrRo.oco...',
  '.....oRrrrrrRooco...',
  '....oRrrrrrrrRoco...',
  '...oRrrrrrrrrrRo....',
  '..oRrrrrrrrrrrrRo...',
  '.oRRRRRRRRRRRRRRRo..',
  '..owwwwwwwwwwwwwo...',
  '..owggwwwwwwwggwo...',
  '..owggwwoDDowggwo...',
  '..owwwwwoDDowwwwo...',
  '..oWWWWWoDDoWWWWo...',
  '..ooooooooooooooo...',
];

/** Where smoke leaves the chimney, as a fraction of the house sprite. */
export const houseChimney = { x: 15 / 20, y: 0 };

export const housePalettes: Palette[] = [
  { o: '#2a2632', R: '#7a3a30', r: '#a8513d', w: '#e2cfa6', W: '#bca47c', g: '#8fc3c4', D: '#6b4427', c: '#7b6f6a' },
  { o: '#2a2632', R: '#2f5a63', r: '#3f7d86', w: '#d9c49a', W: '#b39c74', g: '#8fc3c4', D: '#5a3a24', c: '#7b6f6a' },
  { o: '#2a2632', R: '#6e5a2a', r: '#9a7f3a', w: '#e6d7b4', W: '#c2ae86', g: '#8fc3c4', D: '#6b4427', c: '#7b6f6a' },
];

const flame: PixelMap = [
  '....r.....',
  '...rr...r.',
  '...ryr..r.',
  '..ryyrrrr.',
  '..ryYyyyr.',
  '.rryYYyyr.',
  '.ryYYYYyr.',
  '..ryYYyr..',
];
const logs: PixelMap = ['.llLLllLL.', 'LLllLLllLl'];

/** Two frames: the flame mirrors itself to flicker. */
export const campfireFrames: PixelMap[] = [
  [...flame, ...logs],
  [...mirror(flame), ...logs],
];

export const campfirePalette: Palette = {
  r: '#d9502e',
  y: '#f2a541',
  Y: '#ffe08a',
  l: '#4a2c1a',
  L: '#7b4a2a',
};

export const signpost: PixelMap = [
  'oooooooooo..',
  'owwwwwwwwwo.',
  'owWWWwWWwwwo',
  'owwwwwwwwwo.',
  'oooooooooo..',
  '....oPo.....',
  '....oPo.....',
  '....oPo.....',
  '....oPo.....',
  '...ooPoo....',
];

export const signpostPalette: Palette = { o: '#241a18', w: '#c9a36a', W: '#8f6a3e', P: '#6b4427' };

export const lamp: PixelMap = [
  '...o...',
  '...o...',
  '..ooo..',
  '.oLLLo.',
  'oLLYLLo',
  'oLLLLLo',
  '.ooooo.',
];

export const lampPalette: Palette = { o: '#2a1c14', L: '#f2a541', Y: '#fff0b8' };

export const observatory: PixelMap = [
  '.........oooo.........',
  '.......oodggdoo.......',
  '......odddggdddo......',
  '.....oddddggddddo.....',
  '.....oddddggddddo.....',
  '....oooooooooooooo....',
  '....owwwwwwwwwwwwo....',
  '....owwLwwwwwwLwwo....',
  '....owwLwwwwwwLwwo....',
  '....owwwwwwwwwwwwo....',
  '....owwwwwDDwwwwwo....',
  '....owwwwwDDwwwwwo....',
  '..oooooooooooooooooo..',
  '.oooooooooooooooooooo.',
  'oooooooooooooooooooooo',
];

export const observatoryPalette: Palette = {
  o: '#0a0e1c',
  d: '#4b5675',
  g: '#ffcf73',
  w: '#222c47',
  L: '#ffcf73',
  D: '#141a2e',
};

export const moon: PixelMap = [
  '....oooo....',
  '..oommmmoo..',
  '.ommmmmcmmo.',
  '.omcmmmmmmo.',
  'ommmmmmmmmmo',
  'ommmmmmcmmmo',
  'ommcmmmmmmmo',
  'ommmmmmmmmmo',
  '.ommmmmcmmo.',
  '.ommmmmmmmo.',
  '..oommmmoo..',
  '....oooo....',
];

export const moonPalette: Palette = { o: '#9fb4dc', m: '#e8efff', c: '#bccbea' };

export const gear: PixelMap = [
  '....oooo....',
  '..o.oaao.o..',
  '.oaooaaooao.',
  '..oaaaaaao..',
  'ooaaaooaaaoo',
  'oaaaoddoaaao',
  'oaaaoddoaaao',
  'ooaaaooaaaoo',
  '..oaaaaaao..',
  '.oaooaaooao.',
  '..o.oaao.o..',
  '....oooo....',
];
