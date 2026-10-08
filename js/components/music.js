/* ─── Background music ───
   The loop tries to start as soon as the page loads. Most browsers block sound
   until the visitor interacts with the page, so if autoplay is refused it
   starts on the first click, tap or key press (unless it was switched off). */
const MUSIC_VOLUME = 0.15;

function setupMusic() {
  const audio = document.getElementById('bg-music');
  const toggle = document.querySelector('.music-toggle');
  let enabled = readSetting('music') !== 'off';
  let resumeWhenVisible = false;

  audio.volume = MUSIC_VOLUME;
  const render = () => toggle.setAttribute('aria-pressed', String(!audio.paused));
  const play = () => audio.play().catch(() => {}).finally(render);

  toggle.addEventListener('click', () => {
    enabled = audio.paused;
    saveSetting('music', enabled ? 'on' : 'off');
    if (enabled) play();
    else {
      audio.pause();
      render();
    }
  });

  const startOnFirstInteraction = (event) => {
    ['pointerdown', 'keydown', 'touchend'].forEach((type) => document.removeEventListener(type, startOnFirstInteraction));
    if (enabled && audio.paused && !event.target.closest('.music-toggle')) play();
  };
  ['pointerdown', 'keydown', 'touchend'].forEach((type) => document.addEventListener(type, startOnFirstInteraction));

  // Pause while the tab is hidden, resume when the visitor comes back.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      resumeWhenVisible = !audio.paused;
      audio.pause();
    } else if (resumeWhenVisible) play();
  });

  if (enabled) play(); // plays right away where the browser allows autoplay
}
