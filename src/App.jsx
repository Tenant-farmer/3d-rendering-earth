import { useState } from 'react';
import GlobeScene from './components/GlobeScene';
import { GLOBE_THEMES, THEME_IDS } from './themes/globeThemes';
import './App.css';

function App() {
  const [activeTheme, setActiveTheme] = useState('a');
  const theme = GLOBE_THEMES[activeTheme];

  return (
    <div className={`landing-container theme-${activeTheme}`}>
      <GlobeScene theme={theme} />

      <nav className="theme-switcher" aria-label="디자인 테마 선택">
        {THEME_IDS.map((id) => {
          const item = GLOBE_THEMES[id];
          const isActive = activeTheme === id;

          return (
            <button
              key={id}
              type="button"
              className={`theme-switcher__btn${isActive ? ' theme-switcher__btn--active' : ''}`}
              aria-pressed={isActive}
              onClick={() => setActiveTheme(id)}
            >
              <span className="theme-switcher__label">{item.label}</span>
              <span className="theme-switcher__meta">
                <strong>{item.name}</strong>
                <small>{item.tagline}</small>
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

export default App;
