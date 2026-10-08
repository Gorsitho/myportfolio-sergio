/* ─── Scenery: ambient particles and scroll parallax ─── */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─── Ambient effects: stars, fireflies, dust motes ─── */
function scatter(container, count, className) {
  for (let i = 0; i < count; i++) {
    const dot = el('span', className);
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    dot.style.animationDelay = `${(-Math.random() * 8).toFixed(2)}s`;
    dot.style.animationDuration = `${(4 + Math.random() * 6).toFixed(2)}s`;
    container.append(dot);
  }
}

function setupAmbience() {
  document.querySelectorAll('[data-stars]').forEach((c) => scatter(c, +c.dataset.stars, 'star'));
  document.querySelectorAll('[data-fireflies]').forEach((c) => scatter(c, +c.dataset.fireflies, 'firefly'));
  document.querySelectorAll('[data-motes]').forEach((c) => scatter(c, +c.dataset.motes, 'mote'));
}

/* ─── Scroll parallax ───
   data-parallax: horizontal drift (forest).
   data-depth: vertical lag behind the page (0 = moves with the page,
   higher = farther away). Measured from the section's centre so layers
   rest in their designed position when the section is centred on screen. */
function setupParallax() {
  if (reduceMotion) return;
  const layers = [...document.querySelectorAll('[data-parallax], [data-depth]')];
  let ticking = false;

  const update = () => {
    const viewportCenter = window.innerHeight / 2;
    layers.forEach((layer) => {
      const rect = layer.closest('section').getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
      const x = rect.top * (+layer.dataset.parallax || 0);
      const y = (viewportCenter - (rect.top + rect.height / 2)) * (+layer.dataset.depth || 0);
      layer.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    });
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) requestAnimationFrame(update);
      ticking = true;
    },
    { passive: true },
  );
  window.addEventListener('resize', update);
  update();
}
