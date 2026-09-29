/**
 * Build-time helpers that turn text "pixel maps" into SVG rectangles.
 * All sprites and silhouettes on the site are generated this way, so the
 * browser receives small inline SVG and no image files or JavaScript.
 */

/** Rows of palette keys, one character per pixel. '.' is transparent. */
export type PixelMap = readonly string[];
export type Palette = Readonly<Record<string, string>>;

export interface PixelRun {
  x: number;
  y: number;
  width: number;
  fill: string;
}

const TRANSPARENT = '.';

export function mapSize(map: PixelMap) {
  return { width: map[0]?.length ?? 0, height: map.length };
}

/** Merge horizontal runs of the same colour into single rectangles. */
export function toRuns(map: PixelMap, palette: Palette, offsetX = 0): PixelRun[] {
  const { width } = mapSize(map);
  const runs: PixelRun[] = [];

  map.forEach((row, y) => {
    if (row.length !== width) {
      throw new Error(`Pixel map row ${y} is ${row.length} wide, expected ${width}: "${row}"`);
    }
    let x = 0;
    while (x < row.length) {
      const key = row[x];
      let end = x + 1;
      while (end < row.length && row[end] === key) end++;
      if (key !== TRANSPARENT) {
        const fill = palette[key];
        if (!fill) throw new Error(`Pixel map uses "${key}" but the palette has no colour for it`);
        runs.push({ x: x + offsetX, y, width: end - x, fill });
      }
      x = end;
    }
  });

  return runs;
}

/** Flip a pixel map horizontally. */
export function mirror(map: PixelMap): string[] {
  return map.map((row) => [...row].reverse().join(''));
}

/** A filled pixel circle (sun, lamps) of the given diameter using palette key `key`. */
export function disc(diameter: number, key = 'a'): string[] {
  const radius = diameter / 2;
  return Array.from({ length: diameter }, (_, y) =>
    Array.from({ length: diameter }, (_, x) =>
      (x + 0.5 - radius) ** 2 + (y + 0.5 - radius) ** 2 <= radius ** 2 ? key : TRANSPARENT,
    ).join(''),
  );
}

/** Deterministic PRNG (mulberry32) so scenery is identical on every build. */
export function seededRandom(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Darken (<1) or lighten (>1) a #rrggbb colour. */
export function shade(hex: string, factor: number): string {
  const value = Number.parseInt(hex.slice(1), 16);
  return `#${[16, 8, 0]
    .map((shift) => Math.min(255, Math.round(((value >> shift) & 255) * factor)))
    .map((channel) => channel.toString(16).padStart(2, '0'))
    .join('')}`;
}

export interface RidgeOptions {
  width: number;
  height: number;
  /** Size of one "pixel" step. */
  step: number;
  /** Lowest and highest point, as a fraction of `height`. */
  low: number;
  high: number;
  seed: number;
  /** Rough number of peaks across the width. */
  peaks?: number;
}

/** A stepped (pixel-looking) ridge line, filled down to the bottom edge. */
export function ridgePath({ width, height, step, low, high, seed, peaks = 3 }: RidgeOptions): string {
  const random = seededRandom(seed);
  const waves = [1, 2.3, 5.1].map((harmonic) => ({
    frequency: ((Math.PI * 2 * peaks) / width) * harmonic * (0.8 + random() * 0.4),
    phase: random() * Math.PI * 2,
    amplitude: 1 / harmonic,
  }));
  const total = waves.reduce((sum, wave) => sum + wave.amplitude, 0);

  let d = `M0 ${height}`;
  for (let x = 0; x < width; x += step) {
    const noise =
      waves.reduce((sum, wave) => sum + wave.amplitude * Math.sin(x * wave.frequency + wave.phase), 0) / total;
    const elevation = low + ((high - low) * (noise + 1)) / 2;
    const y = Math.round((height * (1 - elevation)) / step) * step;
    d += `V${y}H${Math.min(x + step, width)}`;
  }
  return `${d}V${height}Z`;
}
