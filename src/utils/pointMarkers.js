const MARKUP = {
  dot: '<span class="globe-marker__dot"></span>',
  pulse: `
    <span class="globe-marker__dot"></span>
    <span class="globe-marker__ripple"></span>
  `,
  node: `
    <span class="globe-marker__dot"></span>
    <span class="globe-marker__halo"></span>
  `,
};

export function createPointMarker(point, style) {
  const el = document.createElement('div');
  const sizeBoost = style.isLight ? 1.15 : 1;
  const size = (style.baseSize + point.value * style.sizeScale) * sizeBoost;
  const delay = `${Math.abs((point.lat * 13 + point.lng * 7) % 2400)}ms`;

  el.className = `globe-marker globe-marker--${style.type}${style.isLight ? ' globe-marker--light' : ''}`;
  el.style.setProperty('--marker-color', style.color);
  el.style.setProperty('--marker-glow', style.glowColor ?? style.color);
  el.style.setProperty('--marker-size', `${size}px`);
  el.style.setProperty('--marker-delay', delay);
  el.innerHTML = style.isLight
    ? `<span class="globe-marker__pin" aria-hidden="true"></span>${MARKUP[style.type]}`
    : MARKUP[style.type];
  el.style.pointerEvents = 'none';

  return el;
}
