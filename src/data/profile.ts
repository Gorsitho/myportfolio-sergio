/**
 * ─────────────────────────────────────────────────────────────────────
 *  YOUR PERSONAL INFORMATION
 *
 *  This is the main file to edit. Every value written in CAPITALS
 *  (YOUR_NAME, YOUR_EMAIL, …) is a placeholder — replace it with your own.
 *  The biography and tagline are neutral sample copy: rewrite them in
 *  your own voice.
 * ─────────────────────────────────────────────────────────────────────
 */

export interface Profile {
  /** Shown in the hero, page title and footer. */
  name: string;
  /** Your professional title. */
  role: string;
  /** Short focus areas shown under the role (keep it to 2–4 items). */
  focus: string[];
  /** One sentence that sums up what you do. */
  tagline: string;
  /** City / region, shown in the About section. */
  location: string;
  /** Spoken languages. */
  languages: string[];
  /** What you are doing right now (e.g. "Open to new opportunities"). */
  currently: string;
  /** A few personal strengths, shown as small tags. */
  strengths: string[];
  /** Biography — one string per paragraph. */
  bio: string[];
  email: string;
  githubUrl: string;
  /** Leave as an empty string to hide the LinkedIn link everywhere. */
  linkedinUrl: string;
  /**
   * Optional CV / résumé. Put the file in /public (e.g. public/cv.pdf) and
   * set this to 'cv.pdf'. Leave empty to hide the download link.
   */
  cvPath: string;
  /** Used for <html lang> and OpenGraph locale. */
  lang: string;
  locale: string;
}

export const profile: Profile = {
  name: 'YOUR_NAME', // REPLACE
  role: 'Creative Developer', // REPLACE if needed
  focus: ['Software', 'Web', 'AI'], // REPLACE if needed
  tagline:
    'I design and build thoughtful software — from first sketch to shipped product.', // REPLACE
  location: 'YOUR_CITY, YOUR_COUNTRY', // REPLACE
  languages: ['YOUR_NATIVE_LANGUAGE (native)', 'English (professional)'], // REPLACE
  currently: 'Open to new opportunities', // REPLACE
  strengths: ['Curious', 'Detail-oriented', 'Clear communicator'], // REPLACE
  bio: [
    // REPLACE: 2–3 short paragraphs about you.
    'I’m a developer who enjoys turning rough ideas into software that feels good to use. I like working across the whole stack — interfaces, APIs and the tooling that holds everything together.',
    'Lately I’ve been focusing on modern web platforms and practical AI features, with an eye for performance, accessibility and maintainable code.',
    'Outside of work you’ll find me exploring new tools, reading about design, and building small side projects just to see how things work.',
  ],
  email: 'YOUR_EMAIL@example.com', // REPLACE
  githubUrl: 'https://github.com/Gorsitho', // detected from the Git remote — change if needed
  linkedinUrl: 'https://www.linkedin.com/in/YOUR_LINKEDIN_HANDLE', // REPLACE (or '' to hide)
  cvPath: '', // e.g. 'cv.pdf' after adding public/cv.pdf
  lang: 'en',
  locale: 'en_US',
};

/** SEO copy derived from the profile. Override here if you prefer custom text. */
export const seo = {
  title: `${profile.name} — ${profile.role}`,
  description: `${profile.name} is a ${profile.role.toLowerCase()} working on ${profile.focus
    .join(', ')
    .toLowerCase()}. ${profile.tagline}`,
};
