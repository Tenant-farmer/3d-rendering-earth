import SaaSGlobe from './components/SaaSGlobe';
import './App.css';

function App() {
  return (
    <div className="landing-container">
      <section className="hero-section">
        <div className="hero-text">
          <span className="badge">Global Scalability</span>
          <h1>
            전 세계 고객이
            <br />
            실시간으로 신뢰하는 SaaS
          </h1>
          <p>
            우리 서비스는 대륙을 넘어 24시간 안전하게 작동하고 있습니다.
            <br />
            실시간으로 연결되어 반짝이는 고객들의 네트워크를 확인하세요.
          </p>
          <div className="btn-group">
            <button type="button" className="btn-primary">
              시작하기
            </button>
            <button type="button" className="btn-secondary">
              데모 보기
            </button>
          </div>
        </div>

        <div className="hero-globe">
          <div className="globe-bg-glow" />
          <SaaSGlobe />
        </div>
      </section>
    </div>
  );
}

export default App;
