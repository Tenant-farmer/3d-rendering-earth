const MARKUP = {
  beacon: `
    <span class="globe-marker__core"></span>
    <span class="globe-marker__wave globe-marker__wave--1"></span>
    <span class="globe-marker__wave globe-marker__wave--2"></span>
    <span class="globe-marker__wave globe-marker__wave--3"></span>
  `,
  radar: `
    <span class="globe-marker__core"></span>
    <span class="globe-marker__disc"></span>
    <span class="globe-marker__sweep"></span>
    <span class="globe-marker__blip"></span>
  `,
  spark: `
    <span class="globe-marker__star"></span>
    <span class="globe-marker__halo"></span>
    <span class="globe-marker__twinkle globe-marker__twinkle--1"></span>
    <span class="globe-marker__twinkle globe-marker__twinkle--2"></span>
  `,
  surge: `
    <span class="globe-marker__core"></span>
    <span class="globe-marker__beam globe-marker__beam--1"></span>
    <span class="globe-marker__beam globe-marker__beam--2"></span>
    <span class="globe-marker__beam globe-marker__beam--3"></span>
    <span class="globe-marker__beam globe-marker__beam--4"></span>
    <span class="globe-marker__shock"></span>
  `,
  flux: `
    <span class="globe-marker__core"></span>
    <span class="globe-marker__orbit"></span>
    <span class="globe-marker__cross globe-marker__cross--h"></span>
    <span class="globe-marker__cross globe-marker__cross--v"></span>
    <span class="globe-marker__particle globe-marker__particle--1"></span>
    <span class="globe-marker__particle globe-marker__particle--2"></span>
    <span class="globe-marker__particle globe-marker__particle--3"></span>
  `,
  signal: `
    <span class="globe-marker__core"></span>
    <span class="globe-marker__bar globe-marker__bar--1"></span>
    <span class="globe-marker__bar globe-marker__bar--2"></span>
    <span class="globe-marker__bar globe-marker__bar--3"></span>
    <span class="globe-marker__bar globe-marker__bar--4"></span>
    <span class="globe-marker__ping"></span>
  `,
};

export function createPointMarker(point, style) {
  const el = document.createElement('div');
  const sizeBoost = style.isLight ? 1.3 : 1;
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
