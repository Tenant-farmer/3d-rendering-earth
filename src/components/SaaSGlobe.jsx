import { useRef, useEffect, useMemo, useCallback } from 'react';
import Globe from 'react-globe.gl';
import { userData } from '../data/userData';
import { ARC_LINKS } from '../themes/globeThemes';
import { buildRingLayers } from '../utils/buildRingLayers';
import { createPointMarker } from '../utils/pointMarkers';
import '../styles/globeMarkers.css';

const SaaSGlobe = ({ theme }) => {
  const globeEl = useRef();
  const { globe: config } = theme;
  const arcLinks = config.arcLinks ?? ARC_LINKS;

  const arcsData = useMemo(
    () =>
      arcLinks.map(([from, to]) => {
        const start = userData.find((d) => d.city === from);
        const end = userData.find((d) => d.city === to);
        return {
          startLat: start.lat,
          startLng: start.lng,
          endLat: end.lat,
          endLng: end.lng,
        };
      }),
    [arcLinks],
  );

  const ringsData = useMemo(() => buildRingLayers(userData, config), [config]);

  const htmlElement = useCallback(
    (point) => createPointMarker(point, { ...config.pointStyle, isLight: theme.isLight }),
    [config.pointStyle, theme.isLight],
  );

  useEffect(() => {
    if (!globeEl.current) return;

    const controls = globeEl.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = config.autoRotateSpeed;
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.minDistance = 180;
    controls.maxDistance = 360;

    globeEl.current.pointOfView(config.pointOfView);
  }, [config]);

  return (
    <div className="globe-canvas">
      <Globe
        ref={globeEl}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl={config.globeImageUrl}
        bumpImageUrl={config.bumpImageUrl}
        showAtmosphere
        atmosphereColor={config.atmosphereColor}
        atmosphereAltitude={config.atmosphereAltitude}
        htmlElementsData={userData}
        htmlLat="lat"
        htmlLng="lng"
        htmlAltitude={0.004}
        htmlElement={htmlElement}
        htmlElementVisibilityModifier={(el, isVisible) => {
          el.style.opacity = isVisible ? 1 : 0;
        }}
        htmlTransitionDuration={0}
        ringsData={ringsData}
        ringLat="lat"
        ringLng="lng"
        ringColor={(d) => (t) => {
          const opacity = (1 - t) * config.ringOpacity * (d._opacityMult ?? 1);
          return `rgba(${config.ringRgb}, ${opacity})`;
        }}
        ringMaxRadius={(d) => d.value * (d._radiusScale ?? config.ringMaxRadiusScale)}
        ringPropagationSpeed={(d) => d._speed ?? config.ringPropagationSpeed}
        ringRepeatPeriod={(d) => d._period ?? config.ringRepeatPeriod}
        arcsData={config.showArcs ? arcsData : []}
        arcStartLat="startLat"
        arcStartLng="startLng"
        arcEndLat="endLat"
        arcEndLng="endLng"
        arcColor={() => config.arcColor ?? 'transparent'}
        arcAltitude={config.arcAltitude ?? 0.15}
        arcStroke={config.arcStroke ?? 0.3}
        arcDashLength={config.arcDashLength ?? 1}
        arcDashGap={config.arcDashGap ?? 0}
        arcDashAnimateTime={config.arcDashAnimateTime ?? 0}
        onZoom={() => {}}
      />
    </div>
  );
};

export default SaaSGlobe;
