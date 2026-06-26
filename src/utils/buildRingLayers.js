export function buildRingLayers(data, config) {
  const layers = config.ringLayers ?? 1;
  const layerDelay = config.ringLayerDelay ?? 650;

  return data.flatMap((point) =>
    Array.from({ length: layers }, (_, layer) => ({
      ...point,
      _layer: layer,
      _speed: config.ringPropagationSpeed * (1 + layer * 0.35),
      _period: config.ringRepeatPeriod + layer * layerDelay,
      _radiusScale: config.ringMaxRadiusScale * (1 - layer * 0.12),
      _opacityMult: 1 - layer * 0.28,
    })),
  );
}
