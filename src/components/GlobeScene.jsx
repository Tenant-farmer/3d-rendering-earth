import SaaSGlobe from './SaaSGlobe';

const GlobeScene = ({ theme }) => (
  <>
    <div className="scene-vignette" aria-hidden="true" />
    {theme.showGrain && <div className="scene-grain" aria-hidden="true" />}
    {theme.showAurora && (
      <>
        <div className="scene-aurora scene-aurora--left" aria-hidden="true" />
        <div className="scene-aurora scene-aurora--right" aria-hidden="true" />
      </>
    )}
    {theme.showEnergyBurst && (
      <div className="scene-energy" aria-hidden="true" />
    )}
    {theme.showScanlines && (
      <div className="scene-scanlines" aria-hidden="true" />
    )}
    {theme.showGrid && (
      <div className="scene-grid" aria-hidden="true" />
    )}

    <section className="hero-section">
      <div className="globe-stage">
        <div className="globe-bg-glow globe-bg-glow--primary" aria-hidden="true" />
        {theme.showSecondaryGlow && (
          <div className="globe-bg-glow globe-bg-glow--secondary" aria-hidden="true" />
        )}
        {theme.showOrbitRingOuter && (
          <div className="globe-orbit-ring globe-orbit-ring--outer" aria-hidden="true" />
        )}
        {theme.showOrbitRing && (
          <div className="globe-orbit-ring" aria-hidden="true" />
        )}
        <SaaSGlobe key={theme.id} theme={theme} />
      </div>
    </section>
  </>
);

export default GlobeScene;
