import { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import { userData } from '../data/userData';

const SaaSGlobe = () => {
  const globeEl = useRef();

  useEffect(() => {
    if (globeEl.current) {
      const controls = globeEl.current.controls();

      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      controls.minDistance = 150;
      controls.maxDistance = 400;

      globeEl.current.pointOfView({ lat: 25, lng: 120, altitude: 2.2 });
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <Globe
        ref={globeEl}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
        showAtmosphere={true}
        atmosphereColor="#FFE066"
        atmospherePower={3.5}
        pointsData={userData}
        pointLat="lat"
        pointLng="lng"
        pointColor={() => '#FFD700'}
        pointAltitude={0.05}
        pointRadius={(d) => d.value * 0.15}
        pointsMerge={true}
        ringsData={userData}
        ringLat="lat"
        ringLng="lng"
        ringColor={() => (t) => `rgba(255, 215, 0, ${1 - t})`}
        ringMaxRadius={(d) => d.value * 2.5}
        ringPropagationSpeed={1.5}
        ringRepeatPeriod={1600}
        onZoom={() => {}}
      />
    </div>
  );
};

export default SaaSGlobe;
