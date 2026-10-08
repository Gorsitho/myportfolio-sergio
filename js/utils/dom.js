/* Small helpers to build DOM elements. */
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function pixelImg(src, className, size = 48) {
  const img = el('img', `pixel ${className || ''}`.trim());
  img.src = src;
  img.alt = '';
  img.width = size;
  img.height = size;
  return img;
}

function externalLink(href, text, className, label) {
  const a = el('a', className, text);
  a.href = href;
  a.target = '_blank';
  a.rel = 'noopener';
  if (label) a.setAttribute('aria-label', label);
  return a;
}
